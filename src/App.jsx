import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reviews from './pages/Reviews';
import About from './pages/About';
import Services from './pages/Services';
import Appointment from './pages/Appointment';
import Treatments from './pages/Treatments';
import Contact from './pages/Contact';

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
        <Route path='/treatments' element={<Treatments />} /> {/* Assuming Treatments is similar to Services */}
        <Route path="/contact" element={<Contact />} />
        {/* Add a catch-all route for 404 */}
      </Routes>
    </Router>
  );
}

export default App;