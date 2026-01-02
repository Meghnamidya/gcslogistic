import React from 'react';

function About() {
  return (
    <div>
      
      {/* About Start */}
      <div className="container-fluid overflow-hidden py-5 px-lg-0">
        <div className="container about py-5 px-lg-0">
          <div className="row g-5 mx-lg-0">
            <div className="col-lg-6 ps-lg-0 wow fadeInLeft" data-wow-delay="0.1s" style={{minHeight: '400px'}}>
              <div className="position-relative h-100">
                <img className="position-absolute img-fluid w-100 h-100" src="img/about.jpg" style={{objectFit: 'cover'}} alt="" />
              </div>
            </div>
            <div className="col-lg-6 about-text wow fadeInUp" data-wow-delay="0.3s">
              <h6 className="text-secondary text-uppercase mb-3">Who We Are</h6>
              <h1 className="mb-5">GCS Logistics | Trusted Supply Chain Partner</h1>
              <p className="mb-5">GCS Logistics delivers end-to-end transportation, shipping, and warehousing solutions. With a strong network, technology-driven operations, and a skilled team, we ensure smooth, efficient, and safe delivery for businesses across industries.</p>
              <div className="row g-4 mb-5">
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                  <i className="fa fa-globe fa-3x text-primary mb-3"></i>
                    <h5>Pan-India & Global Network</h5>
                    <p className="m-0">Wide transportation network covering major cities, ports, airports, and industrial hubs.</p>
                </div>
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.7s">
                  <i className="fa fa-shipping-fast fa-3x text-primary mb-3"></i>
                  <h5>On Time Delivery</h5>
                    <p className="m-0">GPS-enabled fleet and smart route optimization ensure timely deliveries every time.</p>
                </div>
              </div>
              <a href="/services" className="btn btn-primary py-3 px-5">Explore More</a>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      
      {/* Feature Start */}
      <div className="container-fluid overflow-hidden py-5 px-lg-0">
        <div className="container feature py-5 px-lg-0">
          <div className="row g-5 mx-lg-0">
            <div className="col-lg-6 feature-text wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="text-secondary text-uppercase mb-3">Our Features</h6>
                <h1 className="mb-5">Trusted Logistics Partner Serving Multiple Industries</h1>
              <div className="d-flex mb-5 wow fadeInUp" data-wow-delay="0.3s">
                <i className="fa fa-globe text-primary fa-3x flex-shrink-0"></i>
                <div className="ms-4">
                  <h5>Technology-Driven Operations</h5>
                  <p className="mb-0">GPS-enabled fleet, automated tracking systems, and smart route planning for transparency at every step.</p>
                </div>
              </div>
              <div className="d-flex mb-5 wow fadeIn" data-wow-delay="0.5s">
                <i className="fa fa-shipping-fast text-primary fa-3x flex-shrink-0"></i>
                <div className="ms-4">
                  <h5>Safety & Compliance First</h5>
                  <p className="mb-0">Strict operational checks, quality standards, insurance options, and compliance with all regulations.</p>
                </div>
              </div>
              <div className="d-flex mb-0 wow fadeInUp" data-wow-delay="0.7s">
                <i className="fa fa-headphones text-primary fa-3x flex-shrink-0"></i>
                <div className="ms-4">
                  <h5>Dedicated Customer Support</h5>
                  <p className="mb-0">Available throughout the shipping journey for updates, queries, and assistance for all your logistics needs.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 pe-lg-0 wow fadeInRight" data-wow-delay="0.1s" style={{minHeight: '400px'}}>
              <div className="position-relative h-100">
                <img className="position-absolute img-fluid w-100 h-100" src="img/feature.jpg" style={{objectFit: 'cover'}} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Feature End */}
    </div>
  );
}

export default About;
