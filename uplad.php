$username = $_POST['username'];
$mobile   = $_POST['mobile'];

if(isset($_FILES['photo'])){
    
    $fileName = time() . "_" . $_FILES['photo']['name'];
    $target = "upload_images/" . $fileName;

    if(move_uploaded_file($_FILES['photo']['tmp_name'], $target)){

        // SUCCESS ALERT + REDIRECT
        echo "<script>
            alert('Upload Successful!');
            window.location.href='index.html';
        </script>";
        exit();
    }
    else{
        <script>
            alert('Upload Failed. Try Again!');
            window.location.href='index.html';
        </script>";
    }
}
?>