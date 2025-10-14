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
      id: 1,
      name: 'PacMan (EN COURS)',
      description:
        "Clone du jeu PacMan en Java/JavaFX (2ème année BUT Informatique), réalisé en groupe, pour continuer à approfondir l'apprentissage de Java et découvrir les patrons de conception.",
      image: 'assets/img_projet3.png',
      githubUrl: 'https://github.com/lx3u/pacman',
      tags: ['Java', 'JavaFX'],
    },
    {
      id: 2,
      name: 'Portfolio web (EN COURS)',
      description:
        'Portfolio personnel pour présenter mon parcours et mes compétences, réalisé avec le framework Angular (dans le but de découvrir de nouvelles manières de développer des sites web).',
      image: 'assets/img_projet2.png',
      githubUrl: 'https://github.com/lx3u/portfolio',
      tags: ['Angular', 'TypeScript', 'HTML', 'CSS'],
    },
    {
      id: 3,
      name: 'Bomberman',
      description:
        "Clone du jeu Bomberman en Java et JavaFX (2ème semestre BUT Informatique) afin de découvrir le développement d'application avec IHM.",
      image: 'assets/img_projet4.png',
      githubUrl: 'https://github.com/lx3u/bomberman',
      tags: ['Java', 'JavaFX'],
    },
    {
      id: 4,
      name: "Site vitrine - L'Air du cinéma",
      description:
        'Premier projet réalisé en binôme en cours (1er semestre BUT Informatique) pour mettre en pratique notre maîtrise de HTML/CSS.',
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
