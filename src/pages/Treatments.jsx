import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Activity, Eye, Shield, User, Heart, Scissors, Zap, ChevronRight, Phone, Calendar } from 'react-feather'; // Added Phone and Calendar
import Navbar from './navbar';

const Treatments = () => {
  // Color theme matching your brand
  const theme = {
    primary: '#5D8AA8',
    secondary: '#88B4C7',
    accent: '#FF6B6B',
    light: '#F8F9FA',
    dark: '#343A40'
  };

  const treatmentCategories = [
    {
      title: "Acne Solutions",
      icon: <Activity size={32} style={{ color: theme.primary }} />,
      treatments: [
        { name: "Acne Scar Reduction", duration: "60 mins" },
        { name: "Chemical Peels for Acne", duration: "45 mins" },
        { name: "Laser Therapy", duration: "30 mins" },
        { name: "Medicated Facials", duration: "60 mins" }
      ]
    },
    {
      title: "Anti-Aging",
      icon: <Eye size={32} style={{ color: theme.primary }} />,
      treatments: [
        { name: "Botox Injections", duration: "30 mins" },
        { name: "Dermal Fillers", duration: "45 mins" },
        { name: "RF Microneedling", duration: "60 mins" },
        { name: "Thread Lift", duration: "90 mins" }
      ]
    },
    {
      title: "Laser Treatments",
      icon: <Zap size={32} style={{ color: theme.primary }} />,
      treatments: [
        { name: "Laser Hair Removal", duration: "30 mins" },
        { name: "Pigmentation Treatment", duration: "45 mins" },
        { name: "Tattoo Removal", duration: "Varies" },
        { name: "CO2 Fractional Laser", duration: "60 mins" }
      ]
    },
    {
      title: "Skin Rejuvenation",
      icon: <Heart size={32} style={{ color: theme.primary }} />,
      treatments: [
        { name: "HydraFacial", duration: "60 mins" },
        { name: "Microdermabrasion", duration: "45 mins" },
        { name: "PRP Therapy", duration: "90 mins" },
        { name: "Gold Facial", duration: "75 mins" }
      ]
    }
  ];

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
            Advanced <span style={{ color: theme.accent }}>Skin Treatments</span>
          </motion.h1>
          <p className="text-lg text-white max-w-3xl mx-auto">
            Specialized dermatological procedures tailored to your skin needs
          </p>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {treatmentCategories.map((category, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-full mr-4" style={{ backgroundColor: `${theme.primary}20` }}>
                      {category.icon}
                    </div>
                    <h2 className="text-xl font-bold" style={{ color: theme.dark }}>{category.title}</h2>
                  </div>
                  
                  <div className="space-y-4">
                    {category.treatments.map((treatment, i) => (
                      <div key={i} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg">
                        <div>
                          <h3 className="font-medium" style={{ color: theme.dark }}>{treatment.name}</h3>
                          <p className="text-sm" style={{ color: theme.secondary }}>{treatment.duration}</p>
                        </div>
                        <Link
                          to="/appointment"
                          className="flex items-center text-sm font-medium"
                          style={{ color: theme.primary }}
                        >
                          Book <ChevronRight size={16} className="ml-1" />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6" style={{ backgroundColor: theme.accent }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Not Sure Which Treatment You Need?
          </h2>
          <p className="text-white mb-8">
            Book a consultation with Dr. Meghna Gupta for personalized recommendations
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:+911234567890"
              className="flex items-center justify-center px-8 py-3 rounded-full font-medium bg-white"
              style={{ color: theme.accent }}
            >
              <Phone className="mr-2" size={18} />
              Call for Advice
            </a>
            <Link
              to="/appointment"
              className="flex items-center justify-center px-8 py-3 rounded-full font-medium border-2 border-white"
              style={{ color: 'white' }}
            >
              <Calendar className="mr-2" size={18} />
              Book Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Treatments;