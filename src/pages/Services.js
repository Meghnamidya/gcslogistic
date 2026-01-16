import React from 'react';

function Services() {
  return (
    <div>
      
      {/* Service Start */}
      <div className="container-xxl py-5">
        <div className="container py-5">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="text-secondary text-uppercase">Our Logistics & Shipping Services</h6>
            <h1 className="mb-5">Designed to Support Your Business Growth</h1>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item p-4" style={{background: 'linear-gradient(135deg, #E0F7FF 0%, #F0FBFF 100%)', borderRadius: '12px', display: 'flex', flexDirection: 'column', height: '100%'}}>
                <div className="overflow-hidden mb-4">
                  <img className="img-fluid" src="img/service-2.jpg" alt="" />
                </div>
                <h4 className="mb-3">Ocean Freight Services</h4>
                <p>FCL and LCL services for export and import cargo. Partnerships with major shipping lines ensure reliable sailings and competitive rates.</p>
                <a className="btn-slide" style={{marginTop: 'auto'}} href="/contact"><i className="fa fa-arrow-right"></i><span>Contact Us</span></a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item p-4" style={{background: 'linear-gradient(135deg, #E0F7FF 0%, #F0FBFF 100%)', borderRadius: '12px', display: 'flex', flexDirection: 'column', height: '100%'}}>
                <div className="overflow-hidden mb-4">
                  <img className="img-fluid" src="img/service-1.jpg" alt="" />
                </div>
                <h4 className="mb-3">Air Freight Services</h4>
                <p>Time-sensitive air freight solutions guaranteeing fast delivery with efficient handling, documentation support, and global coverage.</p>
                <a className="btn-slide" style={{marginTop: 'auto'}} href="/contact"><i className="fa fa-arrow-right"></i><span>Contact Us</span></a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.7s">
              <div className="service-item p-4" style={{background: 'linear-gradient(135deg, #E0F7FF 0%, #F0FBFF 100%)', borderRadius: '12px', display: 'flex', flexDirection: 'column', height: '100%'}}>
                <div className="overflow-hidden mb-4">
                  <img className="img-fluid" src="img/service-3.jpg" alt="" />
                </div>
                <h4 className="mb-3">Customs Clearance</h4>
                <p>Assistance with documentation, duties, licensing, and clearance procedures to ensure smooth release of cargo without delays.</p>
                <a className="btn-slide" style={{marginTop: 'auto'}} href="/contact"><i className="fa fa-arrow-right"></i><span>Contact Us</span></a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item p-4" style={{background: 'linear-gradient(135deg, #E0F7FF 0%, #F0FBFF 100%)', borderRadius: '12px', display: 'flex', flexDirection: 'column', height: '100%'}}>
                <div className="overflow-hidden mb-4">
                  <img className="img-fluid" src="img/service-4.jpg" alt="" />
                </div>
                <h4 className="mb-3">Transportation & Door-to-Door Delivery</h4>
                <p>Inland transportation through trusted trucking partners to deliver cargo safely to factories, warehouses, and final destinations.</p>
                <a className="btn-slide" style={{marginTop: 'auto'}} href="/contact"><i className="fa fa-arrow-right"></i><span>Contact Us</span></a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item p-4" style={{background: 'linear-gradient(135deg, #E0F7FF 0%, #F0FBFF 100%)', borderRadius: '12px', display: 'flex', flexDirection: 'column', height: '100%'}}>
                <div className="overflow-hidden mb-4">
                  <img className="img-fluid" src="img/service-5.jpg" alt="" />
                </div>
                <h4 className="mb-3">Warehousing & Storage</h4>
                <p>Short-term and long-term storage facilities along with inventory management and distribution support as per client requirement.</p>
                <a className="btn-slide" style={{marginTop: 'auto'}} href="/contact"><i className="fa fa-arrow-right"></i><span>Contact Us</span></a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.7s">
              <div className="service-item p-4" style={{background: 'linear-gradient(135deg, #E0F7FF 0%, #F0FBFF 100%)', borderRadius: '12px', display: 'flex', flexDirection: 'column', height: '100%'}}>
                <div className="overflow-hidden mb-4">
                  <img className="img-fluid" src="img/service-6.jpg" alt="" />
                </div>
                <h4 className="mb-3">Freight Forwarding Solutions</h4>
                <p>End-to-end freight forwarding services covering planning, routing, booking, tracking, and delivery of shipments worldwide.</p>
                <a className="btn-slide" style={{marginTop: 'auto'}} href="/contact"><i className="fa fa-arrow-right"></i><span>Contact Us</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service End */}
    </div>
  );
}

export default Services;
