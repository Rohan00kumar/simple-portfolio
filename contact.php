<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $to = "rohankumar.ac.in@gamil.com";
    $headers = "From: $email \r\n";
    $headers .= "Reply-To: $email \r\n";

    $success = mail($to, $subject, $message, $headers);
    
    if ($success) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message. Please try again later.";
    }
}
?>