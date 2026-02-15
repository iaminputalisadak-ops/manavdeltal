<?php
require_once __DIR__ . '/config/cors.php';
require_once __DIR__ . '/config/database_dental.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

try {
    $stmt = $pdo->prepare('SELECT id, title, description, icon, sort_order FROM services WHERE status = ? ORDER BY sort_order ASC, id ASC');
    $stmt->execute(['active']);
    $services = $stmt->fetchAll();
    echo json_encode(['success' => true, 'services' => $services]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'services' => []]);
}
