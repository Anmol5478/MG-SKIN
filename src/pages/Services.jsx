import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Activity, Eye, Shield, User, Heart, Scissors, Zap, ChevronRight, Phone } from 'react-feather'; // Added ChevronRight and Phone
import Navbar from './navbar';

const Services = () => {
  // Color theme matching your brand
  const theme = {
    primary: '#5D8AA8',
    secondary: '#88B4C7',
    accent: '#FF6B6B',
    light: '#F8F9FA',
    dark: '#343A40'
  };

  // Service categories
  const serviceCategories = [
    {
      title: "Medical Dermatology",
      icon: <Shield size={32} style={{ color: theme.primary }} />,
      services: [
        "Acne & Acne Scar Treatment",
        "Psoriasis Management",
        "Eczema Treatment",
        "Skin Allergy Solutions",
        "Fungal Infections",
        "Vitiligo Treatment",
        "Hair Loss Solutions"
      ]
    },
    {
      title: "Cosmetic Dermatology",
      icon: <User size={32} style={{ color: theme.primary }} />,
      services: [
        "Botox & Fillers",
        "Chemical Peels",
        "Dermal Fillers",
        "Thread Lift",
        "Lip Augmentation",
        "Under Eye Rejuvenation"
      ]
    },
    {
      title: "Laser Treatments",
      icon: <Zap size={32} style={{ color: theme.primary }} />,
      services: [
        "Laser Hair Removal",
        "Laser Tattoo Removal",
        "Fractional CO2 Laser",
        "Q-Switch Laser",
        "Laser for Pigmentation",
        "Laser for Stretch Marks"
      ]
    },
    {
      title: "Skin Rejuvenation",
      icon: <Heart size={32} style={{ color: theme.primary }} />,
      services: [
        "HydraFacial",
        "Microdermabrasion",
        "PRP Therapy",
        "Mesotherapy",
        "Derma Roller",
        "Carbon Peel"
      ]
    },
    {
      title: "Anti-Aging Treatments",
      icon: <Eye size={32} style={{ color: theme.primary }} />,
      services: [
        "Anti-Wrinkle Injections",
        "Skin Tightening",
        "RF Microneedling",
        "Ultherapy",
        "Stem Cell Therapy"
      ]
    },
    {
      title: "Surgical Procedures",
      icon: <Scissors size={32} style={{ color: theme.primary }} />,
      services: [
        "Mole Removal",
        "Wart Removal",
        "Skin Biopsy",
        "Cyst Removal",
        "Nail Surgery"
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
            Our <span style={{ color: theme.accent }}>Dermatology Services</span>
          </motion.h1>
          <p className="text-lg text-white max-w-3xl mx-auto">
            Comprehensive skin care solutions tailored to your unique needs by Dr. Meghna Gupta
          </p>
        </div>
      </section>

      {/* All Services Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-full mr-4" style={{ backgroundColor: `${theme.primary}20` }}>
                      {category.icon}
                    </div>
                    <h2 className="text-xl font-bold" style={{ color: theme.dark }}>{category.title}</h2>
                  </div>
                  <ul className="space-y-3">
                    {category.services.map((service, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0 mt-1 mr-3" style={{ color: theme.primary }}>
                          •
                        </div>
                        <p style={{ color: theme.dark }}>{service}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 py-4 border-t" style={{ borderColor: theme.light }}>
                  <Link
                    to="/appointment"
                    className="inline-flex items-center font-medium"
                    style={{ color: theme.primary }}
                  >
                    Book Consultation <ChevronRight className="ml-1" size={16} />
                  </Link>
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
            Personalized Treatment Plans
          </h2>
          <p className="text-white mb-8">
            Each treatment is customized based on thorough skin analysis and your specific concerns
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:+911234567890"
              className="flex items-center justify-center px-8 py-3 rounded-full font-medium bg-white"
              style={{ color: theme.accent }}
            >
              <Phone className="mr-2" size={18} />
              Call for Consultation
            </a>
            <Link
              to="/appointment"
              className="flex items-center justify-center px-8 py-3 rounded-full font-medium border-2 border-white"
              style={{ color: 'white' }}
            >
              Online Booking
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;