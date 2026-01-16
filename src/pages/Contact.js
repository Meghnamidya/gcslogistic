import React from 'react';

function Contact() {
  const companyAddress = 'Astra Tower, New Town';
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(companyAddress)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="container-xxl py-5">
      <div className="container py-5">
        <div className="row justify-content-center mb-3 pb-2">
          <div className="col-md-7 heading-section text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="text-secondary text-uppercase">Contact Us</h6>
            <h1 className="mb-5">Get in Touch</h1>
          </div>
        </div>
        <div className="row no-gutters block-9">
          <div className="col-md-6 mb-5 d-flex wow fadeInUp" data-wow-delay="0.3s">
            <div id="map" className="bg-bl" style={{width: '100%', position: 'relative'}}>
              <iframe
                title="company-location"
                src={mapSrc}
                style={{border:0, width: '100%', height: '100%', minHeight: 400}}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="col-md-6 mb-4 d-flex">
            <div className="w-100 p-4 contact-info-right">
              <div className="row g-3">
                <div className="col-12 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                  <div className="align-self-stretch box p-4 text-center" style={{background: 'linear-gradient(135deg, #3AADEE 0%, #4BB8F5 100%)', borderRadius: '16px', boxShadow: '0 8px 30px rgba(18, 162, 252, 0.25)', border: '1px solid rgba(18, 162, 252, 0.15)', minHeight: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'}}>
                    <div className="icon d-flex align-items-center justify-content-center mb-3" style={{fontSize: '25px', color: '#ffffff', backgroundColor: '#12a2fc', borderRadius: '50%', width: '80px', height: '80px'}}>
                      <i className="fas fa-phone" style={{transform: 'scaleX(-1)'}}></i>
                    </div>
                    <h3 className="mb-3" style={{fontSize: '18px', fontWeight: '600', color: '#ffffff'}}>Contact Number</h3>
                    <p style={{fontSize: '15px', marginBottom: '0', color: '#000000'}}><a href="tel:+917003687053" style={{color: '#000000', textDecoration: 'none', fontWeight: '500'}}>+91 7003687053</a></p>
                  </div>
                </div>
                <div className="col-12 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                  <div className="align-self-stretch box p-4 text-center" style={{background: 'linear-gradient(135deg, #3AADEE 0%, #4BB8F5 100%)', borderRadius: '16px', boxShadow: '0 8px 30px rgba(18, 162, 252, 0.25)', border: '1px solid rgba(18, 162, 252, 0.15)', minHeight: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'}}>
                    <div className="icon d-flex align-items-center justify-content-center mb-3" style={{fontSize: '25px', color: '#ffffff', backgroundColor: '#12a2fc', borderRadius: '50%', width: '80px', height: '80px'}}>
                      <i className="fas fa-paper-plane"></i>
                    </div>
                    <h3 className="mb-3" style={{fontSize: '18px', fontWeight: '600', color: '#ffffff'}}>Email Address</h3>
                    <p style={{fontSize: '14px', marginBottom: '0', color: '#000000'}}><a href="mailto:info@gcslogistics.com" style={{color: '#000000', textDecoration: 'none', fontWeight: '500'}}>info@gcslogistics.com</a></p>
                  </div>
                </div>
                <div className="col-12 col-sm-6 wow fadeInUp" data-wow-delay="0.9s">
                  <div className="align-self-stretch box p-4 text-center" style={{background: 'linear-gradient(135deg, #3AADEE 0%, #4BB8F5 100%)', borderRadius: '16px', boxShadow: '0 8px 30px rgba(18, 162, 252, 0.25)', border: '1px solid rgba(18, 162, 252, 0.15)', minHeight: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'}}>
                    <div className="icon d-flex align-items-center justify-content-center mb-3" style={{fontSize: '25px', color: '#ffffff', backgroundColor: '#12a2fc', borderRadius: '50%', width: '80px', height: '80px'}}>
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <h3 className="mb-3" style={{fontSize: '18px', fontWeight: '600', color: '#ffffff'}}>Address</h3>
                    <p style={{fontSize: '14px', marginBottom: '0', color: '#000000'}}><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyAddress)}`} target="_blank" rel="noopener noreferrer" style={{color: '#000000', textDecoration: 'none', fontWeight: '500'}}>{companyAddress}</a></p>
                  </div>
                </div>
                <div className="col-12 col-sm-6 wow fadeInUp" data-wow-delay="1.1s">
                  <div className="align-self-stretch box p-4 text-center" style={{background: 'linear-gradient(135deg, #3AADEE 0%, #4BB8F5 100%)', borderRadius: '16px', boxShadow: '0 8px 30px rgba(18, 162, 252, 0.25)', border: '1px solid rgba(18, 162, 252, 0.15)', minHeight: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'}}>
                    <div className="icon d-flex align-items-center justify-content-center mb-3" style={{fontSize: '25px', color: '#ffffff', backgroundColor: '#12a2fc', borderRadius: '50%', width: '80px', height: '80px'}}>
                      <i className="fas fa-globe"></i>
                    </div>
                    <h3 className="mb-3" style={{fontSize: '18px', fontWeight: '600', color: '#ffffff'}}>Website</h3>
                    <p style={{fontSize: '15px', marginBottom: '0', color: '#000000'}}><a href="https://gcslogistics.com" style={{color: '#000000', textDecoration: 'none', fontWeight: '500'}}>www.gcslogistics.com</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
