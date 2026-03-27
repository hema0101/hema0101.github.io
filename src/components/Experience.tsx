import { motion } from "motion/react";
import { Experience } from "../types";

const experiences: Experience[] = [
  {
    title: "DevOps Engineer Trainee (DEPI)",
    company: "Ministry of Communications and Information Technology",
    period: "2024 - Present",
    description: "Comprehensive professional program focusing on modern DevOps workflows, infrastructure as code, and cloud architecture implementation at government scale.",
  },
  {
    title: "Frontend Developer Trainee (ITI)",
    company: "Information Technology Institute",
    period: "2023",
    description: "Intensive training in modern web technologies including advanced JavaScript, React.js ecosystem, and responsive design systems.",
  },
  {
    title: "Computer Science Trainee (SEEF)",
    company: "Core Fundamentals Program",
    period: "2022",
    description: "Deep dive into data structures, algorithms, and core computing principles to build a solid engineering foundation.",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <h2 className="font-headline text-5xl font-bold tracking-tight mb-4">Journey</h2>
            <div className="h-1 w-20 bg-primary-cyan" />
          </div>
          <p className="text-on-surface-variant font-body max-w-md">
            Formal training and specialization programs that shaped my technical foundation.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-12 border-l border-white/10 hover:border-primary-cyan transition-colors py-4 group"
            >
              <div className="absolute -left-2 top-6 w-4 h-4 rounded-full bg-surface border-2 border-primary-cyan group-hover:bg-primary-cyan transition-all shadow-[0_0_10px_rgba(0,229,255,0.5)]" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-headline font-bold text-on-surface">
                    {exp.title}
                  </h3>
                  <p className="text-primary-cyan font-body tracking-wide">
                    {exp.company}
                  </p>
                </div>
                <span className="bg-surface-container-high px-4 py-1 rounded-full text-sm font-medium self-start md:self-center">
                  {exp.period}
                </span>
              </div>
              
              <p className="text-on-surface-variant font-body max-w-3xl leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
