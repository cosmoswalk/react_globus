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

    $sql = "SELECT `date_price`,`date_price1`,`date_price2`,`date_price3`,`date_price4` FROM `MainnetPrice` WHERE `name_ch` IN ('$name_ch')";
    $result = $conn->query($sql);

    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $item['date_price'] = date('Y-m-d', strtotime($row['date_price']));
        $item['date_price1'] = ($row['date_price1'] != null) ? date('Y-m-d', strtotime($row['date_price1'])) : null;
        $item['date_price2'] = ($row['date_price2'] != null) ? date('Y-m-d', strtotime($row['date_price2'])) : null;
        $item['date_price3'] = ($row['date_price3'] != null) ? date('Y-m-d', strtotime($row['date_price3'])) : null;
        $item['date_price4'] = ($row['date_price4'] != null) ? date('Y-m-d', strtotime($row['date_price4'])) : null;
    }
}

$conn->close();

$jsonData = json_encode($MainnetPrice, JSON_PRETTY_PRINT);

if (file_put_contents('price_date.json', $jsonData)) {
    echo "Успешно создан файл price_date.json";
} else {
    echo "Ошибка при создании файла price_date.json";
}
?>
