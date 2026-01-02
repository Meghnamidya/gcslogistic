import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavLinkClick = () => {
    // Close the navbar collapse on mobile
    const navbarCollapse = document.getElementById('navbarCollapse');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      setIsOpen(false);
      navbarCollapse.classList.remove('show');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow p-0 px-3 px-lg-5">
      <NavLink to="/" className="navbar-brand d-flex align-items-center">
        <h4 className="my-2 ms-3"><span className="text-dark">GCS</span> <span className="text-primary">LOGISTICS</span></h4>
      </NavLink>
      <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" onClick={() => setIsOpen(!isOpen)}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <NavLink to="/" className="nav-item nav-link" onClick={handleNavLinkClick}>Home</NavLink>
          <NavLink to="/about" className="nav-item nav-link" onClick={handleNavLinkClick}>About</NavLink>
          <NavLink to="/services" className="nav-item nav-link" onClick={handleNavLinkClick}>Services</NavLink>
          <NavLink to="/team" className="nav-item nav-link" onClick={handleNavLinkClick}>Our Team</NavLink>
          <NavLink to="/testimonial" className="nav-item nav-link" onClick={handleNavLinkClick}>Testimonial</NavLink>
          <NavLink to="/contact" className="nav-item nav-link" onClick={handleNavLinkClick}>Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
