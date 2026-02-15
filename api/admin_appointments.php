<?php
/**
 * Simple admin view: list appointments.
 * In production, add authentication (e.g. session or token).
 */
require_once __DIR__ . '/config/cors.php';
require_once __DIR__ . '/config/database_dental.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

try {
    $stmt = $pdo->query('SELECT id, name, phone, email, date, time_slot, service, message, status, created_at FROM appointments ORDER BY date DESC, created_at DESC');
    $rows = $stmt->fetchAll();
    echo json_encode(['success' => true, 'appointments' => $rows]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Could not fetch appointments.']);
}
