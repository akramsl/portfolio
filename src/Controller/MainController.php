<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class MainController extends AbstractController
{
    #[Route('/{reactRouting}', name: 'app_home', defaults: ['reactRouting' => null])]
    public function index(): Response
    {
        return $this->render('main/index.html.twig');
    }
}
