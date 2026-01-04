import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projets',
  imports: [],
  standalone: true,
  templateUrl: './projets.html',
  styleUrl: './projets.css',
})
export class ProjetsComponent implements OnInit {
  projects = [
    {
      name: 'Blog de musique - O Sol Sound',
      description:
        "Conception d'un site web dynamique réalisé en équipe lors d'un marathon de 36h, sur le thème de la Bossa Nova, réalisé avec le framework Laravel.",
      image: 'assets/img_projet5.png',
      githubUrl: 'https://github.com/lx3u/projet-marathon',
      tags: ['Laravel', 'PHP', 'HTML', 'CSS'],
    },
    {
      name: 'Portfolio web',
      description:
        'Portfolio personnel réalisé avec Angular pour présenter mes projets et compétences et pour prendre en main pour la première fois ce framework.',
      image: 'assets/img_projet2.png',
      githubUrl: 'https://github.com/lx3u/portfolio',
      tags: ['Angular', 'TypeScript', 'HTML', 'CSS'],
    },
    {
      name: 'PacMan',
      description:
        "Clone du jeu PacMan en Java/JavaFX réalisé lors d'un projet scolaire afin d'approfondir mes compétences en programmation orientée objet et de découvrir les patrons de conception.",
      image: 'assets/img_projet3.png',
      githubUrl: 'https://github.com/lx3u/pacman',
      tags: ['Java', 'JavaFX'],
    },
    {
      name: 'Bomberman',
      description:
        "Clone du jeu Bomberman en Java/JavaFX réalisé lors d'un projet scolaire pour découvrir le découpage MVC.",
      image: 'assets/img_projet4.png',
      githubUrl: 'https://github.com/lx3u/bomberman',
      tags: ['Java', 'JavaFX'],
    },
    {
      name: "Site vitrine - L'Air du cinéma",
      description:
        "Réalisation d'un site vitrine pour une entreprise d'événementiel fictive en HTML et CSS.",
      image: 'assets/img_projet1.png',
      githubUrl: 'https://github.com/Shun-codes/L-Air-du-Cinema',
      tags: ['HTML', 'CSS'],
    },
  ];

  ngOnInit(): void {
    this.animateOnScroll();
  }

  animateOnScroll(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    setTimeout(() => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach((el) => observer.observe(el));
    }, 100);
  }
}
