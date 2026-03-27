import { motion } from "motion/react";
import { Code, Layers, Cloud, Database } from "lucide-react";
import { Skill } from "../types";

const skills: Skill[] = [
  {
    category: "Languages",
    icon: "code",
    items: ["JavaScript", "C++", "Python", "Bash Script"],
  },
  {
    category: "Frontend",
    icon: "layers",
    items: ["React.js", "TypeScript", "CSS3", "HTML5"],
  },
  {
    category: "Cloud & DevOps",
    icon: "cloud",
    items: ["AWS", "Docker", "Jenkins", "Terraform", "Ansible", "Git", "Linux"],
  },
  {
    category: "Backend & DB",
    icon: "database",
    items: ["Node.js", "MongoDB", "SQL"],
  },
];

const IconMap: Record<string, any> = {
  code: Code,
  layers: Layers,
  cloud: Cloud,
  database: Database,
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="font-headline text-5xl font-bold tracking-tight mb-4">Skills Matrix</h2>
          <div className="h-1 w-20 bg-primary-cyan" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, idx) => {
            const Icon = IconMap[skill.icon];
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-surface p-8 rounded-xl border-b-2 border-transparent hover:border-primary-cyan transition-all group"
              >
                <div className="text-primary-cyan mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={32} />
                </div>
                <h3 className="font-headline text-xl font-bold mb-6 text-on-surface">
                  {skill.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="bg-surface-container-high px-3 py-1 rounded text-sm text-on-surface-variant font-body"
                    >
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
