
<?php
 
 //Define your host here.
 $hostname = "localhost";

 //Define your database User Name here.
 $username = "root";

 //Define your database Password here.
 $password = "";

 //Define your Database Name here.
 $dbname = "tour_guide";

 $conn = mysqli_connect($hostname, $username, $password,$dbname);
 
 // mysqli_select_db($conn,$dbname);

 // Type your website name or domain name here.
 $domain_name = "http://192.168.43.51/TourGuide/" ;
 
 // Image uploading folder.
 $target_dir = "uploads";
 
 // Generating random image name each time so image name will not be same .
 $target_dir = $target_dir . "/" .rand() . "_" . time() . ".jpeg";
 if(move_uploaded_file($_FILES['image']['tmp_name'], $target_dir)){
     //print_r($target_dir);
     // Adding domain name with image random name.
     $target_dir = $domain_name . $target_dir ;
     
     // Inserting data into MySQL database.
     $sql="insert into  image_details (id, image_url) VALUES(null, '$target_dir')";
     if(mysqli_query($conn, $sql)){
         $MESSAGE= $target_dir;
     } else{
         $MESSAGE="ERROR: Could not able to execute $sql. " . mysqli_query($conn);
     }
     // $MESSAGE = "Image Uploaded Successfully." ;
         
     // Printing response message on screen after successfully inserting the image .	
     echo json_encode($MESSAGE);
 }


?>