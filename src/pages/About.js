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
              <h6 className="text-secondary text-uppercase mb-3">About Us</h6>
              <h1 className="mb-4">About GCS Logistic Company</h1>
              <p className="mb-4">GCS Logistic & Shipping Company is a professional freight forwarding and logistics service provider offering complete transportation and supply chain solutions under one roof. With a strong network of carriers, agents, and port partners, we handle shipments efficiently from origin to destination.</p>
              <p className="mb-5">We work with exporters, importers, manufacturers, traders, and individual clients to ensure smooth movement of goods across borders. Our experienced team manages every step — documentation, customs compliance, freight booking, warehousing, and delivery — so you can focus on your business.</p>
              <div className="row g-4 mb-4">
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                  <div className="d-flex align-items-start">
                    <i className="fa fa-bullseye fa-2x text-primary me-3"></i>
                    <div>
                      <h5 className="mb-2">Our Vision</h5>
                      <p className="m-0">To become a trusted global logistics partner known for reliability, transparency, and customer satisfaction.</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                  <div className="d-flex align-items-start">
                    <i className="fa fa-rocket fa-2x text-primary me-3"></i>
                    <div>
                      <h5 className="mb-2">Our Mission</h5>
                      <p className="m-0">To deliver safe, timely, and cost-effective logistics solutions through innovation, teamwork, and continuous improvement.</p>
                    </div>
                  </div>
                </div>
              </div>
              <h6 className="text-secondary text-uppercase mt-5 mb-3">Why Choose Us</h6>
              <div className="row g-4 mb-4">
                <div className="col-12 wow fadeIn" data-wow-delay="0.6s">
                  <div className="d-flex align-items-center">
                    <i className="fa fa-user-tie fa-2x text-primary me-3"></i>
                    <h5 className="mb-0">Professional and experienced team</h5>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.7s">
                  <div className="d-flex align-items-center">
                    <i className="fa fa-cogs fa-2x text-primary me-3"></i>
                    <h5 className="mb-0">Customized shipping solutions</h5>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.8s">
                  <div className="d-flex align-items-center">
                    <i className="fa fa-comments fa-2x text-primary me-3"></i>
                    <h5 className="mb-0">Transparent communication</h5>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.9s">
                  <div className="d-flex align-items-center">
                    <i className="fa fa-network-wired fa-2x text-primary me-3"></i>
                    <h5 className="mb-0">Strong global network</h5>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="1.0s">
                  <div className="d-flex align-items-center">
                    <i className="fa fa-heart fa-2x text-primary me-3"></i>
                    <h5 className="mb-0">Customer-centric approach</h5>
                  </div>
                </div>
              </div>
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
              <h6 className="text-secondary text-uppercase mb-3">Our Capabilities</h6>
              <h1 className="mb-5">Complete Transportation & Supply Chain Solutions</h1>
              <div className="d-flex mb-5 wow fadeInUp" data-wow-delay="0.3s">
                <i className="fa fa-route text-primary fa-3x flex-shrink-0"></i>
                <div className="ms-4">
                  <h5>Planning, Routing & Booking</h5>
                  <p className="mb-0">End-to-end freight forwarding covering planning, routing, booking, tracking, and delivery worldwide.</p>
                </div>
              </div>
              <div className="d-flex mb-5 wow fadeIn" data-wow-delay="0.5s">
                <i className="fa fa-warehouse text-primary fa-3x flex-shrink-0"></i>
                <div className="ms-4">
                  <h5>Warehousing & Distribution</h5>
                  <p className="mb-0">Short-term and long-term storage, inventory management, and distribution support as per client needs.</p>
                </div>
              </div>
              <div className="d-flex mb-0 wow fadeInUp" data-wow-delay="0.7s">
                <i className="fa fa-shield-alt text-primary fa-3x flex-shrink-0"></i>
                <div className="ms-4">
                  <h5>Compliance & Documentation</h5>
                  <p className="mb-0">Complete customs compliance, documentation, duty handling, and licensing assistance for smooth clearance.</p>
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
