import { motion } from "motion/react";
import { ExternalLink, Code } from "lucide-react";
import { Project } from "../types";

const projects: Project[] = [
  {
    title: "DEPI DevOps Infrastructure",
    description: "End-to-end automation pipeline featuring Jenkins for CI/CD, Docker/Kubernetes for container orchestration, and Terraform/Ansible for Infrastructure as Code on AWS.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4SDcgC4jkBwPneGhDW1gLGq91uglWhlafPPhawCTTYmuNinvDutSTOT-NbHtP9OJJOQEcC9J_kz8YT7O8nkY8ubaCkF-UK0RdG74M_dQHJQtVqD4PguRJwFljZsrvSgI9U1CdLOOyaQUpPWautSV7e3GjhiaWQhuRr7nKPmbqaknLwTVAmfp3VoUG3UfPo0e9rgYUPVpH-cwg8BbDSfTBUuoPN6CLhuw6Blzy0mW8qeJdlVi9wSlLimHRJ5qHpDetM01laDq8t6U",
    tags: ["Terraform", "Kubernetes", "AWS EC2", "Docker"],
    category: ["AWS", "DevOps"],
    links: {
      source: "#"
    }
  },
  {
    title: "Kafiil Task Manager",
    description: "A high-performance full-stack application leveraging React.js for the interface and robust REST API integrations for real-time task lifecycle management.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-CzclOnGnpxoCvtKV8_hoA3BqWOciEH3R25xbj1XnpLVMviVSjhIId43Kdd-CHP7hpYy3P1ugo3exChco5UtTXvFNIvhB0XH7aCDNniMjohCGa4iyt2UVFUrz1gn1F75612Gpo5Uw4wJsmvk-l0BXXHN3y2lGvu6HHK8L3FGOoT6Sha6adjpcE5K7zOHKaoPW5aVIMo2NNur5H2UHFvDN0E-2zABgStqxrsxorYYY2x_kybP9IZUteMtCqHR0x8m2OhHWjh11y_U",
    tags: ["React.js", "Redux", "Node.js", "Tailwind"],
    category: ["React", "Fullstack"],
    links: {
      demo: "#",
      repo: "#"
    }
  }
];

export default function Projects() {
  return (
    <section className="py-32 bg-surface-container-low" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="font-headline text-5xl font-bold tracking-tight mb-4">Featured Projects</h2>
          <p className="text-on-surface-variant font-body">Where infrastructure meets interface.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-surface rounded-2xl overflow-hidden glass-panel flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-6 flex gap-2">
                  {project.category.map(cat => (
                    <span key={cat} className="bg-primary-container/20 backdrop-blur-md text-primary-container px-3 py-1 rounded text-xs font-bold uppercase tracking-widest">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-8 flex-grow">
                <h3 className="font-headline text-3xl font-bold mb-4 text-on-surface">{project.title}</h3>
                <p className="text-on-surface-variant mb-8 line-clamp-3 font-body">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs text-on-surface-variant border border-outline-variant px-2 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  {project.links.demo && (
                    <a className="text-primary-container font-bold flex items-center gap-2 hover:underline" href={project.links.demo}>
                      Demo <ExternalLink size={16} />
                    </a>
                  )}
                  {project.links.repo && (
                    <a className="text-primary-container font-bold flex items-center gap-2 hover:underline" href={project.links.repo}>
                      Repo <Code size={16} />
                    </a>
                  )}
                  {project.links.source && (
                    <a className="text-primary-container font-bold flex items-center gap-2 hover:underline" href={project.links.source}>
                      Source <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
