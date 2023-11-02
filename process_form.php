<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    // Set the recipient email address
    $to = "doku_isv@icloud.com";
    
    // Set the email subject
    $subject = "Contact Form Submission from $name";
    
    // Compose the email message
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n\n";
    $email_message .= "Message:\n$message";
    
    // Set additional email headers
    $headers = "From: $email\n";
    
    // Use the mail() function to send the email
    if (mail($to, $subject, $email_message, $headers)) {
        // If the email is sent successfully, redirect to a thank you page
        header("Location: thank_you.html");
    } else {
        // If there's an issue with sending the email, handle the error as needed
        echo "Sorry, there was a problem sending your message. Please try again later.";
    }
}
?>
