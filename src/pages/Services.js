import React from 'react';

function Services() {
  return (
    <div>
      
      {/* Service Start */}
      <div className="container-xxl py-5">
        <div className="container py-5">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="text-secondary text-uppercase">Our Services</h6>
            <h1 className="mb-5">Explore Our Services</h1>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item p-4" style={{background: 'linear-gradient(135deg, #E0F7FF 0%, #F0FBFF 100%)', borderRadius: '12px', display: 'flex', flexDirection: 'column', height: '100%'}}>
                <div className="overflow-hidden mb-4">
                  <img className="img-fluid" src="img/service-1.jpg" alt="" />
                </div>
                <h4 className="mb-3">Air Freight</h4>
                <p>Fast and secure air cargo services for urgent shipments with priority handling, global coverage, real-time tracking, and smooth customs processing.</p>
                <a className="btn-slide" style={{marginTop: 'auto'}} href="#"><i className="fa fa-arrow-right"></i><span>Read More</span></a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item p-4" style={{background: 'linear-gradient(135deg, #E0F7FF 0%, #F0FBFF 100%)', borderRadius: '12px', display: 'flex', flexDirection: 'column', height: '100%'}}>
                <div className="overflow-hidden mb-4">
                  <img className="img-fluid" src="img/service-2.jpg" alt="" />
                </div>
                <h4 className="mb-1">Ocean Freight</h4>
                <h4 className="mb-3">Sea Freight</h4>
                <p>Cost-effective sea shipping for bulk and international cargo. FCL/LCL options, import & export support, cargo consolidation, and documentation assistance.</p>
                <a className="btn-slide" style={{marginTop: 'auto'}} href="#"><i className="fa fa-arrow-right"></i><span>Read More</span></a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.7s">
              <div className="service-item p-4" style={{background: 'linear-gradient(135deg, #E0F7FF 0%, #F0FBFF 100%)', borderRadius: '12px', display: 'flex', flexDirection: 'column', height: '100%'}}>
                <div className="overflow-hidden mb-4">
                  <img className="img-fluid" src="img/service-3.jpg" alt="" />
                </div>
                <h4 className="mb-1">Road Freight</h4>
                <h4 className="mb-3">Road Transportation</h4>
                <p>Safe and timely road freight services with Full Truck Load (FTL) & Part Load, door-to-door delivery, GPS-enabled tracking, and trained drivers.</p>
                <a className="btn-slide" style={{marginTop: 'auto'}} href="#"><i className="fa fa-arrow-right"></i><span>Read More</span></a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item p-4" style={{background: 'linear-gradient(135deg, #E0F7FF 0%, #F0FBFF 100%)', borderRadius: '12px', display: 'flex', flexDirection: 'column', height: '100%'}}>
                <div className="overflow-hidden mb-4">
                  <img className="img-fluid" src="img/service-4.jpg" alt="" />
                </div>
                <h4 className="mb-1">Train Freight</h4>
                <h4 className="mb-3">Warehousing & Distribution</h4>
                <p>Modern, secure, and well-managed warehouses. Short & long-term storage, inventory management, order processing, and temperature-controlled storage.</p>
                <a className="btn-slide" style={{marginTop: 'auto'}} href="#"><i className="fa fa-arrow-right"></i><span>Read More</span></a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item p-4" style={{background: 'linear-gradient(135deg, #E0F7FF 0%, #F0FBFF 100%)', borderRadius: '12px', display: 'flex', flexDirection: 'column', height: '100%'}}>
                <div className="overflow-hidden mb-4">
                  <img className="img-fluid" src="img/service-5.jpg" alt="" />
                </div>
                <h4 className="mb-3">Customs Clearance</h4>
                <p>End-to-end customs support for import and export. Documentation, duty calculations, regulatory compliance, and liaison with authorities.</p>
                <a className="btn-slide" style={{marginTop: 'auto'}} href="#"><i className="fa fa-arrow-right"></i><span>Read More</span></a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.7s">
              <div className="service-item p-4" style={{background: 'linear-gradient(135deg, #E0F7FF 0%, #F0FBFF 100%)', borderRadius: '12px', display: 'flex', flexDirection: 'column', height: '100%'}}>
                <div className="overflow-hidden mb-4">
                  <img className="img-fluid" src="img/service-6.jpg" alt="" />
                </div>
                <h4 className="mb-1">Warehouse Solutions</h4>
                <h4 className="mb-3">Value-Added Services</h4>
                <p>Packaging & labeling, last-mile delivery, supply chain consulting, and material handling to complete your logistics needs.</p>
                <a className="btn-slide" style={{marginTop: 'auto'}} href="#"><i className="fa fa-arrow-right"></i><span>Read More</span></a>
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
