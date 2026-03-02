import { Link, useLocation } from "react-router";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm" style={{ backgroundColor: 'rgba(245, 239, 230, 0.95)' }}>
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl" style={{ fontFamily: 'var(--font-heading)', color: 'var(--deep-charcoal)' }}>
            Harshita
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative py-1"
                style={{ 
                  fontFamily: 'var(--font-body)', 
                  color: 'var(--deep-charcoal)',
                  fontWeight: isActive(link.path) ? 500 : 400
                }}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ backgroundColor: 'var(--muted-blush)' }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {!isActive(link.path) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: 'var(--muted-blush)' }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={24} style={{ color: 'var(--deep-charcoal)' }} />
            ) : (
              <Menu size={24} style={{ color: 'var(--deep-charcoal)' }} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pt-4 border-t"
            style={{ borderColor: 'rgba(0, 0, 0, 0.1)' }}
          >
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2"
                  style={{ 
                    fontFamily: 'var(--font-body)', 
                    color: 'var(--deep-charcoal)',
                    fontWeight: isActive(link.path) ? 500 : 400
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}