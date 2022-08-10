<?php
header('Access-Control-Allow-Origin:*');
header("Access-Control-Allow-Headers:*");
header('Content-Type:application/json');
include './admin/config.php';
include './vendor/autoload.php';

use \Firebase\JWT\JWT;

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $_POST = json_decode(file_get_contents("php://input"), true);

    if (isset($_POST['token'])) {
        $sql = mysqli_query($con,"SELECT * FROM `plans` ");
        $response = array();
        foreach ($sql as $value) {
            array_push($response,$value);
        }
        echo json_encode($response);
    } else {
        echo json_encode(['status' => 'false', 'data' => 'Invalid API Call']);
    }
} else {
    echo json_encode(['status' => 'false', 'data' => 'Invalid Request']);
}
