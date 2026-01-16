import React, { useEffect } from 'react';

function Home() {

  useEffect(() => {
    if (window.$ && window.$.fn && window.$.fn.counterUp) {
      window.$('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
      });
    }
  }, []);

  return (
    <div>
      {/* Hero Start */}
      <div className="container-fluid p-0 pb-5">
        <div
          className="position-relative mb-5"
          style={{
            minHeight: '630px',
            backgroundImage: 'linear-gradient(rgba(6,3,21,0.6), rgba(6,3,21,0.6)), url("img/home.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center">
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-12 col-lg-8">
                  <h5 className="text-white text-uppercase mb-3">GCS Logistic & Shipping Company</h5>
                  <h1 className="display-4 text-white mb-4">Reliable Logistics & Shipping Solutions for Your Business</h1>
                  <h4 className="fs-5 fw-medium text-white mb-4 pb-2">Fast, secure and cost-effective freight forwarding, customs clearance, and transportation services across India and worldwide.</h4>
                  <a href="/contact" className="btn btn-primary py-md-3 px-md-5">Get in Touch</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hero End */}

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
              <h6 className="text-secondary text-uppercase mb-3">Welcome to GCS Logistic</h6>
              <h1 className="mb-4">End-to-End Logistics & Shipping Solutions</h1>
              <p className="mb-4">Welcome to GCS Logistic, your trusted partner in end-to-end logistics and shipping solutions. We specialize in international and domestic freight movement through sea and air, providing seamless transportation, customs clearance, warehousing, and door-to-door delivery services. Our mission is to make global trade simple, efficient, and stress-free for businesses of all sizes.</p>
              <div className="row g-4 mb-4">
                <div className="col-12 wow fadeIn" data-wow-delay="0.4s">
                  <div className="d-flex align-items-center">
                    <i className="fa fa-check-circle fa-2x text-primary me-3"></i>
                    <h5 className="mb-0">Hassle-free export & import handling</h5>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                  <div className="d-flex align-items-center">
                    <i className="fa fa-headphones fa-2x text-primary me-3"></i>
                    <h5 className="mb-0">Dedicated customer support</h5>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.6s">
                  <div className="d-flex align-items-center">
                    <i className="fa fa-tags fa-2x text-primary me-3"></i>
                    <h5 className="mb-0">Competitive pricing</h5>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.7s">
                  <div className="d-flex align-items-center">
                    <i className="fa fa-clock fa-2x text-primary me-3"></i>
                    <h5 className="mb-0">On-time delivery assurance</h5>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.8s">
                  <div className="d-flex align-items-center">
                    <i className="fa fa-globe fa-2x text-primary me-3"></i>
                    <h5 className="mb-0">Global network of shipping partners</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Fact Start */}
      <div className="container-xxl py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="text-secondary text-uppercase mb-3">Our Strengths</h6>
              <h1 className="mb-5">Trusted Logistics Excellence</h1>
              <p className="mb-5">Wide transportation network, skilled team, smart route optimization, and competitive pricing. We deliver excellence through reliable logistics services, innovation, and customer-first solutions.</p>
              <div className="d-flex align-items-center">
                <i className="fa fa-headphones fa-2x flex-shrink-0 bg-primary p-3 text-white"></i>
                <div className="ps-4">
                  <h6>Call for any query!</h6>
                    <h3 className="text-primary m-0">+91 7003687053</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-4 align-items-center">
                <div className="col-sm-6">
                  <div className="bg p-4 mb-4 wow fadeIn" style={{backgroundColor: "#fe3f49ff"}} data-wow-delay="0.3s">
                    <i className="fa fa-users fa-2x text-white mb-3"></i>
                    <h2 className="text-white mb-2" data-toggle="counter-up">10+</h2>
                    <p className="text-white mb-0">Happy Clients</p>
                  </div>
                  <div className="bg-secondary p-4 wow fadeIn" data-wow-delay="0.5s">
                    <i className="fa fa-ship fa-2x text-white mb-3"></i>
                    <h2 className="text-white mb-2" data-toggle="counter-up">10+</h2>
                    <p className="text-white mb-0">Complete Shipments</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="bg-success p-4 wow fadeIn" data-wow-delay="0.7s">
                    <i className="fa fa-star fa-2x text-white mb-3"></i>
                    <h2 className="text-white mb-2" data-toggle="counter-up">5+</h2>
                    <p className="text-white mb-0">Customer Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fact End */}

    </div>
  );
}

export default Home;
