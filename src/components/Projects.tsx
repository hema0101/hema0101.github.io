import { motion } from "motion/react";
import { ExternalLink, Eye, Code } from "lucide-react";
import { Project } from "../types";

const projects: Project[] = [
  {
    title: "DEPI DevOps Infrastructure",
    description: "End-to-end automation pipeline featuring Jenkins for CI/CD, Docker/Kubernetes for container orchestration, and Terraform/Ansible for Infrastructure as Code on AWS.",
    image: "https://picsum.photos/seed/devops/800/450",
    categories: ["AWS", "DevOps"],
    tags: ["Terraform", "Kubernetes", "AWS EC2", "Docker"],
    links: { source: "#" },
  },
  {
    title: "Kafiil Task Manager",
    description: "A high-performance full-stack application leveraging React.js for the interface and robust REST API integrations for real-time task lifecycle management.",
    image: "https://picsum.photos/seed/code/800/450",
    categories: ["React", "Fullstack"],
    tags: ["React.js", "Redux", "Node.js", "Tailwind"],
    links: { demo: "#", repo: "#" },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="font-headline text-5xl font-bold tracking-tight mb-4">Featured Projects</h2>
          <p className="text-on-surface-variant font-body">Where infrastructure meets interface.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-surface rounded-2xl overflow-hidden glass-panel flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60" />
                <div className="absolute bottom-4 left-6 flex gap-2">
                  {project.categories.map((cat) => (
                    <span
                      key={cat}
                      className="bg-primary-cyan/20 backdrop-blur-md text-primary-cyan px-3 py-1 rounded text-xs font-bold uppercase tracking-widest"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-8 flex-grow">
                <h3 className="font-headline text-3xl font-bold mb-4 text-on-surface">
                  {project.title}
                </h3>
                <p className="text-on-surface-variant mb-8 line-clamp-3 font-body">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-on-surface-variant border border-white/10 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6 mt-auto">
                  {project.links.demo && (
                    <a href={project.links.demo} className="text-primary-cyan font-bold flex items-center gap-2 hover:underline">
                      Demo <Eye size={16} />
                    </a>
                  )}
                  {project.links.repo && (
                    <a href={project.links.repo} className="text-primary-cyan font-bold flex items-center gap-2 hover:underline">
                      Repo <Code size={16} />
                    </a>
                  )}
                  {project.links.source && (
                    <a href={project.links.source} className="text-primary-cyan font-bold flex items-center gap-2 hover:underline">
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
