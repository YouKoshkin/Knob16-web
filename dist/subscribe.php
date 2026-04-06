<?php
declare(strict_types=1);

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'method_not_allowed']);
    exit;
}

$rawBody = file_get_contents('php://input');
$payload = json_decode($rawBody ?: '', true);

if (!is_array($payload)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'invalid_request']);
    exit;
}

$email = strtolower(trim((string) ($payload['email'] ?? '')));
$honeypot = trim((string) ($payload['company'] ?? ''));

if ($honeypot !== '') {
    echo json_encode(['success' => true]);
    exit;
}

if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'invalid_email']);
    exit;
}

$loopsApiKey = getenv('LOOPS_API_KEY') ?: '';
$loopsFormEndpoint = getenv('LOOPS_FORM_ENDPOINT_URL') ?: '';
$loopsMailingLists = trim((string) (getenv('LOOPS_MAILING_LIST_IDS') ?: ''));
$loopsSource = trim((string) (getenv('LOOPS_SOURCE') ?: 'website'));
$loopsUserGroup = trim((string) (getenv('LOOPS_USER_GROUP') ?: 'Early Access'));

if ($loopsApiKey === '' || $loopsFormEndpoint === '') {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'server_error']);
    exit;
}

function loopsRequest(
    string $url,
    string $method,
    array $headers = [],
    ?string $body = null
): array {
    $headerLines = implode("\r\n", $headers);
    $context = stream_context_create([
        'http' => [
            'method' => $method,
            'header' => $headerLines,
            'content' => $body ?? '',
            'ignore_errors' => true,
            'timeout' => 15,
        ],
    ]);

    $responseBody = @file_get_contents($url, false, $context);
    $statusLine = $http_response_header[0] ?? 'HTTP/1.1 500';
    preg_match('/\s(\d{3})\s/', $statusLine, $matches);
    $status = isset($matches[1]) ? (int) $matches[1] : 500;

    return [
        'status' => $status,
        'body' => $responseBody === false ? '' : $responseBody,
    ];
}

$findContactResponse = loopsRequest(
    'https://app.loops.so/api/v1/contacts/find?email=' . rawurlencode($email),
    'GET',
    [
        'Authorization: Bearer ' . $loopsApiKey,
        'Accept: application/json',
    ]
);

if ($findContactResponse['status'] >= 400) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'server_error']);
    exit;
}

$existingContacts = json_decode($findContactResponse['body'], true);
if (is_array($existingContacts) && count($existingContacts) > 0) {
    echo json_encode(['success' => false, 'error' => 'already_subscribed']);
    exit;
}

$formFields = [
    'email' => $email,
    'source' => $loopsSource,
    'userGroup' => $loopsUserGroup,
];

if ($loopsMailingLists !== '') {
    $formFields['mailingLists'] = $loopsMailingLists;
}

$subscribeResponse = loopsRequest(
    $loopsFormEndpoint,
    'POST',
    [
        'Content-Type: application/x-www-form-urlencoded',
        'Accept: application/json',
    ],
    http_build_query($formFields)
);

$subscribePayload = json_decode($subscribeResponse['body'], true);

if ($subscribeResponse['status'] === 200 && is_array($subscribePayload) && ($subscribePayload['success'] ?? false) === true) {
    echo json_encode(['success' => true]);
    exit;
}

if (is_array($subscribePayload)) {
    $message = strtolower((string) ($subscribePayload['message'] ?? ''));
    if (str_contains($message, 'already') || str_contains($message, 'exists')) {
        echo json_encode(['success' => false, 'error' => 'already_subscribed']);
        exit;
    }
}

http_response_code(500);
echo json_encode(['success' => false, 'error' => 'server_error']);
