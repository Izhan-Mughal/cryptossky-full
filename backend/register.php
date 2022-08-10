<?php
header('Access-Control-Allow-Origin:*');
header("Access-Control-Allow-Headers:*");
header('Content-Type:application/json');
include './admin/config.php';
include './vendor/autoload.php';

use \Firebase\JWT\JWT;

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $_POST = json_decode(file_get_contents("php://input"),true);

    if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['phone']) && isset($_POST['password']) ) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $password = md5($_POST['password']);
        $SixDigitRandomNumber = rand(100000, 999999);
        $check = mysqli_query($con, "SELECT * FROM  `user` where email='$email' ");
        if (mysqli_num_rows($check) == 0) {
            $sql = mysqli_query($con, "INSERT INTO `user`( `name`, `email`, `phone`, `password`,`refer_code`) VALUES ('$name','$email','$phone','$password','$SixDigitRandomNumber')");
            if ($sql) {
                $payload = [
                    'iss' => "localhost",
                    'aud' => 'localhost',
                    'data' => [
                        'email' => $email,
                    ],
                ];

                $jwt = JWT::encode($payload, $secret_key, 'HS256');
                // try {
                //     $to = $email;
                //     $subject = "Account Verification Mail - Cryptossky";

                //     $headers = "From: Cryptossky<info@cryptossky.com>";

                //     $txt = "Your Verification Code is : " . $SixDigitRandomNumber;
                //     mail($to, $subject, $txt, $headers);
                    $response  = [
                        'status' => 'true',
                        'data' => [
                            'message' => 'Account Verification Code has been sent to your email address',
                            'email' => $email,
                            'token' => $jwt,
                        ]
                    ];
                // } catch (Exception $e) {
                //     $response  = [
                //         'status' => 'false',
                //         'data' => $e->getMessage()
                //     ];
                // }
                echo json_encode($response);
            } else {
                echo json_encode(['status' => 'false', 'data' => 'Server Error']);
            }
        } else {
            echo json_encode(['status' => 'false', 'data' => 'User Already Registerd']);
        }
    } else {
        echo json_encode(['status' => 'false', 'data' => 'Invalid API Call']);
    }
} else {
    echo json_encode(['status' => 'false', 'data' => 'Invalid Request']);
}
