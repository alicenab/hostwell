import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { User, Lock, MapPin, Mountain, Compass } from 'lucide-react';

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login form submitted:', formData);
  };

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Welcome Side */}
          <div className="hidden md:flex flex-col justify-center bg-primary-500 rounded-2xl p-12 text-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4">
              <Mountain className="w-32 h-32 text-primary-400 opacity-20" />
            </div>
            <div className="absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4">
              <Compass className="w-40 h-40 text-primary-400 opacity-20" />
            </div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center mb-8">
                <MapPin className="w-10 h-10 mr-4" />
                <h3 className="text-3xl font-bold">HostWell</h3>
              </div>
              
              <h2 className="text-2xl font-bold mb-6">Welcome Back to Your Journey</h2>
              
              <div className="space-y-6 text-primary-50">
                <p className="text-lg">
                  Connect with local hosts and experience authentic Azerbaijani hospitality.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary-400 bg-opacity-20 flex items-center justify-center mr-4">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span>Discover unique local experiences</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary-400 bg-opacity-20 flex items-center justify-center mr-4">
                      <Mountain className="w-4 h-4" />
                    </div>
                    <span>Explore hidden gems with local guides</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary-400 bg-opacity-20 flex items-center justify-center mr-4">
                      <Compass className="w-4 h-4" />
                    </div>
                    <span>Create unforgettable memories</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Login Form Side */}
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Sign In</h2>
              <p className="text-gray-600">
                Don't have an account?{' '}
                <Link to="/host" className="text-primary-600 hover:text-primary-500 font-medium">
                  Create one
                </Link>
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-primary-600 hover:text-primary-500">
                    Forgot password?
                  </a>
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage; 