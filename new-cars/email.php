<?php

function mail_attachment($filename, $path, $mailto, $from_mail, $from_name, $replyto, $subject, $message) {


    $file = $path . "/" . $filename;

    $content = file_get_contents($file);
    $content = chunk_split(base64_encode($content));

    // a random hash will be necessary to send mixed content
    $separator = md5(time());

    // carriage return type (RFC)
    //$eol = "\r\n";
$eol = PHP_EOL;

    // main header (multipart mandatory)
    $headers = "From: ".$from_name." <".$from_mail.">" . $eol;
    $headers .= "MIME-Version: 1.0" . $eol;
    $headers .= "Content-Type: multipart/mixed; boundary=\"" . $separator . "\"" . $eol;
    $headers .= "Content-Transfer-Encoding: 7bit" . $eol;
    $headers .= "This is a MIME encoded message." . $eol;

    // message
    $body = "--" . $separator . $eol;
    $body .= "Content-Type: text/plain; charset=\"iso-8859-1\"" . $eol;
    $body .= "Content-Transfer-Encoding: 8bit" . $eol . $eol;
    $body .= $message . $eol;
if(!empty($filename)){
    // attachment
    $body .= "--" . $separator . $eol;
    $body .= "Content-Type: application/octet-stream; name=\"" . $filename . "\"" . $eol;
    $body .= "Content-Transfer-Encoding: base64" . $eol;
    $body .= "Content-Disposition: attachment" . $eol;
    $body .= $content . $eol;
    $body .= "--" . $separator . "--";
}

    //SEND Mail
    if (mail($mailto, $subject, $body, $headers)) {
        //echo "mail send ... OK"; // or use booleans here
//echo "<script>alert('We are receiveing your career request. We contact soon thank you!!');</script>";
    return true;
    } 
}



if (isset($_POST['submit']) and !empty($_POST['submit'])) {
    $qname = $_POST['name'];
    $qphone = $_POST['phone'];
    $qoutlet = $_POST['outlet'];

    $mail1_subject = "Sales Enquiry from Horizon Mahindra - " . $qname;
    $mail1_txt = "Name :" . $qname . "<br>" . "Mobile :" . $qphone . "<br>" . "Outlet :" . $qoutlet . "<br>";

    // Always set content-type when sending HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    // More headers
    $headers .= 'From: <salesop@horizonmahindra.com>' . "\r\n";

    $complete = mail("viralmafiacs2@gmail.com, cyril.viralmafia@gmail.com, suneshkrishnan@gmail.com, salesop@horizonmahindra.com, dem@horizonmahindra.com, sm.ktmservice@horizonmahindra.com", $mail1_subject, $mail1_txt, $headers);

    if ($complete) {
        header("location:index.html");
    }
}



if (isset($_POST['insurance_submit']) and !empty($_POST['insurance_submit'])) {
    $model_id = $_POST['model_id'];
    $registration_number = $_POST['registration_number'];
    $registration_year = $_POST['registration_year'];
    $registration_month = $_POST['registration_month'];

    $policy_no = $_POST['policy_no'];
    $insurance_company = $_POST['insurance_company'];
    $insurance_expiry_date = $_POST['insurance_expiry_date'];

    $insurance_name = $_POST['insurance_name'];
    $insurance_email = $_POST['insurance_email'];
    $insurance_city = $_POST['insurance_city'];
    $insurance_mobile_no = $_POST['insurance_mobile_no'];

    $mail1_subject = "Insurance Enquiry from Horizon Mahindra - " . $insurance_name;
    $mail1_txt = "Model :" . $model_id . "<br>" . "Registration Number :" . $registration_number . "<br>" . "Registration Year :" . $registration_year . "<br>" . "Registration Month :" . $registration_month . "<br>" . "Policy No :" . $policy_no . "<br>" . "Insurance Company :" . $insurance_company . "<br>" . "Insurance Expiry Date :" . $insurance_expiry_date . "<br>" . "Name :" . $insurance_name . "<br>" . "E-mail :" . $insurance_email . "<br>" . "City :" . $insurance_city . "<br>" . "Mobile No :" . $insurance_mobile_no . "<br>";

    // Always set content-type when sending HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    // More headers
    $headers .= 'From: <salesop@horizonmahindra.com>' . "\r\n";

    $complete = mail("viralmafiacs2@gmail.com, cyril.viralmafia@gmail.com, suneshkrishnan@gmail.com, salesop@horizonmahindra.com, horizonservice12@gmail.com", $mail1_subject, $mail1_txt, $headers);

    if ($complete) {
        header("location:insurance.html");
    }
}



if (isset($_POST['modelsubmit']) and !empty($_POST['modelsubmit'])) {
    $qname = $_POST['name'];
    $qphone = $_POST['phone'];
    $qoutlet = $_POST['outlet'];
    $model = $_POST['model'];

    $mail1_subject = "Sales Enquiry from Horizon Mahindra - " . $qname;
    $mail1_txt = "Name :" . $qname . "<br>" . "Mobile :" . $qphone . "<br>" . "Outlet :" . $qoutlet . "<br>" . "Model :" . $model . "<br>";

    // Always set content-type when sending HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    // More headers
    $headers .= 'From: <salesop@horizonmahindra.com>' . "\r\n";

    $complete = mail("viralmafiacs2@gmail.com, cyril.viralmafia@gmail.com, suneshkrishnan@gmail.com, salesop@horizonmahindra.com, dem@horizonmahindra.com, sm.ktmservice@horizonmahindra.com", $mail1_subject, $mail1_txt, $headers);

    if ($complete) {
        header("location:../index.html");
    }
}



if (isset($_POST['submit_testdrive']) and !empty($_POST['submit_testdrive'])) {
    $qname = $_POST['name'];
    $qphone = $_POST['mobile_no'];
    $qoutlet = $_POST['outlet_id'];
    $model = $_POST['model_id'];
    $email = $_POST['email'];

    $mail1_subject = "Test Drive Enquiry from Horizon Mahindra - " . $qname;
    $mail1_txt = "Name :" . $qname . "<br>" . "Mobile :" . $qphone . "<br>" . "Outlet :" . $qoutlet . "<br>" . "Model :" . $model . "<br>" . "E-Mail :" . $email . "<br>";

    // Always set content-type when sending HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    // More headers
    $headers .= 'From: <salesop@horizonmahindra.com>' . "\r\n";

    $complete = mail("viralmafiacs2@gmail.com, cyril.viralmafia@gmail.com, suneshkrishnan@gmail.com, salesop@horizonmahindra.com, horizonservice12@gmail.com", $mail1_subject, $mail1_txt, $headers);

    if ($complete) {
        header("location:booktestdrive.html");
    }
}


if (isset($_POST['submit360']) and !empty($_POST['submit360'])) {
    $qname = $_POST['name'];
    $qphone = $_POST['mobile_no'];
    $city = $_POST['city'];
    $qoutlet = $_POST['outlet_id'];
    $model = $_POST['model_id'];
    $email = $_POST['email'];

    $mail1_subject = "360 Degee View Enquiry from Horizon Mahindra - " . $qname;
    $mail1_txt = "Name :" . $qname . "<br>" . "Mobile :" . $qphone . "<br>" . "City :" . $city . "<br>" . "Outlet :" . $qoutlet . "<br>" . "Model :" . $model . "<br>" . "E-Mail :" . $email . "<br>";

    // Always set content-type when sending HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    // More headers
    $headers .= 'From: <salesop@horizonmahindra.com>' . "\r\n";

    $complete = mail("viralmafiacs2@gmail.com, cyril.viralmafia@gmail.com, suneshkrishnan@gmail.com, salesop@horizonmahindra.com, horizonservice12@gmail.com, sm.ktmservice@horizonmahindra.com", $mail1_subject, $mail1_txt, $headers);

    if ($complete) {
        header("location:bringshowroomhome.html");
    }
}


if(isset($_POST['resumesubmit']) and !empty($_POST['resumesubmit'])){


    $name=$_POST['name'];
    $phone=$_POST['phone'];
    $email=$_POST['email'];
    //$message=$_POST['message'];
    $message ="";

    $target_dir = "upnewxyz/";
$target_name ="";

$allowed =  array('pdf','doc' ,'docx');
$filename = $_FILES['resume']['name'];
$ext = pathinfo($filename, PATHINFO_EXTENSION);
if(in_array($ext,$allowed) ) {

    $target_name = time() . basename($_FILES["resume"]["name"]);
    $target_file = $target_dir . $target_name;
    move_uploaded_file($_FILES["resume"]["tmp_name"], $target_file);
}

    $to = "viralmafiacs2@gmail.com, cyril.viralmafia@gmail.com, suneshkrishnan@gmail.com, salesop@horizonmahindra.com, sm.ktmservice@horizonmahindra.com, hr@horizonmahindra.com";

    $from = "salesop@horizonmahindra.com";

    $fromname=$name;
    

    $mail1_subject="Career Request For Horizon Mahindra, " . $name;
    $mail1_txt="Name :" . $name . " Mobile :" . $phone . " E-Mail :" . $email;

    $complete = mail_attachment($target_name, $target_dir, $to, $from, $fromname, $from, $mail1_subject, $mail1_txt);

    if($complete){
        header("location:career.html");
    }

}


if (isset($_POST['buyrsa']) and !empty($_POST['buyrsa'])) {
    $qname = $_POST['name'];
    $qphone = $_POST['mobile_no'];
    $qoutlet = $_POST['city'];
    $qemail = $_POST['email'];

    $mail1_subject = "Buy - RAS Enquiry from Horizon Mahindra - " . $qname;
    $mail1_txt = "Name :" . $qname . "<br>" . "Mobile :" . $qphone . "<br>" . "City :" . $qoutlet . "<br>" . "E-Mail :" . $qemail . "<br>";

    // Always set content-type when sending HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    // More headers
    $headers .= 'From: <salesop@horizonmahindra.com>' . "\r\n";

    $complete = mail("viralmafiacs2@gmail.com, cyril.viralmafia@gmail.com, suneshkrishnan@gmail.com, salesop@horizonmahindra.com, sm.ktmservice@horizonmahindra.com", $mail1_subject, $mail1_txt, $headers);

    if ($complete) {
        header("location:index.html");
    }
}


if (isset($_POST['buyshield']) and !empty($_POST['buyshield'])) {
    $qname = $_POST['name'];
    $qphone = $_POST['mobile_no'];
    $qoutlet = $_POST['city'];
    $qemail = $_POST['email'];

    $mail1_subject = "Buy - Shield Enquiry from Horizon Mahindra - " . $qname;
    $mail1_txt = "Name :" . $qname . "<br>" . "Mobile :" . $qphone . "<br>" . "City :" . $qoutlet . "<br>" . "E-Mail :" . $qemail . "<br>";

    // Always set content-type when sending HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    // More headers
    $headers .= 'From: <salesop@horizonmahindra.com>' . "\r\n";

    $complete = mail("viralmafiacs2@gmail.com, cyril.viralmafia@gmail.com, suneshkrishnan@gmail.com, salesop@horizonmahindra.com, sm.ktmservice@horizonmahindra.com", $mail1_subject, $mail1_txt, $headers);

    if ($complete) {
        header("location:index.html");
    }
}


if (isset($_POST['getloan']) and !empty($_POST['getloan'])) {
    $qname = $_POST['name'];
    $qphone = $_POST['mobile_no'];
    $qoutlet = $_POST['city'];
    $qemail = $_POST['email'];

    $mail1_subject = "Loan Enquiry from Horizon Mahindra - " . $qname;
    $mail1_txt = "Name :" . $qname . "<br>" . "Mobile :" . $qphone . "<br>" . "City :" . $qoutlet . "<br>" . "E-Mail :" . $qemail . "<br>";

    // Always set content-type when sending HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    // More headers
    $headers .= 'From: <salesop@horizonmahindra.com>' . "\r\n";

    $complete = mail("viralmafiacs2@gmail.com, cyril.viralmafia@gmail.com, suneshkrishnan@gmail.com, salesop@horizonmahindra.com", $mail1_subject, $mail1_txt, $headers);

    if ($complete) {
        header("location:index.html");
    }
}

?>