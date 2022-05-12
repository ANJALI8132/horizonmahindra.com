<?php
error_reporting(0);
$source='';
$source=$_GET['utm_source'];
?>

<?php
if(isset($_POST['quicksubmit']) and !empty($_POST['quicksubmit'])){
    $name=$_POST['name'];
    $phone=$_POST['phone'];
    $model=$_POST['model'];
    $place=$_POST['place'];
    $source=$_POST['esource'];


    // leadfox webhook start here

    $description = "Model: " . $model . "-" . "Place: " . $place;

    if(empty($source)){
        $utm_source = "google";
    } else{
        $utm_source = $source;
    }

    //echo $utm_source;


    $apiKey = urlencode('futiXiCxKva1Q8Dh');
    $utm_id = "9193851203";
    $agent = "87385597";

    $data = array(
        'apikey' => $apiKey,
        'name' => $name,
        "phone" => $phone,
        // "email" => $email,
        "utm_source" => $utm_source,
        "description" => $description,
        "utm_id" => $utm_id,
        "agent" => $agent,
        "utm_medium" => 'search',
        "utm_term" => 'general'

    );

    $ch = curl_init('https://leadfoxcrm.com/webhook');
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    curl_close($ch);

    // leadfox webhook end here



    $mail1_subject="Horizon Quick Enquiry from Google Ads - " . $name;
    $mail1_txt="Name :" . $name . "<br>" . "Mobile :" . $phone . "<br>" . "Model :" . $model . "<br>" . "Place :" . $place . "<br>" . "Source :" . $source . "<br>";

    // Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <info@horizonmahindra.com>' . "\r\n";

    $complete=mail("viralmafiacs2@gmail.com, cyril.viralmafia@gmail.com, info@horizonmahindra.com, leads.viralmafia@gmail.com",$mail1_subject,$mail1_txt, $headers);

    if($complete){
        header("location:sucess/index.html");
    }
}

if(isset($_POST['submit']) and !empty($_POST['submit'])){
    $ename=$_POST['ename'];
    $ephone=$_POST['ephone'];
    $email=$_POST['email'];
    $message=$_POST['message'];
    $place=$_POST['place'];
    $source=$_POST['esource'];

    // leadfox webhook start here

    $description = "Message: " . $message . "-" . "Place: " . $place;

    if(empty($source)){
        $utm_source = "google";
    } else{
        $utm_source = $source;
    }


    $apiKey = urlencode('futiXiCxKva1Q8Dh');
    $utm_id = "9193851203";
    $agent = "87385597";

    $data = array(
        'apikey' => $apiKey,
        'name' => $ename,
        "phone" => $ephone,
        "email" => $email,
        "utm_source" => $utm_source,
        "description" => $description,
        "utm_id" => $utm_id,
        "agent" => $agent,
        "utm_medium" => 'search',
        "utm_term" => 'general'

    );

    $ch = curl_init('https://leadfoxcrm.com/webhook');
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    curl_close($ch);

    // leadfox webhook end here

    $mail1_subject="Horizon Enquiry from Google Ads - " . $ename;
    $mail1_txt="Name :" . $ename . "<br>" . "Mobile :" . $ephone . "<br>" . "E-Mail :" . $email . "<br>" . "Message :" . $message . "<br>" . "Place :" . $place . "<br>" . "Source :" . $source . "<br>";


    // Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <info@horizonmahindra.com>' . "\r\n";

    $complete=mail("viralmafiacs2@gmail.com, cyril.viralmafia@gmail.com, info@horizonmahindra.com, leads.viralmafia@gmail.com",$mail1_subject,$mail1_txt, $headers);

    if($complete){
        header("location:sucess/index.html");
    }
}



if(isset($_POST['checknow']) and !empty($_POST['checknow'])){
    $name=$_POST['name'];
    $model=$_POST['model'];
    $phone3=$_POST['phone3'];
    $place=$_POST['place'];
    $source=$_POST['esource'];

    // leadfox webhook start here

    $description = "Model: " . $model . "-" . "Place: " . $place;

    if(empty($source)){
        $utm_source = "google";
    } else{
        $utm_source = $source;
    }


    $apiKey = urlencode('futiXiCxKva1Q8Dh');
    $utm_id = "9193851203";
    $agent = "87385597";

    $data = array(
        'apikey' => $apiKey,
        'name' => $name,
        "phone" => $phone3,
        //"email" => $email,
        "utm_source" => $utm_source,
        "description" => $description,
        "utm_id" => $utm_id,
        "agent" => $agent,
        "utm_medium" => 'search',
        "utm_term" => 'general'

    );

    $ch = curl_init('https://leadfoxcrm.com/webhook');
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    curl_close($ch);

    // leadfox webhook end here


    $mail1_subject="Horizon Model Enquiry from Google Ads - " . $phone3;
    $mail1_txt="Name :" . $name . "<br>" . "Model :" . $model . "<br>" . "Mobile :" . $phone3 . "<br>" . "Place :" . $place . "<br>" . "Source :" . $source . "<br>";

    // Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <info@horizonmahindra.com>' . "\r\n";

    $complete=mail("viralmafiacs2@gmail.com, cyril.viralmafia@gmail.com, info@horizonmahindra.com, leads.viralmafia@gmail.com",$mail1_subject,$mail1_txt, $headers);

    if($complete){
        header("location:sucess/index.html");
    }
}



if(isset($_POST['consultation']) and !empty($_POST['consultation'])){
    $cphone=$_POST['cphone'];
    $source=$_POST['esource'];

    // leadfox webhook start here

    //$description = "Model: " . $model . "-" . "Place: " . $place;

    if(empty($source)){
        $utm_source = "google";
    } else{
        $utm_source = $source;
    }


    $apiKey = urlencode('futiXiCxKva1Q8Dh');
    $utm_id = "9193851203";
    $agent = "87385597";

    $name = "Test Name";

    $data = array(
        'apikey' => $apiKey,
        'name' => $name,
        "phone" => $cphone,
        //"email" => $email,
        "utm_source" => $utm_source,
        //"description" => $description,
        "utm_id" => $utm_id,
        "agent" => $agent,
        "utm_medium" => 'search',
        "utm_term" => 'general'

    );

    $ch = curl_init('https://leadfoxcrm.com/webhook');
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    curl_close($ch);

    // leadfox webhook end here


    $mail1_subject="Horizon Consultation Enquiry from Google Ads - " . $cphone . "<br>" . "Source :" . $source . "<br>";
    $mail1_txt="Mobile :" . $cphone . "<br>";

    // Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <info@horizonmahindra.com>' . "\r\n";

    $complete=mail("viralmafiacs2@gmail.com, cyril.viralmafia@gmail.com, info@horizonmahindra.com, leads.viralmafia@gmail.com",$mail1_subject,$mail1_txt, $headers);

    if($complete){
        header("location:sucess/index.html");
    }
}



if(isset($_POST['checknowemi']) and !empty($_POST['checknowemi'])){
    $name=$_POST['name'];
    $model=$_POST['model'];
    $phone3=$_POST['phone3'];
    $place=$_POST['place'];
    $amount=$_POST['amount'];
    $period=$_POST['period'];
    $source=$_POST['esource'];


    // leadfox webhook start here

    $description = "Model: " . $model . "-" . "Place: " . $place . "-" . "Amount: " . $amount . "-" . "Period: " . $period;

    if(empty($source)){
        $utm_source = "google";
    } else{
        $utm_source = $source;
    }


    $apiKey = urlencode('futiXiCxKva1Q8Dh');
    $utm_id = "9193851203";
    $agent = "87385597";

    $data = array(
        'apikey' => $apiKey,
        'name' => $name,
        "phone" => $phone3,
        //"email" => $email,
        "utm_source" => $utm_source,
        "description" => $description,
        "utm_id" => $utm_id,
        "agent" => $agent,
        "utm_medium" => 'search',
        "utm_term" => 'general'

    );

    $ch = curl_init('https://leadfoxcrm.com/webhook');
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    curl_close($ch);

    // leadfox webhook end here



    $mail1_subject="Horizon EMI Enquiry from Google Ads - " . $phone3;
    $mail1_txt="Name :" . $name . "<br>" . "Model :" . $model . "<br>" . "Mobile :" . $phone3 . "<br>" . "Place :" . $place . "<br>" . "Amount :" . $amount . "<br>" . "Period :" . $period . "<br>" . "Source :" . $source . "<br>";

    // Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <info@horizonmahindra.com>' . "\r\n";

    $complete=mail("viralmafiacs2@gmail.com, cyril.viralmafia@gmail.com, info@horizonmahindra.com, leads.viralmafia@gmail.com",$mail1_subject,$mail1_txt, $headers);

    if($complete){
        header("location:sucess/index.html");
    }
}

?>

<!doctype html>
<html>
<head>
<meta charset="utf-8">
  <title>Horizon Motors</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
 <meta name="keywords" content="Scorpio showroom price, Mahindra xuv showroom, xuv 300 ex showroom price, mahindra xuv dealer, kuv 100 ex showroom price, tuv 300 ex showroom price, mahindra tuv 300 showroom price, thar 700 on road price, alturas g4 showroom, mahindra xylo showroom, bolero ex showroom price, mahindra e2o plus price, mahindra marazzo showroom price, mahindra marazzo dealer, mahindra verito showroom price, mahindra xylo showroom price">
 
 <meta content="index,follow" name="robots">
 <meta name="google-site-verification" content="FLwVYt5C_3JdBfDCaZ75GYmXXSVqHV3M614gv2vFWUY" />
 
<link href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900&display=swap" rel="stylesheet">
<link rel="shortcut icon" type="image/x-icon" href="images/favicon.ico">
<link rel="stylesheet" href="css/bootstrap.css">
<link rel="stylesheet" href="css/font-awesome.css">
<link rel="stylesheet" href="css/fontawesome-all.css"> 
<link rel="stylesheet" href="css/custom.css">
<link rel="stylesheet" href="css/plugin.css">
<link rel="stylesheet" href="css/animate.css">
<link rel="stylesheet" href="css/niecelesect.css">
<link rel="stylesheet" href="css/slick.css">
<link rel="stylesheet" href="css/cookiealert.css">

 <!-- REVOLUTION STYLE SHEETS -->
 <link rel="stylesheet" type="text/css" href="rev-slider/revolution/css/settings.css">
 <link rel="stylesheet" type="text/css" href="rev-slider/revolution/css/layers.css">
 <link rel="stylesheet" type="text/css" href="rev-slider/revolution/css/navigation.css">
 
<link rel="stylesheet" href="plugins/fancybox/jquery.fancybox.css">
<link rel="stylesheet" href="plugins/gallery.css">

<link rel="stylesheet" href="css/niecelesect.css"> 

<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WRTHJB5');</script>
<!-- End Google Tag Manager -->

<script type="text/javascript">
  var wasSubmitted = false;    
    function checkBeforeSubmit(){
      if(!wasSubmitted) {
        wasSubmitted = true;
        return wasSubmitted;
      }
      return false;
    }    
</script>

</head>

<body>

<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WRTHJB5"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<a href="tel:+917025282054" class="bla-1 mb_call"><i class="fas fa-phone "></i></a>

<div class="body_wraper">

<section>
<div class="header_sec">
<div class="header_fixed">
<div class="container">
<div class="top_headerleft">
<div class="header_logo">
<a href="#"><img src="images/logo.svg"></a>
</div>
<div class="header_contact">
<ul>
<li class="li_phone "><i class="fas fa-phone blink"></i> 
<a href="tel:+919847266166">: +91 9847 266 166 </a></li>
</ul>
</div>
</div>
<div class="top_header_right">
<div class="mahendra_logo"><img src="images/mahindra-logo.svg"></div>
</div>
</div>
</div>
</div>
</section>

<div class="clearfix"></div>


<section class="home_bnrsec">
<!-- Fullscreen Slider Start -->
  <div class="slider bg-navy-blue">
    <div id="rev_slider_1078_1_wrapper" class="rev_slider_wrapper fullwidthbanner-container" data-alias="classic4export" data-source="gallery" style="margin:0px auto;background-color:transparent;padding:0px;margin-top:0px;margin-bottom:0px;"> 
      <!-- START REVOLUTION SLIDER 5.4.1 fullwidth mode -->
      <div id="rev_slider_1078_1" class="rev_slider fullscreenbanner" style="display:none;" data-version="5.4.1">
        <ul>

        <li 
            data-index="rs-82" 
            data-transition="zoomout" 
            data-slotamount="default" 
            data-hideafterloop="0" 
            data-hideslideonmobile="off"
            data-easein="Power4.easeOut"
            data-easeout="Power4.easeOut" 
            data-masterspeed="2000"
            data-thumb=""
            data-rotate="0"
            data-saveperformance="off"
            data-title="Slide"
            data-param1=""
            data-param2=""
            data-param3=""
            data-param4=""
            data-param5=""
            data-param6=""
            data-param7=""
            data-param8=""
            data-param9=""
            data-param10=""
            data-description=""
            data-slicey_shadow="0px 0px 50px 0px transparent"
          >
          <!-- MAIN IMAGE -->
          <img src="images/slider/5.jpg"  alt=""  data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="10" class="rev-slidebg" data-no-retina> 
          <!-- LAYERS -->           
  
          </li>

        <li 
            data-index="rs-82" 
            data-transition="zoomout" 
            data-slotamount="default" 
            data-hideafterloop="0" 
            data-hideslideonmobile="off"
            data-easein="Power4.easeOut"
            data-easeout="Power4.easeOut" 
            data-masterspeed="2000"
            data-thumb=""
            data-rotate="0"
            data-saveperformance="off"
            data-title="Slide"
            data-param1=""
            data-param2=""
            data-param3=""
            data-param4=""
            data-param5=""
            data-param6=""
            data-param7=""
            data-param8=""
            data-param9=""
            data-param10=""
            data-description=""
            data-slicey_shadow="0px 0px 50px 0px transparent"
          >
          <!-- MAIN IMAGE -->
          <img src="images/slider/4.jpg"  alt=""  data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="10" class="rev-slidebg" data-no-retina> 
          <!-- LAYERS -->           
  
          </li>

         
		 <li 
            data-index="rs-82" 
            data-transition="zoomout" 
            data-slotamount="default" 
            data-hideafterloop="0" 
            data-hideslideonmobile="off"
            data-easein="Power4.easeOut"
            data-easeout="Power4.easeOut" 
            data-masterspeed="2000"
            data-thumb=""
            data-rotate="0"
            data-saveperformance="off"
            data-title="Slide"
            data-param1=""
            data-param2=""
            data-param3=""
            data-param4=""
            data-param5=""
            data-param6=""
            data-param7=""
            data-param8=""
            data-param9=""
            data-param10=""
            data-description=""
            data-slicey_shadow="0px 0px 50px 0px transparent"
          >
          <!-- MAIN IMAGE -->
          <img src="images/slider/1.jpg"  alt=""  data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="10" class="rev-slidebg" data-no-retina> 
          <!-- LAYERS -->        	
  
          </li>
		  
		     <li 
            data-index="rs-83" 
            data-transition="zoomout" 
            data-slotamount="default" 
            data-hideafterloop="0" 
            data-hideslideonmobile="off"
            data-easein="Power4.easeOut"
            data-easeout="Power4.easeOut" 
            data-masterspeed="2000"
            data-thumb=""
            data-rotate="0"
            data-saveperformance="off"
            data-title="Slide"
            data-param1=""
            data-param2=""
            data-param3=""
            data-param4=""
            data-param5=""
            data-param6=""
            data-param7=""
            data-param8=""
            data-param9=""
            data-param10=""
            data-description=""
            data-slicey_shadow="0px 0px 50px 0px transparent"
          >
          <!-- MAIN IMAGE -->
          <img src="images/slider/2.jpg"  alt=""  data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="10" class="rev-slidebg" data-no-retina> 
          <!-- LAYERS -->                 
  
          </li>
		  

          <!-- SLIDE  -->          
        </ul>
        <div class="tp-bannertimer tp-bottom" style="height: 7px; background-color: rgba(255, 255, 255, 0.25);"></div>
      </div>	  
    </div>
  </div>
  
<div class="bnr_form">
<div class="container">
<div class="quick_enquiry">
<div class="container">
<div class="row">
<div class="col-lg-12">
<div class="quen_title">
<h4>Quick<span> Enquiry</span> </h4>
</div>
</div>

<div class="quen_form">
<form name="form1" method="post" onsubmit="return checkBeforeSubmit()">
<div class="col-md-2 ">
<input placeholder="Name" name="name" required type="text"> 
</div>
<div class="col-md-3 ">
<input placeholder="Phone" name="phone" required type="tel" pattern="[0-9]{10}" maxlength="10" oninvalid="this.setCustomValidity('Please Enter 10 Digit Number')" onchange="this.setCustomValidity('')"> 
</div>
<div class="col-md-2 ">
<select placeholder="Model" name="model" required class="ba_sel_txt">
                                            <option value="" selected>Model </option>
                                            <option value="Mahindra XUV 700">Mahindra XUV 700 </option>
                                            <option value="Mahindra Bolero neo">Mahindra Bolero neo </option>
                                            <option value="Mahindra Thar">Mahindra Thar </option>
                                            <option value="Mahindra XUV 3OO">Mahindra XUV 3OO</option>
                                            <option value="Mahindra Bolero B6">Mahindra Bolero B6 </option>  

                                            <option value="Mahindra Marazzo">Mahindra Marazzo</option>
                                            <option value="Mahindra Alturas G4">Mahindra Alturas G4</option>
                                            <option value="Mahindra XUV500">Mahindra XUV500</option> 
                                            <option value="Mahindra Bolero Pikup 1.7L">Mahindra Bolero Pikup 1.7L</option>  
                                            <option value="Mahindra Bolero Pikup 4X4">Mahindra Bolero Pikup 4X4</option>
                                            <option value="Mahindra Bolero Pikup Camper">Mahindra Bolero Pikup Camper</option>
                                            <option value="Mahindra KUV100 NXT">Mahindra KUV100 NXT</option>
                                            <option value="Mahindra BMT">Mahindra BMT</option>
                                            <option value="Mahindra Bolero City Pikup">Mahindra Bolero City Pikup</option>

                                                                                        
                                        </select>
</div>
<div class="col-md-2 ">
<select placeholder="Place" name="place" required class="ba_sel_txt">
                                            <option value="" selected>Place </option>
                                            <option value="Kottayam">Kottayam </option>
                                            <option value="Thodupuzha">Thodupuzha </option>
                                            <option value="Kattappana">Kattappana </option>                                           
                                        </select>
</div>
<div class="col-md-3 ">
<input type="hidden" name="esource" value="<?php echo $source;?>">
<input type="submit" value="Submit" name="quicksubmit"> 
</div>
</form>
</div>

</div>
</div>
</div>
</div>
</div>
  
</section>

<div class="clearfix"></div>




<section>
<div class="home_intro_sec">
<div class="container">
<div class="row">
<div class="col-md-12">
<div class="home_comen_title">
<h3><span>Featured </span>Products</h3>
<p>Horizon Motors is acclaimed as the Best Mahindra dealer in Kottayam and a leading Mahindra car dealer in Idukki. Our Mahindra showroom in Kottayam is a prominent car showroom that excels in car dealerships by distributing an extensive range of Mahindra cars, which includes Mahindra Thar, Scorpio, XUV 300, KUV, TUV, Alturas and many more. Our Scorpio showroom and Mahindra XUV showroom have been noted for their exceptional services. We are also renowned as the premier Mahindra Bolero showroom and Mahindra Xylo showroom. </p>
</div>
</div>
</div>
</div>

<div class="mahindra_pdtlist">
<div class="row">

<div class="col-lg-3 col-md-6">
<div class="mh_pdtbox">
<div class="mh_pdtbox_img">
<img src="images/pdt/23.jpg">
<div class="mh_img_overla">
<a class="regbtn" href="javascript:void(0)" data-toggle="modal" data-target="#myModal2">Check On Road Price</a>
<br><a class="regbtn" href="javascript:void(0)" data-toggle="modal" data-target="#myModal2emi">EMI</a>
</div>
</div>
<div class="mh_pdtbox_title">
<h4>Mahindra XUV 700</h4>
</div>
</div>
</div>

<div class="col-lg-3 col-md-6">
<div class="mh_pdtbox">
<div class="mh_pdtbox_img">
<img src="images/pdt/22.jpg">
<div class="mh_img_overla">
<a class="regbtn" href="javascript:void(0)" data-toggle="modal" data-target="#myModal2">Check On Road Price</a>
<br><a class="regbtn" href="javascript:void(0)" data-toggle="modal" data-target="#myModal2emi">EMI</a>
</div>
</div>
<div class="mh_pdtbox_title">
<h4>Mahindra Bolero neo</h4>
</div>
</div>
</div>

<div class="col-lg-3 col-md-6">
<div class="mh_pdtbox">
<div class="mh_pdtbox_img">
<img src="images/pdt/21.jpg">
<div class="mh_img_overla">
<a class="regbtn" href="javascript:void(0)" data-toggle="modal" data-target="#myModal2">Check On Road Price</a>
<br><a class="regbtn" href="javascript:void(0)" data-toggle="modal" data-target="#myModal2emi">EMI</a>
</div>
</div>
<div class="mh_pdtbox_title">
<h4>Mahindra Thar</h4>
</div>
</div>
</div>


<div class="col-lg-3 col-md-6">
<div class="mh_pdtbox">
<div class="mh_pdtbox_img">
<img src="images/pdt/12.jpg">
<div class="mh_img_overla">
<a class="regbtn" href="javascript:void(0)" data-toggle="modal" data-target="#myModal2">Check On Road Price</a>
<br><a class="regbtn" href="javascript:void(0)" data-toggle="modal" data-target="#myModal2emi">EMI</a>
</div>
</div>
<div class="mh_pdtbox_title">
<h4>Mahindra XUV 3OO</h4>
</div>
</div>
</div>

<div class="col-lg-3 col-md-6">
<div class="mh_pdtbox">
<div class="mh_pdtbox_img">
<img src="images/pdt/19.jpg">
<div class="mh_img_overla">
<a class="regbtn" href="javascript:void(0)" data-toggle="modal" data-target="#myModal2">Check On Road Price</a>
<br><a class="regbtn" href="javascript:void(0)" data-toggle="modal" data-target="#myModal2emi">EMI</a>
</div>
</div>
<div class="mh_pdtbox_title">
<h4>Mahindra Bolero B6</h4>
</div>
</div>
</div>

<div class="col-lg-3 col-md-6">
<div class="mh_pdtbox">
<div class="mh_pdtbox_img">
<img src="images/pdt/9.jpg">
<div class="mh_img_overla">
<a class="regbtn" href="javascript:void(0)" data-toggle="modal" data-target="#myModal2">Check On Road Price</a>
<br><a class="regbtn" href="javascript:void(0)" data-toggle="modal" data-target="#myModal2emi">EMI</a>
</div>
</div>
<div class="mh_pdtbox_title">
<h4>Mahindra Marazzo</h4>
</div>
</div>
</div>

<div class="col-lg-3 col-md-6">
<div class="mh_pdtbox">
<div class="mh_pdtbox_img">
<img src="images/pdt/13.jpg">
<div class="mh_img_overla">
<a class="regbtn" href="javascript:void(0)" data-toggle="modal" data-target="#myModal2">Check On Road Price</a>
<br><a class="regbtn" href="javascript:void(0)" data-toggle="modal" data-target="#myModal2emi">EMI</a>
</div>
</div>
<div class="mh_pdtbox_title">
<h4>Mahindra Alturas G4</h4>
</div>
</div>
</div>

<div class="col-lg-3 col-md-6">
<div class="mh_pdtbox">
<div class="mh_pdtbox_img">
<img src="images/pdt/3.jpg">
<div class="mh_img_overla">
<a class="regbtn" href="javascript:void(0)" data-toggle="modal" data-target="#myModal2">Check On Road Price</a>
<br><a class="regbtn" href="javascript:void(0)" data-toggle="modal" data-target="#myModal2emi">EMI</a>
</div>
</div>
<div class="mh_pdtbox_title">
<h4>Mahindra XUV500</h4>
</div>
</div>
</div>


<div class="col-lg-3 col-md-6">
<div class="mh_pdtbox">
<div class="mh_pdtbox_img">
<img src="images/pdt/17.jpg">
<div class="mh_img_overla">
<a class="regbtn" href="javascript:void(0)" data-toggle="modal" data-target="#myModal2">Check On Road Price</a>
<br><a class="regbtn" href="javascript:void(0)" data-toggle="modal" data-target="#myModal2emi">EMI</a>
</div>
</div>
<div class="mh_pdtbox_title">
<h4>Mahindra Bolero Pikup 1.7L</h4>
</div>
</div>
</div>

<div class="col-lg-3 col-md-6">
<div class="mh_pdtbox">
<div class="mh_pdtbox_img">
<img src="images/pdt/14.jpg">
<div class="mh_img_overla">
<a class="regbtn" href="javascript:void(0)" data-toggle="modal" data-target="#myModal2">Check On Road Price</a>
<br><a class="regbtn" href="javascript:void(0)" data-toggle="modal" data-target="#myModal2emi">EMI</a>
</div>
</div>
<div class="mh_pdtbox_title">
<h4>Mahindra Bolero Pikup 4X4</h4>
</div>
</div>
</div>

<div class="col-lg-3 col-md-6">
<div class="mh_pdtbox">
<div class="mh_pdtbox_img">
<img src="images/pdt/18.jpg">
<div class="mh_img_overla">
<a class="regbtn" href="javascript:void(0)" data-toggle="modal" data-target="#myModal2">Check On Road Price</a>
<br><a class="regbtn" href="javascript:void(0)" data-toggle="modal" data-target="#myModal2emi">EMI</a>
</div>
</div>
<div class="mh_pdtbox_title">
<h4>Mahindra Bolero Pikup Camper</h4>
</div>
</div>
</div>


<div class="col-lg-3 col-md-6">
<div class="mh_pdtbox">
<div class="mh_pdtbox_img">
<img src="images/pdt/7.jpg">
<div class="mh_img_overla">
<a class="regbtn" href="javascript:void(0)" data-toggle="modal" data-target="#myModal2">Check On Road Price</a>
<br><a class="regbtn" href="javascript:void(0)" data-toggle="modal" data-target="#myModal2emi">EMI</a>
</div>
</div>
<div class="mh_pdtbox_title">
<h4>Mahindra KUV100 NXT</h4>
</div>
</div>
</div>


<div class="col-lg-3 col-md-6">
<div class="mh_pdtbox">
<div class="mh_pdtbox_img">
<img src="images/pdt/16.jpg">
<div class="mh_img_overla">
<a class="regbtn" href="javascript:void(0)" data-toggle="modal" data-target="#myModal2">Check On Road Price</a>
<br><a class="regbtn" href="javascript:void(0)" data-toggle="modal" data-target="#myModal2emi">EMI</a>
</div>
</div>
<div class="mh_pdtbox_title">
<h4>Mahindra BMT</h4>
</div>
</div>
</div>

<div class="col-lg-3 col-md-6">
<div class="mh_pdtbox">
<div class="mh_pdtbox_img">
<img src="images/pdt/20.jpg">
<div class="mh_img_overla">
<a class="regbtn" href="javascript:void(0)" data-toggle="modal" data-target="#myModal2">Check On Road Price</a>
<br><a class="regbtn" href="javascript:void(0)" data-toggle="modal" data-target="#myModal2emi">EMI</a>
</div>
</div>
<div class="mh_pdtbox_title">
<h4>Mahindra Bolero City Pikup</h4>
</div>
</div>
</div>


</div>
</div>

</div>
</section>



<section>
<div class="center_sec">
<div class="center_sec_overlay">
<div class="container">
<h3>To know more and to get <span>free consultation</span> call us today or just register your number.</h3>
<div class="center_phone"><a href="tel:+919847266166"><i class="fas fa-phone "></i>  +91 9847 266 166</a></div>
<div class="center_reg"><a class="regbtn" href="javascript:void(0)" data-toggle="modal" data-target="#myModal2">Register</a></div>
</div>
</div>
</div>
</section>


<section class="testimonial_sec ">
                <div class="container">
                    
    <div class="home_comen_title">
    <h3>What our  <span>customers say </span></h3>
</div>                
                    <div class="con_testimonial_slider_info  slick_customstyle" >
                        <div class="con_testimonial_slider_two" id="testimonila_slider">
                             <div class="item ">
                                <div class="testimonial_item_two">
                          <div class="tes_para">
                              <div class="tesicondiv">
                               <img class="" src="images/tes.svg" alt="">
                              </div>
                    <p>It is very important to get the right car at the right time, while staying true to budget. A big thank you to the Horizon Motors sales staff for guiding me through the buying process and helping me to finally choose the funky KUV100 NXT!</p>  
                              <h6 >Mr. Joseph John  </h6>
                          </div>
                                    
                                </div>
                            </div>
                            
                            <div class="item ">
                                <div class="testimonial_item_two">
                          <div class="tes_para">
                              <div class="tesicondiv">
                               <img class="" src="images/tes.svg" alt="">
                              </div>
                    <p>Really excited to get the keys to my new Mahindra XUV500! The sales staff were really helpful in explaining the standout features of the SUV and convincing me to go for the same. Great decision and I’m looking forward to put thousands of kilometres on it!</p>   <h6 >Mr. Vijayakumar  </h6>      
                          </div>
                                    
                                </div>
                            </div>
            <div class="item ">
                                <div class="testimonial_item_two">
                          <div class="tes_para">
                              <div class="tesicondiv">
                               <img class="" src="images/tes.svg" alt="">
                              </div>
                    <p>I made the decision to buy the XUV500 after recommendations from quite a few friends regarding the SUV’s solid build quality, powerful performance and comfortable ride, as well as the premium ownership experience offered by Horizon Motors. The dealer helped me to add a few custom accessories to make my XUV500 stand out from the crowd. Very very happy to say the least!</p>   
                              <h6 > Mr. Ranjit Abraham  </h6>
                          </div>
                                    
                                </div>
                            </div>
      
                        </div>
                    </div>
                </div>
            </section>  



<section>
<div  class="about_marina_motoors">
<div class="container">
<div class="row">
<div class="col-md-12">
<div class="home_comen_title">
<h3><span>The</span> Horizon Motors</h3>
<p>Welcome to Horizon motors, the phenomenal home of motor cars of Mahindra – The golden symbol of pride and trust and the prominent Mahindra showroom . A Flawless reputation for quality and product business sense has made Horizon Motors the top mahindra showroom kottayam and a name to reckon with in the automobile industry in Kerala.
</p>
</div>
</div>

<div class="col-lg-6">
<div class="about_left">
<img src="images/xuv-500.png"> 
</div>
</div>

<div class="col-lg-6">
<div class="about_right">
<p>As one of the exclusive Kottayam Mahindra showroom, Horizon motors is committed to provide you the best deal on every authorized Mahindra passenger models that has helped us exceed customer expectation and lead as the top Mahindra car showroom in Kottayam.</p>
<p>Regarding the core values of this world-class Mahindra showroom in kottayam honesty, transparency and integrity upholds our business values and we are passionate about maintaining a Win to Win relationship with our customers. Being one of the foremost Mahindra scorpio dealers in kottayam , we believe in continual improvement in every aspect of our operations to achieve better work quality and world class standard. We look forward to serve you in the near future and we invite you to visit us and experience the difference by yourself.</p>
<p>Apart from Kerala, horizon motors is expanded to various districts across Kerala. At present, we are the leading Mahindra Car Dealer in Kottayam and idukki.</p>
</div>
</div>

</div>
</div>
</div>
</section>



<div class="networksec">
            <section class="our-history white-bg page-section-ptb">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="section-title">
                                <h2>our Networks</h2>
                                <div class="separator"></div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <ul class="timeline list-style-none">
                                <li>
                                    <div class="timeline-badge">
                                        <h4>01</h4>
                                    </div>
                                    <div class="timeline-panel">
                                        <div class="timeline-heading">
                                            <h5>Kottayam Showroom</h5>
                                        </div>
                                        <div class="timeline-body">
                                            <ul class="net_ul">
                                                <li><span>Address</span>Kannikkatt Building, M C Road, Thellakom, Kottayam - 686630</li>
                                                <li><span>Phone</span> +91 9847 266 166</li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li class="timeline-inverted">
                                    <div class="timeline-badge">
                                        <h4>02</h4>
                                    </div>
                                    <div class="timeline-panel">
                                        <div class="timeline-heading">
                                            <h5>Kottayam Service Center</h5>
                                        </div>
                                        <div class="timeline-body">
                                            <ul class="net_ul">
                                                <li><span>Address</span>10/385, MAHINDRA SERVICE CENTRE, near Matha Hospital, Thellakom, Kerala - 686630</li>
                                                <li><span>Phone</span> +91 9847 522 722</li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="timeline-badge">
                                        <h4>03</h4>
                                    </div>
                                    <div class="timeline-panel">
                                        <div class="timeline-heading">
                                            <h5>Thodupuzha Showroom</h5>
                                        </div>
                                        <div class="timeline-body">
                                            <ul class="net_ul">
                                                <li><span>Address</span>Moolamattom Rd, Thodupuzha PO, Idukki - 685584</li>
                                                <li><span>Phone</span> +91 7025 282 033</li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                <li class="timeline-inverted">
                                    <div class="timeline-badge">
                                        <h4>04</h4>
                                    </div>
                                    <div class="timeline-panel">
                                        <div class="timeline-heading">
                                            <h5>Thodupuzha Service Center</h5>
                                        </div>
                                        <div class="timeline-body">
                                            <ul class="net_ul">
                                                <li><span>Address</span>Moolamattom Rd, Thodupuzha PO, Idukki - 685584</li>
                                                <li><span>Phone</span> +91 7593 810 752</li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div class="timeline-badge">
                                        <h4>05</h4>
                                    </div>
                                    <div class="timeline-panel">
                                        <div class="timeline-heading">
                                            <h5>Kattappana Showroom</h5>
                                        </div>
                                        <div class="timeline-body">
                                            <ul class="net_ul">
                                                <li><span>Address</span>Erattayar Road, Kattappana PO, Idukki - 685508</li>
                                                <li><span>Phone</span> +91 7025 282 033</li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                <li class="timeline-inverted">
                                    <div class="timeline-badge">
                                        <h4>06</h4>
                                    </div>
                                    <div class="timeline-panel">
                                        <div class="timeline-heading">
                                            <h5>Kattappana Service Center</h5>
                                        </div>
                                        <div class="timeline-body">
                                            <ul class="net_ul">
                                                <li><span>Address</span>Govt.College Road, Kattappana PO, Idukki - 685508</li>
                                                <li><span>Phone</span>+91 7025 282 140</li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div class="timeline-badge">
                                        <h4>07</h4>
                                    </div>
                                    <div class="timeline-panel">
                                        <div class="timeline-heading">
                                            <h5>Changanassery Service Centre</h5>
                                        </div>
                                        <div class="timeline-body">
                                            <ul class="net_ul">
                                                <li><span>Address</span>Near to IOC pump, Vazhapally Byepass, Changanassery PO, Kottayam - 686103</li>
                                                <li><span>Phone</span> +91 9605 255 755</li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                <li class="timeline-inverted">
                                    <div class="timeline-badge">
                                        <h4>08</h4>
                                    </div>
                                    <div class="timeline-panel">
                                        <div class="timeline-heading">
                                            <h5>Kanjirapally Showroom</h5>
                                        </div>
                                        <div class="timeline-body">
                                            <ul class="net_ul">
                                                <li><span>Address</span>Near AKJM Higher Secondary School, KK Road, Kanjirapally PO, Kottayam - 686507</li>
                                                <li><span>Phone</span>+91 7025 282 060</li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div class="timeline-badge">
                                        <h4>09</h4>
                                    </div>
                                    <div class="timeline-panel">
                                        <div class="timeline-heading">
                                            <h5>Kanjirapally Service Centre</h5>
                                        </div>
                                        <div class="timeline-body">
                                            <ul class="net_ul">
                                                <li><span>Address</span>Near to IOC pump, Petta Junction, Kanjirapally PO, Kottayam - 686507</li>
                                                <li><span>Phone</span> +91 7025 282 038</li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                <li class="timeline-inverted">
                                    <div class="timeline-badge">
                                        <h4>10</h4>
                                    </div>
                                    <div class="timeline-panel">
                                        <div class="timeline-heading">
                                            <h5>Adimaly Showroom</h5>
                                        </div>
                                        <div class="timeline-body">
                                            <ul class="net_ul">
                                                <li><span>Address</span>Building no 6-720, Chattupara, Machiplavu P O, Adimaly, Idukki- 685561</li>
                                                
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>






<section>
<div class="footer_sec">
<div class="container">
<div class="row">

<div class="col-lg-4">
<div class="footer_contact">
<div class="footer_title">
<h4>Contact Us</h4>
</div>
<h5>Showroom</h5>
<ul>
<li><span><i class="fas fa-map-marker-alt"></i> Address</span> 
Kannikkatt Building, M C Road, Thellakom, Kottayam - 686630 </li>
<li><span><i class="fas fa-phone"></i> Phone</span>+91 9847 266 166</li>
</ul>
<h5>Workshop</h5>
<ul>
<li><span><i class="fas fa-map-marker-alt"></i> Address</span> 
10/385, MAHINDRA SERVICE CENTRE, near Matha Hospital, Thellakom, Kerala - 686630 </li>
<li><span><i class="fas fa-phone"></i> Phone</span>+91 9847 522 722</li>
</ul>
</div>
</div>
<div class="col-lg-8">
<div class="footer_form">
<div class="footer_title">
<h4>Make an enquiry</h4>
</div>
<div class="clearfix"></div>
<form name="form2" method="post" onsubmit="return checkBeforeSubmit()">
<div class="row">
<div class="col-md-6">
<input type="text" placeholder="Name" name="ename" required>
</div>
<div class="col-md-6">
<input placeholder="Phone" name="ephone" required type="tel" pattern="[0-9]{10}" maxlength="10" oninvalid="this.setCustomValidity('Please Enter 10 Digit Number')" onchange="this.setCustomValidity('')">
</div>
<div class="col-md-12">
<input type="email" placeholder="Email" name="email">
</div>
<div class="col-md-12">
<input type="text" placeholder="Place" name="place" required>
</div>
<div class="col-md-12">
<textarea placeholder="Message" name="message"></textarea>
</div>
<div class="col-md-12">
<input type="hidden" name="esource" value="<?php echo $source;?>">
<input type="submit" value="Send Now" name="submit">
</div>
</div>
</form>
</div>
</div>

</div>
</div>
<div class="copy_rightsec">
<div class="container">
<p>© Copyright 2019 Horizon Motors India Pvt Ltd. All Rights Reserved. Designed by <a href="http://www.theviralmafia.com/?utm_source=horizon"><img src="images/viralmafia.png"></a> | <a href="#" data-toggle="modal" data-target="#myModal3">Privacy Policy</a></p>
</div>
</div>
</div>
</section>


</div> <!-- bodywrapper -->



<div class="modal fade popsec" id="myModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
      
        <div class="modal-body">
		<button type="button" class="close" data-dismiss="modal"><i class="fa fa-times" aria-hidden="true"></i></button>
        <div class="pop_left ">
		<img src="images/popbg1.jpg">
        </div>
		 <div class="pop_right">
		 <h5>Submit your contact details and get more informations.</h5>
		 <div class="pop_input">
		 <form name="form5" method="post" onsubmit="return checkBeforeSubmit()">
		 <input placeholder="Phone" name="cphone" required type="tel" pattern="[0-9]{10}" maxlength="10" oninvalid="this.setCustomValidity('Please Enter 10 Digit Number')" onchange="this.setCustomValidity('')">
		 <input type="hidden" name="esource" value="<?php echo $source;?>">
		 <input value="Submit" type="submit" name="consultation">
		 </form>
		 </div>
         </div>
        </div>
              
      </div>
    </div>
  </div>

    <div class="modal fade popsec onload_pop" id="myModal2">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">

                    <div class="modal-body">
                        <button type="button" class="close" data-dismiss="modal"><i class="fa fa-times" aria-hidden="true"></i></button>
                        <div class="onload_left ">
                            
                            <h3>CHECK ON-ROAD <span>PRICE</span></h3>

                        </div>
                        <div class="onload_right">
                            <form name="form3" method="post" onsubmit="return checkBeforeSubmit()">
                                <div class="input_load">
                                    <input placeholder="Name" name="name" type="text" required>
                                </div>
                                

                                <div class="input_load">
                                    <input placeholder="Phone" name="phone3" required type="tel" pattern="[0-9]{10}" maxlength="10" oninvalid="this.setCustomValidity('Please Enter 10 Digit Number')" onchange="this.setCustomValidity('')">
                                </div>

                                <div class="input_load">
                                   <div class=" select_style">
                                   <div class="hover_category">
                                        <select class="in_sel_txt" name="model" required>
                                            <option value="" selected> Model </option>
                                            <option value="Mahindra XUV 700">Mahindra XUV 700 </option>
                                            <option value="Mahindra Bolero neo">Mahindra Bolero neo </option>
                                            <option value="Mahindra Thar">Mahindra Thar </option>
                                            <option value="Mahindra XUV 3OO">Mahindra XUV 3OO</option>
                                            <option value="Mahindra Bolero B6">Mahindra Bolero B6 </option>  

                                            <option value="Mahindra Marazzo">Mahindra Marazzo</option>
                                            <option value="Mahindra Alturas G4">Mahindra Alturas G4</option>
                                            <option value="Mahindra XUV500">Mahindra XUV500</option> 
                                            <option value="Mahindra Bolero Pikup 1.7L">Mahindra Bolero Pikup 1.7L</option> 	
                                            <option value="Mahindra Bolero Pikup 4X4">Mahindra Bolero Pikup 4X4</option>
                                            <option value="Mahindra Bolero Pikup Camper">Mahindra Bolero Pikup Camper</option>
                                            <option value="Mahindra KUV100 NXT">Mahindra KUV100 NXT</option>
                                            <option value="Mahindra BMT">Mahindra BMT</option>
                                            <option value="Mahindra Bolero City Pikup">Mahindra Bolero City Pikup</option>

                                            											
                                        </select>                        
                                   </div>
                            </div>
                                </div>

                                <div class="input_load">
                                   <div class=" select_style">
                                   <div class="hover_category">
                                        <select class="in_sel_txt" name="place" required>
                                            <option value="" selected>Place </option>
                                            <option value="Kottayam">Kottayam </option>
                                            <option value="Thodupuzha">Thodupuzha </option>
                                            <option value="Kattappana">Kattappana </option>

                                            											
                                        </select>                        
                                   </div>
                            </div>
                                </div>


                                <div class="input_load">
                                	<input type="hidden" name="esource" value="<?php echo $source;?>">
                                    <input value="Check Now" type="submit" name="checknow">
                                </div>

                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>





<script>
function myFunction() {
  var x = document.getElementById("myDIV");
  var y = document.getElementById("myDIV1");
  var a = document.getElementById("amount").value;
  var b = document.getElementById("period").value;

  if (x.style.display === "none" && y.style.display === "block" && a != '' && b != '') {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "block";
  }
}
</script>




    <div class="modal fade popsec onload_pop" id="myModal2emi">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">

                    <div class="modal-body">
                        <button type="button" class="close" data-dismiss="modal"><i class="fa fa-times" aria-hidden="true"></i></button>
                        <div class="onload_left ">

                            <h3>EMI <span>CALCULATOR</span></h3>

                        </div>
                        <div class="onload_right">
                            <form name="form4" method="post" onsubmit="return checkBeforeSubmit()">

                                <div id="myDIV1" style="display: block;">

                                    <div class="input_load">
                                        <input placeholder="Loan Amount" name="amount" type="number" required id="amount">
                                    </div>

                                    <div class="input_load">
                                        <select class="in_sel_txt" required name="period" id="period">
                                            <option value="" disabled selected value="">Select Tenure (Month)</option>
                                            <option value="3" data-class="">3</option>
                                            <option value="6" data-class="">6</option>
                                            <option value="12" data-class="">12</option>
                                            <option value="18" data-class="">18</option>
                                            <option value="24" data-class="">24</option>
                                            <option value="30" data-class="">30</option>
                                            <option value="36" data-class="">36</option>
                                            <option value="42" data-class="">42</option>
                                            <option value="48" data-class="">48</option>
                                            <option value="60" data-class="">60</option>
                                        </select>
                                    </div>

                                    <div class="input_load">
                                        <button onclick="myFunction();" class="emi_button">Calculate</button>
                                    </div>

                                </div>


                                <div id="myDIV" style="display: none;">


                                <div class="input_load">
                                    <input placeholder="Name" name="name" type="text" required>
                                </div>
                                

                                <div class="input_load">
                                    <input placeholder="Phone" name="phone3" required type="tel" pattern="[0-9]{10}" maxlength="10" oninvalid="this.setCustomValidity('Please Enter 10 Digit Number')" onchange="this.setCustomValidity('')">
                                </div>

                                <div class="input_load">
                                   <div class=" select_style">
                                   <div class="hover_category">
                                        <select class="in_sel_txt" name="model" required>
                                            <option value="" selected> Model </option>
                                            <option value="Mahindra XUV 700">Mahindra XUV 700 </option>
                                            <option value="Mahindra Bolero neo">Mahindra Bolero neo </option>
                                            <option value="Mahindra Thar">Mahindra Thar </option>
                                            <option value="Mahindra XUV 3OO">Mahindra XUV 3OO</option>
                                            <option value="Mahindra Bolero B6">Mahindra Bolero B6 </option>  

                                            <option value="Mahindra Marazzo">Mahindra Marazzo</option>
                                            <option value="Mahindra Alturas G4">Mahindra Alturas G4</option>
                                            <option value="Mahindra XUV500">Mahindra XUV500</option> 
                                            <option value="Mahindra Bolero Pikup 1.7L">Mahindra Bolero Pikup 1.7L</option>  
                                            <option value="Mahindra Bolero Pikup 4X4">Mahindra Bolero Pikup 4X4</option>
                                            <option value="Mahindra Bolero Pikup Camper">Mahindra Bolero Pikup Camper</option>
                                            <option value="Mahindra KUV100 NXT">Mahindra KUV100 NXT</option>
                                            <option value="Mahindra BMT">Mahindra BMT</option>
                                            <option value="Mahindra Bolero City Pikup">Mahindra Bolero City Pikup</option>

                                                                                        
                                        </select>                        
                                   </div>
                            </div>
                                </div>

                                <div class="input_load">
                                   <div class=" select_style">
                                   <div class="hover_category">
                                        <select class="in_sel_txt" name="place" required>
                                            <option value="" selected>Place </option>
                                            <option value="Kottayam">Kottayam </option>
                                            <option value="Thodupuzha">Thodupuzha </option>
                                            <option value="Kattappana">Kattappana </option>

                                                                                        
                                        </select>                        
                                   </div>
                            </div>
                                </div>


                                <div class="input_load">
                                	<input type="hidden" name="esource" value="<?php echo $source;?>">
                                    <input value="Check Now" type="submit" name="checknowemi">
                                </div>

                            </div>

                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>



        <div class="modal fade popsec onload_pop" id="myModal3">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">

                    <div class="modal-body">
                        <button type="button" class="btn-close pop_button" data-dismiss="modal" aria-label="Close"></button>
                        <div class="privacy_onload">

                            <div class="pop-privacy-box">

                                <h4>Privacy Policy</h4>

                                <p>This privacy policy applies to the website( horizonmahindra.com ). We may collect personal information such as your name, address, phone number and email address. We use this information to offer services, deliver services on your request and inform you about events and promotions. We use "cookies" to personalize your online experience. We secure the personal information you provide.</p>

                                <h4>Cookies Policy</h4>

                                <p>We use cookies to improve your experience of our website and to analyze performance and traffic in our website.</p>

                            </div>

                        </div>    
                        
                    </div>

                </div>
            </div>
</div>

 <!-- START Bootstrap-Cookie-Alert -->
<div class="alert text-center cookiealert" role="alert">
    <b>Do you like cookies?</b> &#x1F36A; 

    <button type="button" class="btn btn-primary btn-sm acceptcookies">
        I agree
    </button>
</div>
<!-- END Bootstrap-Cookie-Alert -->






<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="js/bootstrap.js"></script>
 	
<script src="js/owl.js"></script>
<script src="js/script.js"></script>	

<script src="js/niceselect.js"></script>
<script src="js/niceselect-custom.js"></script>
<script src="js/slick.min.js"></script> 
<script src="js/custom.js"></script>
<script src="js/cookiealert.js"></script>

<script src="plugins/fancybox/jquery.fancybox.min.js"></script>

 <!-- REVOLUTION JS FILES -->
  <script type="text/javascript" src="rev-slider/revolution/js/jquery.themepunch.tools.min.js"></script>
  <script type="text/javascript" src="rev-slider/revolution/js/jquery.themepunch.revolution.min.js"></script>
  
  <script type="text/javascript" src="rev-slider/revolution/js/extensions/revolution.extension.actions.min.js"></script>
  <script type="text/javascript" src="rev-slider/revolution/js/extensions/revolution.extension.carousel.min.js"></script>
  <script type="text/javascript" src="rev-slider/revolution/js/extensions/revolution.extension.kenburn.min.js"></script>
  <script type="text/javascript" src="rev-slider/revolution/js/extensions/revolution.extension.layeranimation.min.js"></script>
  <script type="text/javascript" src="rev-slider/revolution/js/extensions/revolution.extension.navigation.min.js"></script>
  <script type="text/javascript" src="rev-slider/revolution/js/extensions/revolution.extension.parallax.min.js"></script>
  <script type="text/javascript" src="rev-slider/revolution/js/extensions/revolution.extension.slideanims.min.js"></script>
  <script type="text/javascript" src="rev-slider/revolution/js/extensions/revolution.extension.video.min.js"></script>

<script type="text/javascript">
    var tpj=jQuery;
    
    var revapi1078;
    tpj(document).ready(function() {
      if(tpj("#rev_slider_1078_1").revolution == undefined){
        revslider_showDoubleJqueryError("#rev_slider_1078_1");
      }else{
        revapi1078 = tpj("#rev_slider_1078_1").show().revolution({
          sliderType:"standard",
jsFileLocation:"revolution/js/",
          sliderLayout:"",
          dottedOverlay:"none",
          delay:3000,
          navigation: {
            keyboardNavigation:"off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation:"off",
            mouseScrollReverse:"default",
            onHoverStop:"off",
            touch:{
              touchenabled:"on",
              swipe_threshold: 75,
              swipe_min_touches: 1,
              swipe_direction: "horizontal",
              drag_block_vertical: false
            }
            ,
            arrows: {
              style:"metis",
              enable:true,
              hide_onmobile:true,
              hide_under:600,
              hide_onleave:true,
              hide_delay:200,
              hide_delay_mobile:1200,
              //tmp:'<div class="tp-title-wrap">    <div class="tp-arr-imgholder"></div> </div>',
              left: {
                h_align:"left",
                v_align:"center",
                h_offset:30,
                v_offset:0
              },
              right: {
                h_align:"right",
                v_align:"center",
                h_offset:30,
                v_offset:0
              }
            }
            ,
            bullets: {
              style: 'hades',
              tmp: '<span class="tp-bullet-image"></span>',
              enable:false,
              hide_onmobile:true,
              hide_under:600,
              //style:"metis",
              hide_onleave:true,
              hide_delay:200,
              hide_delay_mobile:1200,
              direction:"horizontal",
              h_align:"center",
              v_align:"bottom",
              h_offset:0,
              v_offset:30,
              space:5,
              //tmp:'<span class="tp-bullet-img-wrap">  <span class="tp-bullet-image"></span></span><span class="tp-bullet-title">{{title}}</span>'
            }
          },
          viewPort: {
            enable:true,
            outof:"pause",
            visible_area:"80%",
            presize:false
          },
          responsiveLevels:[1240,1024,778,480],
          visibilityLevels:[1240,1024,778,480],
          gridwidth:[1920,1600,1400,1200],
          gridheight:[750,650,550,500],
          lazyType:"none",
          parallax: {
            type:"mouse",
            origo:"slidercenter",
            speed:2000,
            levels:[2,3,4,5,6,7,12,16,10,50,47,48,49,50,51,55],
            type:"mouse",
          },
          shadow:0,
          spinner: 'spinner2',
          stopLoop:"off",
          stopAfterLoops:-1,
          stopAtSlide:-1,
          shuffle:"off",
          autoHeight:"off",
          hideThumbsOnMobile:"off",
          hideSliderAtLimit:0,
          hideCaptionAtLimit:0,
          hideAllCaptionAtLilmit:0,
          debugMode:false,
          fallbacks: {
            simplifyAll:"off",
            nextSlideOnWindowFocus:"off",
            disableFocusListener:false,
          }
        });
      }
    }); /*ready*/
  </script>  	
  
  
  <script type="text/javascript">
  $(document).click(function(){
    $("#myModal").modal2('show');
  });
</script>


        <script type="text/javascript">
            $(document).ready(function() {
                setTimeout(function() {
                    $("#myModal2").modal('show');
                }, 7000);
            });
        </script>



</body>


</html>
