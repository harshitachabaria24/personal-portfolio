import { Link } from "react-router";
import { motion } from "motion/react";
import { Github, ExternalLink, FileText } from "lucide-react";
import { projects } from "../data/projects";

export function Projects() {
  return (
    <div style={{ fontFamily: 'var(--font-body)' }}>
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 
            className="text-4xl md:text-5xl mb-4"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--deep-charcoal)' }}
          >
            Projects
          </h1>
          <p className="text-lg mb-12 opacity-80" style={{ color: 'var(--deep-charcoal)' }}>
            A collection of my technical work and case studies.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div 
                className="p-8 rounded-xl transition-all duration-300 hover:shadow-xl"
                style={{ 
                  backgroundColor: 'var(--soft-cream)',
                  boxShadow: '0 4px 12px var(--soft-shadow)'
                }}
              >
                <h3 
                  className="text-2xl mb-3"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--deep-charcoal)' }}
                >
                  {project.title}
                </h3>
                <p className="mb-4 opacity-80" style={{ color: 'var(--deep-charcoal)' }}>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full"
                      style={{ 
                        backgroundColor: 'var(--warm-beige)', 
                        color: 'var(--deep-charcoal)' 
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300"
                      style={{ 
                        backgroundColor: 'var(--deep-charcoal)', 
                        color: 'white' 
                      }}
                    >
                      <Github size={18} />
                      GitHub
                    </a>
                  )}
                  {project.liveDemoUrl && (
                    <a 
                      href={project.liveDemoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300"
                      style={{ 
                        backgroundColor: 'var(--muted-blush)', 
                        color: 'white' 
                      }}
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                  <Link to={`/projects/${project.id}`}>
                    <button
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-md"
                      style={{ 
                        backgroundColor: 'var(--muted-blush)', 
                        color: 'white' 
                      }}
                    >
                      <FileText size={18} />
                      Read Case Study
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
