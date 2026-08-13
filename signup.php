<?php

session_start();
require_once "config.php";

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: signup.html");
    exit;
}


/* =========================
   GET FORM DATA
========================= */

$fullName = trim($_POST["fullName"] ?? "");
$mobile   = trim($_POST["mobile"] ?? "");
$email    = trim($_POST["email"] ?? "");
$password = $_POST["password"] ?? "";
$gender   = $_POST["gender"] ?? "";
$address  = trim($_POST["address"] ?? "");


/* =========================
   REQUIRED FIELD CHECK
========================= */

if (
    $fullName === "" ||
    $mobile === "" ||
    $email === "" ||
    $password === "" ||
    $gender === "" ||
    $address === ""
) {
    exit("All fields are required.");
}


/* =========================
   FULL NAME VALIDATION
========================= */

if (strlen($fullName) < 2 || strlen($fullName) > 100) {
    exit("Full Name must be between 2 and 100 characters.");
}


/* =========================
   MOBILE VALIDATION
========================= */

if (!preg_match('/^[0-9]{10}$/', $mobile)) {
    exit("Please enter a valid 10 digit mobile number.");
}


/* =========================
   EMAIL VALIDATION
========================= */

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    exit("Please enter a valid email address.");
}


/* =========================
   PASSWORD VALIDATION
========================= */

if (strlen($password) < 6) {
    exit("Password must be at least 6 characters.");
}


/* =========================
   GENDER VALIDATION
========================= */

if ($gender !== "Male" && $gender !== "Female") {
    exit("Invalid gender selected.");
}


/* =========================
   CHECK MOBILE / EMAIL
========================= */

try {

    $check = $pdo->prepare(
        "SELECT id
         FROM users
         WHERE mobile = ? OR email = ?
         LIMIT 1"
    );

    $check->execute([
        $mobile,
        $email
    ]);

    if ($check->fetch()) {

        echo "<script>
                alert('Mobile number or Email is already registered.');
                window.location.href = 'signup.html';
              </script>";

        exit;
    }


    /* =========================
       PASSWORD HASH
    ========================= */

    $passwordHash = password_hash(
        $password,
        PASSWORD_DEFAULT
    );


    /* =========================
       INSERT USER
    ========================= */

    $insert = $pdo->prepare(
        "INSERT INTO users
        (
            full_name,
            mobile,
            email,
            password_hash,
            gender,
            address
        )
        VALUES
        (?, ?, ?, ?, ?, ?)"
    );

    $insert->execute([
        $fullName,
        $mobile,
        $email,
        $passwordHash,
        $gender,
        $address
    ]);


    /* =========================
       SUCCESS
    ========================= */

    echo "<script>

            alert('Registration Submitted Successfully!');

            window.location.href = 'login.html';

          </script>";

    exit;


} catch (PDOException $e) {

    echo "<script>

            alert('Database Error. Please try again.');

            window.location.href = 'signup.html';

          </script>";

    exit;

}
?>