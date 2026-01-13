import React from 'react';

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Understanding International Freight Forwarding',
      excerpt: 'Learn about the essential aspects of international freight forwarding and how it streamlines global trade operations for businesses of all sizes. Discover key strategies for optimizing shipping routes, managing documentation, and ensuring compliance with international regulations. Our comprehensive approach helps reduce costs while maintaining reliability and efficiency throughout the supply chain process.',
      date: 'January 8, 2026',
      author: 'GCS Logistic Team',
      category: 'Freight Services',
      icon: 'fa-ship'
    },
    {
      id: 2,
      title: 'Customs Clearance: A Complete Guide',
      excerpt: 'Navigate the complexities of customs clearance with our comprehensive guide covering documentation, compliance, and best practices for smooth cargo release. Understanding tariff classifications, import duties, and regulatory requirements is crucial for avoiding delays and penalties. We provide expert guidance on preparing accurate documentation and maintaining compliance with changing international trade regulations.',
      date: 'January 5, 2026',
      author: 'GCS Logistic Team',
      category: 'Customs & Compliance',
      icon: 'fa-file-alt'
    },
    {
      id: 3,
      title: 'Air vs Sea Freight: Choosing the Right Option',
      excerpt: 'Compare air and sea freight options to determine the most cost-effective and efficient shipping method for your cargo based on urgency and budget. Consider factors such as transit time, shipment size, cargo value, and destination accessibility. Learn how to balance speed with cost-effectiveness and make informed decisions that align with your business objectives and customer expectations.',
      date: 'January 2, 2026',
      author: 'GCS Logistic Team',
      category: 'Shipping Solutions',
      icon: 'fa-plane'
    },
    {
      id: 4,
      title: 'Warehousing Solutions for Modern Businesses',
      excerpt: 'Discover how professional warehousing and inventory management solutions can optimize your supply chain and reduce operational costs. Modern warehouse facilities equipped with advanced tracking systems ensure accurate inventory control and faster order fulfillment. Our strategic locations and flexible storage options provide scalable solutions that grow with your business needs.',
      date: 'December 28, 2025',
      author: 'GCS Logistic Team',
      category: 'Warehousing',
      icon: 'fa-warehouse'
    },
    {
      id: 5,
      title: 'The Importance of Door-to-Door Delivery',
      excerpt: 'Explore how door-to-door delivery services simplify logistics operations and provide end-to-end visibility for your shipments. This comprehensive service eliminates the need for multiple coordination points, reducing handling risks and transit delays. Real-time tracking and direct delivery to the final destination enhance customer satisfaction and streamline your entire logistics workflow.',
      date: 'December 22, 2025',
      author: 'GCS Logistic Team',
      category: 'Transportation',
      icon: 'fa-truck'
    },
    {
      id: 6,
      title: 'Top 5 Logistics Trends in 2026',
      excerpt: 'Stay ahead of the curve with insights into the latest logistics trends shaping the industry, from automation to sustainability initiatives. Explore emerging technologies like AI-powered route optimization, blockchain for supply chain transparency, and green logistics practices. Understanding these trends helps businesses adapt and maintain competitive advantage in an evolving marketplace.',
      date: 'December 18, 2025',
      author: 'GCS Logistic Team',
      category: 'Industry Insights',
      icon: 'fa-chart-line'
    }
  ];

  return (
    <div>
      {/* Blog Posts Start */}
      <div className="container-xxl py-5">
        <div className="container py-5">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
            <h6 className="text-primary text-uppercase mb-3">Latest Updates</h6>
            <h1 className="mb-3">Latest Blog Posts</h1>
          </div>
          <div className="row g-4">
            {blogPosts.map((post) => (
              <div key={post.id} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 * post.id}s`}>
                <div className="h-100 p-4 d-flex flex-column" style={{background: 'linear-gradient(135deg, #E0F7FF 0%, #F0FBFF 100%)', borderRadius: '12px', border: '1px solid rgba(18, 162, 252, 0.15)', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', transition: 'transform 0.3s, box-shadow 0.3s'}}>
                  <div className="d-flex align-items-center mb-3">
                    <div className="flex-shrink-0 me-3">
                      <div className="d-flex align-items-center justify-content-center" style={{width: '60px', height: '60px', background: 'rgba(18, 162, 252, 0.1)', borderRadius: '12px'}}>
                        <i className={`fas ${post.icon} fa-2x text-primary`}></i>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h4 className="mb-0">{post.title}</h4>
                    </div>
                  </div>
                  <p className="mb-3 flex-grow-1" style={{color: '#666', lineHeight: '1.7'}}>{post.excerpt}</p>
                  <div className="d-flex justify-content-between align-items-center pt-3" style={{borderTop: '1px solid rgba(18, 162, 252, 0.1)'}}>
                    <small className="text-muted"><i className="fa fa-user me-2"></i>{post.author}</small>
                    <small className="text-muted"><i className="fa fa-calendar-alt me-1"></i>{post.date}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Blog Posts End */}

    </div>
  );
}

export default Blog;
