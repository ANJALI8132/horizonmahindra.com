<?php
if(isset($_POST['submit']) and !empty($_POST['submit'])){
    $ename=$_POST['name'];
    $ephone=$_POST['phone'];
    $email=$_POST['email'];
    $message=$_POST['model'];

    $mail1_subject="Horizon Service Enquiry from Google Ads - " . $ename;
    $mail1_txt="Name :" . $ename . "<br>" . "Mobile :" . $ephone . "<br>" . "E-Mail :" . $email . "<br>" . "Location :" . $message . "<br>";


    // Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <info@horizonmahindra.com>' . "\r\n";

    $complete=mail("viralmafiacs2@gmail.com, cyril.viralmafia@gmail.com, crm.ktm@horizonmahindra.com, leads.viralmafia@gmail.com",$mail1_subject,$mail1_txt, $headers);

    if($complete){
        header("location:sucess/index.html");
    }
}


if(isset($_POST['checknow']) and !empty($_POST['checknow'])){
    $name=$_POST['name'];
    $email=$_POST['email'];
    $phone=$_POST['phone'];
    $model=$_POST['model'];

    $mail1_subject="Horizon Service Enquiry from Google Ads - " . $phone3;
    $mail1_txt="Name :" . $name . "<br>" . "E-Mail :" . $email . "<br>" . "Mobile :" . $phone . "<br>" . "Location :" . $model . "<br>";

    // Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <info@horizonmahindra.com>' . "\r\n";

    $complete=mail("viralmafiacs2@gmail.com, cyril.viralmafia@gmail.com, crm.ktm@horizonmahindra.com, leads.viralmafia@gmail.com",$mail1_subject,$mail1_txt, $headers);

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
    <meta name="description" content="">
    <meta name="keywords" content="">
    <link rel="shortcut icon" href="images/fav.png">
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/font-awesome.css">
    <link rel="stylesheet" href="css/fontawesome-all.css">
    <link rel="stylesheet" href="css/linea-arrows.css">
    <link rel="stylesheet" href="css/custom.css">
    <link rel="stylesheet" href="css/animate.css">
    <link rel="stylesheet" href="css/niecelesect.css"> 
    <link rel="stylesheet" href="css/slick.css">
    
    <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WRTHJB5');</script>
<!-- End Google Tag Manager -->
	
</head>

<body>

    <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WRTHJB5"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
  
 <div class="body_wraper">

<section>
<div class="header_sec">
<div class="header_fixed">
<div class="container">
<div class="top_headerleft">
<div class="header_logo">
<a href="#"><img src="images/logo.svg"></a>
</div>
<!--
<div class="header_contact">
<ul>
<li class="li_phone "><i class="fas fa-headphones blink"></i>
<a href="tel:+919847522722"> +91 9847 522 722 </a></li>
</ul>
</div>
-->
</div>
<div class="top_header_right">
<div class="mahendra_logo"><img src="images/mahindra-logo.svg"></div>
</div>
</div>
</div>
</div>
</section>
     
<section>
<div class="banner_sec" id="top-enquiry">
<div class="container">
<div class="row">
<div class="col-lg-7 align_items_center">
<div class="bnr_cap">
<h3>Exclusive & Quality Services <br> Just For <span>Mahindra Owners!</span></h3>  
<div class="scroll_down"><a href="#service_id" class="theme_btn">VIEW LATEST OFFERS!</a></div> 
</div>    
</div> 
<div class="col-lg-5">
<div class="top_formsec">
<div class="fomouter">
    <h4>SERVICE ENQUIRY</h4>
<form name="form1" method="post" action="#">
<div class="input_sec">
<input placeholder="Name" type="text" name="name" required>   
</div>  
<div class="input_sec">
<input placeholder="Phone" type="number" name="phone" required>   
</div>  
<div class="input_sec">
<input placeholder="Email" type="email" name="email">   
</div>  
<div class="input_sec">
<div class=" select_style">
                                   <div class="hover_category">
                                    <!--
                                        <select class="select_option" name="model" required>
                                            <option value="" selected>Select Model </option>
                                            <option value="Mahindra Alturas G4">Mahindra Alturas G4</option>                                              
                                            <option value="Mahindra BMT">Mahindra BMT</option>
                                            <option value="Mahindra Bolero - 2.5 lt">Mahindra Bolero - 2.5 lt</option>                        
                                            <option value="Mahindra Bolero B6">Mahindra Bolero B6 </option>
                                            <option value="Mahindra Bolero Pikup 1.5L">Mahindra Bolero Pikup 1.5L</option>
                                            <option value="Mahindra Bolero Pikup 1.7L">Mahindra Bolero Pikup 1.7L </option>
                                            <option value="Mahindra Bolero Pikup Camper">Mahindra Bolero Pikup Camper</option>
                                            <option value="Mahindra Imperio">Mahindra Imperio</option>                        
                                            <option value="Mahindra KUV100 NXT">Mahindra KUV100 NXT</option>                        
                                            <option value="Mahindra Marazzo">Mahindra Marazzo</option>                         
                                            <option value="Mahindra TUV300 Plus">Mahindra TUV300 Plus</option>                                              
                                            <option value="Mahindra TUV300">Mahindra TUV300</option>                         
                                            <option value="Mahindra XUV 3OO">Mahindra XUV 3OO</option>                        
                                            <option value="Mahindra XUV500 (Old)">Mahindra XUV500 (Old)</option>                                              
                                            <option value="Mahindra XUV500">Mahindra XUV500</option>
   											
                                            											
                                        </select>   
                                    --> 
                                        <select class="select_option" name="model" required>
                                            <option value="" selected>Select Location </option>
                                            <option value="Kottayam">Kottayam</option>                                              
                                            <option value="Thodupuzha">Thodupuzha</option>
                                            <option value="Kattappana">Kattappana</option>                  
                                        </select>                    
                                   </div>
                            </div>
</div>  
<div class="input_sec">
<input type="submit" value="Submit" name="submit">   
</div>  
</form>   
</div>   
</div>    
</div> 
    
</div>    
</div>    
</div>     
</section>
     
<section>
<div class="secvicesec" id="service_id">
<div class="container">
<div class="home_comen_title">
    <h3><span>EXCLUSIVE LIMITED TIME OFFER</span> JUST FOR <br>MAHINDRA CUSTOMERS! </h3>
    <p>We pride ourselves on having highly skilled, knowledgeable, and polite staff who are trained to give you the best possible Mahindra car service.</p>
</div>  
</div>    

<div class="service_box_outer">
<div class="service_box_img sevbg_1"></div>  
<div class="service_box_content ">
    <div class="srbox_cntmagn">
    <h4>Avail Our Fantastic Offer <br> <span>@ Just Rs.555!</span></h4>
    <ul class="bult_sec">
    <li>25 Point Check-Up</li>    
    <li>Sanitization & Fumigation</li>    
    <li>AC Performance Checking</li>    
    <li>Top Wash</li>    
    <li>Vehicle Evaluation</li>      
    </ul>
    <h4>Added <span>Benefits!</span></h4>
    <ul class="bult_sec">
    <li>20% Discount For VAS (Maxicare)</li>      
    <li>Combo Offer (Select Any 3 Maxicare & Get 25% Discount)</li>      
    <li>10% Labour Discount For All Other Service Work</li>      
    <li>5% Special Discount For Spare Parts</li>      
    <li>Special Discount For Tyre & Battery</li>      
    <li>Special Scheme For Full Body Painting</li>      
    </ul>
     <div class="scroll_down"><a href="#top-enquiry" class="theme_btn">Book Now</a></div> 
    </div>
</div>  
</div>
<!--
<div class="service_box_outer row_reverse_item">
<div class="service_box_img sevbg_2"></div>  
<div class="service_box_content">
    <div class="srbox_cntmagn">
    <h4>Added <span>Benefits!</span></h4>
    <ul class="bult_sec">
    <li>20% Discount For VAS (Maxicare)</li>      
    <li>Combo Offer (Select Any 3 Maxicare & Get 25% Discount)</li>      
    <li>10% Labour Discount For All Other Service Work</li>      
    <li>5% Special Discount For Spare Parts</li>      
    <li>Special Discount For Tyre & Battery</li>      
    <li>Special Scheme For Full Body Painting</li>      
    </ul>
     <div class="scroll_down"><a href="#top-enquiry" class="theme_btn">Book Now</a></div> 
    </div>
</div>  
</div>
-->
</div>     
</section>     
     
<section>
<div class="why_choseus">
<div class="container">
<div class="row">
<div class="col-12">
<div class="home_comen_title">
    <h3>WHY <span>CHOOSE US </span></h3>
</div>      
</div>  
<div class="col-lg-3 col-sm-6 display_flex">
<div class="whychoose_box">
<div class="whychoose_box_in">
<div class="whybox_img">
<img src="images/why-us1.png"> 
</div>    
<h5>Professional & Courteous Staff</h5>
</div>   
</div>   
</div>
    
<div class="col-lg-3 col-sm-6 display_flex">
<div class="whychoose_box">
<div class="whychoose_box_in">
<div class="whybox_img">
<img src="images/why-us2.png"> 
</div>    
<h5>Superlative Service & Repair</h5>
</div>   
</div>   
</div>
    
<div class="col-lg-3 col-sm-6 display_flex">
<div class="whychoose_box">
<div class="whychoose_box_in">
<div class="whybox_img">
<img src="images/why-us3.png"> 
</div>    
<h5>Genuine Parts</h5>
</div>   
</div>   
</div>
    
<div class="col-lg-3 col-sm-6 display_flex">
<div class="whychoose_box">
<div class="whychoose_box_in">
<div class="whybox_img">
<img src="images/why-us4.png"> 
</div>    
<h5>Competitive Service Costs</h5>
</div>   
</div>   
</div>
    
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
                    <p>Highly recommend Horizon Motors Kottayam for periodic maintenance of your Mahindra vehicle as they do a wonderful job. The team is very polite and helpful and the quality of work is very nice! My reliable Mahindra XUV500 is proof of that!</p>  
                              <h6 >Ankita Nair  </h6>
                          </div>
                                    
                                </div>
                            </div>
                            
                            <div class="item ">
                                <div class="testimonial_item_two">
                          <div class="tes_para">
                              <div class="tesicondiv">
                               <img class="" src="images/tes.svg" alt="">
                              </div>
                    <p>The first thing that struck me was the clean atmosphere at Kottayam Horizon Motors and the strict following of sanitisation methods. I would like to thank Mr. Rojo for his courteous and transparent nature when advising the service.</p>   <h6 >Joy Mathew  </h6>      
                          </div>
                                    
                                </div>
                            </div>
            <div class="item ">
                                <div class="testimonial_item_two">
                          <div class="tes_para">
                              <div class="tesicondiv">
                               <img class="" src="images/tes.svg" alt="">
                              </div>
                    <p>Got my Mahindra TUV300 serviced at Horizon Motors Kottayam. Excellent work and supportive staff. Special thanks to Mr. Noble for the personal attention! And yes, they also follow sanitisation procedures before entering the office!</p>   
                              <h6 > Anand T  </h6>
                          </div>
                                    
                                </div>
                            </div>
                            
                          
                   <div class="item ">
                                <div class="testimonial_item_two">
                          <div class="tes_para">
                              <div class="tesicondiv">
                               <img class="" src="images/tes.svg" alt="">
                              </div>
                    <p>I had gone to Horizon Motors Kottayam for servicing my Mahindra SUV and was very impressed with the service and customer care, especially by adviser Mr. Rojo.</p> 
                              <h6 > Priya M Rao </h6>
                          </div>
                                    
                                </div>
                            </div>
                
                            <div class="item ">
                                <div class="testimonial_item_two">
                          <div class="tes_para">
                              <div class="tesicondiv">
                               <img class="" src="images/tes.svg" alt="">
                              </div>
                    <p>Did the 60k service for my Scorpio at Horizon Motors Kottayam and was happy as always with their genuine nature and trustworthy service. During this COVID-19 situation, the entire premises are also regularly disinfected and the staff also follow strict guidelines.</p>     <h6 >Jacob  </h6>    
                          </div>
  
                                </div>
                            </div>
                            
                            <div class="item ">
                                <div class="testimonial_item_two">
                          <div class="tes_para">
                              <div class="tesicondiv">
                               <img class="" src="images/tes.svg" alt="">
                              </div>
                    <p>Super happy with the service of my XUV500 at Horizon Motors Kottayam. Definitely recommend!</p>   
                              <h6 >Joseph  </h6>
                          </div>
                                    
                                </div>
                            </div>
      
                        </div>
                    </div>
                </div>
            </section>  

<section>
<div class="about_marina_motoors">
<div class="container">
<div class="row">
<div class="col-md-12">
<div class="home_comen_title">
<h3>The <span>Horizon Motors</span> </h3>
<p>Welcome to Horizon Motors, the phenomenal home of Motor cars of Mahindra – The golden symbol of pride and trust and the prominent Mahindra Showroom . A Flawless reputation for quality and product business sense has made Horizon Motors the top Mahindra Showroom Kottayam and a name to reckon with in the automobile industry in Kerala.
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
<p>As one of the exclusive Kottayam Mahindra Showroom, Horizon Motors is committed to provide you the best deal on every authorized Mahindra passenger models that has helped us exceed customer expectation and lead as the top Mahindra car Showroom in Kottayam.</p>
<p>Regarding the core values of this world-class Mahindra Showroom in Kottayam honesty, transparency and integrity upholds our business values and we are passionate about maintaining a Win to Win relationship with our customers. Being the only Mahindra dealer in Kottayam and Idukki , we believe in continual improvement in every aspect of our operations to achieve better work quality and world class standard. We look forward to serve you in the near future and we invite you to visit us and experience the difference by yourself.</p>
<!--<p>Apart from Kottayam, horizon motors is expanded to various districts across Kerala. At present, we are the leading Mahindra Car Dealer in Kottayam and idukki.</p>-->
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
<h3> <span>AVAIL SERVICES WORTH RS. 2500 FOR JUST RS. 555 !!! </span> HURRY! LIMITED TIME MONSOON BONANZA OFFER FROM HORIZON MOTORS!</h3>
<div class="center_phone"><a href="tel:+919847522722"><i class="fas fa-headphones"></i>  +91 9847 522 722</a></div>
<div class="center_reg scroll_down"><a class="theme_btn" href="#top-enquiry" data-toggle="modal" data-target="#myModal">BOOK YOUR SERVICE NOW!</a></div>
</div>
</div>
</div>
</section>  
     

     <section>
<div class="footer_sec">
<div class="container">
<div class="row">

<div class="col-lg-12">
<div class="footer_contact">
<div class="footer_title">
<h4>Contact Us</h4>
</div>
</div>
</div>
    
<div class="col-lg-4">
<div class="footer_contact">
<ul>
<li><span><i class="fas fa-map-marker-alt"></i> Address</span> 
11/223-A Opp. Poly Technic college Nattakam P.O, <br>Kottayam, Kerala - 686013</li>
<li><span><i class="fas fa-phone"></i> Phone</span>+91 9847 522 722</li>
<li class="for_email"><span><i class="fas fa-envelope"></i> E-Mail</span>crm.ktm@horizonmahindra.com</li>
</ul>
</div>
</div>

<div class="col-lg-4">
<div class="footer_contact">
<ul>
<li><span><i class="fas fa-map-marker-alt"></i> Address</span> 
VI/335 B Mariyil Kalungu, Idukki Road Olamattom, <br>Thodupuzha Idukki, Pin- 685584</li>
<li><span><i class="fas fa-phone"></i> Phone</span>+91 9544 233 733</li>
<li class="for_email"><span><i class="fas fa-envelope"></i> E-Mail</span>crm.ktm@horizonmahindra.com</li>
</ul>
</div>
</div>

<div class="col-lg-4">
<div class="footer_contact">
<ul>
<li><span><i class="fas fa-map-marker-alt"></i> Address</span> 
29/116, Govt. College Road, <br> Kattappana P.O, <br> Kattappana - 685508</li>
<li><span><i class="fas fa-phone"></i> Phone</span>+91 9562 944 744</li>
<li class="for_email"><span><i class="fas fa-envelope"></i> E-Mail</span>crm.ktm@horizonmahindra.com</li>
</ul>
</div>
</div>


<!--

    <div class="col-lg-3">
<div class="footer_contact">

<ul>
<li><span><i class="fas fa-phone"></i> Phone</span>+91 9847 522 722</li>
</ul>
</div>
</div>
    
 <div class="col-lg-3">
<div class="footer_contact">
<ul>
<li class="for_email"><span><i class="fas fa-envelope"></i> E-Mail</span>crm.ktm@horizonmahindra.com</li>
</ul>
</div>
</div>

-->

</div>
</div>
<div class="copy_rightsec">
<div class="container">
<p>© Copyright 2020 Horizon Motors India Pvt Ltd. All Rights Reserved. Designed by <a target="_blank" href="http://www.theviralmafia.com/?utm_source=horizon"><img src="images/viralmafia.png"></a></p>
</div>
</div>
</div>
</section>

     
      <!--<a title="WhatsApp" target="_blank"
 href="https://api.whatsapp.com/send?phone=919847522722" class="whatsapp_icon"><i class="fab fa-whatsapp"></i></a>-->
 
 	 <!--<a title="Call Now" target="_blank"
 href="tel:+919847522722" class="call_iconbtn"><i class="fa fa-phone" aria-hidden="true"></i></a>-->
 

 <div class="totop " >
 <span title="Top"><i class="fa fa-angle-up" aria-hidden="true"></i></span>
 </div>


 </div> <!-- bodywrapper -->
    
      <div class="modal fade popsec onload_pop" id="myModal2">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">

                    <div class="modal-body">
                        <button type="button" class="close" data-dismiss="modal"><i class="fa fa-times" aria-hidden="true"></i></button>
                        <div class="onload_left ">

                            <h3>SERVICE <span>ENQUIRY</span></h3>

                        </div>
                        <div class="onload_right">
                            <form name="form3" method="post" action="#">
                                 <div class="input_load">
                                    <input placeholder="Name" name="name" type="text" required>
                                </div>
                                
                                 <div class="input_load">
                                    <input placeholder="Email" name="email" type="email">
                                </div>
                                
                                 <div class="input_load">
                                    <input placeholder="Phone" name="phone" type="number" required>
                                </div>
                                
                                 <div class="input_load">
                                   <div class=" select_style">
                                   <div class="hover_category">
                                        <!--
                                        <select class="select_option" name="model" required>
                                            <option value="" selected>Select Model </option>
                                            <option value="Mahindra Alturas G4">Mahindra Alturas G4</option>                                              
                                            <option value="Mahindra BMT">Mahindra BMT</option>
                                            <option value="Mahindra Bolero - 2.5 lt">Mahindra Bolero - 2.5 lt</option>                        
                                            <option value="Mahindra Bolero B6">Mahindra Bolero B6 </option>
                                            <option value="Mahindra Bolero Pikup 1.5L">Mahindra Bolero Pikup 1.5L</option>
                                            <option value="Mahindra Bolero Pikup 1.7L">Mahindra Bolero Pikup 1.7L </option>
                                            <option value="Mahindra Bolero Pikup Camper">Mahindra Bolero Pikup Camper</option>
                                            <option value="Mahindra Imperio">Mahindra Imperio</option>                        
                                            <option value="Mahindra KUV100 NXT">Mahindra KUV100 NXT</option>                        
                                            <option value="Mahindra Marazzo">Mahindra Marazzo</option>                         
                                            <option value="Mahindra TUV300 Plus">Mahindra TUV300 Plus</option>                                              
                                            <option value="Mahindra TUV300">Mahindra TUV300</option>                         
                                            <option value="Mahindra XUV 3OO">Mahindra XUV 3OO</option>                        
                                            <option value="Mahindra XUV500 (Old)">Mahindra XUV500 (Old)</option>                                              
                                            <option value="Mahindra XUV500">Mahindra XUV500</option>   									
                                        </select>   
                                        -->

                                        <select class="select_option" name="model" required>
                                            <option value="" selected>Select Location </option>
                                            <option value="Kottayam">Kottayam</option>                                              
                                            <option value="Thodupuzha">Thodupuzha</option>
                                            <option value="Kattappana">Kattappana</option>                  
                                        </select>

                                   </div>
                            </div>
                                </div>
                                

                                <div class="input_load">
                                    <input value="Submit" type="submit" name="checknow">
                                </div>

                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>

 


<script src="js/jquery-1.12.4.min.js"></script>
<script src="js/bootstrap.js"></script>
    <script type="text/javascript">
            $(document).ready(function() {
                setTimeout(function() {
                    $("#myModal2").modal('show');
                }, 15000);
            });
        </script>
<script src="js/jquery.easing.min.js"></script>
<script src="js/totop.js"></script>
<script src="js/niceselect.js"></script>
<script src="js/niceselect-custom.js"></script>
<script src="js/slick.min.js"></script>	
<script src="js/custom.js"></script>
<script>
$('.scroll_down a').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 40
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});    
</script> 
 <script>
        $('.totop').tottTop({
            scrollTop: 100
        });
    </script>
</body>

</html>