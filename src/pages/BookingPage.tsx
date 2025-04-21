import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Layout from '../components/layout/Layout';
import PaymentSection from '../components/payment/PaymentSection';
import Chatbot from '../components/chatbot/Chatbot';
import { hosts } from '../data/hosts';
import { regions } from '../data/regions';

const BookingPage: React.FC = () => {
  const { hostId } = useParams<{ hostId: string }>();
  
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
                The host you're trying to book with doesn't exist or has been removed.
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

  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="container-custom">
          {/* Back Link */}
          <Link to={`/host/${host.id}`} className="inline-flex items-center text-primary-500 hover:text-primary-700 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Host Profile
          </Link>
          
          <div className="mb-8">
            <h1 className="text-3xl font-heading font-bold mb-2">Book Your Stay</h1>
            <p className="text-gray-600">
              Complete your booking with {host.name} in {region.name}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <PaymentSection host={host} />
            </div>
            
            <div>
              <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-24">
                <img 
                  src={host.image} 
                  alt={host.name} 
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{host.name}</h3>
                  <p className="text-gray-600 mb-2">{host.accommodationType} in {region.name}</p>
                  <div className="flex items-center mb-3">
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 text-sm text-gray-600">5.0 (24 reviews)</span>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-3 mt-3">
                    <div className="mb-2">
                      <span className="font-semibold text-lg">${host.price}</span>
                      <span className="text-gray-600"> / night</span>
                    </div>
                    
                    <div className="text-sm text-gray-600 mb-4">
                      <p>US-educated Azerbaijani host</p>
                      <p>Available dates: {host.availability.length}</p>
                    </div>
                    
                    <Link to={`/host/${host.id}`} className="btn btn-outline w-full text-center">
                      View Full Profile
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Chatbot */}
      <Chatbot />
    </Layout>
  );
};

export default BookingPage;