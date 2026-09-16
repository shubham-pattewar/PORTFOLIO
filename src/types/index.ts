export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  accent: string;
  technologies: string[];
  problem: string;
  built: string;
  approach: string;
  challenge: string;
  engineering: string;
  outcome: string;
  github?: string;
  liveDemo?: string;
  screenshots: {
    id: string;
    label: string;
    caption: string;
    isDominant?: boolean;
  }[];
}

export interface Technology {
  name: string;
  accent: string;
  rotation?: string;
  usedIn: string[];
}

export interface Achievement {
  id: string;
  year: string;
  title: string;
  organization: string;
  context: string;
  badge: string;
  accent: string;
}

export interface ExplorationEvent {
  id: string;
  title: string;
  location: string;
  date: string;
  note: string;
  accent: string;
  tags: string[];
  photos: {
    id: string;
    caption: string;
    tag: string;
    aspect: string;
  }[];
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  location: string;
  highlights: string[];
}

export interface ConceptCard {
  id: string;
  number: string;
  title: string;
  explanation: string;
  rotation: string;
  accent: string;
  colSpan?: string;
}

export interface GithubRepo {
  name: string;
  description: string;
  language: string;
  stars: number;
  url: string;
  updatedAt: string;
}
