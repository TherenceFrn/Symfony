<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'home')]
    public function index(
        Request $request,
        EntityManagerInterface $em,
        UserPasswordHasherInterface $passwordHasher,
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
