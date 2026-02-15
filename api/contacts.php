<?php
require_once __DIR__ . '/config/cors.php';
require_once __DIR__ . '/config/database_dental.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true) ?: [];
    $name = trim($input['name'] ?? '');
    $email = trim($input['email'] ?? '');
    $subject = trim($input['subject'] ?? '');
    $message = trim($input['message'] ?? '');

    if ($name === '' || $email === '' || $message === '') {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Name, email and message are required.']);
        exit;
    }

    try {
        $stmt = $pdo->prepare('INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)');
        $stmt->execute([$name, $email, $subject, $message]);
        echo json_encode(['success' => true, 'message' => 'Message sent successfully. We will get back to you soon.']);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Could not send message. Please try again.']);
    }
    exit;
}

http_response_code(405);
echo json_encode(['error' => 'Method not allowed']);
