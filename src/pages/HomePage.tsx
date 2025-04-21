import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Search, MapPin, Calendar, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import MapComponent from '../components/map/MapComponent';
import HostCard from '../components/host/HostCard';
import SearchFilter from '../components/guest/SearchFilter';
import Chatbot from '../components/chatbot/Chatbot';
import { regions } from '../data/regions';
import { hosts } from '../data/hosts';
import { Host, AvailableHome } from '../types';

const HomePage: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [filteredHosts, setFilteredHosts] = useState<Host[]>(hosts);
  const regionSectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useState({
    location: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
  });

  const handleRegionClick = (regionId: string) => {
    setSelectedRegion(regionId);
    setFilteredHosts(hosts.filter(host => host.regionId === regionId));
    
    // Scroll to region section
    if (regionSectionRef.current) {
      regionSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFilterChange = (filters: {
    region: string;
    priceRange: [number, number];
    date: string;
    searchTerm: string;
  }) => {
    let filtered = [...hosts];
    
    // Filter by region
    if (filters.region !== 'all') {
      filtered = filtered.filter(host => host.regionId === filters.region);
    }
    
    // Filter by price
    filtered = filtered.filter(host => 
      host.availableHomes.some((home: AvailableHome) => home.price <= filters.priceRange[1])
    );
    
    // Filter by search term
    if (filters.searchTerm) {
      const term = filters.searchTerm.toLowerCase();
      filtered = filtered.filter(
        host =>
          host.name.toLowerCase().includes(term) ||
          host.bio.toLowerCase().includes(term) ||
          host.availableHomes.some((home: AvailableHome) => 
            home.type.toLowerCase().includes(term) ||
            home.description.toLowerCase().includes(term)
          )
      );
    }
    
    // Filter by date
    if (filters.date) {
      const selectedDate = new Date(filters.date);
      filtered = filtered.filter(host => {
        const availableFrom = new Date(host.availableFrom);
        const availableTo = new Date(host.availableTo);
        return selectedDate >= availableFrom && selectedDate <= availableTo;
      });
    }
    
    setFilteredHosts(filtered);
    setSelectedRegion(filters.region !== 'all' ? filters.region : null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Search params:', searchParams);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative py-20 bg-primary-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Experience Azerbaijan with Local Hosts
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Connect with US-educated Azerbaijani hosts for authentic cultural experiences
            </p>
          </div>
        </div>
      </div>

      {/* Map and Search Section */}
      <div className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map Section */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <MapComponent 
                regions={regions} 
                onRegionClick={handleRegionClick}
              />
            </div>

            {/* Search Section */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-6">Find Your Perfect Host</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={searchParams.location}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Where are you going?"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700 mb-1">
                      Check-in
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="date"
                        id="checkIn"
                        name="checkIn"
                        value={searchParams.checkIn}
                        onChange={handleChange}
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700 mb-1">
                      Check-out
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="date"
                        id="checkOut"
                        name="checkOut"
                        value={searchParams.checkOut}
                        onChange={handleChange}
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
                    Guests
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Users className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="number"
                      id="guests"
                      name="guests"
                      min="1"
                      value={searchParams.guests}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  <Search className="h-5 w-5 mr-2" />
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Region Hosts Section */}
      <section ref={regionSectionRef} className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-heading font-bold mb-8">
            {selectedRegion 
              ? `Hosts in ${regions.find(r => r.id === selectedRegion)?.name || 'Selected Region'}`
              : 'Featured Hosts'
            }
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHosts.map((host) => (
              <div
                key={host.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => navigate(`/host/${host.id}`)}
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
                  <div className="flex items-center justify-between">
                    <span className="text-primary-600 font-semibold">
                      From ${host.pricePerNight}/night
                    </span>
                    <div className="flex items-center">
                      <span className="text-yellow-400">★</span>
                      <span className="ml-1 text-gray-600">{host.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-heading font-bold mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple steps to connect with a local host in Azerbaijan
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Explore Regions',
                description: 'Browse through our interactive map and discover different regions of Azerbaijan.',
                icon: (
                  <svg className="w-10 h-10 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                ),
              },
              {
                title: 'Connect with Hosts',
                description: 'Browse profiles of US-educated Azerbaijani hosts and find your perfect match.',
                icon: (
                  <svg className="w-10 h-10 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
              },
              {
                title: 'Book & Experience',
                description: 'Book your stay securely and enjoy an authentic Azerbaijani experience.',
                icon: (
                  <svg className="w-10 h-10 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary-100 rounded-full">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-heading font-bold mb-4">Guest Experiences</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear what travelers have to say about their stays with our hosts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Sophia Martinez',
                location: 'United States',
                text: 'Staying with Ilqar in Sheki was the highlight of my trip. His knowledge of local history and culture made the experience so much richer than staying in a hotel.',
                image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
              },
              {
                name: 'James Wilson',
                location: 'United Kingdom',
                text: 'Leyla\'s apartment in Baku was perfect. Modern, clean, and centrally located. Her recommendations for restaurants and hidden gems made my stay truly special.',
                image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
              },
              {
                name: 'Mia Chen',
                location: 'Canada',
                text: 'Elxan\'s guest house in Quba was an authentic mountain retreat. The views were breathtaking, and his family\'s hospitality was unmatched. I can\'t wait to return!',
                image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">
                  <svg className="h-8 w-8 text-primary-200" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <p className="text-gray-600 mb-6">{testimonial.text}</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Chatbot */}
      <Chatbot />
    </Layout>
  );
};

export default HomePage;