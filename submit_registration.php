<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $business = htmlspecialchars($_POST['business']);
    $message = htmlspecialchars($_POST['message']);
    $subscription = htmlspecialchars($_POST['subscription']);

    // Your email where the form data will be sent
    $to = "bartalbence1@gmail.com";
    $subject = "New WEALTH GROUP Registration";
    
    // Email body content
    $body = "New registration for WEALTH GROUP:\n\n";
    $body .= "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Business Interest: $business\n";
    $body .= "Message: $message\n";
    $body .= "Subscription Plan: $subscription\n";

    // Email headers
    $headers = "From: noreply@wealthgroup.com" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        // Redirect to a thank you page after successful submission
        header("Location: thank_you.html");
        exit();
    } else {
        echo "There was an error sending your message. Please try again.";
    }
}
?>
