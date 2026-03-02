import { Link } from "react-router";
import { motion } from "motion/react";
import profileImage from "../../assets/profile.png";

export function Home() {
  return (
    <div style={{ fontFamily: 'var(--font-body)' }}>
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3" style={{ color: 'var(--muted-blush)' }}>Hi, I'm Harshita.</p>
            <h1 
              className="text-3xl md:text-4xl mb-6 leading-tight" 
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--deep-charcoal)' }}
            >
              A Computer Science student building secure cloud systems with creativity and purpose.
            </h1>
            <p className="text-lg mb-8 opacity-80" style={{ color: 'var(--deep-charcoal)' }}>
              I enjoy designing meaningful digital experiences and solving real-world problems through technology.
            </p>
            <div className="flex gap-4">
              <Link to="/projects">
                <button 
                  className="px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
                  style={{ 
                    backgroundColor: 'var(--muted-blush)', 
                    color: 'white',
                    boxShadow: '0 4px 6px var(--soft-shadow)'
                  }}
                >
                  View My Work
                </button>
              </Link>
              <Link to="/contact">
                <button 
                  className="px-6 py-3 rounded-lg transition-all duration-300 hover:bg-opacity-100"
                  style={{ 
                    backgroundColor: 'var(--soft-cream)', 
                    color: 'var(--deep-charcoal)'
                  }}
                >
                  Contact Me
                </button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block"
          >
            <div 
              className="aspect-square rounded-2xl overflow-hidden"
              style={{ 
                backgroundColor: 'var(--soft-cream)',
                boxShadow: '0 20px 40px var(--soft-shadow)'
              }}
            >
              <img 
                src={profileImage} 
                alt="Harshita" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--soft-cream)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              className="text-3xl md:text-4xl mb-8"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--deep-charcoal)' }}
            >
              About Me
            </h2>
            <div className="space-y-4 text-lg opacity-90" style={{ color: 'var(--deep-charcoal)' }}>
              <p>
                I am a passionate Computer Science student who enjoys designing beautiful websites, 
                solving real-world problems, and working with AWS Cloud technologies.
              </p>
              <p>
                I believe technology should be practical, secure, and purposeful. My interests 
                currently revolve around cloud computing, backend systems, and security-focused applications.
              </p>
              <p>
                Beyond coding, I enjoy journaling, reflecting, and constantly learning new concepts 
                that help me grow both personally and professionally.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}