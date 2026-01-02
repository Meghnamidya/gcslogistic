import React, { useEffect } from 'react';

function Testimonial() {
  useEffect(() => {
    // Initialize owl carousel for testimonials
    const initCarousel = () => {
      if (window.$ && window.$.fn.owlCarousel) {
        const carousel = window.$('.testimonial-carousel');
        if (carousel.length) {
          // Destroy existing carousel if any
          carousel.trigger('destroy.owl.carousel');
          carousel.removeClass('owl-loaded');
          carousel.find('.owl-stage-outer').children().unwrap();
          
          // Initialize carousel
          carousel.owlCarousel({
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            smartSpeed: 1000,
            center: true,
            margin: 24,
            dots: true,
            loop: true,
            nav: false,
            responsive: {
              0: {
                items: 1
              },
              768: {
                items: 2
              },
              992: {
                items: 3
              }
            }
          });
        }
      }
    };

    // Delay initialization to ensure libraries are loaded
    const timer = setTimeout(initCarousel, 100);
    
    return () => {
      clearTimeout(timer);
      if (window.$ && window.$('.testimonial-carousel').length) {
        window.$('.testimonial-carousel').trigger('destroy.owl.carousel');
      }
    };
  }, []);

  return (
    <div>
      
      {/* Testimonial Start */}
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="text-center">
            <h6 className="text-secondary text-uppercase">Testimonial</h6>
            <h1 className="mb-5">Our Clients Say!</h1>
          </div>
          <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
            <div className="testimonial-item p-4" style={{minHeight: '280px', background: 'linear-gradient(135deg, #E0F7FF 0%, #F0FBFF 100%)', borderRadius: '12px', maxWidth: '380px', margin: '20px auto', border: '1px solid rgba(18, 162, 252, 0.15)'}}>
              <i className="fa fa-quote-right fa-3x text-secondary position-absolute top-0 end-0 mt-n3 me-4"></i>
              <div className="d-flex align-items-end mb-4">
                <img className="img-fluid flex-shrink-0" src="img/testimonial-1.jpg" style={{width: '80px', height: '80px'}} alt="" />
                <div className="ms-4">
                  <h5 className="mb-1">Client Name</h5>
                  <p className="m-0">Profession</p>
                </div>
              </div>
              <p className="mb-0" style={{color: '#000000'}}>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
            </div>
            <div className="testimonial-item p-4" style={{minHeight: '280px', background: 'linear-gradient(135deg, #E0F7FF 0%, #F0FBFF 100%)', borderRadius: '12px', maxWidth: '380px', margin: '20px auto', border: '1px solid rgba(18, 162, 252, 0.15)'}}>
              <i className="fa fa-quote-right fa-3x text-secondary position-absolute top-0 end-0 mt-n3 me-4"></i>
              <div className="d-flex align-items-end mb-4">
                <img className="img-fluid flex-shrink-0" src="img/testimonial-2.jpg" style={{width: '80px', height: '80px'}} alt="" />
                <div className="ms-4">
                  <h5 className="mb-1">Client Name</h5>
                  <p className="m-0">Profession</p>
                </div>
              </div>
              <p className="mb-0" style={{color: '#000000'}}>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
            </div>
            <div className="testimonial-item p-4" style={{minHeight: '280px', background: 'linear-gradient(135deg, #E0F7FF 0%, #F0FBFF 100%)', borderRadius: '12px', maxWidth: '380px', margin: '20px auto', border: '1px solid rgba(18, 162, 252, 0.15)'}}>
              <i className="fa fa-quote-right fa-3x text-secondary position-absolute top-0 end-0 mt-n3 me-4"></i>
              <div className="d-flex align-items-end mb-4">
                <img className="img-fluid flex-shrink-0" src="img/testimonial-3.jpg" style={{width: '80px', height: '80px'}} alt="" />
                <div className="ms-4">
                  <h5 className="mb-1">Client Name</h5>
                  <p className="m-0">Profession</p>
                </div>
              </div>
              <p className="mb-0" style={{color: '#000000'}}>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
            </div>
            <div className="testimonial-item p-4" style={{minHeight: '280px', background: 'linear-gradient(135deg, #E0F7FF 0%, #F0FBFF 100%)', borderRadius: '12px', maxWidth: '380px', margin: '20px auto', border: '1px solid rgba(18, 162, 252, 0.15)'}}>
              <i className="fa fa-quote-right fa-3x text-secondary position-absolute top-0 end-0 mt-n3 me-4"></i>
              <div className="d-flex align-items-end mb-4">
                <img className="img-fluid flex-shrink-0" src="img/testimonial-4.jpg" style={{width: '80px', height: '80px'}} alt="" />
                <div className="ms-4">
                  <h5 className="mb-1">Client Name</h5>
                  <p className="m-0">Profession</p>
                </div>
              </div>
              <p className="mb-0" style={{color: '#000000'}}>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}
    </div>
  );
}

export default Testimonial;
