import { useParams, Link, Navigate } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { projects } from "../data/projects";

export function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const sections = [
    { title: "Problem", content: project.caseStudy.problem },
    { title: "Architecture", content: project.caseStudy.architecture },
    { title: "Implementation", content: project.caseStudy.implementation },
    { title: "Challenges", content: project.caseStudy.challenges },
    { title: "Outcome", content: project.caseStudy.outcome },
  ];

  return (
    <div style={{ fontFamily: 'var(--font-body)' }}>
      <section className="max-w-4xl mx-auto px-6 py-20">
        {/* Back Button */}
        <Link to="/projects" className="inline-flex items-center gap-2 mb-8 opacity-70 hover:opacity-100 transition-opacity">
          <ArrowLeft size={20} />
          Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Project Header */}
          <h1 
            className="text-4xl md:text-5xl mb-4 leading-tight"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--deep-charcoal)' }}
          >
            {project.title}
          </h1>
          <p className="text-lg mb-8 opacity-80" style={{ color: 'var(--deep-charcoal)' }}>
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="mb-8">
            <h3 className="text-sm uppercase tracking-wide mb-3 opacity-60" style={{ color: 'var(--deep-charcoal)' }}>
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full"
                  style={{ 
                    backgroundColor: 'var(--soft-cream)', 
                    color: 'var(--deep-charcoal)' 
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3 mb-12">
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all duration-300"
                style={{ 
                  backgroundColor: 'var(--deep-charcoal)', 
                  color: 'white' 
                }}
              >
                <Github size={18} />
                View on GitHub
              </a>
            )}
            {project.liveDemoUrl && (
              <a 
                href={project.liveDemoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all duration-300"
                style={{ 
                  backgroundColor: 'var(--muted-blush)', 
                  color: 'white' 
                }}
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}
          </div>
        </motion.div>

        {/* Case Study Sections */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h2 
                className="text-2xl md:text-3xl mb-4"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--deep-charcoal)' }}
              >
                {section.title}
              </h2>
              <div 
                className="p-6 rounded-xl text-lg leading-relaxed opacity-90"
                style={{ 
                  backgroundColor: 'var(--soft-cream)', 
                  color: 'var(--deep-charcoal)' 
                }}
              >
                {section.content}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
