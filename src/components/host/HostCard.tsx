import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Home, Calendar, DollarSign, MapPin } from 'lucide-react';
import { Host } from '../../types';
import { Link } from 'react-router-dom';

interface HostCardProps {
  host: Host;
}

const HostCard: React.FC<HostCardProps> = ({ host }) => {
  const getAvailabilityStatus = () => {
    const now = new Date();
    const availableFrom = new Date(host.availableFrom);
    const availableTo = new Date(host.availableTo);
    
    if (now < availableFrom) {
      return {
        status: 'Available from',
        date: availableFrom.toLocaleDateString(),
        color: 'bg-yellow-100 text-yellow-800'
      };
    } else if (now > availableTo) {
      return {
        status: 'Currently unavailable',
        date: 'Check back later',
        color: 'bg-red-100 text-red-800'
      };
    } else {
      return {
        status: 'Available now',
        date: `Until ${availableTo.toLocaleDateString()}`,
        color: 'bg-green-100 text-green-800'
      };
    }
  };

  const availability = getAvailabilityStatus();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-48">
        <img
          src={host.image}
          alt={host.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <h3 className="text-xl font-semibold">{host.name}</h3>
          <div className="flex items-center text-sm">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{host.location}</span>
          </div>
        </div>
      </div>

      <div className="p-4">
        {/* Availability Badge */}
        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4 ${availability.color}`}>
          <Calendar className="w-4 h-4 mr-1" />
          <span>{availability.status}</span>
          <span className="ml-2">{availability.date}</span>
        </div>

        {/* Available Homes */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Available Homes</h4>
          <div className="space-y-2">
            {host.availableHomes.map((home, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded-lg">
                <div className="flex items-center">
                  <Home className="w-4 h-4 text-primary-500 mr-2" />
                  <span className="text-sm">{home.type}</span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="w-4 h-4 text-primary-500 mr-1" />
                  <span className="text-sm font-medium">{home.price}/night</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <div className="flex items-center">
            <Mail className="w-4 h-4 mr-1" />
            <a href={`mailto:${host.email}`} className="hover:text-primary-500">
              {host.email}
            </a>
          </div>
          <div className="flex items-center">
            <Phone className="w-4 h-4 mr-1" />
            <a href={`tel:${host.phone}`} className="hover:text-primary-500">
              {host.phone}
            </a>
          </div>
        </div>

        {/* View Profile Button */}
        <Link
          to={`/host/${host.id}`}
          className="mt-4 block w-full text-center btn btn-primary"
        >
          View Profile
        </Link>
      </div>
    </motion.div>
  );
};

export default HostCard;