import React from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, Heart, Shield } from 'lucide-react';
import Layout from '../components/layout/Layout';

const AboutUsPage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative py-20 bg-primary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              About HostWell
            </h1>
            <p className="text-lg text-gray-600">
              Connecting travelers with US-educated Azerbaijani hosts for authentic cultural experiences
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-heading font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                At HostWell, we believe that the best way to experience Azerbaijan is through the eyes of locals who have experienced both Azerbaijani and American cultures. Our platform connects travelers with US-educated Azerbaijani hosts who can provide unique insights and authentic experiences.
              </p>
              <p className="text-gray-600">
                We're not just about accommodation - we're about creating meaningful connections and unforgettable experiences that bridge cultures and create lasting memories.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative h-96"
            >
              <img
                src="https://images.pexels.com/photos/6693907/pexels-photo-6693907.jpeg"
                alt="Azerbaijani culture"
                className="w-full h-full object-cover rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do at HostWell
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8 text-primary-500" />,
                title: "Cultural Exchange",
                description: "We believe in the power of cultural exchange to build bridges between people and nations."
              },
              {
                icon: <Globe className="w-8 h-8 text-primary-500" />,
                title: "Global Perspective",
                description: "Our hosts bring a unique blend of local knowledge and international experience."
              },
              {
                icon: <Heart className="w-8 h-8 text-primary-500" />,
                title: "Authentic Experiences",
                description: "We're committed to providing genuine, meaningful experiences that go beyond tourism."
              },
              {
                icon: <Shield className="w-8 h-8 text-primary-500" />,
                title: "Trust & Safety",
                description: "We maintain high standards for both hosts and guests to ensure safe and comfortable experiences."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A diverse team of passionate individuals working to make cultural exchange accessible and meaningful
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Founder & CEO",
                image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
                bio: "Former Peace Corps volunteer with a passion for cultural exchange and sustainable tourism."
              },
              {
                name: "David Chen",
                role: "CTO",
                image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
                bio: "Tech entrepreneur with experience in building platforms that connect people across cultures."
              },
              {
                name: "Amina Aliyev",
                role: "Head of Host Relations",
                image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
                bio: "Azerbaijani-American with deep connections in both countries and a commitment to cultural exchange."
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-64">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary-500 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-6">
              Join Our Community
            </h2>
            <p className="text-gray-600 mb-8">
              Whether you're a traveler looking for authentic experiences or a host ready to share your culture, we'd love to have you join our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/hosts" className="btn btn-primary">
                Become a Host
              </a>
              <a href="/search" className="btn btn-outline">
                Find a Host
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUsPage; 