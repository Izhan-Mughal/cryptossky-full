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
        $sql = mysqli_query($con, "SELECT * FROM `transaction_history` where user_id='$id' ORDER BY id DESC ");

        foreach ($sql as $key => $value) {
            $user_id = $value['user_id'];
            $plan_id = $value['plan_id'];
            $sql2 = mysqli_query($con, "SELECT * FROM `user` where id='$user_id' ");
            $sql3 = mysqli_query($con, "SELECT * FROM `plans` where id='$plan_id' ");
            array_push(
                $response,
                [
                    'history' => $value,
                    'user' => mysqli_fetch_assoc($sql2),
                    'plan' => mysqli_fetch_assoc($sql3),
                ]
            );
        }


        echo json_encode($response);
    } else {
        echo json_encode(['status' => 'false', 'data' => 'Invalid API Call']);
    }
} else {
    echo json_encode(['status' => 'false', 'data' => 'Invalid Request']);
}
