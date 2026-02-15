<?php
require_once __DIR__ . '/config/cors.php';
require_once __DIR__ . '/config/database.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $stmt = $pdo->query('SELECT id, name, created_at FROM items ORDER BY id DESC');
    $items = $stmt->fetchAll();
    echo json_encode(['items' => $items]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true) ?: [];
    $name = trim($input['name'] ?? '');
    if ($name === '') {
        http_response_code(400);
        echo json_encode(['error' => 'Name is required']);
        exit;
    }
    $stmt = $pdo->prepare('INSERT INTO items (name) VALUES (?)');
    $stmt->execute([$name]);
    $id = (int) $pdo->lastInsertId();
    echo json_encode(['id' => $id, 'name' => $name]);
    exit;
}

http_response_code(405);
echo json_encode(['error' => 'Method not allowed']);
