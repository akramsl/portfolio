<?php

namespace App\Controller;

use App\Entity\Project;
use App\Entity\Skill;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class ApiController extends AbstractController
{
    #[Route('/api/skills', name: 'api_skills', methods:['GET'])]
    public function getSkills(EntityManagerInterface $entityManager): JsonResponse
    {
        $skills = $entityManager->getRepository(Skill::class)->findAll();
        return $this->json($skills);
    }
    #[Route('/api/projects', name: 'api_projects', methods:['GET'])]
    public function getProjects(EntityManagerInterface $entityManager): JsonResponse
    {
        $projects = $entityManager->getRepository(Project::class)->findAll();
        return $this->json($projects);
    }
    #[Route('/api/contact', name: 'api_contact', methods:['POST'])]
    public function contact(EntityManagerInterface $entityManager): JsonResponse
    {
        // logique pour sauvegarder le message de contact
        return $this->json(['message' => 'Message envoyé avec succès']);
    }
}
