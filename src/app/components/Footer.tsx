export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="py-8 mt-20 border-t"
      style={{ 
        borderColor: 'rgba(0, 0, 0, 0.05)',
        backgroundColor: 'var(--soft-cream)'
      }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p 
          className="opacity-60"
          style={{ 
            fontFamily: 'var(--font-body)', 
            color: 'var(--deep-charcoal)' 
          }}
        >
          © {currentYear} Harshita. Built with purpose.
        </p>
      </div>
    </footer>
  );
}
