<?php
error_reporting(0);

if(isset($_POST['submit']) and !empty($_POST['submit'])){
    $name=$_POST['name'];
    $phone=$_POST['phone'];
    $email=$_POST['email'];
    $esource=$_POST['esource'];
    $emedium=$_POST['emedium'];

    $mail1_subject="XUV 700 Enquiry Dubai, " . $name;
    $mail1_txt="Name :" . $name . "<br>" . "Mobile :" . $phone . "<br>" . "E-Mail :" . $email . "<br>" . "Source :" . $esource . "<br>" . "Medium :" . $emedium . "<br>";


// More headers
$headers .= 'From: <salesop@horizonmahindra.com>' . "\r\n";

$to = "viralmafiacs2@gmail.com, cyril.viralmafia@gmail.com, leads.viralmafia@gmail.com, horizonmahindraharidev@gmail.com";
$url = 'http://viralmafia.com/demo/jsonmailerxuv700.php';
$ch = curl_init($url);
$data = array(
    'to' => $to,
    'subject' => $mail1_subject,
    'messagenew' => $mail1_txt,
    'headers' => $headers,
);
$payload = json_encode($data);
curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$complete = curl_exec($ch);
curl_close($ch);

    if($complete){
        header("location:sucess/index.html");
    }
}


?>