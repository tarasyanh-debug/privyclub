<?php
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Метод не поддерживается']);
    exit;
}

$body = file_get_contents('php://input');
$data = json_decode($body, true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Некорректный формат данных']);
    exit;
}

$fields = ['name', 'phone', 'email', 'city', 'propertyType'];
foreach ($fields as $field) {
    if (empty(trim($data[$field] ?? ''))) {
        http_response_code(422);
        echo json_encode(['success' => false, 'error' => 'Все поля обязательны для заполнения']);
        exit;
    }
}

$name         = htmlspecialchars(trim($data['name']),         ENT_QUOTES, 'UTF-8');
$phone        = htmlspecialchars(trim($data['phone']),        ENT_QUOTES, 'UTF-8');
$email        = htmlspecialchars(trim($data['email']),        ENT_QUOTES, 'UTF-8');
$city         = htmlspecialchars(trim($data['city']),         ENT_QUOTES, 'UTF-8');
$propertyType = htmlspecialchars(trim($data['propertyType']), ENT_QUOTES, 'UTF-8');

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => 'Некорректный email адрес']);
    exit;
}

$to      = 'tarasyan.a@yandex.ru';
$subject = '=?UTF-8?B?' . base64_encode('Новая заявка с сайта Privy Club') . '?=';

$message = "Новая заявка с сайта Privy Club\n";
$message .= str_repeat('-', 40) . "\n";
$message .= "Имя:               {$name}\n";
$message .= "Телефон:           {$phone}\n";
$message .= "Email:             {$email}\n";
$message .= "Город:             {$city}\n";
$message .= "Тип недвижимости:  {$propertyType}\n";

$headers  = "From: noreply@privyclub.ru\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "Content-Transfer-Encoding: base64\r\n";

$sent = mail($to, $subject, base64_encode($message), $headers);

if ($sent) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Ошибка отправки письма']);
}
