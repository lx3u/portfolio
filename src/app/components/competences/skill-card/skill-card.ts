import { Component, Input } from '@angular/core';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-skill-card',
  standalone: true,
  templateUrl: './skill-card.html',
  styleUrls: ['./skill-card.css'],
})
export class SkillCardComponent {
  @Input() skill!: Skill;
}
