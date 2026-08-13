<?php

session_start();

header('Content-Type: application/json; charset=utf-8');

require 'config.php';


// ======================================
// Login Check
// ======================================

if (!isset($_SESSION['user_id'])) {

    echo json_encode([
        'success' => false,
        'message' => 'మీరు Login కాలేదు. ముందుగా Login చేయండి.'
    ]);

    exit;
}


// ======================================
// User ID
// ======================================

$user_id = (int) $_SESSION['user_id'];


// ======================================
// Request Method Check
// ======================================

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {

    echo json_encode([
        'success' => false,
        'message' => 'Invalid request.'
    ]);

    exit;
}


// ======================================
// Title
// ======================================

$title = trim($_POST['title'] ?? '');

if ($title === '') {

    echo json_encode([
        'success' => false,
        'message' => 'File వివరాలు నమోదు చేయండి.'
    ]);

    exit;
}


// ======================================
// File Check
// ======================================

if (!isset($_FILES['file'])) {

    echo json_encode([
        'success' => false,
        'message' => 'దయచేసి file select చేయండి.'
    ]);

    exit;
}


$file = $_FILES['file'];


// ======================================
// Upload Error Check
// ======================================

if ($file['error'] !== UPLOAD_ERR_OK) {

    echo json_encode([
        'success' => false,
        'message' => 'File upload failed. Error code: ' . $file['error']
    ]);

    exit;
}


// ======================================
// Maximum File Size = 5 MB
// ======================================

$maxSize = 5 * 1024 * 1024;

if ($file['size'] > $maxSize) {

    echo json_encode([
        'success' => false,
        'message' => 'File size 5 MB కంటే తక్కువగా ఉండాలి.'
    ]);

    exit;
}


// ======================================
// Original File Name
// ======================================

$originalName = basename($file['name']);


// ======================================
// File Extension
// ======================================

$extension = strtolower(
    pathinfo($originalName, PATHINFO_EXTENSION)
);


// ======================================
// Allowed Extensions
// ======================================

$allowedExtensions = [
    'jpg',
    'jpeg',
    'png',
    'pdf'
];


if (!in_array($extension, $allowedExtensions, true)) {

    echo json_encode([
        'success' => false,
        'message' => 'JPG, JPEG, PNG లేదా PDF files మాత్రమే అనుమతించబడతాయి.'
    ]);

    exit;
}


// ======================================
// MIME Type Check
// ======================================

$finfo = new finfo(FILEINFO_MIME_TYPE);

$mimeType = $finfo->file($file['tmp_name']);


$allowedMimeTypes = [

    'jpg' => [
        'image/jpeg'
    ],

    'jpeg' => [
        'image/jpeg'
    ],

    'png' => [
        'image/png'
    ],

    'pdf' => [
        'application/pdf'
    ]

];


if (
    !isset($allowedMimeTypes[$extension]) ||
    !in_array($mimeType, $allowedMimeTypes[$extension], true)
) {

    echo json_encode([
        'success' => false,
        'message' => 'Invalid file type.'
    ]);

    exit;
}


// ======================================
// Upload Folder
// ======================================

$uploadDir = __DIR__ . DIRECTORY_SEPARATOR . 'uploads' . DIRECTORY_SEPARATOR;


// ======================================
// Create Folder if not exists
// ======================================

if (!is_dir($uploadDir)) {

    if (!mkdir($uploadDir, 0755, true)) {

        echo json_encode([
            'success' => false,
            'message' => 'Uploads folder create చేయలేకపోయాము.'
        ]);

        exit;
    }
}


// ======================================
// Unique File Name
// ======================================

$newFileName =
    bin2hex(random_bytes(16))
    . '_'
    . time()
    . '.'
    . $extension;


// ======================================
// Full File Path
// ======================================

$destination = $uploadDir . $newFileName;


// ======================================
// Move File
// ======================================

if (!move_uploaded_file($file['tmp_name'], $destination)) {

    echo json_encode([
        'success' => false,
        'message' => 'File serverలో save చేయలేకపోయాము.'
    ]);

    exit;
}


// ======================================
// Database File Path
// ======================================

$filePath = 'uploads/' . $newFileName;


// ======================================
// Insert into MySQL
// ======================================

try {

    $stmt = $pdo->prepare(
        "INSERT INTO uploads
        (
            user_id,
            title,
            file_name,
            file_path
        )
        VALUES
        (
            :user_id,
            :title,
            :file_name,
            :file_path
        )"
    );


    $stmt->execute([

        ':user_id' => $user_id,

        ':title' => $title,

        ':file_name' => $originalName,

        ':file_path' => $filePath

    ]);


    // ======================================
    // Success
    // ======================================

    echo json_encode([

        'success' => true,

        'message' => 'File Uploaded Successfully!'

    ]);

    exit;

}

catch (PDOException $e) {

    // Database insert failed
    // Remove uploaded file
    if (file_exists($destination)) {

        unlink($destination);

    }


    echo json_encode([

        'success' => false,

        'message' => 'Database error. File save కాలేదు.'

    ]);

    exit;
}
?>