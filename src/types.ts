export interface Skill {
  category: string;
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
  categories: string[];
  links: {
    demo?: string;
    repo?: string;
    source?: string;
  };
}
