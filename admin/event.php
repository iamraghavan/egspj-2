<?php
        // Database connection details
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "domto";

        // Create a new event
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $conn = new mysqli($servername, $username, $password, $dbname);

            $title = $_POST['title'];
            // $date = $_POST['date'];
            // $time = $_POST['time'];
            // $location = $_POST['location'];
            $description = $_POST['description'];
            $bannerimage = $_POST['banner_image'];

            $query = "INSERT INTO events (title,  description, banner_image) VALUES ('$title',$description', '$bannerimage')";
            $result = $conn->query($query);

            if ($result) {
                echo "<p class='success'>Event created successfully!</p>";
            } else {
                echo "<p class='error'>Error creating event.</p>";
            }

            $conn->close();
        }
        ?>

<!DOCTYPE html>
<html lang="en">

<head>

<style>

.success {
    color: green;
}

.error {
    color: red;
}

.event {
    margin-bottom: 20px;
}

.no-events {
    color: gray;
}
</style>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile - Dashboard - Vanshavali</title>

    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./css/bootstrap.css">

    <link rel="stylesheet" href="./vendors/iconly/bold.css">

    <link rel="stylesheet" href="./vendors/perfect-scrollbar/perfect-scrollbar.css">
    <link rel="stylesheet" href="./vendors/bootstrap-icons/bootstrap-icons.css">
    <link rel="stylesheet" href="./css/app.css">
    <link rel="shortcut icon" href="./images/favicon.svg" type="image/x-icon">
</head>  


<style>
    @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@700&display=swap');
  
      .header-logo-text {
        font-family: 'Comic Neue', cursive;
        color: #FFF;
        font-size: 20px;
      }
     
    </style>
<body>
    <div id="app">
        <div id="sidebar" class="active">
            <div class="sidebar-wrapper active">
                <div class="sidebar-header">
                    <div class="d-flex justify-content-between">
                        <div class="logo">
                            <h3 class="header-logo-text">< Bumble Bees oAuth /></h3>
                        </div>
                        <div class="toggler">
                            <a href="#" class="sidebar-hide d-xl-none d-block"><i class="bi bi-x bi-middle"></i></a>
                        </div>
                    </div>
                </div>

             
                <div class="sidebar-menu">
                    <ul class="menu">
                        <li class="sidebar-title">Menu</li>

                        <li class="sidebar-item  ">
                            <a href="./dashboard.html" class='sidebar-link'>
                                <i class="bi bi-laptop-fill"></i>
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <!-- <li class="sidebar-item  ">
                            <a href="./index.html" class='sidebar-link'>
                                <i class="bi bi-chat-quote-fill"></i>
                                <span>Chitram</span>
                            </a>
                        </li>
                        <li class="sidebar-item  ">
                            <a href="./index.html" class='sidebar-link'>
                                <i class="bi bi-option"></i>
                                <span>Family Tree</span>
                            </a>
                        </li> -->
 
                     
                    </ul>
                </div>
                <button class="sidebar-toggler btn x"><i data-feather="x"></i></button>
            </div>
        </div>
        <div id="main" class='layout-navbar'>
            <header class='mb-3'>
                <nav class="navbar navbar-expand navbar-light ">
                    <div class="container-fluid">
                        <a href="#" class="burger-btn d-block">
                            <i class="bi bi-justify fs-3"></i>
                        </a>

                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                
                                <li class="nav-item dropdown me-3">
                                    <a class="nav-link active dropdown-toggle" href="#" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <i class='bi bi-bell bi-sub fs-4 text-gray-600'></i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                                        <li>
                                            <h6 class="dropdown-header">Notifications</h6>
                                        </li>
                                        <li><a class="dropdown-item">No notification available</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <div class="dropdown">
                                <a href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                    <div class="user-menu d-flex">
                                        <div class="user-name text-end me-3">
                                            <h6 class="mb-0 text-gray-600">Administrator</h6>
                                            <p class="mb-0 text-sm text-gray-600"><span id="user" class="message">Hello, <email-id></Email-id></span></p>
                                        </div>
                                        <div class="user-img d-flex align-items-center">
                                            <div class="avatar avatar-md">
                                                <img src="https://kurudhi.netlify.app/admin/images/man.png">
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                                    <li>
                                        <h6 class="dropdown-header">Hello, Admin!</h6>
                                    </li>

                                    <!-- <li class="sidebar-item  ">
                                        <a href="./index.html" class='sidebar-link'>
                                            <i class="bi bi-chat-quote-fill"></i>
                                            <span>Foreroom</span>
                                        </a>
                                    </li>
                                    <li class="sidebar-item  ">
                                        <a href="./index.html" class='sidebar-link'>
                                            <i class="bi bi-option"></i>
                                            <span>Family Tree</span>
                                        </a>
                                    </li> -->
                                    <!-- <li><a class="dropdown-item" href="#"><i class="icon-mid bi bi-person me-2"></i> My
                                            Profile</a></li> -->
                                    <!-- <li><a class="dropdown-item" href="#">
                                        <i class="icon-mid bi bi-chat-quote-fill me-2"></i>
                                        Foreroom
                                    </a>
                                </li> -->
                                   
                                    <!-- <li><a class="dropdown-item" href="#"><i class="icon-mid bi bi-gear me-2"></i>
                                            Settings</a></li> -->
                                    <!-- <li><a class="dropdown-item" href="#"><i class="icon-mid bi bi-wallet me-2"></i>
                                            Wallet</a></li>
                                    <li> -->
                                        <hr class="dropdown-divider">
                                    </li>
                                    <li onclick="logout()"><a class="dropdown-item" href="#"><i
                                                class="icon-mid bi bi-box-arrow-left me-2"></i> Logout</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <div id="main-content">

                <div class="page-heading">
                    <div class="page-title">
                        <div class="row">
                            <div class="col-12 col-md-6 order-md-1 order-last">
                                <!-- <img width="200px" src="../assets/img/logo.png" alt="" srcset=""> -->
                                
                            </div>
                           
                            <!-- <div class="col-12 col-md-6 order-md-2 order-first">
                                <nav aria-label="breadcrumb" class="breadcrumb-header float-start float-lg-end">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">Layout Vertical Navbar
                                        </li>
                                    </ol>
                                </nav>
                            </div> -->
                        </div>
                    </div>

                   
                    <section class="section">
                        <div class="card">
                            <div class="card-header">
                                Create Your Event
                            </div>

    


        <div class="card-body">
            <form id="eventForm" method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
        
                <div class="row">
                    <div class="col-md-6 col-12">
                        <div class="form-group">
                            <label for="first-name-column ">Event Title</label>
                            <input type="text" inputmode="text" id="id1" class="form-control" placeholder="Event Title"
                                name="title">
                        </div>
                    </div>
                    <div class="col-md-6 col-12">
                        <div class="form-group">
                            <label for="first-name-column ">Event Location</label>
                            <input type="text" inputmode="text" id="id1" class="form-control" placeholder="Event Location"
                                name="location">
                        </div>
                    </div>
                    <div class="col-md-6 col-12">
                        <div class="form-group">
                            <label for="first-name-column ">Event Description</label>
                            <input type="" inputmode="text" id="id1" class="form-control" placeholder="Event Description"
                                name="description">
                        </div>
                    </div>
                    
                    
        
                    <div class="col-md-6 col-12">
                        <div class="form-group">
                            <label for="company-column">Event Date</label>
                            <input type="date" id="id12" class="form-control" name="date" placeholder="Event Date">
                        </div>
                    </div>

                    <div class="col-md-6 col-12">
                        <div class="form-group">
                            <label for="company-column">Event time</label>
                            <input type="time" id="id12" class="form-control" name="time" placeholder="Event Time">
                        </div>
                    </div>
                    <div class="col-md-6 col-12">
                        <div class="form-group">
                            <label for="company-column">Event Banner / Link</label>
                            <input type="text" id="id12" class="form-control" name="banner_image" placeholder="Banner Image Link">
                        </div>
                    </div>
                   

                    <div class="col-md-6 col-12">
                        <div class="form-group">
                            <div class="card">
                                <div class="card-content">
                                    <div class="card-body">
        
                                        <input type="checkbox" class="form-check-input form-check-success"
                                            id="terms_and_conditions" value="1" onclick="terms_changed(this)">
                                        <label class="form-check-label" for="customColorCheck3">
                                            <h6>
                                                Confirmed! The event details are correct.</h6>
                                        </label>
        
        
        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                   
                    
                   
        
        
                    <br>
                    <!-- <div class="row">
                        <div class="col-12">
                           
                        </div>
                    </div> -->
        
                    <br>
                    <br>
        
        
                    <div class="col-12 d-flex justify-content-end">
                        <button class="btn btn-primary me-1 mb-1" disabled="" onclick="check()"  type="submit">Submit</button>
                        <!-- <button class="btn btn-primary me-1 mb-1" id="selbtn" >Select</button>
                                <button class="btn btn-primary me-1 mb-1" id="redbtn" >read</button>
                                <button class="btn btn-primary me-1 mb-1" id="delbtn" >Delete</button> -->
        
                        <!-- <input type="checkbox"
                                class="form-check-input form-check-success" checked
                                name="customCheck" id="customColorCheck3">
                            <label class="form-check-label"
                                for="customColorCheck3">Success</label> -->
        
        
                        <button type="reset" class="btn btn-light-secondary me-1 mb-1">Reset</button>
                    </div>
                </div>
            </form>
            
            
        
        
        </div>

                            <div class="card-body">
                               
                            </div>
                        </div>
                    </section>
                </div>
<!--                 
        <button onclick="swalelement">submit</button>

        <script>

            swal("Here's the title!", "...and here's the text!");
        </script> -->

                <footer>
                    <div class="footer clearfix mb-0 text-muted">
                        <div class="float-start">
                            <p> <span id="current-year"></span> &copy; < Bumble Bees oAuth /> </p>
                        </div>
                        
                    </div>
                </footer>
            </div>
        </div>
    </div>

    <?php
        // Fetch all events from the database
        $conn = new mysqli($servername, $username, $password, $dbname);

        $query = "SELECT * FROM egsevents";
        $result = $conn->query($query);

        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                echo "<div class='event'>";
                echo "<h3>" . $row['title'] . "</h3>";
                // echo "<p>Date: " . $row['date'] . "</p>";
                // echo "<p>Time: " . $row['time'] . "</p>";
                echo "<p>Description: " . $row['description'] . "</p>";
                echo "<img src='" . $row['banner_image'] . "' alt='Event Banner'>";
                echo "</div>";
            }
        } else {
            echo "<p class='no-events'>No events found.</p>";
        }

        $conn->close();
        ?>
    </div>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>


    <script src="./vendors/perfect-scrollbar/perfect-scrollbar.min.js"></script>
    <script src="./js/bootstrap.bundle.min.js"></script>

    <script src="./js/main.js"></script>

        <!-- The core Firebase JS SDK is always required and must be listed first -->
        <script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-app.js"></script>

        <!-- TODO: Add SDKs for Firebase products that you want to use
            https://firebase.google.com/docs/web/setup#available-libraries -->
        <script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-analytics.js"></script>
        <script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-auth.js"></script>
    
    
<script src="https://www.gstatic.com/firebasejs/8.9.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.9.0/firebase-auth.js"></script>
<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyC7EsiaYH-tJj-wNEQl8ZrrmdvKCWS7ztY",
  authDomain: "egspj-bumblebees.firebaseapp.com",
  projectId: "egspj-bumblebees",
  storageBucket: "egspj-bumblebees.appspot.com",
  messagingSenderId: "3531307553",
  appId: "1:3531307553:web:162f525f3ed82d7830c160",
  measurementId: "G-6W931XY0SQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var auth = firebase.auth();

  firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("../index.html")
    }else{
        document.getElementById("user").innerHTML = "Hello, "+user.email    
    }
    
})


function logout(){
    firebase.auth().signOut()
}

</script>

<!-- ---------------------------------------- -->

<script>
    function terms_changed(termsCheckBox){
        if(termsCheckBox.checked){
            document.getElementById("submit_button").disabled = false;
        } else{
            document.getElementById("submit_button").disabled = true;
        }
    }



</script>
     
<script>
    // Get the current year
var currentYear = new Date().getFullYear();

// Set the current year in the HTML element with the specified ID
var currentYearElement = document.getElementById('current-year');
currentYearElement.textContent = currentYear.toString();

</script>

            



</body>


</html>