import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, MessageCircle, Home, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <MapPin className={`w-8 h-8 ${isScrolled ? 'text-primary' : 'text-background'}`} />
          <span className={`text-xl font-heading font-semibold ${isScrolled ? 'text-primary' : 'text-background'}`}>
            HostWell
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`text-sm font-medium ${
              isScrolled 
                ? 'text-primary hover:text-secondary' 
                : 'text-background hover:text-accent'
            } transition-colors ${
              location.pathname === '/' ? 'font-semibold' : ''
            }`}
          >
            Home
          </Link>
          <Link 
            to="/guest" 
            className={`text-sm font-medium ${
              isScrolled 
                ? 'text-primary hover:text-secondary' 
                : 'text-background hover:text-accent'
            } transition-colors ${
              location.pathname === '/guest' ? 'font-semibold' : ''
            }`}
          >
            Find a Host
          </Link>
          <Link 
            to="/host" 
            className={`text-sm font-medium ${
              isScrolled 
                ? 'text-primary hover:text-secondary' 
                : 'text-background hover:text-accent'
            } transition-colors ${
              location.pathname === '/host' ? 'font-semibold' : ''
            }`}
          >
            Become a Host
          </Link>
          <Link 
            to="/about" 
            className={`text-sm font-medium ${
              isScrolled 
                ? 'text-primary hover:text-secondary' 
                : 'text-background hover:text-accent'
            } transition-colors ${
              location.pathname === '/about' ? 'font-semibold' : ''
            }`}
          >
            About Us
          </Link>
          <Link 
            to="/login" 
            className={`text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 ${
              isScrolled 
                ? 'bg-primary text-background hover:bg-secondary' 
                : 'bg-background text-primary hover:bg-accent'
            }`}
          >
            Login
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className={`w-6 h-6 ${isScrolled ? 'text-primary' : 'text-background'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? 'text-primary' : 'text-background'}`} />
          )}
        </button>

        {/* Mobile Menu */}
        <div 
          className={`fixed inset-0 bg-background z-40 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
          style={{ top: '60px' }}
        >
          <nav className="flex flex-col p-6 space-y-6">
            <Link 
              to="/" 
              className="flex items-center text-sm font-medium text-primary hover:text-secondary"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home className="w-5 h-5 mr-2" /> Home
            </Link>
            <Link 
              to="/guest" 
              className="flex items-center text-sm font-medium text-primary hover:text-secondary"
              onClick={() => setIsMenuOpen(false)}
            >
              <MapPin className="w-5 h-5 mr-2" /> Find a Host
            </Link>
            <Link 
              to="/host" 
              className="flex items-center text-sm font-medium text-primary hover:text-secondary"
              onClick={() => setIsMenuOpen(false)}
            >
              <User className="w-5 h-5 mr-2" /> Become a Host
            </Link>
            <Link 
              to="/about" 
              className="flex items-center text-sm font-medium text-primary hover:text-secondary"
              onClick={() => setIsMenuOpen(false)}
            >
              <MessageCircle className="w-5 h-5 mr-2" /> About Us
            </Link>
            <Link 
              to="/login" 
              className="flex items-center text-sm font-medium px-4 py-2 bg-primary text-background rounded-lg hover:bg-secondary"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;