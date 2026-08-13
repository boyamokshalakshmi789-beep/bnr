<?php

session_start();

require 'config.php';


// ======================================
// POST CHECK
// ======================================

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {

    header("Location: login.html");
    exit;
}


// ======================================
// Get Login Details
// ======================================

$email = trim($_POST['email'] ?? '');
$password = $_POST['password'] ?? '';


// ======================================
// Empty Check
// ======================================

if ($email === '' || $password === '') {

    echo "<script>
        alert('Please enter Email and Password.');
        window.location.href = 'login.html';
    </script>";

    exit;
}


// ======================================
// Find User
// ======================================

$stmt = $pdo->prepare(
    "SELECT id, email, password_hash
     FROM users
     WHERE email = :email
     LIMIT 1"
);

$stmt->execute([
    ':email' => $email
]);

$user = $stmt->fetch();


// ======================================
// Check User + Password
// ======================================

if (!$user || !password_verify($password, $user['password_hash'])) {

    echo "<script>
        alert('Username or Password is incorrect.');
        window.location.href = 'login.html';
    </script>";

    exit;
}


// ======================================
// Successful Login
// ======================================

session_regenerate_id(true);

$_SESSION['user_id'] = $user['id'];
$_SESSION['email'] = $user['email'];


// ======================================
// Redirect
// ======================================

header("Location: upload.html");
exit;

?>