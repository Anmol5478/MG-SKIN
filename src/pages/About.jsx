import { motion } from 'framer-motion';
import { GraduationCap, Stethoscope, Briefcase, Award } from 'lucide-react';
import Navbar from '../pages/navbar';
import drMeghnaPhoto from '../assets/DII.jpg';

const About = () => {
  const theme = {
    primary: '#347deb',
    secondary: '#347deb',
    accent: '#FF6B6B',
    light: '#F8F9FA',
    dark: '#1F2937'
  };

  const journey = [
    {
      year: "2005-2010",
      title: "MBBS Degree",
      institution: "Maulana Azad Medical College, Delhi",
      icon: <GraduationCap size={24} style={{ color: theme.primary }} />,
      description: "Completed undergraduate medical education with honors in Dermatology"
    },
    {
      year: "2011-2014",
      title: "MD Dermatology",
      institution: "Maulana Azad Medical College, Delhi",
      icon: <Stethoscope size={24} style={{ color: theme.primary }} />,
      description: "Specialized in Dermatology with research on cosmetic dermatology procedures"
    },
    {
      year: "2015-2017",
      title: "Advanced Training",
      institution: "Yashoda & Sarvodaya Hospitals",
      icon: <Briefcase size={24} style={{ color: theme.primary }} />,
      description: "Received specialized training in laser therapies and cosmetic dermatology"
    },
    {
      year: "2018-Present",
      title: "Founder & Chief Dermatologist",
      institution: "MG Skin Rejuvenance Clinic",
      icon: <Award size={24} style={{ color: theme.primary }} />,
      description: "Established state-of-the-art dermatology clinic serving 850+ patients annually"
    }
  ];

  const stats = [
    {
      value: "12+",
      label: "Years of Experience",
      icon: <Briefcase size={24} />,
      color: theme.primary
    },
    {
      value: "850+",
      label: "Patients Yearly",
      icon: <Stethoscope size={24} />,
      color: theme.accent
    },
    {
      value: "100+",
      label: "Procedures Performed",
      icon: <Award size={24} />,
      color: theme.primary
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.light }}>
      <Navbar />
      
      {/* Hero Section with Photo */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="lg:w-1/2">
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
              style={{ color: theme.dark }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About <span style={{ color: theme.primary }}>Dr. Meghna Gupta</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <p className="text-lg mb-4 leading-relaxed" style={{ color: theme.dark }}>
                Dr. Meghna Gupta is a board-certified dermatologist and cosmetic surgeon with over 12 years of specialized experience in medical, surgical, and aesthetic dermatology.
              </p>
              <p className="text-lg mb-4 leading-relaxed" style={{ color: theme.dark }}>
                After completing her MD from Maulana Azad Medical College, she trained at premier institutes in India and abroad, specializing in advanced laser treatments.
              </p>
              <p className="text-lg mb-6 leading-relaxed" style={{ color: theme.dark }}>
                As the founder of MG Skin Rejuvenance Clinic, she combines evidence-based medicine with artistic precision to deliver natural-looking results.
              </p>
            </motion.div>
          </div>
          
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="relative w-full max-w-md">
              <img 
                src={drMeghnaPhoto} 
                alt="Dr. Meghna Gupta" 
                className="w-full h-auto rounded-lg shadow-xl object-cover"
                style={{ minHeight: '500px' }}
              />
              <div 
                className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-lg border-2"
                style={{ borderColor: theme.primary }}
              ></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professional Timeline Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center"
            style={{ color: theme.dark }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Professional <span style={{ color: theme.primary }}>Journey</span>
          </motion.h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-0 h-full w-1 transform -translate-x-1/2 bg-gradient-to-b from-primary to-secondary"></div>
            
            {journey.map((item, index) => (
              <motion.div
                key={index}
                className={`relative mb-16 last:mb-0 flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:items-start' : 'lg:items-end'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Left side (for even indexes) */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8 lg:order-2'}`}>
                  <div className="inline-block text-center lg:text-right">
                    <p className="text-lg font-semibold px-4 py-1 rounded-full mb-2"
                      style={{ backgroundColor: `${theme.primary}20`, color: theme.primary }}>
                      {item.year}
                    </p>
                  </div>
                </div>

                {/* Center dot (hidden on small screens) */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 z-10"
                  style={{ borderColor: theme.primary }}></div>

                {/* Right side (for odd indexes) */}
                <div className={`lg:w-1/2 mt-4 lg:mt-0 ${index % 2 === 0 ? 'lg:pl-8' : 'lg:pr-8 lg:order-1'}`}>
                  <div className="p-6 rounded-xl shadow-lg bg-gradient-to-r from-white to-gray-50 hover:shadow-xl transition-shadow"
                    style={{ 
                      maxWidth: '500px',
                      borderLeft: index % 2 === 0 ? 'none' : `4px solid ${theme.primary}`,
                      borderRight: index % 2 === 0 ? `4px solid ${theme.primary}` : 'none'
                    }}>
                    <div className="flex items-start">
                      <div className="p-3 rounded-full mr-4" style={{ backgroundColor: `${theme.primary}20` }}>
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1" style={{ color: theme.dark }}>{item.title}</h3>
                        <p className="text-sm font-medium mb-2" style={{ color: theme.primary }}>{item.institution}</p>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: theme.secondary }}>
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white p-4 sm:p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full flex items-center justify-center mb-3 sm:mb-4"
                  style={{ backgroundColor: `${stat.color}20`, color: stat.color }}>
                  {stat.icon}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2" style={{ color: theme.dark }}>
                  {stat.value}
                </h3>
                <p className="text-sm sm:text-base" style={{ color: theme.dark }}>{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
