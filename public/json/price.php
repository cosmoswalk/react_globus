<?php

$host = "sasha7ab.beget.tech"; 
$user = "sasha7ab_db"; 
$password = "1234sS"; 
$dbname = "sasha7ab_db"; 


$MainnetPrice = array(
    array('name_ch' => 'Canto'),
    array('name_ch' => 'Evmos'),
    array('name_ch' => 'Gravity'),
    array('name_ch' => 'Meme'),
    array('name_ch' => 'Rebus'),
    array('name_ch' => 'Solana'),
    array('name_ch' => 'Stride'),
    array('name_ch' => 'Umee'),
    array('name_ch' => 'Arable'),
    array('name_ch' => 'Lambda'),
    array('name_ch' => 'Gitopia'),
    array('name_ch' => 'Aura'),
    array('name_ch' => 'Humans'),
    array('name_ch' => 'Quicksilver'),
    array('name_ch' => 'Archway'),
    array('name_ch' => 'Celestia'),
    array('name_ch' => 'Haqq')
  );
  $conn = new mysqli($host, $user, $password, $dbname);

  
  if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
  }
 
  foreach ($MainnetPrice as &$item) {
      $name_ch = $item['name_ch'];
    
  
      $sql = "SELECT price, price1, price2, price3, price4 FROM MainnetPrice WHERE name_ch = '$name_ch'";
      $result = $conn->query($sql);
  
      if ($result && $result->num_rows > 0) {
          $row = $result->fetch_assoc();
          $item['price'] = $row['price'];
          $item['price1'] = $row['price1'];
          $item['price2'] = $row['price2'];
          $item['price3'] = $row['price3'];
          $item['price4'] = $row['price4'];
      }
  }

  
  $conn->close();
 

  $jsonData = json_encode($MainnetPrice, JSON_PRETTY_PRINT);
  
 
  file_put_contents('price_value.json', $jsonData);
  
  if (file_put_contents('price_value.json', $jsonData)) {
    echo "Успешно создан файл price_value.json";
} else {
    echo "Ошибка при создании файла price_value.json";
}
  ?>