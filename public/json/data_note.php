<?php

$host = "sasha7ab.beget.tech"; 
$user = "sasha7ab_db"; 
$password = "1234sS"; 
$dbname = "sasha7ab_db"; 


$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT lat, lng, name_ch, agency, url, logo, price, forAll, description, delegate FROM DATA_INFO";


$result = $conn->query($sql);


if ($result && $result->num_rows > 0) {
    $data = [];
 
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }


    $json = json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);



    file_put_contents('data_note.json', $json);

    echo "Data successfully saved to data_note.json";
} else {
    echo "0 results";
}

$conn->close();

?>
