import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, DollarSign, Users, Clock } from 'lucide-react';
import { Host, Booking } from '../../types';

interface HostDashboardProps {
  host: Host;
  bookings: Booking[];
}

const HostDashboard: React.FC<HostDashboardProps> = ({ host, bookings }) => {
  // Calculate dashboard statistics
  const confirmedBookings = bookings.filter(b => b.status === 'confirmed' || b.status === 'completed');
  const pendingBookings = bookings.filter(b => b.status === 'pending');
  const totalEarnings = confirmedBookings.reduce((total, booking) => total + booking.totalPrice * 0.95, 0);
  const platformFees = confirmedBookings.reduce((total, booking) => total + booking.totalPrice * 0.05, 0);

  const statItems = [
    { icon: <Calendar className="w-6 h-6 text-primary-500" />, label: 'Total Bookings', value: confirmedBookings.length },
    { icon: <Clock className="w-6 h-6 text-secondary-400" />, label: 'Pending', value: pendingBookings.length },
    { icon: <DollarSign className="w-6 h-6 text-green-500" />, label: 'Total Earnings', value: `$${totalEarnings.toFixed(2)}` },
    { icon: <Users className="w-6 h-6 text-accent-500" />, label: 'Unique Guests', value: confirmedBookings.length }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-heading font-semibold">Host Dashboard</h2>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statItems.map((item, index) => (
          <motion.div
            key={index}
            className="card p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gray-100 rounded-full">{item.icon}</div>
              <div>
                <p className="text-gray-600 text-sm">{item.label}</p>
                <p className="text-lg font-semibold">{item.value}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Earnings Chart */}
      <motion.div 
        className="card p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <h3 className="text-lg font-semibold mb-3">Earnings Breakdown</h3>
        <div className="h-16 bg-gray-100 rounded-lg overflow-hidden mb-2">
          <div 
            className="h-full bg-accent-500 flex items-center justify-center text-white font-medium"
            style={{ width: '95%' }}
          >
            95% Host Share: ${totalEarnings.toFixed(2)}
          </div>
        </div>
        <div className="h-8 bg-gray-100 rounded-lg overflow-hidden">
          <div 
            className="h-full bg-secondary-400 flex items-center justify-center text-white text-sm"
            style={{ width: '5%' }}
          >
            5%
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          Platform Fee: ${platformFees.toFixed(2)} (5% of total)
        </p>
      </motion.div>
      
      {/* Recent Bookings */}
      <motion.div 
        className="card p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <h3 className="text-lg font-semibold mb-3">Recent Bookings</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Guest</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dates</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {bookings.map((booking) => (
                <tr key={booking.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{booking.guestName}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{booking.startDate} to {booking.endDate}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">${booking.totalPrice.toFixed(2)}</div>
                    <div className="text-xs text-gray-500">Host: ${(booking.totalPrice * 0.95).toFixed(2)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      booking.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                      booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      booking.status === 'completed' ? 'bg-blue-100 text-blue-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default HostDashboard;