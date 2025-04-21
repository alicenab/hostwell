import React from 'react';
import Layout from '../components/layout/Layout';
import HostForm from '../components/host/HostForm';
import Chatbot from '../components/chatbot/Chatbot';

const HostPage: React.FC = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-heading font-bold mb-4">Become a Host</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Share your space, earn income, and help travelers experience the authentic Azerbaijan
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <HostForm />
            </div>
            
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-heading font-semibold mb-4">Host Benefits</h2>
                <ul className="space-y-4">
                  {[
                    {
                      title: 'Earn Extra Income',
                      description: 'Receive 95% of each booking payment, with only 5% platform fee.',
                      icon: (
                        <svg className="h-10 w-10 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      ),
                    },
                    {
                      title: 'Share Your Culture',
                      description: 'Connect travelers with authentic Azerbaijani experiences and traditions.',
                      icon: (
                        <svg className="h-10 w-10 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      ),
                    },
                    {
                      title: 'Flexible Hosting',
                      description: 'Choose when your space is available. Host as little or as often as you want.',
                      icon: (
                        <svg className="h-10 w-10 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      ),
                    },
                    {
                      title: 'Dedicated Support',
                      description: 'Access to 24/7 host support and resources to help you succeed.',
                      icon: (
                        <svg className="h-10 w-10 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      ),
                    },
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-4 text-secondary-400">{benefit.icon}</div>
                      <div>
                        <h3 className="font-semibold mb-1">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-heading font-semibold mb-4">What Our Hosts Say</h2>
                <div className="space-y-4">
                  {[
                    {
                      quote: "Being a host has allowed me to share my love for Baku with travelers while earning extra income to support my family. The platform makes it so easy to manage bookings.",
                      name: "Leyla Mammadova",
                      location: "Baku",
                      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
                    },
                    {
                      quote: "I've met wonderful people from around the world who are genuinely interested in our culture. This experience has been incredibly rewarding both financially and personally.",
                      name: "Ilqar Aliyev",
                      location: "Sheki",
                      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
                    },
                  ].map((testimonial, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                      <p className="text-gray-600 italic mb-3">"{testimonial.quote}"</p>
                      <div className="flex items-center">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-10 h-10 rounded-full object-cover mr-3"
                        />
                        <div>
                          <p className="font-medium">{testimonial.name}</p>
                          <p className="text-gray-500 text-sm">Host in {testimonial.location}</p>
                        </div>
                      </div>
                    </div>
                  ))}
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

export default HostPage;