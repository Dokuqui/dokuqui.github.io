// Not working because its an example of logic to send and receive email
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Properties;

@SpringBootApplication
public class ContactFormApplication {

    public static void main(String[] args) {
        SpringApplication.run(ContactFormApplication.class, args);
    }
}

@RestController
class ContactFormController {

    @PostMapping("/submitForm")
    public String submitForm(@RequestBody FormData formData) {
        String name = formData.getName();
        String email = formData.getEmail();
        String message = formData.getMessage();

        // Set the recipient email address
        String to = "doku_isv@icloud.com";

        // Set the email subject
        String subject = "Contact Form Submission from " + name;

        // Compose the email message
        String emailMessage = "Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message;

        // Set up JavaMail properties
        Properties properties = new Properties();
        properties.put("mail.smtp.auth", "true");
        properties.put("mail.smtp.starttls.enable", "true");
        properties.put("mail.smtp.host", "localhost");
        properties.put("mail.smtp.port", "5000");

        Session session = Session.getInstance(properties, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication("doku_isv@icloud.com", "your-email-password");
            }
        });

        try {
            Message mimeMessage = new MimeMessage(session);
            mimeMessage.setFrom(new InternetAddress(email));
            mimeMessage.setRecipient(Message.RecipientType.TO, new InternetAddress(to));
            mimeMessage.setSubject(subject);
            mimeMessage.setText(emailMessage);

            Transport.send(mimeMessage);

            return "Email sent successfully. Thank you!";
        } catch (MessagingException e) {
            e.printStackTrace();
            return "Sorry, there was a problem sending your message. Please try again later.";
        }
    }
}

class FormData {
    private String name;
    private String email;
    private String message;
}