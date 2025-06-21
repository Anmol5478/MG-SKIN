import { motion } from 'framer-motion';
import { GraduationCap, Stethoscope, Briefcase, Award } from 'lucide-react'; // Import icons from lucide-react
import Navbar from './navbar';

const About = () => {
  const theme = {
    primary: '#5D8AA8',
    secondary: '#88B4C7',
    accent: '#FF6B6B',
    light: '#F8F9FA',
    dark: '#343A40'
  };

  const journey = [
    {
      year: "2005-2010",
      title: "MBBS Degree",
      institution: "Maulana Azad Medical College, Delhi",
      icon: <GraduationCap size={24} style={{ color: theme.primary }} />, // Updated icon
      description: "Completed undergraduate medical education with honors in Dermatology"
    },
    {
      year: "2011-2014",
      title: "MD Dermatology",
      institution: "Maulana Azad Medical College, Delhi",
      icon: <Stethoscope size={24} style={{ color: theme.primary }} />, // Updated icon
      description: "Specialized in Dermatology with research on cosmetic dermatology procedures"
    },
    {
      year: "2015-2017",
      title: "Advanced Training",
      institution: "Yashoda & Sarvodaya Hospitals",
      icon: <Briefcase size={24} style={{ color: theme.primary }} />, // Updated icon
      description: "Received specialized training in laser therapies and cosmetic dermatology"
    },
    {
      year: "2018-Present",
      title: "Founder & Chief Dermatologist",
      institution: "MG Skin Rejuvenance Clinic",
      icon: <Award size={24} style={{ color: theme.primary }} />, // Updated icon
      description: "Established state-of-the-art dermatology clinic serving 850+ patients annually"
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.light }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: theme.dark }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            About <span style={{ color: theme.primary }}>Dr. Meghna Gupta</span>
          </motion.h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: theme.dark }}>
            Board-certified dermatologist with 12+ years of experience in medical and cosmetic dermatology
          </p>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 px-6" style={{ backgroundColor: theme.light }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: theme.dark }}>
            Professional <span style={{ color: theme.primary }}>Timeline</span>
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 h-full w-1 transform -translate-x-1/2" 
              style={{ backgroundColor: theme.secondary }}></div>
            
            {journey.map((item, index) => (
              <motion.div
                key={index}
                className={`mb-12 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full z-10"
                  style={{ backgroundColor: theme.primary }}></div>
                
                {/* Content */}
                <div className={`w-5/12 p-6 rounded-lg shadow-md ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}
                  style={{ backgroundColor: 'white' }}>
                  <div className="flex items-center mb-3">
                    <div className="p-2 rounded-full mr-3" style={{ backgroundColor: `${theme.primary}20` }}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-bold" style={{ color: theme.primary }}>{item.year}</p>
                      <h3 className="font-bold text-lg" style={{ color: theme.dark }}>{item.title}</h3>
                    </div>
                  </div>
                  <p className="font-medium mb-2" style={{ color: theme.dark }}>{item.institution}</p>
                  <p style={{ color: theme.dark }}>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;