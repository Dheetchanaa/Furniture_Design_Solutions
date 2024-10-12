<?php
$name = $_POST['name'];
$email = $_POST['email'];
$options = $_POST['options'];
$message = $_POST['message'];
$conn=new mysqli('localhost','root','','furnituredsform');
if($conn->connect_error){
    die('Connection Failed : '.$conn->connect_error);
}else{
    $stmt = $conn->prepare("insert into custom(name, email, options, message)
    values(?, ?, ?, ?)");
    $stmt->bind_param("ssss",$name, $email, $options, $message);
    $stmt->execute();
    $stmt->close();
    $conn->close(); 
}
?>