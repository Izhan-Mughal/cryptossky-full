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
        $email = $_POST['email'];

        $select_id = mysqli_query($con, "SELECT id FROM `user` where email ='$email'");

        $id = mysqli_fetch_assoc($select_id);
        $id = $id['id'];

        $response = array();
        $sql = mysqli_query($con, "SELECT * FROM `user` where id='$id'");

        echo json_encode(mysqli_fetch_assoc($sql));

    } else {
        echo json_encode(['status' => 'false', 'data' => 'Invalid API Call']);
    }
} else {
    echo json_encode(['status' => 'false', 'data' => 'Invalid Request']);
}
