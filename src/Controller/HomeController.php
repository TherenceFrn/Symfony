<?php

namespace App\Controller;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Routing\Requirement\Requirement;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use App\Entity\User;

class HomeController extends AbstractController
{
    #[Route('/', name: 'home')]
    public function index(
        Request $request,
        EntityManagerInterface $em,
        UserPasswordHasherInterface $passwordHasher
    ): Response {
        // Crée un nouvel utilisateur
        $user = new User();
        $user->setUsername('therence');
        $user->setRoles(['ROLE_ADMIN']);

        // Hash le mot de passe
        $hashedPassword = $passwordHasher->hashPassword($user, 'therence');
        $user->setPassword($hashedPassword);

        // Persiste l'utilisateur en base de données
        $em->persist($user);
        $em->flush();

        return $this->render('home/index.html.twig');
    }
}
