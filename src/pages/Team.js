import React from 'react';

function Team() {
  return (
    <div>
      
      {/* Team Start */}
      <div className="container-xxl py-5">
        <div className="container py-5">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="text-secondary text-uppercase">Our Team</h6>
            <h1 className="mb-5">Expert Team Members</h1>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="team-item p-4 h-100 text-center" style={{background: 'linear-gradient(135deg, #E0F7FF 0%, #F0FBFF 100%)', borderRadius: '12px'}}>
                <div className="overflow-hidden mb-4 d-flex justify-content-center">
                  <img
                    className="img-fluid"
                    src="img/p.jpg"
                    alt=""
                    style={{width: '180px', height: '180px', objectFit: 'cover', borderRadius: '50%', border: '4px solid #e0f2ff', boxShadow: '0 6px 18px rgba(0,0,0,0.08)'}}
                  />
                </div>
                <h5 className="mb-1" style={{fontSize: '1.5rem'}}>Goutam Mondal</h5>
                <p style={{fontSize: '1.2rem'}}>Team Member</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="team-item p-4 h-100 text-center" style={{background: 'linear-gradient(135deg, #E0F7FF 0%, #F0FBFF 100%)', borderRadius: '12px'}}>
                <div className="overflow-hidden mb-4 d-flex justify-content-center">
                  <img
                    className="img-fluid"
                    src="img/p.jpg"
                    alt=""
                    style={{width: '180px', height: '180px', objectFit: 'cover', borderRadius: '50%', border: '4px solid #e0f2ff', boxShadow: '0 6px 18px rgba(0,0,0,0.08)'}}
                  />
                </div>
                <h5 className="mb-1" style={{fontSize: '1.5rem'}}>Jhuma Bera</h5>
                <p style={{fontSize: '1.2rem'}}>Team Member</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="team-item p-4 h-100 text-center" style={{background: 'linear-gradient(135deg, #E0F7FF 0%, #F0FBFF 100%)', borderRadius: '12px'}}>
                <div className="overflow-hidden mb-4 d-flex justify-content-center">
                  <img
                    className="img-fluid"
                    src="img/p.jpg"
                    alt=""
                    style={{width: '180px', height: '180px', objectFit: 'cover', borderRadius: '50%', border: '4px solid #e0f2ff', boxShadow: '0 6px 18px rgba(0,0,0,0.08)'}}
                  />
                </div>
                <h5 className="mb-1" style={{fontSize: '1.5rem'}}>Susmita Majee</h5>
                <p style={{fontSize: '1.2rem'}}>Team Member</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team End */}
    </div>
  );
}

export default Team;
