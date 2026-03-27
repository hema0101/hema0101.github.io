import { motion } from "motion/react";
import { Code, Layers, Cloud, Database } from "lucide-react";
import { Skill } from "../types";

const skills: Skill[] = [
  {
    name: "Languages",
    icon: "code",
    items: ["JavaScript", "C++", "Python", "Bash Script"]
  },
  {
    name: "Frontend",
    icon: "layers",
    items: ["React.js", "TypeScript", "CSS3", "HTML5"]
  },
  {
    name: "Cloud & DevOps",
    icon: "cloud",
    items: ["AWS", "Docker", "Jenkins", "Terraform", "Ansible", "Git", "Linux"]
  },
  {
    name: "Backend & DB",
    icon: "database",
    items: ["Node.js", "MongoDB", "SQL"]
  }
];

const IconMap: Record<string, any> = {
  code: Code,
  layers: Layers,
  cloud: Cloud,
  database: Database
};

export default function Skills() {
  return (
    <section className="py-32 bg-surface-container-low" id="skills">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="font-headline text-5xl font-bold tracking-tight mb-4">Skills Matrix</h2>
          <div className="h-1 w-20 bg-primary-container"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = IconMap[skill.icon];
            return (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-surface p-8 rounded-xl border-b-2 border-transparent hover:border-primary-container transition-all group"
              >
                <div className="text-primary-container mb-6">
                  <Icon size={32} />
                </div>
                <h3 className="font-headline text-xl font-bold mb-6 text-on-surface">{skill.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map(item => (
                    <span key={item} className="bg-surface-container-highest px-3 py-1 rounded text-sm text-on-surface-variant font-body">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
