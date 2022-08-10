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
        $plan_id = $_POST['plan_id'];

        $select_id = mysqli_query($con, "SELECT id FROM `user` where email ='$email'");

        $id = mysqli_fetch_assoc($select_id);
        $id = $id['id'];

        $sql = mysqli_query($con, "INSERT INTO `transaction_history`(`user_id`, `plan_id`) VALUES ('$id','$plan_id')");
        if ($sql) {
            echo json_encode(['status' => 'True', 'data' => 'Transaction Success']);
        } else {
            echo json_encode(['status' => 'false', 'data' => 'Server error']);
        }
    } else {
        echo json_encode(['status' => 'false', 'data' => 'Invalid API Call']);
    }
} else {
    echo json_encode(['status' => 'false', 'data' => 'Invalid Request']);
}
