import { motion } from "motion/react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - this is a mock implementation
    console.log("Form submitted:", formData);
    alert("Thank you for your message! (This is a demo - no actual email is sent)");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div style={{ fontFamily: 'var(--font-body)' }}>
      <section className="max-w-4xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 
            className="text-4xl md:text-5xl mb-4 text-center"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--deep-charcoal)' }}
          >
            Let's build something meaningful.
          </h1>
          <p className="text-lg mb-12 text-center opacity-80" style={{ color: 'var(--deep-charcoal)' }}>
            I'm always open to discussing new projects, creative ideas, or opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2" style={{ color: 'var(--deep-charcoal)' }}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg outline-none focus:ring-2 transition-all duration-300"
                  style={{ 
                    backgroundColor: 'var(--soft-cream)',
                    color: 'var(--deep-charcoal)',
                    border: '1px solid rgba(0,0,0,0.1)'
                  }}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2" style={{ color: 'var(--deep-charcoal)' }}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg outline-none focus:ring-2 transition-all duration-300"
                  style={{ 
                    backgroundColor: 'var(--soft-cream)',
                    color: 'var(--deep-charcoal)',
                    border: '1px solid rgba(0,0,0,0.1)'
                  }}
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2" style={{ color: 'var(--deep-charcoal)' }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg outline-none focus:ring-2 transition-all duration-300 resize-none"
                  style={{ 
                    backgroundColor: 'var(--soft-cream)',
                    color: 'var(--deep-charcoal)',
                    border: '1px solid rgba(0,0,0,0.1)'
                  }}
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
                style={{ 
                  backgroundColor: 'var(--muted-blush)', 
                  color: 'white',
                  boxShadow: '0 4px 6px var(--soft-shadow)'
                }}
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <h3 
              className="text-2xl mb-6"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--deep-charcoal)' }}
            >
              Connect with me
            </h3>

            <div className="space-y-4">
              <a
                href="mailto:chabariaharshita24@gmail.com"
                className="flex items-center gap-4 p-4 rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                style={{ backgroundColor: 'var(--soft-cream)' }}
              >
                <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--muted-blush)' }}>
                  <Mail size={24} color="white" />
                </div>
                <div>
                  <p className="opacity-60 text-sm">Email</p>
                  <p style={{ color: 'var(--deep-charcoal)' }}>chabariaharshita24@gmail.com</p>
                </div>
              </a>

              <a
                href="https://github.com/harshitachabaria24"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                style={{ backgroundColor: 'var(--soft-cream)' }}
              >
                <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--deep-charcoal)' }}>
                  <Github size={24} color="white" />
                </div>
                <div>
                  <p className="opacity-60 text-sm">GitHub</p>
                  <p style={{ color: 'var(--deep-charcoal)' }}>@harshitachabaria24</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/harshita-chabaria-0872a8293"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                style={{ backgroundColor: 'var(--soft-cream)' }}
              >
                <div className="p-3 rounded-lg" style={{ backgroundColor: '#0077B5' }}>
                  <Linkedin size={24} color="white" />
                </div>
                <div>
                  <p className="opacity-60 text-sm">LinkedIn</p>
                  <p style={{ color: 'var(--deep-charcoal)' }}>Harshita Chabaria</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}