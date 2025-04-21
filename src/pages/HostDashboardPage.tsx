import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import HostDashboard from '../components/host/HostDashboard';
import Chatbot from '../components/chatbot/Chatbot';
import { hosts } from '../data/hosts';
import { bookings } from '../data/bookings';

const HostDashboardPage: React.FC = () => {
  // In a real app, we would use authentication to determine the host
  // For demo purposes, we'll use a parameter or default to the first host
  const { hostId = '1' } = useParams<{ hostId?: string }>();
  
  // Find host information
  const host = hosts.find(h => h.id === hostId) || hosts[0];
  
  // Filter bookings for this host
  const hostBookings = bookings.filter(booking => booking.hostId === host.id);

  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="container-custom">
          <div className="mb-8">
            <h1 className="text-3xl font-heading font-bold mb-2">Host Dashboard</h1>
            <p className="text-gray-600">
              Welcome back, {host.name}! Here's an overview of your hosting activity.
            </p>
          </div>
          
          <HostDashboard host={host} bookings={hostBookings} />
        </div>
      </div>
      
      {/* Chatbot */}
      <Chatbot />
    </Layout>
  );
};

export default HostDashboardPage;