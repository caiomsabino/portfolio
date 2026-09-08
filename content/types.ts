export interface ExperienceEntry {
  organization: string;
  role: string;
  dates: string;
  location: string;
  bullets: string[];
}

export interface ProjectEntry {
  name: string;
  tagline: string;
  dates: string;
  description: string;
  href: string | null;
  linkLabel: string | null;
  tech: string[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface SpokenLanguage {
  name: string;
  level: string;
  /** 1 basic, 2 intermediate, 3 fluent, 4 native. Drives the level meter. */
  proficiency: 1 | 2 | 3 | 4;
  /** ISO country codes whose flags represent the language. */
  regions: string[];
}

export interface SiteContent {
  nav: {
    menuLabel: string;
    about: string;
    experience: string;
    projects: string;
    skills: string;
    contact: string;
  };
  hero: {
    name: string;
    role: string;
    pitch: string;
    ctaProjects: string;
    ctaResume: string;
    trace: {
      request: string;
      status: string;
      caption: string;
      steps: string[];
    };
  };
  about: {
    label: string;
    heading: string;
    paragraphs: string[];
  };
  experience: {
    label: string;
    heading: string;
    entries: ExperienceEntry[];
  };
  projects: {
    label: string;
    heading: string;
    entries: ProjectEntry[];
  };
  skills: {
    label: string;
    heading: string;
    groups: SkillGroup[];
    languagesLabel: string;
    languages: SpokenLanguage[];
  };
  contact: {
    label: string;
    heading: string;
    blurb: string;
    emailLabel: string;
    githubLabel: string;
    linkedinLabel: string;
    resumeLabel: string;
    location: string;
  };
  footer: {
    note: string;
  };
}
