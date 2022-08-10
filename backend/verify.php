<?php
header('Access-Control-Allow-Origin:*');
header("Access-Control-Allow-Headers:*");
header('Content-Type:application/json');
include '../config.php';
include '../vendor/autoload.php';

use \Firebase\JWT\JWT;

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['email']) && isset($_POST['code'])) {
        $email = $_POST['email'];
        $code = $_POST['code'];
        $sql = mysqli_query($con, "SELECT * FROM `users` WHERE `email`='$email' AND `reference_code`='$code' AND status=0");
        if (mysqli_num_rows($sql)==1) {
            $sql =mysqli_query($con,"UPDATE `users` SET status=1,`reference_code`='' WHERE `email`='$email' AND `reference_code`='$code'");
            if($sql){
                $payload = [
                    'iss' => "localhost",
                    'aud' => 'localhost',
                    'data' => [
                        'email' => $email,
                    ],
                ];
                
                $jwt = JWT::encode($payload, $secret_key, 'HS256');
                $response  = [
                    'status' => 'true',
                    'data' => [
                        'message' => 'Verification Completed',
                        'token' => $jwt,
                    ]
                ];
                echo json_encode($response);
            }else {
                echo json_encode(['status' => 'false', 'data' => 'Server Error']);
            }
        } else {
            echo json_encode(['status' => 'false', 'data' => 'Invalid OTP Code']);
        }
    } else {
        echo json_encode(['status' => 'false', 'data' => 'Invalid API Call']);
    }
} else {
    echo json_encode(['status' => 'false', 'data' => 'Invalid Request']);
}
