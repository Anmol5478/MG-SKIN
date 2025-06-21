import { motion } from 'framer-motion';
import { Phone, Calendar, ChevronRight, Star, MapPin, User, Smile, Activity } from 'react-feather';
import Navbar from './navbar';
import image from "../assets/Clinic.webp";

const Home = () => {
  // Your existing color theme
  const theme = {
    primary: '#5D8AA8',
    secondary: '#88B4C7',
    accent: '#FF6B6B',
    light: '#F8F9FA',
    dark: '#343A40'
  };

  // Statistics Data
  const stats = [
    { icon: <User size={40} />, value: '850+', label: 'Patients Treated', color: theme.primary },
    { icon: <Activity size={40} />, value: '95%', label: 'Success Rate', color: theme.accent },
    { icon: <Star size={40} />, value: '4.9/5', label: 'Average Rating', color: theme.secondary }
  ];

  // Testimonials Data
  const testimonials = [
    {
      name: 'Priya Sharma',
      treatment: 'Acne Treatment',
      rating: 5,
      review: 'Dr. Meghna completely transformed my skin in just 3 months!',
      avatar: 'PS'
    },
    {
      name: 'Rahul Verma',
      treatment: 'Anti-Aging',
      rating: 5,
      review: 'The best dermatologist in Delhi. Highly recommended!',
      avatar: 'RV'
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.light }}>
      <Navbar />

      {/* 1. Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: theme.dark }}>
              Expert <span style={{ color: theme.primary }}>Skin Care</span> in Ghaziabad
            </h1>
            <p className="text-lg mb-8" style={{ color: theme.dark }}>
              Dr. Meghna Gupta provides advanced dermatological treatments with 12+ years of experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/appointment"
                className="flex items-center justify-center px-6 py-3 rounded-full font-medium"
                style={{ backgroundColor: theme.accent, color: 'white' }}
              >
                <Calendar className="mr-2" size={18} />
                Book Appointment
              </a>
              <a 
                href="tel:+918448413128"
                className="flex items-center justify-center px-6 py-3 rounded-full font-medium border"
                style={{ borderColor: theme.primary, color: theme.primary }}
              >
                <Phone className="mr-2" size={18} />
                Call Now
              </a>
            </div>
          </motion.div>

          <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  className="relative"
>
  <div className="w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-lg bg-gray-200 flex items-center justify-center">
    {/* Adjust the image to show the top part */}
    <img 
      className="w-full h-full object-cover object-top" 
      src={image} 
      alt="Clinic" 
    />
  </div>
</motion.div>
        </div>
      </section>

      {/* 2. Statistics Section */}
      <section className="py-12 px-6" style={{ backgroundColor: theme.secondary }}>
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl text-center shadow-md"
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${stat.color}20`, color: stat.color }}>
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold mb-2" style={{ color: theme.dark }}>
                  {stat.value}
                </h3>
                <p style={{ color: theme.dark }}>{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Services Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: theme.dark }}>
            Our <span style={{ color: theme.primary }}>Specialized Services</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Acne Treatment", icon: <Activity size={32} style={{ color: theme.primary }} /> },
              { title: "Anti-Aging", icon: <Smile size={32} style={{ color: theme.primary }} /> },
              { title: "Skin Rejuvenation", icon: <User size={32} style={{ color: theme.primary }} /> }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="border rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${theme.primary}20` }}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: theme.dark }}>
                  {service.title}
                </h3>
                <p className="mb-4" style={{ color: theme.dark }}>
                  Professional treatment for {service.title.toLowerCase()}
                </p>
                <a href="/services" className="inline-flex items-center" style={{ color: theme.primary }}>
                  Learn more <ChevronRight className="ml-1" size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Testimonials Section */}
      <section className="py-16 px-6" style={{ backgroundColor: theme.light }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: theme.dark }}>
            Patient <span style={{ color: theme.primary }}>Testimonials</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 text-white font-bold"
                    style={{ backgroundColor: theme.primary }}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold" style={{ color: theme.dark }}>{testimonial.name}</h4>
                    <p className="text-sm" style={{ color: theme.secondary }}>{testimonial.treatment}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      fill={i < testimonial.rating ? theme.accent : 'none'} 
                      color={i < testimonial.rating ? theme.accent : theme.secondary} 
                    />
                  ))}
                </div>
                <p className="italic" style={{ color: theme.dark }}>"{testimonial.review}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Location Section */}
      <section className="py-16 px-6 bg-white">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: theme.dark }}>
      Our <span style={{ color: theme.primary }}>Location</span>
    </h2>
    
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h3 className="text-xl font-bold mb-4" style={{ color: theme.dark }}>
          MG Skin Rejuvenance
        </h3>
        <p className="mb-6" style={{ color: theme.dark }}>
        III-F-95, Rakesh Marg, Nehru Nagar III, Nehru Nagar, Ghaziabad, Uttar Pradesh 201001<br />
        Near Shani Mandir, Rakesh Marg <br/>
        <br />
          Open: Mon-Fri, 5:00 PM- 9:00 PM
          <br />
          Sat-Sun 10:00 AM - 2:00 PM
        </p>
        <a 
          href="https://maps.app.goo.gl/fPgwQRJmJncV38c96" 
          target="_blank"
          className="inline-flex items-center px-6 py-3 rounded-full font-medium"
          style={{ backgroundColor: theme.primary, color: 'white' }}
        >
          <MapPin className="mr-2" size={18} />
          Get Directions
        </a>
      </div>
      
      <div className="h-64 md:h-80 bg-gray-200 rounded-xl overflow-hidden">
        {/* Embed Google Maps iframe */}
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
</section>

      {/* 6. Footer */}
      <footer className="py-8 px-6" style={{ backgroundColor: theme.dark, color: 'white' }}>
        <div className="max-w-7xl mx-auto text-center">
          <p>© {new Date().getFullYear()} MG Skin Rejuvenance. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;