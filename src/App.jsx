import React, { useEffect } from 'react';
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import AOS from 'aos';
import "aos/dist/aos.css";
import Home from './pages/Home';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      once: true,
      duration: 1000,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
}
