import { Link } from 'react-router-dom';
import { Calendar, Mail, MapPin, Phone, ChevronRight } from 'react-feather';
import { getTreatmentPath, treatmentsWithCategories } from '../data/treatments';

const Footer = () => {
  const theme = {
    primary: '#347deb',
    accent: '#FF6B6B',
    dark: '#1F2937'
  };

  const siteLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Treatments', path: '/treatments' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' }
  ];

  const mandatoryLinks = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms & Conditions', path: '/terms-conditions' },
    { name: 'Clinic Location', path: 'https://maps.app.goo.gl/fPgwQRJmJncV38c96', external: true }
  ];

  return (
    <footer style={{ backgroundColor: theme.dark, color: 'white' }}>
      {/* Procedures strip — vertical tabs format */}
     

      {/* Main footer body */}
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold mb-3">
              <span style={{ color: theme.primary }}>MG</span> Skin Rejuvenance
            </h2>
            <p className="text-sm leading-6 text-gray-400 mb-6">
              Dermatology, laser, cosmetic, skin, hair, and minor procedure care by Dr. Meghna Gupta in Ghaziabad.
            </p>
            <Link
              to="/appointment"
              className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium transition-opacity hover:opacity-90"
              style={{ backgroundColor: theme.accent, color: 'white' }}
            >
              <Calendar size={15} className="mr-2" />
              Book Appointment
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: theme.primary }}>
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
              {[...siteLinks, ...mandatoryLinks].map((link) =>
                link.external ? (
                  
                   <a key={link.name}
                    href={link.path}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                  >
                    <ChevronRight size={11} style={{ color: theme.primary }} />
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                  >
                    <ChevronRight size={11} style={{ color: theme.primary }} />
                    {link.name}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: theme.primary }}>
              Clinic Contact
            </h3>
            <div className="space-y-4 text-sm text-gray-400">
              <a href="tel:+918448413128" className="flex items-start hover:text-white transition-colors group">
                <span
                  className="mr-3 mt-0.5 p-1.5 rounded-md shrink-0"
                  style={{ backgroundColor: 'rgba(52,125,235,0.15)' }}
                >
                  <Phone size={13} style={{ color: theme.primary }} />
                </span>
                +91 8448413128
              </a>
              <a href="mailto:mgskinghaziabad@gmail.com" className="flex items-start hover:text-white transition-colors">
                <span
                  className="mr-3 mt-0.5 p-1.5 rounded-md shrink-0"
                  style={{ backgroundColor: 'rgba(52,125,235,0.15)' }}
                >
                  <Mail size={13} style={{ color: theme.primary }} />
                </span>
                mgskinghaziabad@gmail.com
              </a>
              <a
                href="https://maps.app.goo.gl/fPgwQRJmJncV38c96"
                target="_blank"
                rel="noreferrer"
                className="flex items-start hover:text-white transition-colors"
              >
                <span
                  className="mr-3 mt-0.5 p-1.5 rounded-md shrink-0"
                  style={{ backgroundColor: 'rgba(52,125,235,0.15)' }}
                >
                  <MapPin size={13} style={{ color: theme.primary }} />
                </span>
                III-F-95, Rakesh Marg, Nehru Nagar III, Ghaziabad
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 pt-6 text-center text-xs text-gray-500"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
        >
          © {new Date().getFullYear()} MG Skin Rejuvenance. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;