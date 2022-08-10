<?php
header('Access-Control-Allow-Origin:*');
header("Access-Control-Allow-Headers:*");
header('Content-Type:application/json');
include './admin/config.php';
include './vendor/autoload.php';

use \Firebase\JWT\JWT;

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $_POST = json_decode(file_get_contents("php://input"), true);

    if (isset($_POST['email']) && isset($_POST['password'])) {
        $email = $_POST['email'];
        $password = md5($_POST['password']);
        $sql = mysqli_query($con, "SELECT * FROM `user` WHERE `email`='$email' AND `password`='$password'");
        if ($sql) {
            if (mysqli_num_rows($sql) == 1) {
                $check_status = mysqli_query($con, "SELECT * FROM `user` WHERE `email`='$email' AND `password`='$password' AND `status`='1'");
                if (mysqli_num_rows($check_status) == 1) {

                    foreach ($sql as $data);
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
                            'message' => 'Login Successfully',
                            'email' => $email,
                            'token' => $jwt,
                        ]
                    ];
                    echo json_encode($response);
                } else {
                    echo json_encode(['status' => 'not_verified', 'data' => 'Account no verified']);
                }
            } else {
                echo json_encode(['status' => 'false', 'data' => 'Invalid Email or Password']);
            }
        } else {
            echo json_encode(['status' => 'false', 'data' => 'Server Error']);
        }
    } else {
        echo json_encode(['status' => 'false', 'data' => 'Invalid API Call']);
    }
} else {
    echo json_encode(['status' => 'false', 'data' => 'Invalid Request']);
}
