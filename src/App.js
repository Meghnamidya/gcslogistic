import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Spinner from './components/Spinner';
import BackToTop from './components/BackToTop';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Team from './pages/Team';
import Blog from './pages/Blog';
import TermsConditions from './pages/TermsConditions';

function App() {
  useEffect(() => {
    // Load external scripts
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    // Load jQuery and other libraries
    const loadLibraries = async () => {
      try {
        await loadScript('https://code.jquery.com/jquery-3.4.1.min.js');
        await loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js');
        await loadScript(`${process.env.PUBLIC_URL}/lib/wow/wow.min.js`);
        await loadScript(`${process.env.PUBLIC_URL}/lib/easing/easing.min.js`);
        await loadScript(`${process.env.PUBLIC_URL}/lib/waypoints/waypoints.min.js`);
        await loadScript(`${process.env.PUBLIC_URL}/lib/counterup/counterup.min.js`);
        await loadScript(`${process.env.PUBLIC_URL}/js/main.js`);

        // Initialize WOW.js
        if (window.WOW) {
          new window.WOW().init();
        }
      } catch (error) {
        console.error('Error loading scripts:', error);
      }
    };

    loadLibraries();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Spinner />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
