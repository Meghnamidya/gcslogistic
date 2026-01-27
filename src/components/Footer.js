import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="container-fluid bg-dark text-light footer pt-5 wow fadeIn" data-wow-delay="0.1s" style={{marginTop: '6rem'}}>
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">About GCS Logistic</h4>
            <p>GCS Logistic delivers end-to-end transportation, shipping and warehousing solutions with a strong network, technology-driven operations and a skilled team.</p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
              <a className="btn btn-outline-light btn-social" href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-outline-light btn-social" href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Quick Links</h4>
            <Link className="btn btn-link" style={{fontSize: '15px'}} to="/">Home</Link>
            <Link className="btn btn-link" style={{fontSize: '15px'}} to="/about">About Us</Link>
            <Link className="btn btn-link" style={{fontSize: '15px'}} to="/contact">Contact Us</Link>
            <Link className="btn btn-link" style={{fontSize: '15px'}} to="/services">Our Services</Link>
            <Link className="btn btn-link" style={{fontSize: '15px'}} to="/terms-conditions">Terms & Condition</Link>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Services</h4>
            <Link className="btn btn-link" style={{fontSize: '15px'}} to="/services">Air Freight</Link>
            <Link className="btn btn-link" style={{fontSize: '15px'}} to="/services">Sea Freight</Link>
            <Link className="btn btn-link" style={{fontSize: '15px'}} to="/services">Road Freight</Link>
            <Link className="btn btn-link" style={{fontSize: '15px'}} to="/services">Warehousing</Link>
            <Link className="btn btn-link" style={{fontSize: '15px'}} to="/services">Customs Clearance</Link>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Have a Questions?</h4>
            <p className="mb-2" style={{fontSize: '15px'}}><i className="fa fa-map-marker-alt me-3"></i>Astra Tower, ASO-715, Action Area IIC, Newtown, Kolkata - 700161, India.</p>
            <p className="mb-2" style={{fontSize: '15px'}}><i className="fa fa-phone-alt me-3"></i>+91 7003687053</p>
            <p className="mb-2" style={{fontSize: '15px'}}><i className="fa fa-envelope me-3"></i>info@gcslogistic.com</p>
            <p className="mb-2" style={{fontSize: '15px'}}><i className="fa fa-globe me-3"></i>www.gcslogistic.com</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0" style={{fontSize: '15px'}}>
              Copyright ©{currentYear} All Rights Reserved
            </div>
            <div className="col-md-6 text-center text-md-end" style={{fontSize: '15px'}}>
              Fast, Reliable & Affordable Logistics Solutions
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
