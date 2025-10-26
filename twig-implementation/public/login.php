<?php

require_once __DIR__ . '/../vendor/autoload.php';

use App\Controllers\PageController;

$controller = new PageController();
$controller->login();