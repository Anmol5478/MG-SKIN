import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reviews from './pages/Reviews';
import About from './pages/About';
import Services from './pages/Services';
import Appointment from './pages/Appointment';
import Treatments from './pages/Treatments';
import TreatmentDetail from './pages/TreatmentDetail';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/appointment" element={<Appointment />} />
        {/* Add more routes as needed */}
        <Route path="/treatments" element={<Treatments />} />
        <Route path="/treatments/:slug" element={<TreatmentDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<Legal />} />
        <Route path="/terms-conditions" element={<Legal />} />
        {/* Add a catch-all route for 404 */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
