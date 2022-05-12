<?php
error_reporting(0);
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";
$db = json_decode(file_get_contents('php://input'),true);
$to = $db['to'];
$subject = $db['subject'];
$messagenew = $db['messagenew'];
$headers .= 'From: <salesop@horizonmahindra.com>' . "\r\n";
$complete = mail($to, $subject, $messagenew, $headers);
if($complete){
	header('Content-Type: application/json');
	echo json_encode("1");
}
?>