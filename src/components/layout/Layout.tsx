import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, LogIn, Home, Info, MessageSquare } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  fullHeight?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, fullHeight = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-sm'}`}>
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-heading font-bold text-primary-500">HostWell</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={`text-sm font-medium transition-colors ${
                  isActive('/') ? 'text-primary-500' : 'text-gray-600 hover:text-primary-500'
                }`}
              >
                Home
              </Link>
              <Link
                to="/guest"
                className={`text-sm font-medium transition-colors ${
                  isActive('/guest') ? 'text-primary-500' : 'text-gray-600 hover:text-primary-500'
                }`}
              >
                Find a Host
              </Link>
              <Link
                to="/host"
                className={`text-sm font-medium transition-colors ${
                  isActive('/host') ? 'text-primary-500' : 'text-gray-600 hover:text-primary-500'
                }`}
              >
                Become a Host
              </Link>
              <Link
                to="/about"
                className={`text-sm font-medium transition-colors ${
                  isActive('/about') ? 'text-primary-500' : 'text-gray-600 hover:text-primary-500'
                }`}
              >
                About Us
              </Link>
              <Link
                to="/login"
                className="btn btn-primary btn-sm"
              >
                Login
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-primary-500 focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container-custom py-4 space-y-4">
              <Link
                to="/"
                className={`block text-sm font-medium transition-colors ${
                  isActive('/') ? 'text-primary-500' : 'text-gray-600 hover:text-primary-500'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/guest"
                className={`block text-sm font-medium transition-colors ${
                  isActive('/guest') ? 'text-primary-500' : 'text-gray-600 hover:text-primary-500'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Find a Host
              </Link>
              <Link
                to="/host"
                className={`block text-sm font-medium transition-colors ${
                  isActive('/host') ? 'text-primary-500' : 'text-gray-600 hover:text-primary-500'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Become a Host
              </Link>
              <Link
                to="/about"
                className={`block text-sm font-medium transition-colors ${
                  isActive('/about') ? 'text-primary-500' : 'text-gray-600 hover:text-primary-500'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/login"
                className="btn btn-primary btn-sm w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-16">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;