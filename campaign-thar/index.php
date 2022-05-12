<?php
error_reporting(0);
$source = '';
$source = $_GET['utm_source'];
$medium = '';
$medium = $_GET['utm_medium'];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thar - Horizon Motors</title>
    <link rel="stylesheet" href="assets/css/bootstrap.css">
    <link rel="stylesheet" href="assets/css/icofont.min.css">
    <link rel="stylesheet" href="assets/css/owl.carousel.min.css">
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/responsive.css">
    <!--Cookie Alert-->
    <link rel="stylesheet" href="assets/css/cookiealert.css">

    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-KHGSHPQ');</script>
    <!-- End Google Tag Manager -->
</head>
<body>

    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KHGSHPQ"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    
    <div class="all-area">
        <!-- Header area -->
        <header class="header-area">
            <nav class="navbar navbar-expand-lg fixed-top main-header-area">
                <div class="container">
                    <a href="index.html" class="navbar-brand">
                        <img src="assets/images/logos/mahindra.png" alt="Mahindra Horozon Motors">
                    </a>
                    <a href="index.html" class="navbar-brand">
                        <img src="assets/images/logos/horizon-logo.png" alt="Horizon motors">
                    </a>
                    <a href="index.html" class="navbar-brand">
                        <img src="assets/images/logos/thar-logo.png" alt="Mahindra Thar">
                    </a>
                    <!-- <div class="book-btn">
                        <a href="#" class="nav-link btn" data-toggle="modal" data-target="#exampleModalCenter">Book Now</a>
                    </div> -->
                </div>
            </nav>
        </header>
        
        <!-- Banner section -->
        <section class="hero">
            <div class="container">
                <div class="row">
                    <div class="col-md-7 col-lg-7 col-12 col-sm-12">
                        
                    </div>
                    <div class="col-md-5 col-lg-5 col-12 col-sm-12">
                        <div class="hero-img">
                            <img src="assets/images/logos/explore.png" alt="">
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
                                    <input type="tel" placeholder="Mobile No" class="form-control inp" name="phone" 
                                    required pattern="[0-9]{10}" maxlength="10"
                                    oninvalid="this.setCustomValidity('Please Enter 10 Digit Number')"
                                    onchange="this.setCustomValidity('')">
                                </div>
                                <div class="col-md-6 col-lg-6 form-grp">
                                    <input type="email" placeholder="Email Id" class="form-control inp" name="email" required>
                                </div>
                                <div class="col-md-6 col-lg-6 form-grp">
                                    <input type="hidden" name="esource" value="<?php echo $source;?>">
                                    <input type="hidden" name="emedium" value="<?php echo $medium;?>">
                                    <input type="submit" name="submit" value="submit" class="btn btn-bordered submit-form">
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
                    <div class="col-lg-6 p-o-md">
                        <div class="open-md d-none">
                            <img src="assets/images/about.png" alt="">
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="era-area">
                            <div class="era-para">
                                <p>A modern take on an iconic design, 
                                    the All-New Thar, with its wide stance and iconic lines, stands out wherever it goes.</p>
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
    
        <!-- Parts area -->
        <section class="parts-area section">
            <div class="container">
                <div class="row parts-row">
                    <div class="col-lg-3">
                        <div class="parts-box">
                            <div class="img"><img src="assets/images/parts/01.jpg" alt=""></div>
                            <div class="text">
                                <h4>Manual</h4>
                                <h3>Transmission</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="parts-box">
                            <div class="img"><img src="assets/images/parts/02.jpg" alt=""></div>
                            <div class="text">
                                <h4>Automatic</h4>
                                <h3>Transmission</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="parts-box">
                            <div class="img"><img src="assets/images/parts/03.jpg" alt=""></div>
                            <div class="text">
                                <h4>MHAwk130</h4>
                                <h3>Diesel Engine</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="parts-box">
                            <div class="img"><img src="assets/images/parts/04.jpg" alt=""></div>
                            <div class="text">
                                <h4>MStallion 150 tgdi</h4>
                                <h3>Petrol Engine</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ncap area -->
        <section class="ncap-area section">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <div class="ncap-head">
                            <div class="logo"><img src="assets/images/logos/ncap-logo.png" alt=""></div>
                            <div class="star"><img src="assets/images/star.png" alt=""></div>
                        </div>
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col-lg-5">
                        <div class="ncap-text">
                            <h1>The Icon is India's Safest Off-Roader</h1>
                            <p>Rated 4-Stars in adult & child safety by Global NCAP. With ESP, roll cage, ABS & Airbags, Thar has all the safety gear you need to explore the impossible!</p>
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <div class="ncap-img">
                            <img src="assets/images/ncap-jeep2.png" alt="" class="d-none">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 text-center">
                        <div class="ncap-btn">
                            <a href="#" data-toggle="modal" data-target="#exampleModalCenter">Test Drive Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Thar Middle area -->
        <section class="thar-midle section"></section>

        <!-- Variants and pricing area -->
        <section class="variants-areas section">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <div class="var-head">
                            <h1>Variants & Pricing</h1>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="varian-slider">
                            <div class="varian-box d-flex">
                                <div class="thar-name">
                                    <div class="name">
                                        <h1>Lx</h1>
                                    </div>
                                    <div class="rate">
                                        <span>Starting from</span> <br>
                                        <h1>₹ 13,79,308</h1>
                                    </div>
                                    <div class="thar-slide-btn">
                                        <a href="#" data-toggle="modal" data-target="#exampleModalCenter">Book Now</a>
                                    </div>
                                </div>
                                <div class="thar-details">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="row row-style">
                                                <div class="col-md-4 pl-0">
                                                    <h4>Transmission</h4>
                                                </div>
                                                <div class="col-md-8 pl-md-0">
                                                    <h3>Automatic | Manual</h3>
                                                </div>
                                            </div>
                                            <div class="row row-style">
                                                <div class="col-md-4 pl-0">
                                                    <h4>Engine Type</h4>
                                                </div>
                                                <div class="col-md-8 pl-md-0">
                                                    <h3>Petrol | Diesel</h3>
                                                </div>
                                            </div>
                                            <div class="row row-style">
                                                <div class="col-md-4 pl-0">
                                                    <h4>Top Options</h4>
                                                </div>
                                                <div class="col-md-8 pl-md-0">
                                                    <h3>Convertible Soft Top (With Diesel MT & AT, Petrol AT) Hard Top</h3>
                                                </div>
                                            </div>
                                            <div class="row row-style row-style-last">
                                                <div class="col-md-4 pl-0">
                                                    <h4>Key Features</h4>
                                                </div>
                                                <div class="col-md-8 pl-md-0">
                                                    <h3>HVAC, Touchscreen, DRL, Alloys
                                                        4WD, MLD, BLD & R18 A/T Tyres
                                                        Driver Information System
                                                        ESP, Roll Cage, 2 Airbags, ABS</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="varian-box d-flex">
                                <div class="thar-name">
                                    <div class="name">
                                        <h1>Mx</h1>
                                    </div>
                                    <div class="rate">
                                        <span>Starting from</span> <br>
                                        <h1>₹ 13,79,307</h1>
                                    </div>
                                    <div class="thar-slide-btn">
                                        <a href="#" data-toggle="modal" data-target="#exampleModalCenter">Book Now</a>
                                    </div>
                                </div>
                                <div class="thar-details">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="row row-style">
                                                <div class="col-md-4 pl-0">
                                                    <h4>Transmission</h4>
                                                </div>
                                                <div class="col-md-8">
                                                    <h3>Automatic | Manual</h3>
                                                </div>
                                            </div>
                                            <div class="row row-style">
                                                <div class="col-md-4 pl-0">
                                                    <h4>Engine Type</h4>
                                                </div>
                                                <div class="col-md-8">
                                                    <h3>Petrol | Diesel</h3>
                                                </div>
                                            </div>
                                            <div class="row row-style">
                                                <div class="col-md-4 pl-0">
                                                    <h4>Top Options</h4>
                                                </div>
                                                <div class="col-md-8">
                                                    <h3>Convertible Soft Top (With Diesel MT & AT, Petrol AT) Hard Top</h3>
                                                </div>
                                            </div>
                                            <div class="row row-style row-style-last">
                                                <div class="col-md-4 pl-0">
                                                    <h4>Key Features</h4>
                                                </div>
                                                <div class="col-md-8">
                                                    <h3>HVAC, Touchscreen, DRL, Alloys
                                                        4WD, MLD, BLD & R18 A/T Tyres
                                                        Driver Information System
                                                        ESP, Roll Cage, 2 Airbags, ABS</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Features section -->
        <section class="features-area section">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <div class="feature-head">
                            <h2>Features</h2>
                        </div>
                    </div>
                </div>
                <div class="row">

                    <div class="col-lg-12">
                        <div class="feature-box">

                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Design</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Performance & Capability</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Comfort & Convienence</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="blog-tab" data-toggle="tab" href="#blog" role="tab" aria-controls="blog" aria-selected="false">Technology</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="new-tab" data-toggle="tab" href="#new" role="tab" aria-controls="new" aria-selected="false">Safety</a>
                                </li>
                            </ul>

                        </div>
                    </div>


                    <div class="col-lg-12">
                        <div class="specification-box">
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div class="feature-slider owl-carousel">

                                        <div class="single-feature row">
                                            <div class="col-md-6">
                                                <div class="div-feature">
                                                    <div class="img">
                                                        <img src="assets/images/features/01.jpg" alt="">
                                                    </div>
                                                    <div class="text">
                                                        <h3>Timeless Good Looks</h3>
                                                        <!-- <p>The All-New Thar retains its iconic front-end with a new distinctive front grille flanked by classic round headlamps.</p> -->
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="div-feature">
                                                    <div class="img">
                                                        <img src="assets/images/features/02.jpg" alt="">
                                                    </div>
                                                    <div class="text">
                                                        <h3>Captivating Led DRLs</h3>
                                                        <!-- <p>The All-New Thar has front fender-mounted LED daytime running lamps that give it extra visual oomph and add its road presence</p> -->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="single-feature row">
                                            <div class="col-md-6">
                                                <div class="div-feature">
                                                    <div class="img">
                                                        <img src="assets/images/features/03.jpg" alt="">
                                                    </div>
                                                    <div class="text">
                                                        <h3>Rear Seats</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="div-feature">
                                                    <div class="img">
                                                        <img src="assets/images/features/04.jpg" alt="">
                                                    </div>
                                                    <div class="text">
                                                        <h3>Side Mirrors</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="single-feature row">
                                            <div class="col-md-6">
                                                <div class="div-feature">
                                                    <div class="img">
                                                        <img src="assets/images/features/05.jpg" alt="">
                                                    </div>
                                                    <div class="text">
                                                        <h3>Thar Wheel</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="div-feature">
                                                    <div class="img">
                                                        <img src="assets/images/features/06.jpg" alt="">
                                                    </div>
                                                    <div class="text">
                                                        <h3>Thar Grille</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="single-feature row">
                                            <div class="col-md-6">
                                                <div class="div-feature">
                                                    <div class="img">
                                                        <img src="assets/images/features/07.jpg" alt="">
                                                    </div>
                                                    <div class="text">
                                                        <h3>Front View</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="div-feature">
                                                    <div class="img">
                                                        <img src="assets/images/features/08.jpg" alt="">
                                                    </div>
                                                    <div class="text">
                                                        <h3>Rear View</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div><!-- Design -->

                                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div class="feature-slider owl-carousel">

                                        <div class="single-feature row">
                                            <div class="col-md-6">
                                                <div class="div-feature">
                                                    <div class="img">
                                                        <img src="assets/images/features/09.jpg" alt="">
                                                    </div>
                                                    <div class="text">
                                                        <h3>ARAI Mileage</h3>
                                                        <p>12 kmpl</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="div-feature">
                                                    <div class="img">
                                                        <img src="assets/images/features/10.jpg" alt="">
                                                    </div>
                                                    <div class="text">
                                                        <h3>Top Speed</h3>
                                                        <p>155 kmph</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="single-feature row">
                                            <div class="col-md-6">
                                                <div class="div-feature">
                                                    <div class="img">
                                                        <img src="assets/images/features/11.jpg" alt="">
                                                    </div>
                                                    <div class="text">
                                                        <h3>Engine cc (Displacement)</h3>
                                                        <p>1997 cc</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="div-feature">
                                                    <div class="img">
                                                        <img src="assets/images/features/12.jpg" alt="">
                                                    </div>
                                                    <div class="text">
                                                        <h3>Number Of Gears</h3>
                                                        <p>6-speed torque converter automatic.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="single-feature row">
                                            <div class="col-md-6">
                                                <div class="div-feature">
                                                    <div class="img">
                                                        <img src="assets/images/features/13.jpg" alt="">
                                                    </div>
                                                    <div class="text">
                                                        <h3>Max Power</h3>
                                                        <p>150 HP @ 5000 rpm</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="div-feature">
                                                    <div class="img">
                                                        <img src="assets/images/features/14.jpg" alt="">
                                                    </div>
                                                    <div class="text">
                                                        <h3>Max Torque</h3>
                                                        <p>320 Nm @ 1500-3000 rpm</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div><!-- Performance -->

                                <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                    <div class="feature-slider owl-carousel">

                                        <div class="single-feature row">
                                            <div class="col-md-6">
                                                <div class="div-feature">
                                                    <div class="img">
                                                        <img src="assets/images/features/03.jpg" alt="">
                                                    </div>
                                                    <div class="text">
                                                        <h3>Seat Upholstery</h3>
                                                        <!-- <p>The All-New Thar retains its iconic front-end with a new distinctive front grille flanked by classic round headlamps.</p> -->
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="div-feature">
                                                    <div class="img">
                                                        <img src="assets/images/features/15.jpg" alt="">
                                                    </div>
                                                    <div class="text">
                                                        <h3>Adjustable Steering</h3>
                                                        <!-- <p>The All-New Thar has front fender-mounted LED daytime running lamps that give it extra visual oomph and add its road presence</p> -->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="single-feature row">
                                            <div class="col-md-6">
                                                <div class="div-feature">
                                                    <div class="img">
                                                        <img src="assets/images/features/16.jpg" alt="">
                                                    </div>
                                                    <div class="text">
                                                        <h3>Cruise Control</h3>
                                                        <!-- <p>The All-New Thar retains its iconic front-end with a new distinctive front grille flanked by classic round headlamps.</p> -->
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="div-feature">
                                                    <div class="img">
                                                        <img src="assets/images/features/17.jpg" alt="">
                                                    </div>
                                                    <div class="text">
                                                        <h3>Steering Audio & Phone controls</h3>
                                                        <!-- <p>The All-New Thar has front fender-mounted LED daytime running lamps that give it extra visual oomph and add its road presence</p> -->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="single-feature row">
                                            <div class="col-md-6">
                                                <div class="div-feature">
                                                    <div class="img">
                                                        <img src="assets/images/features/18.jpg" alt="">
                                                    </div>
                                                    <div class="text">
                                                        <h3>Centre Roof Lamp</h3>
                                                        <!-- <p>The All-New Thar retains its iconic front-end with a new distinctive front grille flanked by classic round headlamps.</p> -->
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="div-feature">
                                                    <div class="img">
                                                        <img src="assets/images/features/19.jpg" alt="">
                                                    </div>
                                                    <div class="text">
                                                        <h3>Lockable Glovebox</h3>
                                                        <!-- <p>The All-New Thar has front fender-mounted LED daytime running lamps that give it extra visual oomph and add its road presence</p> -->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div><!-- comfort -->

                                <div class="tab-pane fade" id="blog" role="tabpanel" aria-labelledby="blog-tab">
                                    <div class="feature-slider owl-carousel">

                                        <div class="single-feature row">
                                            <div class="col-md-6">
                                                <div class="div-feature">
                                                    <div class="img">
                                                        <img src="assets/images/features/20.jpg" alt="">
                                                    </div>
                                                    <div class="text">
                                                        <h3>HVAC Controls</h3>
                                                        <!-- <p>The All-New Thar retains its iconic front-end with a new distinctive front grille flanked by classic round headlamps.</p> -->
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="div-feature">
                                                    <div class="img">
                                                        <img src="assets/images/features/21.jpg" alt="">
                                                    </div>
                                                    <div class="text">
                                                        <h3>17.8cm Touch Screen</h3>
                                                        <!-- <p>The All-New Thar has front fender-mounted LED daytime running lamps that give it extra visual oomph and add its road presence</p> -->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="single-feature row">
                                            <div class="col-md-6">
                                                <div class="div-feature">
                                                    <div class="img">
                                                        <img src="assets/images/features/22.jpg" alt="">
                                                    </div>
                                                    <div class="text">
                                                        <h3>4 Speakers & 2 Tweeters</h3>
                                                        <!-- <p>The All-New Thar retains its iconic front-end with a new distinctive front grille flanked by classic round headlamps.</p> -->
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="div-feature">
                                                    <div class="img">
                                                        <img src="assets/images/features/23.jpg" alt="">
                                                    </div>
                                                    <div class="text">
                                                        <h3>Adventure Statistics</h3>
                                                        <!-- <p>The All-New Thar has front fender-mounted LED daytime running lamps that give it extra visual oomph and add its road presence</p> -->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div><!-- technology -->

                                <div class="tab-pane fade" id="new" role="tabpanel" aria-labelledby="new-tab">
                                    <div class="feature-slider owl-carousel">

                                        <div class="single-feature row">
                                            <div class="col-md-6">
                                                <div class="div-feature">
                                                    <div class="img">
                                                        <img src="assets/images/features/24.jpg" alt="">
                                                    </div>
                                                    <div class="text">
                                                        <h3>Dual Air Bags</h3>
                                                        <!-- <p>The All-New Thar retains its iconic front-end with a new distinctive front grille flanked by classic round headlamps.</p> -->
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="div-feature">
                                                    <div class="img">
                                                        <img src="assets/images/features/05.jpg" alt="">
                                                    </div>
                                                    <div class="text">
                                                        <h3>ABS with EBD Brake</h3>
                                                        <!-- <p>The All-New Thar has front fender-mounted LED daytime running lamps that give it extra visual oomph and add its road presence</p> -->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="single-feature row">
                                            <div class="col-md-6">
                                                <div class="div-feature">
                                                    <div class="img">
                                                        <img src="assets/images/features/03.jpg" alt="">
                                                    </div>
                                                    <div class="text">
                                                        <h3>Seat belt reminder</h3>
                                                        <!-- <p>The All-New Thar retains its iconic front-end with a new distinctive front grille flanked by classic round headlamps.</p> -->
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="div-feature">
                                                    <div class="img">
                                                        <img src="assets/images/features/10.jpg" alt="">
                                                    </div>
                                                    <div class="text">
                                                        <h3>Snow chain provision for tyres</h3>
                                                        <!-- <p>The All-New Thar has front fender-mounted LED daytime running lamps that give it extra visual oomph and add its road presence</p> -->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="single-feature row">
                                            <div class="col-md-6">
                                                <div class="div-feature">
                                                    <div class="img">
                                                        <img src="assets/images/features/25.jpg" alt="">
                                                    </div>
                                                    <div class="text">
                                                        <h3>Panic braking signal</h3>
                                                        <!-- <p>The All-New Thar retains its iconic front-end with a new distinctive front grille flanked by classic round headlamps.</p> -->
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="div-feature">
                                                    <div class="img">
                                                        <img src="assets/images/features/26.jpg" alt="">
                                                    </div>
                                                    <div class="text">
                                                        <h3>Vehicle overspeed warning</h3>
                                                        <!-- <p>The All-New Thar has front fender-mounted LED daytime running lamps that give it extra visual oomph and add its road presence</p> -->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div><!-- Safety -->

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- contact section -->
        <section class="contact-section section">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="row contact-banner">
                            <div class="col-lg-5"></div>
                            <div class="col-lg-7">
                                <div class="contact-inner">
                                    <h1>Book your thar now</h1>
                                    <form action="email.php" method="post" name="form2">
                                        <div class="row w-100 mar-md-auto">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <input type="text" placeholder="Name" class="form-control"
                                                        name="name" required>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <input type="email" placeholder="Email" class="form-control"
                                                        name="email" required>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <input type="text" placeholder="Phone" class="form-control" name="phone"
                                                        required pattern="[0-9]{10}" maxlength="10"
                                                        oninvalid="this.setCustomValidity('Please Enter 10 Digit Number')"
                                                        onchange="this.setCustomValidity('')">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <input type="hidden" name="esource" value="<?php echo $source;?>">
                                                    <input type="hidden" name="emedium" value="<?php echo $medium;?>">
                                                    <input type="submit" name="submit" value="submit" class="btn btn-bordered submit-form">
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
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
                    <div class="col-lg-12 text-center pb-20">
                        <div class="footer-logo">
                            <img src="assets/images/logos/footer-logo.png" alt="">
                        </div>
                    </div>
                    <div class="col-lg-12 text-center mt-30">
                        <div class="contact-footer d-flex justify-content-center"> 
                            <div class="contact-support">
                                <p>Contact Support</p>
                                <p><a href="tel:+919847266166">+91 9847266166</a></p>
                            </div>  
                            <div class="contact-area">
                                <p>Email Address</p>
                                <p><a href="mailto:salesop@horizonmahindra.com">salesop@horizonmahindra.com</a></p>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div class="footer-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <div class="copyright-area">
                            <p>All rights reserved | Copyright Horizon Motors 2022. Designed by <a href="http://www.theviralmafia.com/?utm_source=thar" target="_blank"> <img src="assets/images/logos/viralmafia.svg"></a></p>
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
                        <form  name="form3" method="post" action="email.php">
                            <div class="form-group">
                                <input type="text" class="form-control" id="name" name="name" placeholder="Enter Name" required>
                            </div>
                            <div class="form-group">
                                <input type="tel" class="form-control" id="name" name="phone" placeholder="Enter Phone No." required
                                pattern="[0-9]{10}" maxlength="10"
                                    oninvalid="this.setCustomValidity('Please Enter 10 Digit Number')"
                                    onchange="this.setCustomValidity('')">
                            </div>
                            <div class="form-group form-group-last">
                              <input type="email" class="form-control" name="email" id="email" placeholder="Enter Email" required>
                            </div>
                                <input type="hidden" name="esource" value="<?php echo $source;?>">
                                    <input type="hidden" name="emedium" value="<?php echo $medium;?>">
                            <input type="submit" class="btn btn-bordered btn-modal" name="submit" value="submit">
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </div>

        <!-- Ride side btns -->
        <div class="cont_link_box">
           
            <a id="" href="tel:+919847266166" class="callnow_inte" target="">
            <i class="fas fa-phone-alt" aria-hidden="true"></i>
            </a>
            <a id="" href="https://wa.me/+919847266166" class="whatsapp_inte" target="_blank">
            <i class="fab fa-whatsapp"></i>
            </a>
        </div>
        <div class="enq-side">
            <a href="#" class="vertical_btn" data-toggle="modal" data-target="#exampleModalCenter">Enquire</a>
        </div>

    </div><!-- close all area -->

        <!-- about Form-->
        <div class="modal fade popsec onload_pop" id="myModal3">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">

                    <div class="modal-body">
                        <button type="button" class="btn-close pop_button" data-bs-dismiss="modal" aria-label="Close"></button>
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
        <b>Do you like cookies?</b> &#x1F36A; <a href="#" data-toggle="modal" data-target="#myModal3">Learn more</a>

        <button type="button" class="btn btn-primary btn-sm acceptcookies">
            I agree
        </button>
    </div>
    <!-- END Bootstrap-Cookie-Alert -->


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

</body>
</html>