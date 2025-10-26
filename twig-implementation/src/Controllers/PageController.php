<?php

namespace App\Controllers;

use Twig\Environment;
use Twig\Loader\FilesystemLoader;

class PageController
{
    private $twig;

    public function __construct()
    {
        $loader = new FilesystemLoader(__DIR__ . '/../../templates');
        $this->twig = new Environment($loader, [
            'cache' => false, // Disable cache for development
            'debug' => true,
        ]);
    }

    public function landing()
    {
        echo $this->twig->render('pages/landing.html.twig');
    }

    public function login()
    {
        echo $this->twig->render('pages/login.html.twig');
    }

    public function signup()
    {
        echo $this->twig->render('pages/signup.html.twig');
    }

    public function dashboard()
    {
        echo $this->twig->render('pages/dashboard.html.twig');
    }

    public function tickets()
    {
        echo $this->twig->render('pages/tickets.html.twig');
    }
}