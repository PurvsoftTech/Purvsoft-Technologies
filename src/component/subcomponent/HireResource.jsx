import React from 'react';
import {
  Users,
  Code,
  Globe,
  Smartphone,
  Award,
  Clock,
  DollarSign,
  Heart,
} from 'lucide-react';
import '../../css/HireSource.css';
import { Helmet} from 'react-helmet-async';


const HireSource = () => {
  const services = [
    {
      icon: <Code size={24} />,
      title: "Web Development",
      desc: "React, Laravel, PHP, Node.js"
    },
    {
      icon: <Smartphone size={24} />,
      title: "Mobile Apps",
      desc: "Flutter,"
    },
    {
      icon: <Globe size={24} />,
      title: "Digital Marketing",
      desc: "SEO, Social Media, Ads"
    },
    {
      icon: <Users size={24} />,
      title: "IT Consulting",
      desc: "Strategy, Planning, Support"
    }
  ];

  const benefits = [
    {
      icon: <Clock size={20} />,
      text: "Quick hiring"
    },
    {
      icon: <Award size={20} />,
      text: "Pre-vetted experts"
    },
    {
      icon: <DollarSign size={20} />,
      text: "Flexible engagement"
    },
    {
      icon: <Heart size={20} />,
      text: "Dedicated support"
    }
  ];

  // const stats = [
  //   { value: '50+', label: 'Experts' },
  //   { value: '5+', label: 'Years' },
  //   { value: '100+', label: 'Projects' },
  //   { value: '98%', label: 'Satisfaction' }
  // ];

  return (
    <div className="hs-container">
      <Helmet>
      <title>Hire Dedicated Developers | Purvsoft Technologies – Resource Hiring</title>
      <meta name="description" content="Hire dedicated developers, designers, and digital marketers from Purvsoft Technologies. Flexible hiring models for startups and enterprises. Scale your team quickly." />
      <meta name="keywords" content="hire dedicated developer, hire resource, hire web developer India, remote developer, dedicated team, Purvsoft Technologies hiring" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href="https://www.purvsoft.com/hire-resource" />
 
      <meta property="og:title" content="Hire Dedicated Developers | Purvsoft Technologies" />
      <meta property="og:description" content="Hire dedicated developers, designers, and digital marketers from Purvsoft Technologies." />
      <meta property="og:url" content="https://www.purvsoft.com/hire-resource" />
      <meta property="og:image" content="https://www.purvsoft.com/og-image.jpg" />
 
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Hire Dedicated Developers | Purvsoft Technologies" />
      <meta name="twitter:description" content="Scale your team with dedicated developers from Purvsoft Technologies." />
    </Helmet>
      {/* Hero Section */}
      <section className="hs-hero">
        <div className="hs-wrapper">
          <div className="hs-hero-content">
            <h1 className="hs-hero-title">Hire Our Experts</h1>
            <p className="hs-hero-subtitle">Find the right talent for your project</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="hs-stats">
        <div className="hs-wrapper">
          <div className="hs-stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="hs-stat-card">
                <div className="hs-stat-value">{stat.value}</div>
                <div className="hs-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* What We Offer Section */}
      <section className="hs-offer">
        <div className="hs-wrapper">
          <h2 className="hs-section-title">What We Offer</h2>
          <div className="hs-offer-grid">
            {services.map((service, index) => (
              <div key={index} className="hs-offer-card">
                <div className="hs-offer-icon">{service.icon}</div>
                <h3 className="hs-offer-title">{service.title}</h3>
                <p className="hs-offer-desc">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="hs-why">
        <div className="hs-wrapper">
          <h2 className="hs-section-title">Why Choose Us</h2>
          <div className="hs-why-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="hs-why-item">
                <div className="hs-why-icon">{benefit.icon}</div>
                <span className="hs-why-text">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HireSource;