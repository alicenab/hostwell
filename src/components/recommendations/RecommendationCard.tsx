import React from 'react';
import { motion } from 'framer-motion';
import { Recommendation } from '../../types';
import { MapPin, DollarSign, ExternalLink } from 'lucide-react';

interface RecommendationCardProps {
  recommendation: Recommendation;
  index: number;
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({ recommendation, index }) => {
  // Get icon based on recommendation type
  const getTypeIcon = () => {
    switch (recommendation.type) {
      case 'restaurant':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      case 'sightseeing':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 22V12h6v10" />
          </svg>
        );
      case 'taxi':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h8m-8 5h8m-4-9v4m-8 0a4 4 0 014-4h8a4 4 0 014 4v8a4 4 0 01-4 4H8a4 4 0 01-4-4V8z" />
          </svg>
        );
      default:
        return <MapPin className="w-4 h-4" />;
    }
  };

  // Get color class based on recommendation type
  const getTypeColorClass = () => {
    switch (recommendation.type) {
      case 'restaurant':
        return 'bg-red-100 text-red-800';
      case 'sightseeing':
        return 'bg-blue-100 text-blue-800';
      case 'taxi':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <motion.div 
      className="card h-full group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="h-40 overflow-hidden relative">
        <img 
          src={recommendation.image} 
          alt={recommendation.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-2 left-2">
          <span className={`px-2 py-1 rounded-md text-xs font-medium flex items-center ${getTypeColorClass()}`}>
            {getTypeIcon()}
            <span className="ml-1 capitalize">{recommendation.type}</span>
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-medium text-lg mb-1">{recommendation.name}</h3>
        
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <DollarSign className="w-4 h-4 mr-1" />
          <span>Price Range: {recommendation.priceRange}</span>
        </div>
        
        <p className="text-gray-700 text-sm mb-3">{recommendation.description}</p>
        
        <a 
          href="#" 
          className="text-primary-500 hover:text-primary-700 transition-colors text-sm font-medium flex items-center"
        >
          Find Out More
          <ExternalLink className="w-4 h-4 ml-1" />
        </a>
      </div>
    </motion.div>
  );
};

export default RecommendationCard;