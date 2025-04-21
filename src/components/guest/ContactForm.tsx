import React, { useState } from 'react';
import { Mail, MessageCircle } from 'lucide-react';

interface ContactFormProps {
  hostId: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ hostId }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', { hostId, ...formData });
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-xl font-heading font-semibold mb-4">Contact Host</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="label">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="label">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input pl-10"
              required
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="message" className="label">Message</label>
          <div className="relative">
            <MessageCircle className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="input pl-10 h-32"
              required
            />
          </div>
        </div>
        
        <button type="submit" className="btn btn-primary w-full">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;