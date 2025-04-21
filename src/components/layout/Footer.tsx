import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-500 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="w-6 h-6" />
              <span className="text-xl font-heading font-semibold">HostWell</span>
            </div>
            <p className="text-primary-100 mb-4">
              Connecting travelers with local hosts across Azerbaijan for authentic cultural experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-accent-300 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-accent-300 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-accent-300 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/guest" className="text-primary-100 hover:text-white transition-colors">
                  Find a Host
                </Link>
              </li>
              <li>
                <Link to="/host" className="text-primary-100 hover:text-white transition-colors">
                  Become a Host
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-100 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-primary-100 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Regions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore Regions</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/region/baku" className="text-primary-100 hover:text-white transition-colors">
                  Baku
                </Link>
              </li>
              <li>
                <Link to="/region/sheki" className="text-primary-100 hover:text-white transition-colors">
                  Sheki
                </Link>
              </li>
              <li>
                <Link to="/region/ganja" className="text-primary-100 hover:text-white transition-colors">
                  Ganja
                </Link>
              </li>
              <li>
                <Link to="/region/quba" className="text-primary-100 hover:text-white transition-colors">
                  Quba
                </Link>
              </li>
              <li>
                <Link to="/region/lankaran" className="text-primary-100 hover:text-white transition-colors">
                  Lankaran
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-primary-100">28 May Street, Baku AZ1010, Azerbaijan</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
                <a href="mailto:info@hostwell.com" className="text-primary-100 hover:text-white transition-colors">
                  info@hostwell.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                <a href="tel:+994501234567" className="text-primary-100 hover:text-white transition-colors">
                  +994 50 123 4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-400 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-100 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} HostWell. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-primary-100 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-100 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-primary-100 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;