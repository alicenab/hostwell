import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, DollarSign, Calendar, CheckCircle, Clock } from 'lucide-react';

interface PaymentSectionProps {
  hostId: string;
  homeId: string;
}

const PaymentSection: React.FC<PaymentSectionProps> = ({ hostId, homeId }) => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: ''
  });
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Calculate total nights
  const calculateNights = () => {
    if (!startDate || !endDate) return 0;
    
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays;
  };
  
  const nights = calculateNights();
  const subtotal = 100 * nights; // Assuming a default price of $100 per night
  const platformFee = subtotal * 0.05;
  const hostEarnings = subtotal - platformFee;
  const total = subtotal;
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment submission
    console.log('Payment submitted:', { hostId, homeId, ...formData });
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };
  
  if (isSuccess) {
    return (
      <motion.div 
        className="card p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-heading font-semibold text-gray-800">
            Payment Successful!
          </h2>
          <p className="text-gray-600 mt-2">
            Your booking has been confirmed.
          </p>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <h3 className="font-medium mb-2">Booking Details</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="text-gray-600">Dates:</div>
            <div className="font-medium">{startDate} to {endDate}</div>
            <div className="text-gray-600">Nights:</div>
            <div className="font-medium">{nights}</div>
            <div className="text-gray-600">Location:</div>
            <div className="font-medium">Unknown</div>
            <div className="text-gray-600">Accommodation:</div>
            <div className="font-medium">Unknown</div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-4 mb-4">
          <h3 className="font-medium mb-2">Payment Breakdown</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-medium">
              <span>Total Paid</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-500 text-xs">
              <span>Platform Fee (5%)</span>
              <span>${platformFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-500 text-xs">
              <span>Host Earnings (95%)</span>
              <span>${hostEarnings.toFixed(2)}</span>
            </div>
          </div>
        </div>
        
        <div className="text-sm text-gray-600 bg-blue-50 p-3 rounded-lg flex items-start">
          <Clock className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-blue-700">What's Next?</p>
            <p className="mt-1">
              You'll receive a confirmation email shortly with all the details. 
              Your host will contact you with check-in instructions before your arrival date.
            </p>
          </div>
        </div>
      </motion.div>
    );
  }
  
  return (
    <div className="card p-6">
      <h2 className="text-xl font-heading font-semibold mb-4">Book Your Stay</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="checkIn" className="label">Check-in Date</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="date"
                id="checkIn"
                className="input pl-10"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="checkOut" className="label">Check-out Date</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="date"
                id="checkOut"
                className="input pl-10"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                required
                min={startDate || new Date().toISOString().split('T')[0]}
              />
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="text-center mb-3">
            <span className="text-sm text-gray-600">Price per night</span>
            <div className="text-2xl font-semibold">${(100).toFixed(2)}</div>
          </div>
          
          {nights > 0 && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>${(100).toFixed(2)} × {nights} nights</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Platform fee (5%)</span>
                <span>${platformFee.toFixed(2)}</span>
              </div>
              <div className="pt-2 border-t border-gray-200 flex justify-between font-semibold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              
              <div className="text-xs mt-2 text-gray-500 flex items-start">
                <DollarSign className="h-3 w-3 mr-1 mt-0.5 flex-shrink-0" />
                <span>Host receives ${hostEarnings.toFixed(2)} (95% of subtotal)</span>
              </div>
            </div>
          )}
        </div>
        
        <div>
          <label htmlFor="cardNumber" className="label">Card Number</label>
          <div className="relative">
            <CreditCard className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              className="input pl-10"
              placeholder="1234 5678 9012 3456"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="expiryDate" className="label">Expiry Date</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                className="input pl-10"
                placeholder="MM/YY"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="cvv" className="label">CVV</label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                className="input pl-10"
                placeholder="123"
                required
              />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="name" className="label">Cardholder Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input"
            placeholder="John Doe"
            required
          />
        </div>

        <button
          type="submit"
          className={`btn w-full ${
            isProcessing ? 'bg-gray-400 cursor-not-allowed' : 'btn-primary'
          }`}
          disabled={isProcessing}
        >
          {isProcessing ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing Payment...
            </span>
          ) : (
            <span>Complete Booking</span>
          )}
        </button>
      </form>
    </div>
  );
};

export default PaymentSection;