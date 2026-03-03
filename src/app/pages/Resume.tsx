import { motion } from "motion/react";
import { Download, Cloud, Code, Shield, Database, Server, Cpu } from "lucide-react";

export function Resume() {
  const skillCategories = [
    {
      title: "Cloud",
      icon: Cloud,
      skills: ["AWS (S3, EC2, IAM, Lambda)", "Cloud Architecture", "Serverless Computing"]
    },
    {
      title: "Languages",
      icon: Code,
      skills: ["Java", "C", "JavaScript", "TypeScript","HTML","CSS"]
    },
    {
      title: "Concepts",
      icon: Cpu,
      skills: ["Data Structures", "Algorithms", "Object-Oriented Programming"]
    },
    {
      title: "Security",
      icon: Shield,
      skills: ["Encryption", "Network Security", "Secure Coding Practices"]
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MongoDB", "PostgreSQL", "SQL"]
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Node.js", "Express", "Flask", "RESTful APIs","GIT" ,"GITHUB" ,"POSTMAN"]
    }
  ];

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
            Resume & Skills
          </h1>
          <p className="text-lg mb-8 opacity-80" style={{ color: 'var(--deep-charcoal)' }}>
            A detail-oriented Computer Science student with experience in building secure cloud-based systems using AWS and Java.
          </p>

          {/* Download Button */}
          <button
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg mb-16 transition-all duration-300 hover:shadow-lg"
            style={{ 
              backgroundColor: 'var(--muted-blush)', 
              color: 'white',
              boxShadow: '0 4px 6px var(--soft-shadow)'
            }}
            onClick={() => {
  const link = document.createElement("a");
  link.href = "/Harshita-Chabaria-Resume.pdf";
  link.download = "Harshita-Chabaria-Resume.pdf";
  link.click();
}}
          >
            <Download size={20} />
            Download Resume
          </button>
        </motion.div>

        {/* Skills Grid */}
        <div>
          <h2 
            className="text-3xl mb-8"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--deep-charcoal)' }}
          >
            Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div 
                    className="p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    style={{ 
                      backgroundColor: 'var(--soft-cream)',
                      boxShadow: '0 4px 12px var(--soft-shadow)',
                      border: '1px solid rgba(0,0,0,0.05)'
                    }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div 
                        className="p-2 rounded-lg"
                        style={{ backgroundColor: 'var(--muted-blush)' }}
                      >
                        <Icon size={24} color="white" />
                      </div>
                      <h3 
                        className="text-xl"
                        style={{ fontFamily: 'var(--font-heading)', color: 'var(--deep-charcoal)' }}
                      >
                        {category.title}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {category.skills.map((skill) => (
                        <li 
                          key={skill} 
                          className="opacity-80"
                          style={{ color: 'var(--deep-charcoal)' }}
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Education & Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div>
              <h2 
                className="text-2xl mb-6"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--deep-charcoal)' }}
              >
                Education
              </h2>
              <div 
                className="p-6 rounded-xl"
                style={{ backgroundColor: 'var(--soft-cream)' }}
              >
                <h3 className="text-xl mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  Bachelor of Technology in Computer Science(CCVT)
                </h3>
                <p className="opacity-70 mb-2">UPES,DEHRADUN</p>
                <p className="opacity-60">Expected Graduation: 2027</p>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 
                className="text-2xl mb-6"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--deep-charcoal)' }}
              >
                Certifications
              </h2>
              <div 
                className="p-6 rounded-xl space-y-3"
                style={{ backgroundColor: 'var(--soft-cream)' }}
              >
                <div>
                  <h3 className="text-lg mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                    AWS Cloud Architecture
                  </h3>
  
                  <p className="opacity-60 text-sm">Amazon Web Services</p>
                </div>
                <div>
                  <h3 className="text-lg mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                    The Complete Web Development Bootcamp
                  </h3>
                  <p className="opacity-60 text-sm">Udemy</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
