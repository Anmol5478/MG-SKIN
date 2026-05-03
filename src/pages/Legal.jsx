import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft } from 'react-feather';
import Navbar from './navbar';

const Legal = () => {
  const location = useLocation();
  const isPrivacy = location.pathname.includes('privacy');
  const title = isPrivacy ? 'Privacy Policy' : 'Terms & Conditions';

  const theme = {
    primary: '#347deb',
    light: '#F8F9FA',
    dark: '#1F2937'
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.light }}>
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-16">
        <Link to="/" className="inline-flex items-center text-sm mb-8" style={{ color: theme.primary }}>
          <ChevronLeft size={16} className="mr-1" />
          Back to Home
        </Link>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
          <h1 className="text-3xl font-bold mb-5" style={{ color: theme.dark }}>{title}</h1>
          {isPrivacy ? (
            <div className="space-y-4 leading-7" style={{ color: theme.dark }}>
              <p>MG Skin Rejuvenance collects contact, appointment, and review details only to respond to patient requests and manage clinic communication.</p>
              <p>Form submissions may be stored in the clinic's connected SheetDB spreadsheet. The clinic does not sell patient information.</p>
              <p>Please avoid sharing emergency medical information through website forms. Call the clinic directly for urgent concerns.</p>
            </div>
          ) : (
            <div className="space-y-4 leading-7" style={{ color: theme.dark }}>
              <p>Website information is provided for general awareness and does not replace an in-person consultation with a qualified dermatologist.</p>
              <p>Treatment suitability, session count, recovery, and results vary by patient and are confirmed only after clinical assessment.</p>
              <p>Appointments submitted through the website are requests and are confirmed by the clinic team based on availability.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Legal;
