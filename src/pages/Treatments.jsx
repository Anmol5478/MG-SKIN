import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Activity, Eye, Shield, User, Heart, Scissors, Zap, ChevronRight, Phone, Calendar, Clock } from 'react-feather';
import Navbar from './navbar';
import { getTreatmentPath, treatmentCategories } from '../data/treatments';

const Treatments = () => {
  // Color theme matching your brand
  const theme = {
    primary: '#347deb',
    secondary: '#347deb',
    accent: '#FF6B6B',
    light: '#F8F9FA',
    dark: '#1F2937'
  };

  const icons = {
    "Medical Dermatology": <Shield size={32} style={{ color: theme.primary }} />,
    "Cosmetic Dermatology": <User size={32} style={{ color: theme.primary }} />,
    "Laser Treatments": <Zap size={32} style={{ color: theme.primary }} />,
    "Skin Rejuvenation": <Heart size={32} style={{ color: theme.primary }} />,
    "Anti-Aging Treatments": <Eye size={32} style={{ color: theme.primary }} />,
    "Surgical Procedures": <Scissors size={32} style={{ color: theme.primary }} />
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
            Advanced <span style={{ color: theme.accent }}>Skin Treatments</span>
          </motion.h1>
          <p className="text-lg text-white max-w-3xl mx-auto">
            Detailed dermatology, laser, cosmetic, hair, and skin rejuvenation procedures tailored to your needs.
          </p>
        </div>
      </section>

      {/* Treatments Cards */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-14">
            {treatmentCategories.map((category, index) => (
              <motion.section
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full mr-4" style={{ backgroundColor: `${theme.primary}20` }}>
                    {icons[category.title] || <Activity size={32} style={{ color: theme.primary }} />}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold" style={{ color: theme.dark }}>{category.title}</h2>
                    <p className="text-sm mt-1" style={{ color: theme.secondary }}>
                      Choose a procedure to view full details, aftercare, and booking options.
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {category.treatments.map((treatment) => (
                    <Link
                      key={treatment.name}
                      to={getTreatmentPath(treatment.name)}
                      className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all p-5 min-h-64 flex flex-col"
                    >
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: `${theme.primary}12`, color: theme.primary }}>
                          {category.title}
                        </span>
                        <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" style={{ color: theme.primary }} />
                      </div>
                      <h3 className="text-lg font-bold mb-3" style={{ color: theme.dark }}>
                        {treatment.name}
                      </h3>
                      <p className="text-sm leading-6 mb-5 flex-1" style={{ color: theme.secondary }}>
                        {treatment.bestFor}
                      </p>
                      <div className="flex items-center justify-between border-t border-gray-100 pt-4 text-sm">
                        <span className="inline-flex items-center" style={{ color: theme.dark }}>
                          <Clock size={15} className="mr-2" />
                          {treatment.duration}
                        </span>
                        <span className="font-medium" style={{ color: theme.primary }}>
                          View Details
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.section>
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
              href="tel:+918448413128"
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
