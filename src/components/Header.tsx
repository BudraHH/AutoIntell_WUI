import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const navLinks = [
  { title: 'Home', href: '#hero' },
  { title: 'About', href: '#about' },
  { title: 'How It Works', href: '#how-it-works' },
  { title: 'Get Started', href: '#cta' },
];

export const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-secondary/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-2xl font-bold text-primary">
            <button
            type="button"
            onClick={() => {scrollToSection('#hero')}}>
              AutoIntell
            </button>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.title}
                onClick={() => scrollToSection(link.href)}
                className="text-gray-300 hover:text-primary transition-colors"
              >
                {link.title}
              </button>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => navigate('/sign-in')}
              className="px-4 py-2 text-primary hover:text-primary-dark transition-colors"
            >
              Sign In
            </button>
            <button
              onClick={() => navigate('/sign-up')}
              className="px-4 py-2 bg-primary text-secondary rounded-lg hover:bg-primary-dark transition-colors"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-secondary-light border-t border-primary/20">
            {navLinks.map((link) => (
              <button
                key={link.title}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-4 py-3 text-gray-300 hover:text-primary hover:bg-primary/5 transition-colors"
              >
                {link.title}
              </button>
            ))}
            <Link
              to="/sign-in"
              className="block w-full text-left px-4 py-3 text-primary hover:bg-primary/5 transition-colors"
            >
              Sign In
            </Link>
            <Link
              to="/sign-up"
              className="block w-full text-left px-4 py-3 text-primary hover:bg-primary/5 transition-colors"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};