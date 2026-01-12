import React from 'react';

function TermsConditions() {
  return (
    <div>
      {/* Hero Header Start */}
      <div className="container-fluid p-0 pb-5 mb-5">
        <div
          className="position-relative"
          style={{
            minHeight: '400px',
            backgroundImage: 'linear-gradient(rgba(6,3,21,0.6), rgba(6,3,21,0.6)), url("img/home.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center">
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-12 col-lg-8">
                  <h6 className="text-white text-uppercase mb-3 wow fadeInDown" data-wow-delay="0.1s">Legal Information</h6>
                  <h1 className="display-4 text-white mb-4 wow fadeInUp" data-wow-delay="0.3s">Terms & Conditions</h1>
                  <p className="text-white fs-5 mb-0 wow fadeInUp" data-wow-delay="0.5s">Please read these terms carefully before using our services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hero Header End */}

      {/* Introduction Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
              <div className="p-5" style={{background: 'linear-gradient(135deg, #E0F7FF 0%, #F0FBFF 100%)', borderRadius: '12px'}}>
                <div className="d-flex align-items-start mb-4">
                  <i className="fa fa-info-circle fa-3x text-primary me-4"></i>
                  <div>
                    <h3 className="mb-3">Welcome to GCS Logistic</h3>
                    <p className="mb-0">These Terms and Conditions outline the rules and regulations for the use of our services and website. By accessing and using our logistics and shipping services, you accept and agree to be bound by the terms and provisions of this agreement.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Introduction End */}

      {/* Terms Content Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">
            
            {/* Services Provided */}
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="h-100 p-4" style={{background: 'linear-gradient(135deg, #E0F7FF 0%, #F0FBFF 100%)', borderRadius: '12px'}}>
                <div className="d-flex align-items-start mb-3">
                  <i className="fa fa-shipping-fast fa-2x text-primary me-3 flex-shrink-0"></i>
                  <h4 className="mb-0">Services Provided</h4>
                </div>
                <p className="mb-0">GCS Logistic offers freight forwarding, customs clearance, warehousing, transportation, and door-to-door delivery services for both domestic and international shipments. All services are subject to availability and our operational capabilities.</p>
              </div>
            </div>

            {/* User Responsibilities */}
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
              <div className="h-100 p-4" style={{background: 'linear-gradient(135deg, #E0F7FF 0%, #F0FBFF 100%)', borderRadius: '12px'}}>
                <div className="d-flex align-items-start mb-3">
                  <i className="fa fa-user-check fa-2x text-primary me-3 flex-shrink-0"></i>
                  <h4 className="mb-0">User Responsibilities</h4>
                </div>
                <p className="mb-0">Clients are responsible for providing accurate shipment information, proper packaging, and ensuring all necessary documentation is complete and compliant with applicable regulations.</p>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="h-100 p-4" style={{background: 'linear-gradient(135deg, #E0F7FF 0%, #F0FBFF 100%)', borderRadius: '12px'}}>
                <div className="d-flex align-items-start mb-3">
                  <i className="fa fa-credit-card fa-2x text-primary me-3 flex-shrink-0"></i>
                  <h4 className="mb-0">Payment Terms</h4>
                </div>
                <p className="mb-0">Payment for services must be made according to the agreed terms. We reserve the right to withhold delivery of shipments until payment has been received in full. Late payments may incur additional charges.</p>
              </div>
            </div>

            {/* Liability & Insurance */}
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.4s">
              <div className="h-100 p-4" style={{background: 'linear-gradient(135deg, #E0F7FF 0%, #F0FBFF 100%)', borderRadius: '12px'}}>
                <div className="d-flex align-items-start mb-3">
                  <i className="fa fa-shield-alt fa-2x text-primary me-3 flex-shrink-0"></i>
                  <h4 className="mb-0">Liability & Insurance</h4>
                </div>
                <p className="mb-0">While we take utmost care in handling your shipments, GCS Logistic's liability is limited to the terms specified in our service agreement. We recommend clients obtain appropriate insurance coverage for their cargo.</p>
              </div>
            </div>

            {/* Customs Compliance */}
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100 p-4" style={{background: 'linear-gradient(135deg, #E0F7FF 0%, #F0FBFF 100%)', borderRadius: '12px'}}>
                <div className="d-flex align-items-start mb-3">
                  <i className="fa fa-file-alt fa-2x text-primary me-3 flex-shrink-0"></i>
                  <h4 className="mb-0">Customs Compliance</h4>
                </div>
                <p className="mb-0">Clients are responsible for ensuring their shipments comply with all applicable customs regulations, import/export laws, and restrictions. GCS Logistic will assist with documentation and clearance procedures.</p>
              </div>
            </div>

            {/* Prohibited Items */}
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.6s">
              <div className="h-100 p-4" style={{background: 'linear-gradient(135deg, #E0F7FF 0%, #F0FBFF 100%)', borderRadius: '12px'}}>
                <div className="d-flex align-items-start mb-3">
                  <i className="fa fa-ban fa-2x text-primary me-3 flex-shrink-0"></i>
                  <h4 className="mb-0">Prohibited Items</h4>
                </div>
                <p className="mb-0">We do not handle illegal goods, hazardous materials without proper authorization, or any items prohibited by law. Clients must declare the contents of their shipments accurately.</p>
              </div>
            </div>

            {/* Service Modifications */}
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="h-100 p-4" style={{background: 'linear-gradient(135deg, #E0F7FF 0%, #F0FBFF 100%)', borderRadius: '12px'}}>
                <div className="d-flex align-items-start mb-3">
                  <i className="fa fa-edit fa-2x text-primary me-3 flex-shrink-0"></i>
                  <h4 className="mb-0">Service Modifications</h4>
                </div>
                <p className="mb-0">GCS Logistic reserves the right to modify, suspend, or discontinue any service without prior notice. Cancellation policies vary by service type and will be communicated at the time of booking.</p>
              </div>
            </div>

            {/* Data Privacy */}
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.8s">
              <div className="h-100 p-4" style={{background: 'linear-gradient(135deg, #E0F7FF 0%, #F0FBFF 100%)', borderRadius: '12px'}}>
                <div className="d-flex align-items-start mb-3">
                  <i className="fa fa-lock fa-2x text-primary me-3 flex-shrink-0"></i>
                  <h4 className="mb-0">Data Privacy</h4>
                </div>
                <p className="mb-0">We are committed to protecting your personal and business information. All data collected will be used solely for service delivery purposes and will be handled in accordance with applicable privacy laws.</p>
              </div>
            </div>

            {/* Dispute Resolution */}
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.9s">
              <div className="h-100 p-4" style={{background: 'linear-gradient(135deg, #E0F7FF 0%, #F0FBFF 100%)', borderRadius: '12px'}}>
                <div className="d-flex align-items-start mb-3">
                  <i className="fa fa-gavel fa-2x text-primary me-3 flex-shrink-0"></i>
                  <h4 className="mb-0">Dispute Resolution</h4>
                </div>
                <p className="mb-0">Any disputes arising from our services will be resolved through negotiation and mediation. If resolution cannot be reached, the matter will be subject to the jurisdiction of courts in Kolkata, India.</p>
              </div>
            </div>

            {/* Changes to Terms */}
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="1.0s">
              <div className="h-100 p-4" style={{background: 'linear-gradient(135deg, #E0F7FF 0%, #F0FBFF 100%)', borderRadius: '12px'}}>
                <div className="d-flex align-items-start mb-3">
                  <i className="fa fa-sync-alt fa-2x text-primary me-3 flex-shrink-0"></i>
                  <h4 className="mb-0">Changes to Terms</h4>
                </div>
                <p className="mb-0">GCS Logistic reserves the right to update these Terms and Conditions at any time. Continued use of our services after changes are posted constitutes acceptance of the modified terms.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* Terms Content End */}

      {/* Contact Section Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
              <div className="p-5" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '12px'}}>
                <div className="text-center text-white">
                  <i className="fa fa-phone-alt fa-3x mb-4"></i>
                  <h3 className="text-white mb-4">Need Clarification on Terms?</h3>
                  <p className="mb-4">For questions or concerns regarding these Terms and Conditions, please contact us:</p>
                  <div className="row g-3 justify-content-center">
                    <div className="col-md-4">
                      <p className="mb-1"><i className="fa fa-phone-alt me-2"></i><strong>Phone</strong></p>
                      <p>+91 7003687053</p>
                    </div>
                    <div className="col-md-4">
                      <p className="mb-1"><i className="fa fa-envelope me-2"></i><strong>Email</strong></p>
                      <p>info@gcslogistics.com</p>
                    </div>
                    <div className="col-md-4">
                      <p className="mb-1"><i className="fa fa-map-marker-alt me-2"></i><strong>Address</strong></p>
                      <p>Astra Tower, Newtown, Kolkata</p>
                    </div>
                  </div>
                  <p className="mt-4 mb-0"><em>Last Updated: January 12, 2026</em></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Section End */}
    </div>
  );
}

export default TermsConditions;
