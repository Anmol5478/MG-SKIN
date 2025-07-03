import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, Phone, Mail, MapPin, ChevronLeft } from 'react-feather';
import Navbar from './navbar';

const Appointment = () => {
  // Color theme matching your brand
  const theme = {
    primary: '#347deb',
    secondary: '#347deb',
    accent: '#FF6B6B',
    light: '#F8F9FA',
    dark: '#1F2937'
  };

  // Available services
  const services = [
    "General Consultation",
    "Acne Treatment",
    "Anti-Aging Treatment",
    "Chemical Peel",
    "Laser Hair Removal",
    "Botox/Fillers",
    "PRP Therapy",
    "Skin Rejuvenation"
  ];

  // Available time slots
  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", 
    "12:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"
  ];

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.date) newErrors.date = 'Please select a date';
    if (!formData.time) newErrors.time = 'Please select a time';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // In a real app, you would send this data to your backend
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      
      // Reset form after submission
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        date: '',
        time: '',
        message: ''
      });
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.light }}>
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back button */}
        <Link 
          to="/" 
          className="flex items-center text-sm mb-6"
          style={{ color: theme.primary }}
        >
          <ChevronLeft size={16} className="mr-1" />
          Back to Home
        </Link>

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: theme.dark }}>
            Book an <span style={{ color: theme.primary }}>Appointment</span>
          </h1>
          <p className="text-lg" style={{ color: theme.dark }}>
            Schedule your consultation with Dr. Meghna Gupta
          </p>
        </div>

        {isSubmitted ? (
          /* Success Message */
          <div className="bg-white p-8 rounded-xl shadow-md text-center max-w-2xl mx-auto">
            <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6" 
              style={{ backgroundColor: `${theme.primary}20` }}>
              <Calendar size={32} style={{ color: theme.primary }} />
            </div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: theme.primary }}>
              Appointment Request Received!
            </h2>
            <p className="mb-6" style={{ color: theme.dark }}>
              Thank you for booking with MG Skin Rejuvenance. We'll contact you shortly to confirm your appointment.
            </p>
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 rounded-full font-medium"
              style={{ 
                backgroundColor: theme.primary,
                color: 'white'
              }}
            >
              Return to Home
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-12">
            {/* Appointment Form */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md">
              <h2 className="text-xl font-bold mb-6" style={{ color: theme.dark }}>
                Personal Information
              </h2>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-5">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-medium mb-1" style={{ color: theme.dark }}>
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User size={16} style={{ color: theme.secondary }} />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`pl-10 w-full p-3 border rounded-lg focus:ring-2 focus:outline-none ${errors.name ? 'border-red-500' : 'border-gray-300 focus:ring-blue-200'}`}
                        placeholder="Enter your full name"
                      />
                    </div>
                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                  </div>

                  {/* Contact Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-1" style={{ color: theme.dark }}>
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Phone size={16} style={{ color: theme.secondary }} />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`pl-10 w-full p-3 border rounded-lg focus:ring-2 focus:outline-none ${errors.phone ? 'border-red-500' : 'border-gray-300 focus:ring-blue-200'}`}
                          placeholder="Enter phone number"
                        />
                      </div>
                      {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1" style={{ color: theme.dark }}>
                        Email <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail size={16} style={{ color: theme.secondary }} />
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`pl-10 w-full p-3 border rounded-lg focus:ring-2 focus:outline-none ${errors.email ? 'border-red-500' : 'border-gray-300 focus:ring-blue-200'}`}
                          placeholder="Enter your email"
                        />
                      </div>
                      {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label className="block text-sm font-medium mb-1" style={{ color: theme.dark }}>
                      Select Service <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`w-full p-3 border rounded-lg focus:ring-2 focus:outline-none ${errors.service ? 'border-red-500' : 'border-gray-300 focus:ring-blue-200'}`}
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                    {errors.service && <p className="mt-1 text-sm text-red-500">{errors.service}</p>}
                  </div>

                  {/* Date and Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-1" style={{ color: theme.dark }}>
                        Appointment Date <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Calendar size={16} style={{ color: theme.secondary }} />
                        </div>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          min={new Date().toISOString().split('T')[0]} // Disable past dates
                          className={`pl-10 w-full p-3 border rounded-lg focus:ring-2 focus:outline-none ${errors.date ? 'border-red-500' : 'border-gray-300 focus:ring-blue-200'}`}
                        />
                      </div>
                      {errors.date && <p className="mt-1 text-sm text-red-500">{errors.date}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1" style={{ color: theme.dark }}>
                        Preferred Time <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Clock size={16} style={{ color: theme.secondary }} />
                        </div>
                        <select
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className={`pl-10 w-full p-3 border rounded-lg focus:ring-2 focus:outline-none ${errors.time ? 'border-red-500' : 'border-gray-300 focus:ring-blue-200'}`}
                        >
                          <option value="">Select time</option>
                          {timeSlots.map((time, index) => (
                            <option key={index} value={time}>{time}</option>
                          ))}
                        </select>
                      </div>
                      {errors.time && <p className="mt-1 text-sm text-red-500">{errors.time}</p>}
                    </div>
                  </div>

                  {/* Additional Message */}
                  <div>
                    <label className="block text-sm font-medium mb-1" style={{ color: theme.dark }}>
                      Additional Notes (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="3"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:outline-none"
                      placeholder="Any special requests or concerns"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 px-6 rounded-full font-medium text-white flex items-center justify-center"
                      style={{ backgroundColor: theme.primary }}
                    >
                      <Calendar size={18} className="mr-2" />
                      Confirm Appointment
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Clinic Information */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-xl font-bold mb-4" style={{ color: theme.dark }}>
                  Clinic Details
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-4" style={{ color: theme.primary }}>
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium" style={{ color: theme.dark }}>MG Skin Rejuvenance</h3>
                      <p className="text-sm" style={{ color: theme.secondary }}>
                      III-F-95, Rakesh Marg, Nehru Nagar III, Nehru Nagar, Ghaziabad, Uttar Pradesh 201001<br />
                        Near Shani Mandir, Rakesh Marg
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
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-4" style={{ color: theme.primary }}>
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium" style={{ color: theme.dark }}>Contact</h3>
                      <p className="text-sm" style={{ color: theme.secondary }}>
                        +91 8448413128 <br />
                        mgskinghaziabad@gmail.com
                      </p>
                      <br />
                      <h3 className="font-medium mb-2" style={{ color: theme.dark }}>Consultation: <span style={{color: theme.primary}}>RS 500/-</span></h3> {/* Updated fee */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-xl font-bold mb-4" style={{ color: theme.dark }}>
                  Why Choose Us?
                </h2>
                <ul className="space-y-3">
                  {[
                    "12+ Years of Dermatology Experience",
                    "Advanced Treatment Technologies",
                    "Personalized Care Approach",
                    "Over 850+ Satisfied Patients",
                    "Sterile & Modern Clinic Environment"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3" style={{ color: theme.primary }}>
                        •
                      </div>
                      <p style={{ color: theme.dark }}>{item}</p>
                    </li>
                  ))}
                </ul>
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Appointment;


