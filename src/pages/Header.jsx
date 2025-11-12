import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'landing', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-gray-900 bg-opacity-95 backdrop-blur-lg border-b border-gray-800 shadow-2xl'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-dark font-bold text-sm">NA</span>
            </div>
            <span
              className="text-light font-semibold text-lg cursor-pointer hover:text-primary transition-colors"
              onClick={() => scrollToSection('landing')}
            >
              Nawroz Ali
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-light font-medium hover:text-primary transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-primary text-dark px-6 py-2 rounded-lg font-semibold hover:bg-green-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            >
              Get In Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-light hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-900 bg-opacity-95 backdrop-blur-lg border-t border-gray-800 rounded-b-lg mt-2 py-4">
            <nav className="flex flex-col gap-4 px-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-light font-medium text-left py-2 hover:text-primary transition-colors duration-300 border-b border-gray-800 last:border-b-0"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-primary text-dark px-6 py-3 rounded-lg font-semibold hover:bg-green-500 transition-all duration-300 mt-4"
              >
                Get In Touch
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
