import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Calendar } from 'react-feather';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const theme = {
    primary: '#5D8AA8',
    secondary: '#88B4C7',
    accent: '#FF6B6B',
    light: '#F8F9FA',
    dark: '#1F2937' // darker for better contrast
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Treatments', path: '/treatments' },
    { name: 'Contact', path: '/contact' },
    { name: 'Reviews', path: '/reviews' }
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'shadow-md py-2' : 'py-4'}`}
      style={{
        backgroundColor: theme.light,
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderBottom: '1px solid #e5e7eb'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-9 h-9 rounded-full flex items-center justify-center bg-blue-600">
            <span className="text-white font-bold text-lg">MG</span>
          </div>
          <span className="text-lg font-bold">
            <span style={{ color: theme.primary }}>MG</span>
            <span style={{ color: theme.dark }}> Skin Rejuvenance</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm font-medium hover:text-blue-600 transition-colors"
              style={{ color: theme.dark }}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden md:flex items-center space-x-3">
          <a 
            href="tel:+91 8448413128"
            className="flex items-center px-4 py-2 text-sm font-medium rounded-full shadow-sm transition"
            style={{
              backgroundColor: theme.secondary,
              color: '#fff'
            }}
          >
            <Phone size={16} className="mr-2" />
            Call
          </a>
          <Link
            to="/appointment"
            className="flex items-center px-4 py-2 text-sm font-medium rounded-full shadow-sm transition"
            style={{
              backgroundColor: theme.accent,
              color: '#fff'
            }}
          >
            <Calendar size={16} className="mr-2" />
            Book
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-700"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 pb-4 space-y-2 bg-white">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 rounded text-sm font-medium hover:bg-gray-100"
              style={{ color: theme.dark }}
            >
              {link.name}
            </Link>
          ))}
          <div className="border-t pt-3 space-y-2">
            <a 
              href="tel:+1234567890"
              className="w-full flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium"
              style={{ backgroundColor: theme.secondary, color: 'white' }}
            >
              <Phone size={16} className="mr-2" />
              Call Now
            </a>
            <Link
              to="/appointment"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium"
              style={{ backgroundColor: theme.accent, color: 'white' }}
            >
              <Calendar size={16} className="mr-2" />
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
