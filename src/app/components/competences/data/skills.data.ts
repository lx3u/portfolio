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
      { name: 'Bash', logo: '/assets/logos/bash.svg' },
    ],
  },
  {
    title: 'Base de données',
    skills: [
      { name: 'PostgreSQL', logo: '/assets/logos/postgresql.svg' },
      { name: 'Conception MCD/MLD', logo: '/assets/logos/bdd.svg' },
    ],
  },
  {
    title: 'Versionning et travail collaboratif',
    skills: [
      { name: 'Git', logo: '/assets/logos/git.svg' },
      { name: 'GitLab', logo: '/assets/logos/gitlab.svg' },
      { name: 'GitHub', logo: '/assets/logos/github.svg' },
    ],
  },
  {
    title: 'IDEs',
    skills: [
      { name: 'Visual Studio Code', logo: '/assets/logos/vscode.svg' },
      { name: 'Suite JetBrains', logo: '/assets/logos/jetbrains.svg' },
      { name: 'Eclipse', logo: '/assets/logos/eclipse.svg' },
    ],
  },
];
