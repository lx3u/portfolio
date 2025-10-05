import { SkillCategory } from '../models/skill.model';

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Langages web',
    skills: [
      { name: 'HTML', logo: '/assets/logos/html.svg' },
      { name: 'CSS', logo: '/assets/logos/css.svg' },
      { name: 'PHP', logo: '/assets/logos/php.svg' },
    ],
  },
  {
    title: 'Frameworks',
    skills: [
      { name: 'Angular', logo: '/assets/logos/angular.svg' },
      { name: 'Laravel', logo: '/assets/logos/laravel.svg' },
    ],
  },
  {
    title: 'Langages de programmation',
    skills: [
      { name: 'Java', logo: '/assets/logos/java.svg' },
      { name: 'Python', logo: '/assets/logos/python.svg' },
    ],
  },
  {
    title: 'Base de données',
    skills: [{ name: 'PostgreSQL', logo: '/assets/logos/postgresql.svg' }],
  },
];
