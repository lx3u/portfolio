export interface Skill {
  name: string;
  logo: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}
