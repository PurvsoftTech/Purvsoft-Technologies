import React from 'react';
import { 
  TrendingUp, 
  Users, 
  Star, 
  Zap,
  Search,
  Share2,
  MousePointer,
  PenTool,
  Mail,
  BarChart3,
  Shield,
  Link2,
  Target,
  ArrowRight,
  Users as UsersIcon,
} from 'lucide-react';
import '../../css/DigitalMarketing.css';
import Form from '../../config/Form'
import { Helmet} from 'react-helmet-async';

const DigitalMarketing = () => {
  const stats = [
    { icon: <TrendingUp size={32} />, value: '500+', label: 'Projects Completed' },
    { icon: <Star size={32} />, value: '98%', label: 'Client Satisfaction' },
    { icon: <Users size={32} />, value: '250+', label: 'Happy Clients' },
    { icon: <Zap size={32} />, value: '10x', label: 'Average ROI' }
  ];

  const services = [
    {
      icon: <Search size={28} />,
      title: "Search Engine Optimization (SEO)",
      desc: "Improve your website's visibility on search engines with our expert SEO strategies. From keyword research to on-page optimization.",
      link: "#"
    },
    {
      icon: <Share2 size={28} />,
      title: "Social Media Marketing (SMM)",
      desc: "Engage with your audience and build brand loyalty through targeted social media campaigns on Facebook, Instagram, and LinkedIn.",
      link: "#"
    },
    {
      icon: <MousePointer size={28} />,
      title: "Pay-Per-Click (PPC) Advertising",
      desc: "Boost your online presence with precision-targeted ads that deliver measurable results. Our PPC campaigns maximize ROI and drive quality traffic.",
      link: "#"
    },
    {
      icon: <PenTool size={28} />,
      title: "Content Marketing",
      desc: "Attract and retain customers by delivering valuable and relevant content including blog posts, articles, and infographics.",
      link: "#"
    },
    {
      icon: <Mail size={28} />,
      title: "Email Marketing",
      desc: "Connect directly with your audience through personalized email campaigns that nurture leads, drive conversions, and enhance relationships.",
      link: "#"
    },
    {
      icon: <BarChart3 size={28} />,
      title: "Analytics and Reporting",
      desc: "Gain valuable insights into your marketing performance with detailed analytics and reporting to optimize your strategies.",
      link: "#"
    },
    {
      icon: <Target size={28} />,
      title: "Conversion Rate Optimization (CRO)",
      desc: "Enhance website effectiveness by optimizing user experience and increasing conversion rates to turn visitors into loyal customers.",
      link: "#"
    },
    {
      icon: <Link2 size={28} />,
      title: "Affiliate Marketing",
      desc: "Expand your reach through strategic partnerships with affiliates and influencers to grow your business.",
      link: "#"
    },
    {
      icon: <Shield size={28} />,
      title: "Online Reputation Management",
      desc: "Protect and enhance your brand's reputation with proactive online monitoring and management.",
      link: "#"
    }
  ];

  return (
    <div className="dm-container">
      <Helmet>
      <title>Digital Marketing Services | Purvsoft Technologies</title>
      <meta name="description" content="Grow your business with Purvsoft Technologies's digital marketing services — SEO, social media marketing, PPC, content marketing, and more. Result-driven strategies." />
      <meta name="keywords" content="digital marketing services, social media marketing, PPC, content marketing, online marketing, digital marketing agency India" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href="https://www.purvsoft.com/services/digital-marketing" />
 
      <meta property="og:title" content="Digital Marketing Services | Purvsoft Technologies" />
      <meta property="og:description" content="Grow your business with result-driven digital marketing — SEO, social media, PPC, and content marketing." />
      <meta property="og:url" content="https://www.purvsoft.com/services/digital-marketing" />
      <meta property="og:image" content="https://www.purvsoft.com/og-image.jpg" />
 
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Digital Marketing Services | Purvsoft Technologies" />
      <meta name="twitter:description" content="Result-driven digital marketing services by Purvsoft Technologies." />
    </Helmet>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <h1>
                Transform Your Brand with <br />
                <span className="gradient-text">Expert Digital Solutions</span>
              </h1>
              <p className="hero-description">
                Unlock the full potential of your online presence with our tailored strategies 
                in SEO, social media, content marketing, and more. Drive growth, engagement, 
                and results with our comprehensive digital marketing services.
              </p>
              <div className="hero-buttons">
                <a href="#form" className="btn-primary">
                  Contact Us <ArrowRight size={18} />
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <h3 className="stat-value">{stat.value}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h6 className="section-subtitle">Comprehensive Digital Marketing Services</h6>
            <h2 className="section-title">
              Boost your brand's online presence with <br />
              <span className="gradient-text">expert marketing solutions</span>
            </h2>
            <p className="section-description">
              Explore our range of digital marketing services designed to enhance visibility, 
              engage audiences, and drive growth. From SEO and social media to analytics and 
              content creation.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.desc}</p>
                {/* <a href={service.link} className="service-link">
                  Learn More <ArrowRight size={16} />
                </a> */}
              </div>
            ))}
          </div>
        </div>
      </section>
      <div id="form">
        <Form />
      </div>
    </div>
  );
};

export default DigitalMarketing;