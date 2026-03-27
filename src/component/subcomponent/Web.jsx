import React from 'react';
import '../../css/WebAgency.css'; // External CSS Import
import { Monitor, Smartphone, ShoppingCart, Settings, Search, PenTool, Layout, Code, LifeBuoy, Send,  ArrowRight } from 'lucide-react';
import Form from "../../config/Form";
import { Helmet} from 'react-helmet-async';

const WebAgencyPage = () => {
  const services = [
    { title: "Custom Website Design", icon: <Layout />, desc: "Tailored website designs that reflect your brand identity." },
    { title: "Responsive Web Development", icon: <Smartphone />, desc: "Seamless experience across all devices." },
    { title: "E-commerce Solutions", icon: <ShoppingCart />, desc: "Powerful platforms designed to increase conversions." },
    { title: "Content Management Systems", icon: <Settings />, desc: "Manage website content easily with our CMS solutions." },
    { title: "Web Application Development", icon: <Code />, desc: "Robust web applications tailored to your business." },
    { title: "UI/UX Design", icon: <PenTool />, desc: "Intuitive, engaging, and efficient user journeys." },
  ];

  return (
    <div className="agency-wrapper">
      <Helmet>
      <title>Website Development Services | Purvsoft Technologies</title>
      <meta name="description" content="Purvsoft Technologies offers professional website development services — responsive, fast, and SEO-friendly websites for businesses of all sizes. Custom design and development." />
      <meta name="keywords" content="website development, web design, responsive website, custom website, web development company India, Purvsoft Technologies web development" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href="https://www.purvsoft.com/services/website-development" />
 
      <meta property="og:title" content="Website Development Services | Purvsoft Technologies" />
      <meta property="og:description" content="Professional website development — responsive, fast, and SEO-friendly websites for all businesses." />
      <meta property="og:url" content="https://www.purvsoft.com/services/website-development" />
      <meta property="og:image" content="https://www.purvsoft.com/og-image.jpg" />
 
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Website Development Services | Purvsoft Technologies" />
      <meta name="twitter:description" content="Custom, responsive, and SEO-friendly website development by Purvsoft Technologies." />
    </Helmet>
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Innovative <span>Web Design & Development</span> Company
          </h1>
          <p className="hero-desc">
            Creating Impactful, User-Centric Websites That Drive Success and Elevate Your Digital Presence.
          </p>
          <div className="hero-buttons">
            <a href="#form" className="btn-primary">
              Contact Us <ArrowRight size={18} />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://via.placeholder.com/500x350" alt="Hero Illustration" />
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section className="services-section">
        <div className="section-header">
          <h2 className="hero-title">World-Class Web Development <span>Services</span></h2>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="icon-container">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <div id="form">
        <Form />
      </div>
    </div>
  );
};

export default WebAgencyPage;