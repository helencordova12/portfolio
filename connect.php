<?php

    $fullname = $_POST['fullname'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];

    //Database connection
    $conn = new mysqli('localhost','root','','test');
    if($conn->connect_error){
        echo "$conn->connect_error";
        die('Connection Failed : '.$conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into registration(fullname, email, subject)")
        $stmt->bind_param("sss",$fullname, $email, $subject);
        $execval = $stmt->execute();
		echo $execval;
        echo "Registration Successful...";
        $stmt->close();
        $conn->close();
    }

?>

