import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'react-feather';
import Navbar from './navbar';

const Contact = () => {
  // Color theme matching your brand
  const theme = {
    primary: '#5D8AA8',
    secondary: '#88B4C7',
    accent: '#FF6B6B',
    light: '#F8F9FA',
    dark: '#343A40'
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (connect to backend)
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.light }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-6" style={{ backgroundColor: theme.secondary }}>
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Contact <span style={{ color: theme.accent }}>Our Clinic</span>
          </motion.h1>
          <p className="text-lg text-white max-w-3xl mx-auto">
            Reach out for appointments, queries, or skin care advice
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 sm:p-8 rounded-xl shadow-md"
          >
            <h2 className="text-2xl font-bold mb-6" style={{ color: theme.dark }}>
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: theme.dark }}>
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none"
                  style={{ focusRingColor: theme.primary }}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: theme.dark }}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none"
                    placeholder="Your email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: theme.dark }}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none"
                    placeholder="Your phone number"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: theme.dark }}>
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="flex items-center justify-center px-6 py-3 rounded-full font-medium text-white"
                style={{ backgroundColor: theme.primary }}
              >
                <Send size={18} className="mr-2" />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold mb-6" style={{ color: theme.dark }}>
                Clinic Information
              </h2>
              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-4" style={{ color: theme.primary }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium" style={{ color: theme.dark }}>Address</h3>
                    <p className="text-sm" style={{ color: theme.secondary }}>
                      III-F-95, Rakesh Marg, Nehru Nagar III, Nehru Nagar, Ghaziabad, Uttar Pradesh 201001<br />
                        Near Shani Mandir, Rakesh Marg
                      </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-4" style={{ color: theme.primary }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium" style={{ color: theme.dark }}>Phone</h3>
                    <p className="text-sm" style={{ color: theme.secondary }}>
                      +91 8448413128 (Clinic)<br />
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-4" style={{ color: theme.primary }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium" style={{ color: theme.dark }}>Email</h3>
                    <p className="text-sm" style={{ color: theme.secondary }}>
                      mgskinghaziabad@gmail.com<br />
                      
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-4" style={{ color: theme.primary }}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium" style={{ color: theme.dark }}>Working Hours</h3>
                    <p className="text-sm" style={{ color: theme.secondary }}>
                        Monday - Friday: 5:00 PM - 9:00 PM<br />
                        Saturday & Sunday: <span>Morning: </span>10:00 AM - 2:00 PM <br /> <span> <span>Evening:</span>5:00 PM - 9:00 PM</span>
                      </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-200 rounded-xl overflow-hidden h-64">
              {/* Google Maps Embed */}
              <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.1321391352676!2d77.44466527555376!3d28.65576187565208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1c7a617710d%3A0xb9fb2940ee40c872!2sDr.%20Meghna%20Gupta%20Ghaziabad%20Skin%20and%20Hair%20specialist!5e0!3m2!1sen!2sin!4v1750489436856!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;