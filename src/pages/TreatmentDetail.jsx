import { Link, useParams } from 'react-router-dom';
import { Calendar, ChevronLeft, Clock, Heart, Phone, Shield, Sun } from 'react-feather';
import Navbar from './navbar';
import { getTreatmentBySlug } from '../data/treatments';

const TreatmentDetail = () => {
  const { slug } = useParams();
  const treatment = getTreatmentBySlug(slug);

  const theme = {
    primary: '#347deb',
    secondary: '#347deb',
    accent: '#FF6B6B',
    light: '#F8F9FA',
    dark: '#1F2937'
  };

  if (!treatment) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: theme.light }}>
        <Navbar />
        <main className="max-w-3xl mx-auto px-6 pt-32 pb-16 text-center">
          <h1 className="text-3xl font-bold mb-4" style={{ color: theme.dark }}>Treatment not found</h1>
          <p className="mb-8" style={{ color: theme.secondary }}>
            The treatment page you opened is not available.
          </p>
          <Link to="/treatments" className="inline-flex items-center px-6 py-3 rounded-full text-white" style={{ backgroundColor: theme.primary }}>
            <ChevronLeft size={18} className="mr-2" />
            Back to Treatments
          </Link>
        </main>
      </div>
    );
  }

  const infoCards = [
    { label: 'Best For', value: treatment.bestFor, icon: <Heart size={20} /> },
    { label: 'Duration', value: treatment.duration, icon: <Clock size={20} /> },
    { label: 'Sessions', value: treatment.sessions, icon: <Calendar size={20} /> },
    { label: 'Aftercare', value: treatment.aftercare, icon: <Sun size={20} /> }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.light }}>
      <Navbar />

      <section className="pt-28 pb-14 px-6" style={{ backgroundColor: theme.primary }}>
        <div className="max-w-5xl mx-auto">
          <Link to="/treatments" className="inline-flex items-center text-sm mb-6 text-white">
            <ChevronLeft size={16} className="mr-1" />
            Back to all treatments
          </Link>
          <p className="text-sm uppercase tracking-wide mb-3 text-white">{treatment.category}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">{treatment.name}</h1>
          <p className="text-lg leading-8 text-white max-w-3xl">{treatment.details}</p>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-5 mb-10">
          {infoCards.map((card) => (
            <div key={card.label} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-3" style={{ color: theme.primary }}>
                {card.icon}
                <h2 className="font-semibold" style={{ color: theme.dark }}>{card.label}</h2>
              </div>
              <p className="text-sm leading-6" style={{ color: theme.secondary }}>{card.value}</p>
            </div>
          ))}
        </div>

        <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-full" style={{ backgroundColor: `${theme.primary}20`, color: theme.primary }}>
              <Shield size={22} />
            </div>
            <h2 className="text-2xl font-bold" style={{ color: theme.dark }}>What to Expect</h2>
          </div>
          <p className="leading-7 mb-4" style={{ color: theme.dark }}>
            Your treatment starts with a dermatologist consultation to understand your skin type, medical history,
            current products, lifestyle triggers, and treatment goals. Dr. Meghna Gupta then recommends a plan that may
            include medicines, procedures, home care, or follow-up sessions depending on the condition.
          </p>
          <p className="leading-7" style={{ color: theme.dark }}>
            Results and session count vary from person to person, so the clinic confirms the exact plan after examining
            your skin or hair concern in person.
          </p>
        </section>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to={`/appointment?service=${encodeURIComponent(treatment.name)}`}
            className="inline-flex items-center justify-center px-7 py-3 rounded-full font-medium text-white"
            style={{ backgroundColor: theme.accent }}
          >
            <Calendar className="mr-2" size={18} />
            Book This Treatment
          </Link>
          <a
            href="tel:+918448413128"
            className="inline-flex items-center justify-center px-7 py-3 rounded-full font-medium border"
            style={{ borderColor: theme.primary, color: theme.primary }}
          >
            <Phone className="mr-2" size={18} />
            Call Clinic
          </a>
        </div>
      </main>
    </div>
  );
};

export default TreatmentDetail;
