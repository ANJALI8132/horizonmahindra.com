<?php
error_reporting(0);
$source='';
$source=$_GET['utm_source'];
$medium='';
$medium=$_GET['utm_medium'];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>XUV 700</title>
    <link rel="stylesheet" href="assets/css/bootstrap.css">
    <link rel="stylesheet" href="assets/css/icofont.min.css">
    <link rel="stylesheet" href="assets/css/owl.carousel.min.css">
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/responsive.css">
    <link rel="stylesheet" href="assets/css/cookiealert.css">
    

    <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5BQLM3X');</script>
<!-- End Google Tag Manager -->


<!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/615c402125797d7a89026522/1fh85l1c8';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script-->

</head>
<body>

    <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5BQLM3X"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

    
    <div class="all-area">
        <!-- Header area -->
        <header class="header-area">
            <nav class="navbar navbar-expand-lg fixed-top main-header-area">
                <div class="container">
                    <a href="index.html" class="navbar-brand">
                        <img src="assets/images/logos/mahindra.png" alt="">
                    </a>
                    <a href="index.html" class="navbar-brand">
                        <img src="assets/images/logos/horizon-logo.png" alt="">
                    </a>
                    <div class="book-btn">
                        <a href="#" class="nav-link btn" data-toggle="modal" data-target="#exampleModalCenter">Book Now</a>
                    </div>
                </div>
            </nav>
        </header>
        
        <!-- Banner section -->
        <section class="hero">
            <div class="container">
                <div class="row">
                    <div class="col-md-7 col-lg-7 col-12 col-sm-12">
                        <div class="hero-text">
                            <div class="hero-logo">
                                <img src="assets/images/logos/xuv700.png" alt="">
                            </div>
                            <div class="hero-head">
                                <h2>Experience A <span>Rush like Never Before</span></h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5 col-lg-5 col-12 col-sm-12">
                        <div class="hero-img">
                            <img src="assets/images/bg/banner-xuv.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Quick Enq Form section -->
        <div class="banner-form">
            <div class="container">
                <div class="enq-form">
                    <div class="form-box">
                        <div class="form-head">
                            <h2>Enquire Now</h2>
                        </div>
                        <form name="form1" method="post" action="email.php">
                            <div class="row">
                                <div class="col-md-6 col-lg-6 form-grp">
                                    <input type="text" placeholder="Name" class="form-control inp" name="name" required>
                                </div>
                                <div class="col-md-6 col-lg-6 form-grp">
                                    <input type="number" placeholder="Mobile No" class="form-control inp" name="phone" required>
                                </div>
                                <div class="col-md-6 col-lg-6 form-grp">
                                    <input type="email" placeholder="Email Id" class="form-control inp" name="email" required>
                                </div>
                                <div class="col-md-6 col-lg-6 form-grp">
                                    <input type="hidden" name="esource" value="<?php echo $source;?>">
                                    <input type="hidden" name="emedium" value="<?php echo $medium;?>">
                                    <button type="submit" class="btn btn-bordered submit-form" value="Submit" name="submit">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <!-- New Era area -->
        <section class="new-era section d-flex align-items-center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="era-area">
                            <div class="era-head">
                                <h2>A New Era <br> of <span>Execellence</span></h2>
                            </div>
                            <div class="era-para">
                                <p>With its Sci-Fi Technology, Spirited Performance and World-Class Safety, this powerhouse of an SUV is obsessively engineered to dial up adrenaline like never before.</p>
                            </div>
                            <div class="book-btn book-btn2">
                                <a href="#" data-toggle="modal" data-target="#exampleModalCenter">Book Now</a>
                            </div>
                            <div class="era-img">
                                <img src="assets/images/bg/era-xuv.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- adrenox area -->
        <section class="adrenox-area section">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="adrenox-head">
                            <h2><span>Adrenox</span> | the intelligence that elevates your senses</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="adrenox-slider owl-carousel">
                            <div class="single-adrenox">
                                <div class="adrenox-img">
                                    <img src="assets/images/interior/01.jpg" alt="">
                                </div>
                                <div class="adrenox-content">
                                    <div class="count">
                                        <img src="assets/images/enquiry-icons/01.png" alt="">
                                    </div>
                                    <div class="text">
                                        <h3>Integrated Dual HD Superscreen</h3>
                                    </div>
                                </div>
                            </div>

                            <div class="single-adrenox">
                                <div class="adrenox-img">
                                    <img src="assets/images/interior/02.jpg" alt="">
                                </div>
                                <div class="adrenox-content">
                                    <div class="count">
                                        <img src="assets/images/enquiry-icons/02.png" alt="">
                                    </div>
                                    <div class="text">
                                        <h3>Immersive 3D Sound Technology.</h3>
                                    </div>
                                </div>
                            </div>

                            <div class="single-adrenox">
                                <div class="adrenox-img">
                                    <img src="assets/images/interior/03.jpg" alt="">
                                </div>
                                <div class="adrenox-content">
                                    <div class="count">
                                        <img src="assets/images/enquiry-icons/03.png" alt="">
                                    </div>
                                    <div class="text">
                                        <h3>AdrenoX Connect App.</h3>
                                    </div>
                                </div>
                            </div>

                            <div class="single-adrenox">
                                <div class="adrenox-img">
                                    <img src="assets/images/interior/04.jpg" alt="">
                                </div>
                                <div class="adrenox-content">
                                    <div class="count">
                                        <img src="assets/images/enquiry-icons/04.png" alt="">
                                    </div>
                                    <div class="text">
                                        <h3>Intuitive Drive Modes.</h3>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 text-center">
                        <div class="adrenox-btn">
                            <a href="#" data-toggle="modal" data-target="#exampleModalCenter">Enquire Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Highlights Area -->
        <section class="highlight-area">
            <div class="highlight-slider owl-carousel">
                <div class="single-highlight">
                    <div class="highlight-img highlight-img1">
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <div class="highlight-content">
                                        <div class="key-content">
                                            <h3>Key Highlights</h3>
                                        </div>
                                        <div class="highlight-name">
                                            <h1>Clear-view LED Headlamps</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="single-highlight">
                    <div class="highlight-img highlight-img2">
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <div class="highlight-content">
                                        <div class="key-content">
                                            <h3>Key Highlights</h3>
                                        </div>
                                        <div class="highlight-name">
                                            <h1>Diamond Cut Alloy Wheels</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="single-highlight">
                    <div class="highlight-img highlight-img3">
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <div class="highlight-content">
                                        <div class="key-content">
                                            <h3>Key Highlights</h3>
                                        </div>
                                        <div class="highlight-name">
                                            <h1>Skyroof</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <!-- Variants -->
        <section class="variants-area section">
            <div class="variants-details">
                <div class="variant-slider owl-carousel">

                    <div class="single-variant">
                        <div class="variant-head">
                            <h2>XUV 700 New Model 2021 Price</h2>
                        </div>
                        <div class="variant-text">
                            <div class="variant-text-head">
                                <div class="head-name">
                                    <h2>XUV 700 MX Petrol </h2>
                                </div>
                                <div class="head-price">
                                    <h4>Starting at <span>₹12,49,001</span></h4>
                                </div>
                            </div>
                            <div class="variant-sub-text">
                                <div class="transmission">
                                    <h4>Transmission</h4>
                                    <p>Manual</p>
                                </div>
                                <div class="seating">
                                    <h4>Seating Capacity</h4>
                                    <p>5</p>
                                </div>
                                <div class="features">
                                    <h4>Key Features</h4>
                                    <p>20.32 cm (8") Infotainment</p>
                                    <p>17.78 cm (7") Cluster</p>
                                    <p>Smart Door handles</p>
                                </div>
                            </div>
                            <div class="variant-foot">
                                <p>*Stay tuned as the excitment continues. More variants to be announced soon. <br> *Mahindra XUV 700 On-road Price in Kerala <br>*XUV 700 Latest News - Mahindra XUV 700 2021 - Booking for New Mahindra XUV 700 opens on 7th October, 10 am. Own the Pride!</p>
                            </div>
                        </div>
                    </div>

                    <div class="single-variant">
                        <div class="variant-head">
                            <h2>XUV 700 New Model 2021 Price</h2>
                        </div>
                        <div class="variant-text">
                            <div class="variant-text-head">
                                <div class="head-name">
                                    <h2>XUV 700 MX Diesel</h2>
                                </div>
                                <div class="head-price">
                                    <h4>Starting at <span>₹12,99,000</span></h4>
                                </div>
                            </div>
                            <div class="variant-sub-text">
                                <div class="transmission">
                                    <h4>Transmission</h4>
                                    <p>Manual</p>
                                </div>
                                <div class="seating">
                                    <h4>Seating Capacity</h4>
                                    <p>5</p>
                                </div>
                                <div class="features">
                                    <h4>Key Features</h4>
                                    <p>20.32 cm (8") Infotainment</p>
                                    <p>17.78 cm (7") Cluster</p>
                                    <p>Smart Door handles</p>
                                </div>
                            </div>
                            <div class="variant-foot">
                                <p>*Stay tuned as the excitment continues. More variants to be announced soon. <br> *Mahindra XUV 700 On-road Price in Kerala <br>*XUV 700 Latest News - Mahindra XUV 700 2021 - Booking for New Mahindra XUV 700 opens on 7th October, 10 am. Own the Pride!</p>
                            </div>
                        </div>
                    </div>

                    <div class="single-variant">
                        <div class="variant-head">
                            <h2>XUV 700 New Model 2021 Price</h2>
                        </div>
                        <div class="variant-text">
                            <div class="variant-text-head">
                                <div class="head-name">
                                    <h2>XUV 700 AX3 Petrol</h2>
                                </div>
                                <div class="head-price">
                                    <h4>Starting at <span>₹14,49,000</span></h4>
                                </div>
                            </div>
                            <div class="variant-sub-text">
                                <div class="transmission">
                                    <h4>Transmission</h4>
                                    <p>Manual</p>
                                </div>
                                <div class="seating">
                                    <h4>Seating Capacity</h4>
                                    <p>5</p>
                                </div>
                                <div class="features">
                                    <h4>Key Features</h4>
                                    <p>10.25" Superscreen</p>
                                    <p>Amazon Alexa Built-In</p>
                                    <p>Wireless Andriod Auto & Apple CarPlay</p>
                                    <p>AdrenoX Connnected</p>
                                </div>
                            </div>
                            <div class="variant-foot">
                                <p>*Stay tuned as the excitment continues. More variants to be announced soon. <br> *Mahindra XUV 700 On-road Price in Kerala <br>*XUV 700 Latest News - Mahindra XUV 700 2021 - Booking for New Mahindra XUV 700 opens on 7th October, 10 am. Own the Pride!</p>
                            </div>
                        </div>
                    </div>

                    <div class="single-variant">
                        <div class="variant-head">
                            <h2>XUV 700 New Model 2021 Price</h2>
                        </div>
                        <div class="variant-text">
                            <div class="variant-text-head">
                                <div class="head-name">
                                    <h2>XUV 700 AX3 Diesel </h2>
                                </div>
                                <div class="head-price">
                                    <h4>Starting at <span>₹14,99,001</span></h4>
                                </div>
                            </div>
                            <div class="variant-sub-text">
                                <div class="transmission">
                                    <h4>Transmission</h4>
                                    <p>Manual</p>
                                </div>
                                <div class="seating">
                                    <h4>Seating Capacity</h4>
                                    <p>5</p>
                                </div>
                                <div class="features">
                                    <h4>Key Features</h4>
                                    <p>10.25" Superscreen</p>
                                    <p>Amazon Alexa Built-In</p>
                                    <p>Wireless Andriod Auto & Apple CarPlay</p>
                                    <p>AdrenoX Connnected</p>
                                </div>
                            </div>
                            <div class="variant-foot">
                                <p>*Stay tuned as the excitment continues. More variants to be announced soon. <br> *Mahindra XUV 700 On-road Price in Kerala <br>*XUV 700 Latest News - Mahindra XUV 700 2021 - Booking for New Mahindra XUV 700 opens on 7th October, 10 am. Own the Pride!</p>
                            </div>
                        </div>
                    </div>

                    <div class="single-variant">
                        <div class="variant-head">
                            <h2>XUV 700 New Model 2021 Price</h2>
                        </div>
                        <div class="variant-text">
                            <div class="variant-text-head">
                                <div class="head-name">
                                    <h2>XUV 700 AX3 Diesel</h2>
                                </div>
                                <div class="head-price">
                                    <h4>Starting at <span>₹15,68,998</span></h4>
                                </div>
                            </div>
                            <div class="variant-sub-text">
                                <div class="transmission">
                                    <h4>Transmission</h4>
                                    <p>Manual</p>
                                </div>
                                <div class="seating">
                                    <h4>Seating Capacity</h4>
                                    <p>7</p>
                                </div>
                                <div class="features">
                                    <h4>Key Features</h4>
                                    <p>10.25" Superscreen</p>
                                    <p>Amazon Alexa Built-In</p>
                                    <p>Wireless Andriod Auto & Apple CarPlay</p>
                                    <p>AdrenoX Connnected</p>
                                </div>
                            </div>
                            <div class="variant-foot">
                                <p>*Stay tuned as the excitment continues. More variants to be announced soon. <br> *Mahindra XUV 700 On-road Price in Kerala <br>*XUV 700 Latest News - Mahindra XUV 700 2021 - Booking for New Mahindra XUV 700 opens on 7th October, 10 am. Own the Pride!</p>
                            </div>
                        </div>
                    </div>

                    <div class="single-variant">
                        <div class="variant-head">
                            <h2>XUV 700 New Model 2021 Price</h2>
                        </div>
                        <div class="variant-text">
                            <div class="variant-text-head">
                                <div class="head-name">
                                    <h2>XUV 700 AX3 Petrol</h2>
                                </div>
                                <div class="head-price">
                                    <h4>Starting at <span>₹15,99,001</span></h4>
                                </div>
                            </div>
                            <div class="variant-sub-text">
                                <div class="transmission">
                                    <h4>Transmission</h4>
                                    <p>Automatic</p>
                                </div>
                                <div class="seating">
                                    <h4>Seating Capacity</h4>
                                    <p>5</p>
                                </div>
                                <div class="features">
                                    <h4>Key Features</h4>
                                    <p>10.25" Superscreen</p>
                                    <p>Amazon Alexa Built-In</p>
                                    <p>Wireless Andriod Auto & Apple CarPlay</p>
                                    <p>AdrenoX Connnected</p>
                                </div>
                            </div>
                            <div class="variant-foot">
                                <p>*Stay tuned as the excitment continues. More variants to be announced soon. <br> *Mahindra XUV 700 On-road Price in Kerala <br>*XUV 700 Latest News - Mahindra XUV 700 2021 - Booking for New Mahindra XUV 700 opens on 7th October, 10 am. Own the Pride!</p>
                            </div>
                        </div>
                    </div>

                    <div class="single-variant">
                        <div class="variant-head">
                            <h2>XUV 700 New Model 2021 Price</h2>
                        </div>
                        <div class="variant-text">
                            <div class="variant-text-head">
                                <div class="head-name">
                                    <h2>XUV 700 AX3 Diesel</h2>
                                </div>
                                <div class="head-price">
                                    <h4>Starting at <span>₹16,69,000</span></h4>
                                </div>
                            </div>
                            <div class="variant-sub-text">
                                <div class="transmission">
                                    <h4>Transmission</h4>
                                    <p>Automatic</p>
                                </div>
                                <div class="seating">
                                    <h4>Seating Capacity</h4>
                                    <p>5</p>
                                </div>
                                <div class="features">
                                    <h4>Key Features</h4>
                                    <p>10.25" Superscreen</p>
                                    <p>Amazon Alexa Built-In</p>
                                    <p>Wireless Andriod Auto & Apple CarPlay</p>
                                    <p>AdrenoX Connnected</p>
                                </div>
                            </div>
                            <div class="variant-foot">
                                <p>*Stay tuned as the excitment continues. More variants to be announced soon. <br> *Mahindra XUV 700 On-road Price in Kerala <br>*XUV 700 Latest News - Mahindra XUV 700 2021 - Booking for New Mahindra XUV 700 opens on 7th October, 10 am. Own the Pride!</p>
                            </div>
                        </div>
                    </div>

                    <div class="single-variant">
                        <div class="variant-head">
                            <h2>XUV 700 New Model 2021 Price</h2>
                        </div>
                        <div class="variant-text">
                            <div class="variant-text-head">
                                <div class="head-name">
                                    <h2>XUV 700 AX5 Petrol</h2>
                                </div>
                                <div class="head-price">
                                    <h4>Starting at <span>₹15,49,000</span></h4>
                                </div>
                            </div>
                            <div class="variant-sub-text">
                                <div class="transmission">
                                    <h4>Transmission</h4>
                                    <p>Manual</p>
                                </div>
                                <div class="seating">
                                    <h4>Seating Capacity</h4>
                                    <p>5</p>
                                </div>
                                <div class="features">
                                    <h4>Key Features</h4>
                                    <p>Skyroof</p>
                                    <p>Diamond Cut Alloy Wheels</p>
                                    <p>Curtain Airbags</p>
                                    <p>LED Clear View Headlamps</p>
                                </div>
                            </div>
                            <div class="variant-foot">
                                <p>*Stay tuned as the excitment continues. More variants to be announced soon. <br> *Mahindra XUV 700 On-road Price in Kerala <br>*XUV 700 Latest News - Mahindra XUV 700 2021 - Booking for New Mahindra XUV 700 opens on 7th October, 10 am. Own the Pride!</p>
                            </div>
                        </div>
                    </div>

                    <div class="single-variant">
                        <div class="variant-head">
                            <h2>XUV 700 New Model 2021 Price</h2>
                        </div>
                        <div class="variant-text">
                            <div class="variant-text-head">
                                <div class="head-name">
                                    <h2>XUV 700 AX5 Diesel</h2>
                                </div>
                                <div class="head-price">
                                    <h4>Starting at <span>₹16,08,998</span></h4>
                                </div>
                            </div>
                            <div class="variant-sub-text">
                                <div class="transmission">
                                    <h4>Transmission</h4>
                                    <p>Manual</p>
                                </div>
                                <div class="seating">
                                    <h4>Seating Capacity</h4>
                                    <p>5</p>
                                </div>
                                <div class="features">
                                    <h4>Key Features</h4>
                                    <p>Skyroof</p>
                                    <p>Diamond Cut Alloy Wheels</p>
                                    <p>Curtain Airbags</p>
                                    <p>LED Clear View Headlamps</p>
                                </div>
                            </div>
                            <div class="variant-foot">
                                <p>*Stay tuned as the excitment continues. More variants to be announced soon. <br> *Mahindra XUV 700 On-road Price in Kerala <br>*XUV 700 Latest News - Mahindra XUV 700 2021 - Booking for New Mahindra XUV 700 opens on 7th October, 10 am. Own the Pride!</p>
                            </div>
                        </div>
                    </div>

                    <div class="single-variant">
                        <div class="variant-head">
                            <h2>XUV 700 New Model 2021 Price</h2>
                        </div>
                        <div class="variant-text">
                            <div class="variant-text-head">
                                <div class="head-name">
                                    <h2>XUV 700 AX5 Petrol</h2>
                                </div>
                                <div class="head-price">
                                    <h4>Starting at <span>₹16,09,001</span></h4>
                                </div>
                            </div>
                            <div class="variant-sub-text">
                                <div class="transmission">
                                    <h4>Transmission</h4>
                                    <p>Manual</p>
                                </div>
                                <div class="seating">
                                    <h4>Seating Capacity</h4>
                                    <p>7</p>
                                </div>
                                <div class="features">
                                    <h4>Key Features</h4>
                                    <p>Skyroof</p>
                                    <p>Diamond Cut Alloy Wheels</p>
                                    <p>Curtain Airbags</p>
                                    <p>LED Clear View Headlamps</p>
                                </div>
                            </div>
                            <div class="variant-foot">
                                <p>*Stay tuned as the excitment continues. More variants to be announced soon. <br> *Mahindra XUV 700 On-road Price in Kerala <br>*XUV 700 Latest News - Mahindra XUV 700 2021 - Booking for New Mahindra XUV 700 opens on 7th October, 10 am. Own the Pride!</p>
                            </div>
                        </div>
                    </div>

                    <div class="single-variant">
                        <div class="variant-head">
                            <h2>XUV 700 New Model 2021 Price</h2>
                        </div>
                        <div class="variant-text">
                            <div class="variant-text-head">
                                <div class="head-name">
                                    <h2>XUV 700 AX5 Diesel</h2>
                                </div>
                                <div class="head-price">
                                    <h4>Starting at <span>₹16,69,000</span></h4>
                                </div>
                            </div>
                            <div class="variant-sub-text">
                                <div class="transmission">
                                    <h4>Transmission</h4>
                                    <p>Manual</p>
                                </div>
                                <div class="seating">
                                    <h4>Seating Capacity</h4>
                                    <p>7</p>
                                </div>
                                <div class="features">
                                    <h4>Key Features</h4>
                                    <p>Skyroof</p>
                                    <p>Diamond Cut Alloy Wheels</p>
                                    <p>Curtain Airbags</p>
                                    <p>LED Clear View Headlamps</p>
                                </div>
                            </div>
                            <div class="variant-foot">
                                <p>*Stay tuned as the excitment continues. More variants to be announced soon. <br> *Mahindra XUV 700 On-road Price in Kerala <br>*XUV 700 Latest News - Mahindra XUV 700 2021 - Booking for New Mahindra XUV 700 opens on 7th October, 10 am. Own the Pride!</p>
                            </div>
                        </div>
                    </div>

                    <div class="single-variant">
                        <div class="variant-head">
                            <h2>XUV 700 New Model 2021 Price</h2>
                        </div>
                        <div class="variant-text">
                            <div class="variant-text-head">
                                <div class="head-name">
                                    <h2>XUV 700 AX5 Petrol</h2>
                                </div>
                                <div class="head-price">
                                    <h4>Starting at <span>₹17,09,000</span></h4>
                                </div>
                            </div>
                            <div class="variant-sub-text">
                                <div class="transmission">
                                    <h4>Transmission</h4>
                                    <p>Automatic</p>
                                </div>
                                <div class="seating">
                                    <h4>Seating Capacity</h4>
                                    <p>5</p>
                                </div>
                                <div class="features">
                                    <h4>Key Features</h4>
                                    <p>Skyroof</p>
                                    <p>Diamond Cut Alloy Wheels</p>
                                    <p>Curtain Airbags</p>
                                    <p>LED Clear View Headlamps</p>
                                </div>
                            </div>
                            <div class="variant-foot">
                                <p>*Stay tuned as the excitment continues. More variants to be announced soon. <br> *Mahindra XUV 700 On-road Price in Kerala <br>*XUV 700 Latest News - Mahindra XUV 700 2021 - Booking for New Mahindra XUV 700 opens on 7th October, 10 am. Own the Pride!</p>
                            </div>
                        </div>
                    </div>

                    <div class="single-variant">
                        <div class="variant-head">
                            <h2>XUV 700 New Model 2021 Price</h2>
                        </div>
                        <div class="variant-text">
                            <div class="variant-text-head">
                                <div class="head-name">
                                    <h2>XUV 700 AX5 Diesel</h2>
                                </div>
                                <div class="head-price">
                                    <h4>Starting at <span>₹17,69,001</span></h4>
                                </div>
                            </div>
                            <div class="variant-sub-text">
                                <div class="transmission">
                                    <h4>Transmission</h4>
                                    <p>Automatic</p>
                                </div>
                                <div class="seating">
                                    <h4>Seating Capacity</h4>
                                    <p>5</p>
                                </div>
                                <div class="features">
                                    <h4>Key Features</h4>
                                    <p>Skyroof</p>
                                    <p>Diamond Cut Alloy Wheels</p>
                                    <p>Curtain Airbags</p>
                                    <p>LED Clear View Headlamps</p>
                                </div>
                            </div>
                            <div class="variant-foot">
                                <p>*Stay tuned as the excitment continues. More variants to be announced soon. <br> *Mahindra XUV 700 On-road Price in Kerala <br>*XUV 700 Latest News - Mahindra XUV 700 2021 - Booking for New Mahindra XUV 700 opens on 7th October, 10 am. Own the Pride!</p>
                            </div>
                        </div>
                    </div>

                    <div class="single-variant">
                        <div class="variant-head">
                            <h2>XUV 700 New Model 2021 Price</h2>
                        </div>
                        <div class="variant-text">
                            <div class="variant-text-head">
                                <div class="head-name">
                                    <h2>XUV 700 AX5 Diesel</h2>
                                </div>
                                <div class="head-price">
                                    <h4>Starting at <span>₹18,29,000</span></h4>
                                </div>
                            </div>
                            <div class="variant-sub-text">
                                <div class="transmission">
                                    <h4>Transmission</h4>
                                    <p>Automatic</p>
                                </div>
                                <div class="seating">
                                    <h4>Seating Capacity</h4>
                                    <p>7</p>
                                </div>
                                <div class="features">
                                    <h4>Key Features</h4>
                                    <p>Skyroof</p>
                                    <p>Diamond Cut Alloy Wheels</p>
                                    <p>Curtain Airbags</p>
                                    <p>LED Clear View Headlamps</p>
                                </div>
                            </div>
                            <div class="variant-foot">
                                <p>*Stay tuned as the excitment continues. More variants to be announced soon. <br> *Mahindra XUV 700 On-road Price in Kerala <br>*XUV 700 Latest News - Mahindra XUV 700 2021 - Booking for New Mahindra XUV 700 opens on 7th October, 10 am. Own the Pride!</p>
                            </div>
                        </div>
                    </div>

                    <div class="single-variant">
                        <div class="variant-head">
                            <h2>XUV 700 New Model 2021 Price</h2>
                        </div>
                        <div class="variant-text">
                            <div class="variant-text-head">
                                <div class="head-name">
                                    <h2>XUV 700 AX7 Petrol</h2>
                                </div>
                                <div class="head-price">
                                    <h4>Starting at <span>₹19,58,999</span></h4>
                                </div>
                            </div>
                            <div class="variant-sub-text">
                                <div class="transmission">
                                    <h4>Transmission</h4>
                                    <p>Manual</p>
                                </div>
                                <div class="seating">
                                    <h4>Seating Capacity</h4>
                                    <p>7</p>
                                </div>
                                <div class="features">
                                    <h4>Key Features</h4>
                                    <p>3D audio with 12 speakers by sony</p>
                                    <p>Wireless charging</p>
                                    <p>Electric smart door handles</p>
                                    <p>360<sup>o</sup> surrounded view with Blind-view </p>
                                </div>
                            </div>
                            <div class="variant-foot">
                                <p>*Stay tuned as the excitment continues. More variants to be announced soon. <br> *Mahindra XUV 700 On-road Price in Kerala <br>*XUV 700 Latest News - Mahindra XUV 700 2021 - Booking for New Mahindra XUV 700 opens on 7th October, 10 am. Own the Pride!</p>
                            </div>
                        </div>
                    </div>

                    <div class="single-variant">
                        <div class="variant-head">
                            <h2>XUV 700 New Model 2021 Price</h2>
                        </div>
                        <div class="variant-text">
                            <div class="variant-text-head">
                                <div class="head-name">
                                    <h2>XUV 700 AX7 Diesel</h2>
                                </div>
                                <div class="head-price">
                                    <h4>Starting at <span>₹18,59,001</span></h4>
                                </div>
                            </div>
                            <div class="variant-sub-text">
                                <div class="transmission">
                                    <h4>Transmission</h4>
                                    <p>Manual</p>
                                </div>
                                <div class="seating">
                                    <h4>Seating Capacity</h4>
                                    <p>7</p>
                                </div>
                                <div class="features">
                                    <h4>Key Features</h4>
                                    <p>3D audio with 12 speakers by sony</p>
                                    <p>Wireless charging</p>
                                    <p>Electric smart door handles</p>
                                    <p>360<sup>o</sup> surrounded view with Blind-view </p>
                                </div>
                            </div>
                            <div class="variant-foot">
                                <p>*Stay tuned as the excitment continues. More variants to be announced soon. <br> *Mahindra XUV 700 On-road Price in Kerala <br>*XUV 700 Latest News - Mahindra XUV 700 2021 - Booking for New Mahindra XUV 700 opens on 7th October, 10 am. Own the Pride!</p>
                            </div>
                        </div>
                    </div>

                    <div class="single-variant">
                        <div class="variant-head">
                            <h2>XUV 700 New Model 2021 Price</h2>
                        </div>
                        <div class="variant-text">
                            <div class="variant-text-head">
                                <div class="head-name">
                                    <h2>XUV 700 AX7 Petrol</h2>
                                </div>
                                <div class="head-price">
                                    <h4>Starting at <span>₹19,58,999</span></h4>
                                </div>
                            </div>
                            <div class="variant-sub-text">
                                <div class="transmission">
                                    <h4>Transmission</h4>
                                    <p>Automatic</p>
                                </div>
                                <div class="seating">
                                    <h4>Seating Capacity</h4>
                                    <p>7</p>
                                </div>
                                <div class="features">
                                    <h4>Key Features</h4>
                                    <p>3D audio with 12 speakers by sony</p>
                                    <p>Wireless charging</p>
                                    <p>Electric smart door handles</p>
                                    <p>360<sup>o</sup> surrounded view with Blind-view </p>
                                </div>
                            </div>
                            <div class="variant-foot">
                                <p>*Stay tuned as the excitment continues. More variants to be announced soon. <br> *Mahindra XUV 700 On-road Price in Kerala <br>*XUV 700 Latest News - Mahindra XUV 700 2021 - Booking for New Mahindra XUV 700 opens on 7th October, 10 am. Own the Pride!</p>
                            </div>
                        </div>
                    </div>

                    <div class="single-variant">
                        <div class="variant-head">
                            <h2>XUV 700 New Model 2021 Price</h2>
                        </div>
                        <div class="variant-text">
                            <div class="variant-text-head">
                                <div class="head-name">
                                    <h2>XUV 700 AX7 Diesel</h2>
                                </div>
                                <div class="head-price">
                                    <h4>Starting at <span>₹19,58,999</span></h4>
                                </div>
                            </div>
                            <div class="variant-sub-text">
                                <div class="transmission">
                                    <h4>Transmission</h4>
                                    <p>Automatic</p>
                                </div>
                                <div class="seating">
                                    <h4>Seating Capacity</h4>
                                    <p>7</p>
                                </div>
                                <div class="features">
                                    <h4>Key Features</h4>
                                    <p>3D audio with 12 speakers by sony</p>
                                    <p>Wireless charging</p>
                                    <p>Electric smart door handles</p>
                                    <p>360<sup>o</sup> surrounded view with Blind-view </p>
                                </div>
                            </div>
                            <div class="variant-foot">
                                <p>*Stay tuned as the excitment continues. More variants to be announced soon. <br> *Mahindra XUV 700 On-road Price in Kerala <br>*XUV 700 Latest News - Mahindra XUV 700 2021 - Booking for New Mahindra XUV 700 opens on 7th October, 10 am. Own the Pride!</p>
                            </div>
                        </div>
                    </div>

                    <div class="single-variant">
                        <div class="variant-head">
                            <h2>XUV 700 New Model 2021 Price</h2>
                        </div>
                        <div class="variant-text">
                            <div class="variant-text-head">
                                <div class="head-name">
                                    <h2>XUV 700 AX7 Diesel</h2>
                                </div>
                                <div class="head-price">
                                    <h4>Starting at <span>₹21,49,001</span></h4>
                                </div>
                            </div>
                            <div class="variant-sub-text">
                                <div class="transmission">
                                    <h4>Transmission</h4>
                                    <p>Automatic-AWD</p>
                                </div>
                                <div class="seating">
                                    <h4>Seating Capacity</h4>
                                    <p>7</p>
                                </div>
                                <div class="features">
                                    <h4>Key Features</h4>
                                    <p>3D audio with 12 speakers by sony</p>
                                    <p>Wireless charging</p>
                                    <p>Electric smart door handles</p>
                                    <p>360<sup>o</sup> surrounded view with Blind-view </p>
                                </div>
                            </div>
                            <div class="variant-foot">
                                <p>*Stay tuned as the excitment continues. More variants to be announced soon. <br> *Mahindra XUV 700 On-road Price in Kerala <br>*XUV 700 Latest News - Mahindra XUV 700 2021 - Booking for New Mahindra XUV 700 opens on 7th October, 10 am. Own the Pride!</p>
                            </div>
                        </div>
                    </div>

                    <div class="single-variant">
                        <div class="variant-head">
                            <h2>XUV 700 New Model 2021 Price</h2>
                        </div>
                        <div class="variant-text">
                            <div class="variant-text-head">
                                <div class="head-name">
                                    <h2>XUV 700 AX7 Petrol <span>(Luxury Pack)</span></h2>
                                </div>
                                <div class="head-price">
                                    <h4>Starting at <span>₹21,29,000</span></h4>
                                </div>
                            </div>
                            <div class="variant-sub-text">
                                <div class="transmission">
                                    <h4>Transmission</h4>
                                    <p>Automatic</p>
                                </div>
                                <div class="seating">
                                    <h4>Seating Capacity</h4>
                                    <p>7</p>
                                </div>
                                <div class="features">
                                    <h4>Key Features</h4>
                                    <p>3D audio with 12 speakers by sony</p>
                                    <p>Wireless charging</p>
                                    <p>Electric smart door handles</p>
                                    <p>360<sup>o</sup> surrounded view with Blind-view </p>
                                </div>
                            </div>
                            <div class="variant-foot">
                                <p>*Stay tuned as the excitment continues. More variants to be announced soon. <br> *Mahindra XUV 700 On-road Price in Kerala <br>*XUV 700 Latest News - Mahindra XUV 700 2021 - Booking for New Mahindra XUV 700 opens on 7th October, 10 am. Own the Pride!</p>
                            </div>
                        </div>
                    </div>

                    <div class="single-variant">
                        <div class="variant-head">
                            <h2>XUV 700 New Model 2021 Price</h2>
                        </div>
                        <div class="variant-text">
                            <div class="variant-text-head">
                                <div class="head-name">
                                    <h2>XUV 700 AX7 Diesel <span>(Luxury Pack)</span></h2>
                                </div>
                                <div class="head-price">
                                    <h4>Starting at <span>₹22,99,001</span></h4>
                                </div>
                            </div>
                            <div class="variant-sub-text">
                                <div class="transmission">
                                    <h4>Transmission</h4>
                                    <p>Automatic</p>
                                </div>
                                <div class="seating">
                                    <h4>Seating Capacity</h4>
                                    <p>7</p>
                                </div>
                                <div class="features">
                                    <h4>Key Features</h4>
                                    <p>3D audio with 12 speakers by sony</p>
                                    <p>Wireless charging</p>
                                    <p>Electric smart door handles</p>
                                    <p>360<sup>o</sup> surrounded view with Blind-view </p>
                                </div>
                            </div>
                            <div class="variant-foot">
                                <p>*Stay tuned as the excitment continues. More variants to be announced soon. <br> *Mahindra XUV 700 On-road Price in Kerala <br>*XUV 700 Latest News - Mahindra XUV 700 2021 - Booking for New Mahindra XUV 700 opens on 7th October, 10 am. Own the Pride!</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="variant-img">
                <div class="img-variant"></div>
                <div class="variant-btn">
                    <a href="#" data-toggle="modal" data-target="#exampleModalCenter">Enquire Now</a>
                </div>
            </div>
        </section>

        <!-- Features section -->
        <section class="features-area section ptb_100">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="feature-head">
                            <h2>XUV 700 Features and Specifications</h2>
                        </div>
                    </div>
                </div>
                <div class="row">

                    <div class="col-lg-4">
                        <div class="feature-box">

                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Technology</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Performance</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Design</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="blog-tab" data-toggle="tab" href="#blog" role="tab" aria-controls="blog" aria-selected="false">Safety</a>
                                </li>
                            </ul>

                        </div>
                    </div>


                    <div class="col-lg-8">
                        <div class="specification-box">
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div class="feature-slider owl-carousel">

                                        <div class="single-feature">
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="fea-img">
                                                        <img src="assets/images/features/t1.jpg" alt="">
                                                    </div>
                                                    <div class="fea-content">
                                                        <div class="head">
                                                            <h5>ADAS - High Beam Assist</h5>
                                                        </div>
                                                        <div class="para">
                                                            <p> Blind them with adventure, not your headlights. Mahindra XUV 700 temporarily switches its headlights to low-beam, in case of oncoming traffic. Own Mahindra XUV 700 Now!</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="single-feature">
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="fea-img">
                                                        <img src="assets/images/features/t3.jpg" alt="">
                                                    </div>
                                                    <div class="fea-content">
                                                        <div class="head">
                                                            <h5>ADAS - Adaptive Cruise Control</h5>
                                                        </div>
                                                        <div class="para">
                                                            <p>An intelligent SUV with intelligent speed.Advanced driver assist system that adapts your speed to the vehicles around you. Discover New XUV 700.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="single-feature">
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="fea-img">
                                                        <img src="assets/images/features/t2.jpg" alt="">
                                                    </div>
                                                    <div class="fea-content">
                                                        <div class="head">
                                                            <h5>ADAS - Traffic Sign Recognition</h5>
                                                        </div>
                                                        <div class="para">
                                                            <p>You may miss out on a road-sign or two, but your SUV 700 Mahindra won't.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div><!-- technology -->

                                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div class="feature-slider owl-carousel">

                                        <div class="single-feature">
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="fea-img">
                                                        <img src="assets/images/features/p1.jpg" alt="">
                                                    </div>
                                                    <div class="fea-content">
                                                        <div class="head">
                                                            <h5>Electronics Park Brake (EPB)</h5>
                                                        </div>
                                                        <div class="para">
                                                            <p>Ever thought that Parking would have its own conveniences? The XUV Mahindra 700 Mahindra comes with a control switch that enables static and dynamic apply and release.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="single-feature">
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="fea-img">
                                                        <img src="assets/images/features/p2.jpg" alt="">
                                                    </div>
                                                    <div class="fea-content">
                                                        <div class="head">
                                                            <h5>Custom Drive Modes</h5>
                                                        </div>
                                                        <div class="para">
                                                            <p>Choose your rush with intuitive technology that lets you Zip, Zap, Zoom, or customise your drive mode.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div><!-- perfomance -->

                                <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                    <div class="feature-slider owl-carousel">

                                        <div class="single-feature">
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="fea-img">
                                                        <img src="assets/images/features/d1.jpg" alt="">
                                                    </div>
                                                    <div class="fea-content">
                                                        <div class="head">
                                                            <h5>Alloy Wheels</h5>
                                                        </div>
                                                        <div class="para">
                                                            <p>Distinctive Diamond Cut Alloy Wheels that ensure a bold SUV stance, even at a standstill.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="single-feature">
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="fea-img">
                                                        <img src="assets/images/features/d2.jpg" alt="">
                                                    </div>
                                                    <div class="fea-content">
                                                        <div class="head">
                                                            <h5>LED DRL & Clear view Headlamps</h5>
                                                        </div>
                                                        <div class="para">
                                                            <p>Announce your arrival in style with striking headlamps and LED DRLs. Book your XUV 700 Now!</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div><!-- design -->

                                <div class="tab-pane fade" id="blog" role="tabpanel" aria-labelledby="blog-tab">
                                    <div class="feature-slider owl-carousel">

                                        <div class="single-feature">
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="fea-img">
                                                        <img src="assets/images/features/s1.jpg" alt="">
                                                    </div>
                                                    <div class="fea-content">
                                                        <div class="head">
                                                            <h5>Airbags</h5>
                                                        </div>
                                                        <div class="para">
                                                            <p> While you live the rush, the Mahindra 700 SUV handles your safety for you, with best-in-class 7 air bags.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="single-feature">
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="fea-img">
                                                        <img src="assets/images/features/s2.jpg" alt="">
                                                    </div>
                                                    <div class="fea-content">
                                                        <div class="head">
                                                            <h5>Electronic Stability Program</h5>
                                                        </div>
                                                        <div class="para">
                                                            <p> Ensures a stable drive to help you push your limits on every adventure. Choose Mahindra New XUV 700, and experience the rush!</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div><!-- safety -->

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="footer-bg">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-3">
                        <div class="footer-logo">
                            <img src="assets/images/logos/footer-logo.png" alt="">
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="contact-footer">
                            <div class="contact-area">
                                <p>Email Address</p>
                                <p><a href="mailto:salesop@horizonmahindra.com">salesop@horizonmahindra.com</a></p>
                            </div>
                            <div class="contact-support">
                                <p>Contact Support</p>
                                <p><a href="tel:+919847266166">+91 9847266166</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="footer-btn">
                            <a href="#" data-toggle="modal" data-target="#exampleModalCenter">Enquire Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div class="footer-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="copyright-area">
                            <p>All rights reserved | Copyright Horizon Motors 2021. Designed by <a href="http://www.theviralmafia.com/?utm_source=xuv700" target="_blank"> <img src="assets/images/logos/viralmafia.svg"></a> | <a href="#" data-toggle="modal" data-target="#myModal3">Privacy Policy</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Popup -->
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <button type="button" class="close" data-dismiss="modal"><i class="icofont-ui-close"></i></button>
                    <div class="modal-left">
                        <div class="overlay"></div>
                    </div>
                    <div class="modal-right">
                        <div class="modal-heading">
                            <h3>Enquire Now</span></h3>
                        </div>
                        <form name="form2" method="post" action="email.php">
                            <div class="form-group">
                                <input type="text" class="form-control" name="name" placeholder="Enter Name" required>
                            </div>
                            <div class="form-group">
                                <input type="number" class="form-control" name="phone" placeholder="Enter Phone No." required >
                            </div>
                            <div class="form-group form-group-last">
                              <input type="email" class="form-control" name="email" placeholder="Enter Email" required>
                            </div>
                            <input type="hidden" name="esource" value="<?php echo $source;?>">
                            <input type="hidden" name="emedium" value="<?php echo $medium;?>">
                            <button type="submit" class="btn btn-bordered btn-modal" value="submit" name="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </div>

    </div><!-- close all area -->


    <div class="modal fade popsec onload_pop" id="myModal3">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">

                    <div class="modal-body">
                        <button type="button" class="close" data-dismiss="modal"><i class="fa fa-times" aria-hidden="true"></i></button>
                        <div class="privacy_onload">

                            <div class="pop-privacy-box">

                                <h4>Privacy Policy</h4>

                                <p>This privacy policy applies to the website( name). We may collect personal information such as your name, address, phone number and email address. We use this information to offer services, deliver services on your request and inform you about events and promotions. We use "cookies" to personalize your online experience. We secure the personal information you provide.</p>

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
    <b>Do you like cookies?</b> &#x1F36A; We use cookies to ensure you get the best experience on our website. <a href="#" data-toggle="modal" data-target="#myModal3">Learn more</a>

    <button type="button" class="btn btn-primary btn-sm acceptcookies">
        I agree
    </button>
</div>
<!-- END Bootstrap-Cookie-Alert -->



    <!-- Right Side Icos -->
    <div class="cont_link_box">
        <a id="" href="tel:+919847266166" class="callnow_inte" target="">
                <i class="fa fa-phone" aria-hidden="true"></i>
        </a>
        <a id="" href="https://wa.me/+919847266166" class="whatsapp_inte" target="_blank">
            <i class="fab fa-whatsapp"></i>
        </a>    
    </div> 


    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/bootstrap.js"></script>
    <script src="assets/js/plugins.js"></script>
    <script src="assets/js/custom.js"></script>
    <script src="assets/js/cookiealert.js"></script>
    <script type="text/javascript">
            $(document).ready(function() {
                setTimeout(function() {
                    $("#exampleModalCenter").modal('show');
                }, 7000);
            });
    </script>

    <!-- <script>
        $(".nav-link").hover(function(){
            $(this).tab("show")
        })
    </script> -->

</body>
</html>