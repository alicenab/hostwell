import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, MessageCircle, Home, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const debounce = (func: Function, wait: number) => {
    let timeout: number;
    return function executedFunction(...args: any[]) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = window.setTimeout(later, wait);
    };
  };

  const handleScroll = useCallback(
    debounce(() => {
      setIsScrolled(window.scrollY > 50);
    }, 10),
    []
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

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
    <header className={`fixed w-full z-50 transition-transform duration-200 ${isScrolled ? 'bg-white shadow-md' : ''}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-primary-500">HostWell</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">
              <Home className="w-4 h-4 mr-1" />
              Home
            </Link>
            <Link to="/guest" className="nav-link">
              <MapPin className="w-4 h-4 mr-1" />
              Find a Host
            </Link>
            <Link to="/about" className="nav-link">About Us</Link>
            <Link to="/login" className="btn btn-primary">
              <User className="w-4 h-4 mr-1" />
              Login
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="container-custom py-8">
          <nav className="flex flex-col space-y-6">
            <Link to="/" className="nav-link-mobile" onClick={toggleMenu}>
              <Home className="w-5 h-5 mr-2" />
              Home
            </Link>
            <Link to="/guest" className="nav-link-mobile" onClick={toggleMenu}>
              <MapPin className="w-5 h-5 mr-2" />
              Find a Host
            </Link>
            <Link to="/about" className="nav-link-mobile" onClick={toggleMenu}>About Us</Link>
            <Link to="/login" className="btn btn-primary w-full justify-center" onClick={toggleMenu}>
              <User className="w-5 h-5 mr-2" />
              Login
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;