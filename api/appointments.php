<?php
require_once __DIR__ . '/config/cors.php';
require_once __DIR__ . '/config/database_dental.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true) ?: [];
    $name = trim($input['name'] ?? '');
    $phone = trim($input['phone'] ?? '');
    $email = trim($input['email'] ?? '');
    $date = trim($input['date'] ?? '');
    $time_slot = trim($input['time_slot'] ?? '');
    $service = trim($input['service'] ?? '');
    $message = trim($input['message'] ?? '');

    $errors = [];
    if ($name === '') $errors[] = 'Name is required';
    if ($phone === '') $errors[] = 'Phone is required';
    if ($email === '') $errors[] = 'Email is required';
    if ($date === '') $errors[] = 'Date is required';
    if ($time_slot === '') $errors[] = 'Time slot is required';
    if ($service === '') $errors[] = 'Service is required';

    if (!empty($errors)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => implode('. ', $errors)]);
        exit;
    }

    try {
        $stmt = $pdo->prepare('INSERT INTO appointments (name, phone, email, date, time_slot, service, message, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)');
        $stmt->execute([$name, $phone, $email, $date, $time_slot, $service, $message, 'pending']);
        $id = (int) $pdo->lastInsertId();
        echo json_encode(['success' => true, 'message' => 'Appointment requested successfully.', 'id' => $id]);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Could not save appointment. Please try again.']);
    }
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    try {
        $stmt = $pdo->query('SELECT id, name, phone, email, date, time_slot, service, message, status, created_at FROM appointments ORDER BY date DESC, time_slot ASC');
        $rows = $stmt->fetchAll();
        echo json_encode(['success' => true, 'appointments' => $rows]);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Could not fetch appointments.']);
    }
    exit;
}

http_response_code(405);
echo json_encode(['error' => 'Method not allowed']);
