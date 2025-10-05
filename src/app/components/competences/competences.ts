import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillCategory } from './models/skill.model';
import { SKILLS_DATA } from './data/skills.data';
import { SkillCardComponent } from './skill-card/skill-card';

@Component({
  selector: 'app-competences',
  standalone: true,
  imports: [CommonModule, SkillCardComponent],
  templateUrl: './competences.html',
  styleUrl: './competences.css',
})
export class CompetencesComponent {
  skillCategories: SkillCategory[] = SKILLS_DATA;
}
