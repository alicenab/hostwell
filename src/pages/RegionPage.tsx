import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Layout from '../components/layout/Layout';
import HostCard from '../components/host/HostCard';
import RegionalRecommendations from '../components/recommendations/RegionalRecommendations';
import Chatbot from '../components/chatbot/Chatbot';
import { regions } from '../data/regions';
import { hosts } from '../data/hosts';
import { recommendations } from '../data/recommendations';

const RegionPage: React.FC = () => {
  const { regionId } = useParams<{ regionId: string }>();
  
  // Find region information
  const region = regions.find(r => r.id === regionId);
  
  // Filter hosts by region
  const regionHosts = hosts.filter(host => host.regionId === regionId);
  
  // If region not found
  if (!region) {
    return (
      <Layout>
        <div className="pt-24 pb-16">
          <div className="container-custom">
            <div className="text-center py-12">
              <h1 className="text-3xl font-heading font-bold mb-4">Region Not Found</h1>
              <p className="text-lg text-gray-600 mb-8">
                The region you're looking for doesn't exist or has been removed.
              </p>
              <Link to="/" className="btn btn-primary">
                Return to Homepage
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Region Hero */}
      <div className="relative pt-16">
        <div className="h-[50vh] min-h-[400px] relative overflow-hidden">
          <img 
            src={region.image} 
            alt={region.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">{region.name}</h1>
            <p className="text-lg md:text-xl text-center max-w-2xl">{region.description}</p>
          </div>
        </div>
      </div>
      
      <div className="container-custom py-12">
        {/* Back Link */}
        <Link to="/" className="inline-flex items-center text-primary-500 hover:text-primary-700 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to All Regions
        </Link>
        
        {/* Hosts Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-heading font-semibold mb-6">Hosts in {region.name}</h2>
          
          {regionHosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regionHosts.map(host => (
                <HostCard key={host.id} host={host} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10 bg-gray-50 rounded-lg">
              <p className="text-gray-600">
                No hosts are currently available in this region.
              </p>
            </div>
          )}
        </section>
        
        {/* Recommendations Section */}
        <section className="mb-12">
          <RegionalRecommendations 
            regionId={region.id} 
            recommendations={recommendations}
          />
        </section>
        
        {/* About Region Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-heading font-semibold mb-6">About {region.name}</h2>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={region.image} 
                  alt={region.name} 
                  className="w-full h-full object-cover object-center"
                  style={{ minHeight: '300px' }}
                />
              </div>
              
              <div className="p-6 md:w-1/2">
                <p className="text-gray-600 mb-6">
                  {region.description}
                  {/* Additional region information would go here */}
                  {region.id === 'sheki' && (
                    " Sheki is known for its traditional sweets, particularly Sheki Halva, a unique dessert made with rice flour, sugar, and nuts. The city's old caravanserai now serves as a hotel, allowing visitors to experience the atmosphere of medieval trade routes."
                  )}
                  {region.id === 'baku' && (
                    " As Azerbaijan's capital, Baku blends ancient history with ultramodern architecture. The Flame Towers, a trio of skyscrapers, have become an iconic symbol of the city's rapid development and connection to its title as the 'Land of Fire'."
                  )}
                  {region.id === 'ganja' && (
                    " Ganja, Azerbaijan's second-largest city, has a history stretching back to the 6th century. The city is associated with the great poet Nizami Ganjavi, whose mausoleum is a significant landmark and place of pilgrimage for literature lovers."
                  )}
                  {region.id === 'quba' && (
                    " Quba is home to the unique Red Village (Qırmızı Qəsəbə), one of the few all-Jewish settlements outside Israel and the United States. The surrounding mountains offer spectacular hiking opportunities with breathtaking views."
                  )}
                  {region.id === 'lankaran' && (
                    " Lankaran's subtropical climate makes it perfect for growing citrus fruits and tea. The area is known for its unique cuisine, particularly dishes featuring locally caught sturgeon and other seafood from the Caspian Sea."
                  )}
                </p>
                
                <h3 className="font-semibold text-lg mb-2">Best Time to Visit</h3>
                <p className="text-gray-600 mb-4">
                  {region.id === 'sheki' && "April to October offers pleasant weather for exploring Sheki's historic sites. The annual Sheki International Silk Festival in June is particularly worth experiencing."}
                  {region.id === 'baku' && "Spring (April-June) and fall (September-October) provide ideal temperatures for exploring Baku. Summers can be hot, but the sea breeze offers relief."}
                  {region.id === 'ganja' && "May to September is ideal for visiting Ganja, with warm days perfect for exploring outdoor attractions and nearby Lake Goygol."}
                  {region.id === 'quba' && "Summer (June-August) is perfect for mountain hiking, while spring brings beautiful wildflowers. Winter offers skiing opportunities in nearby resorts."}
                  {region.id === 'lankaran' && "Lankaran's mild climate makes it a year-round destination, though spring and fall offer the most comfortable temperatures for exploration."}
                </p>
                
                <Link to={`/guest?region=${region.id}`} className="btn btn-primary">
                  Find a Host in {region.name}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      {/* Chatbot */}
      <Chatbot />
    </Layout>
  );
};

export default RegionPage;