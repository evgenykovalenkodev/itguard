<?php
require 'PHPMailer.php';
require 'SMTP.php';
require 'Exception.php';
$mail = new PHPMailer\PHPMailer\PHPMailer();
$mail->CharSet = 'utf-8';
$okay = "Сообщение было отправлено";
$notokay = "Сообщение не было отправлено. Неверно указаны настройки вашей почты";
$name = trim($_POST["name"]);
$subj = trim($_POST["v"]);
$comp = trim($_POST["comp"]);
$tel = trim($_POST["tel"]);
$mess = trim($_POST["msg"]);
$email = trim($_POST["email"]);
$mail->IsSMTP();
$mail->SMTPDebug = 1;
$mail->SMTPAuth = true;
$mail->SMTPSecure = 'tls';
$mail->Host = "mail.itguard.top";
$mail->Port = 587;
$mail->IsHTML(true);
$mail->Username = "contactform@itguard.top";
$mail->Password = "SbZxAk21gP";
$mail->SetFrom("contactform@itguard.top");
$mail->AddAddress("contact@itguard.top");
$mail->AddAddress("evgenykovalenkodev@gmail.com");
$mail->isHTML(true);
$mail->Subject = "Контактная форма:$subj\r\n";
$mail->Body = nl2br("ОТ:$name\r\n".
    "Телефон: $tel\r\n".
    "Email: $email\r\n".
    "Компания: $comp\r\n\r\n".
    $mess);
$mail->AddAttachment($_FILES['fileFF']['tmp_name'], $_FILES['fileFF']['name']);
if(!$mail->send()) {
    echo "Message could not be sent.";
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "ok";
}
$name = $_POST['name'];
$mail = $_POST['email'];
$msg = $_POST['msg'];
$com = $_POST['comp'];
$tel = $_POST['tel'];
$type = $_POST['v'];

$mysqli = new mysqli('localhost', 'agark202_Guard', 'fRpD80O2nt', 'agark202_Guard');
$mysqli->query("INSERT INTO `type` (`id`, `name`, `mail`, `msg`, `com`, `tel`, `type`) VALUES (NULL, '$name', '$mail', '$msg', '$com', '$tel', '$type');");
echo true;
