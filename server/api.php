<?php
    $itemsStr = $_POST['body'];
	$deviceId = $_POST['deviceid'];
    $nombre_archivo = "logs.txt"; 
	if($archivo = fopen($nombre_archivo, "a"))
	{
		fwrite($archivo," Device :".$_POST['deviceid']." data:" .$itemsStr."\n");
		fclose($archivo);
	}
        
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "traker";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
	
	$items =  json_decode($itemsStr,true);
	
	if($archivo = fopen($nombre_archivo, "a"))
	{
		fwrite($archivo," lat :".$items[0]['lat']."\n");
		fclose($archivo);
	}
	
	//asort($items);	
	$current = $items[0];
  	
    $sql = "UPDATE device SET lat='".$current['lat']."',lon='".$current['lon']."' WHERE code=".$deviceId."";

    if ($conn->query($sql) === TRUE) {
        //echo "Record updated successfully";
    } 
    $conn->close();
?>