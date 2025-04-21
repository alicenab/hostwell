import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Home, MapPin, Star, MessageCircle, Users, Bed, Bath } from 'lucide-react';
import Layout from '../components/layout/Layout';
import ContactForm from '../components/guest/ContactForm';
import PaymentSection from '../components/payment/PaymentSection';
import RegionalRecommendations from '../components/recommendations/RegionalRecommendations';
import Chatbot from '../components/chatbot/Chatbot';
import { hosts } from '../data/hosts';
import { regions } from '../data/regions';
import { recommendations } from '../data/recommendations';

const HostProfilePage: React.FC = () => {
  const { hostId } = useParams<{ hostId: string }>();
  const [selectedHome, setSelectedHome] = useState<string | null>(null);
  
  // Find host information
  const host = hosts.find(h => h.id === hostId);
  
  // Find region information
  const region = host ? regions.find(r => r.id === host.regionId) : null;
  
  // If host not found
  if (!host || !region) {
    return (
      <Layout>
        <div className="pt-24 pb-16">
          <div className="container-custom">
            <div className="text-center py-12">
              <h1 className="text-3xl font-heading font-bold mb-4">Host Not Found</h1>
              <p className="text-lg text-gray-600 mb-8">
                The host you're looking for doesn't exist or has been removed.
              </p>
              <Link to="/guest" className="btn btn-primary">
                Find Another Host
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

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
    <Layout>
      <div className="pt-24 pb-16">
        <div className="container-custom">
          {/* Back Link */}
          <Link to="/guest" className="inline-flex items-center text-primary-500 hover:text-primary-700 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Hosts
          </Link>
          
          {/* Host Profile */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Left Column - Host Info */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                {/* Host Header */}
                <div className="relative h-64">
                  <img 
                    src={host.image} 
                    alt={host.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h1 className="text-3xl font-heading font-bold mb-2">{host.name}</h1>
                    <div className="flex items-center mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{region.name}, Azerbaijan</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="ml-1">5.0 ({host.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
                
                {/* Host Details */}
                <div className="p-6">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4 ${availability.color}`}>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{availability.status}</span>
                    <span className="ml-2">{availability.date}</span>
                  </div>

                  <p className="text-gray-600 mb-6">{host.bio}</p>

                  {/* Available Homes */}
                  <div className="space-y-6">
                    <h2 className="text-2xl font-heading font-semibold">Available Homes</h2>
                    {host.availableHomes.map((home) => (
                      <div 
                        key={home.id}
                        className={`bg-white rounded-lg border ${
                          selectedHome === home.id ? 'border-primary-500' : 'border-gray-200'
                        } overflow-hidden transition-all duration-300`}
                      >
                        <div className="md:flex">
                          <div className="md:w-1/3">
                            <img 
                              src={home.images[0]} 
                              alt={home.type}
                              className="w-full h-48 object-cover"
                            />
                          </div>
                          <div className="p-4 md:w-2/3">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="text-lg font-semibold">{home.type}</h3>
                              <span className="text-primary-500 font-semibold">${home.price}/night</span>
                            </div>
                            
                            <p className="text-gray-600 mb-4">{home.description}</p>
                            
                            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                              <div className="flex items-center">
                                <Users className="w-4 h-4 mr-1" />
                                <span>{home.maxGuests} guests</span>
                              </div>
                              <div className="flex items-center">
                                <Bed className="w-4 h-4 mr-1" />
                                <span>{home.bedrooms} bedrooms</span>
                              </div>
                              <div className="flex items-center">
                                <Bath className="w-4 h-4 mr-1" />
                                <span>{home.bathrooms} bathrooms</span>
                              </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                              {home.amenities.map((amenity, index) => (
                                <span 
                                  key={index}
                                  className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                                >
                                  {amenity}
                                </span>
                              ))}
                            </div>
                            
                            <button
                              onClick={() => setSelectedHome(home.id)}
                              className="btn btn-primary w-full"
                            >
                              Book Now
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Contact & Payment */}
            <div className="space-y-6">
              <ContactForm hostId={host.id} />
              {selectedHome && <PaymentSection hostId={host.id} homeId={selectedHome} />}
            </div>
          </div>
          
          {/* Regional Recommendations */}
          <div className="mb-12">
            <RegionalRecommendations 
              regionId={host.regionId}
              recommendations={recommendations}
            />
          </div>
          
          {/* Chatbot */}
          <Chatbot />
        </div>
      </div>
    </Layout>
  );
};

export default HostProfilePage;