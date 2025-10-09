import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a-propos',
  standalone: true,
  templateUrl: './a-propos.html',
  styleUrl: './a-propos.css'
})

export class AProposComponent implements OnInit {
  timeline = [
    {
      period: 'En cours',
      title: 'IUT de Lens',
      subtitle: 'BUT Informatique',
      description: 'Parcours A : Conception et réalisation d\'applications',
      mention: '',
      active: true
    },
    {
      period: '2021 - 2024',
      title: 'Lycée Guy Mollet',
      subtitle: 'Baccalauréat Général',
      description: 'Spécialités Mathématiques et NSI',
      mention: 'Mention Bien',
      active: false
    }
  ];

  ngOnInit(): void {
    this.animateOnScroll();
  }

  animateOnScroll(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    setTimeout(() => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(el => observer.observe(el));
    }, 100);
  }
}