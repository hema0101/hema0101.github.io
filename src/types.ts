export interface Skill {
  name: string;
  icon: string;
  items: string[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string[];
  links: {
    demo?: string;
    repo?: string;
    source?: string;
  };
}
