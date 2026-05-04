import React from 'react';
import '../../css/WebAgency.css';
import {
  Smartphone, 
  ShoppingCart, 
  Settings, 
  PenTool,
  Layout, 
  Code, 
  ArrowRight,
  Zap,
  Globe,
  Star,
  Users,
  Award,
  CheckCircle,
  Clock,
  TrendingUp,
  MessageCircle,
  Rocket
} from 'lucide-react';
import Form from "../../config/Form";
import { Helmet } from 'react-helmet-async';
import web from "../../image/webdevelopment.jpg";

const Web = () => {
  const services = [
    {
      title: "Custom Website Design",
      icon: <Layout />,
      desc: "Tailored website designs that reflect your brand identity and captivate your target audience.",
      color: "#4361ee"
    },
    {
      title: "Responsive Web Development",
      icon: <Smartphone />,
      desc: "Seamless experience across all devices — mobile, tablet, and desktop.",
      color: "#10b981"
    },
    {
      title: "E-commerce Solutions",
      icon: <ShoppingCart />,
      desc: "Powerful e-commerce platforms designed to increase conversions and boost online sales.",
      color: "#f59e0b"
    },
    {
      title: "Content Management Systems",
      icon: <Settings />,
      desc: "Manage your website content easily and efficiently with our CMS solutions.",
      color: "#8b5cf6"
    },
    {
      title: "Web Application Development",
      icon: <Code />,
      desc: "Robust and scalable web applications tailored to your specific business needs.",
      color: "#ec4899"
    },
    {
      title: "UI/UX Design",
      icon: <PenTool />,
      desc: "Intuitive, engaging, and efficient user journeys that convert visitors into customers.",
      color: "#14b8a6"
    },
  ];

  const stats = [
    { value: "500+", label: "Projects Delivered", icon: <Code size={20} /> },
    { value: "250+", label: "Happy Clients", icon: <Users size={20} /> },
    { value: "8+", label: "Years Experience", icon: <Clock size={20} /> },
    { value: "98%", label: "Client Retention", icon: <Star size={20} /> }
  ];

  const technologies = [
    "React.js", "Next.js", "Node.js", "Laravel", "PHP", 
    "MongoDB", "MySQL", "Tailwind CSS", "Bootstrap", 
  ];

  const faqs = [
    {
      question: "What website development services does Purvsoft Technologies offer?",
      answer: "Purvsoft Technologies offers custom website design, responsive web development, e-commerce solutions, CMS development, web application development, and UI/UX design services."
    },
    {
      question: "Do you build mobile-friendly and responsive websites?",
      answer: "Yes, every website we develop is fully responsive and optimized for all screen sizes — mobile, tablet, and desktop — ensuring a seamless user experience."
    },
    {
      question: "Can Purvsoft Technologies build an e-commerce website for my business?",
      answer: "Absolutely! We build high-converting e-commerce websites with secure payment gateways, product management, and optimized checkout flows to maximize your online sales."
    },
    {
      question: "Is Purvsoft Technologies a web development company in Ahmedabad, India?",
      answer: "Yes, Purvsoft Technologies is headquartered in Ahmedabad, Gujarat, India, and provides professional website development services to clients across India and internationally."
    },
    {
      question: "How long does it take to build a website?",
      answer: "The timeline depends on the complexity of the project. A standard business website typically takes 2–4 weeks, while complex web applications may take 6–12 weeks."
    },
    {
      question: "Do your websites come with SEO optimization?",
      answer: "Yes, all websites we develop are built with SEO best practices in mind — including fast load times, proper meta tags, semantic HTML, and mobile-first design."
    }
  ];
  const scrollToForm = () => {
  document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
};

  // JSON-LD Schemas
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Website Development Services",
    "alternateName": "Web Design & Development",
    "url": "https://www.purvsoft.com/services/website-development",
    "description": "Purvsoft Technologies offers professional website development services including custom web design, responsive development, e-commerce solutions, CMS, web applications, and UI/UX design for businesses across India.",
    "provider": {
      "@type": "Organization",
      "name": "Purvsoft Technologies",
      "url": "https://www.purvsoft.com/"
    },
    "areaServed": [
      { "@type": "City", "name": "Ahmedabad" },
      { "@type": "State", "name": "Gujarat" },
      { "@type": "Country", "name": "India" }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.purvsoft.com/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.purvsoft.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Website Development", "item": "https://www.purvsoft.com/services/website-development" }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Purvsoft Technologies",
    "url": "https://www.purvsoft.com/",
    "description": "Professional web design and development company in Ahmedabad, India, offering custom websites, e-commerce, and web application services.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "addressCountry": "IN"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5"
    }
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Website Development Services in India | Purvsoft Technologies",
    "url": "https://www.purvsoft.com/services/website-development",
    "description": "Professional website development services in Ahmedabad, India — responsive, fast, and SEO-friendly websites.",
    "inLanguage": "en-IN"
  };

  return (
    <div className="web-container">
      <Helmet>
        <title>Website Development Company in Ahmedabad | Custom Web Design & Development | Purvsoft Technologies</title>
        <meta name="title" content="Website Development Company in Ahmedabad | Custom Web Design & Development | Purvsoft Technologies" />
        <meta name="description" content="Purvsoft Technologies is a top-rated website development company in Ahmedabad, Gujarat. We offer custom web design, responsive development, ecommerce websites & web application development across India. 500+ clients served. Get a free quote today!" />
       <meta 
          name="keywords" 
          content="website development Ahmedabad, web design company Gujarat, custom website development India, ecommerce website development, hire web developer Ahmedabad"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href="https://www.purvsoft.com/services/website-development" />
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Ahmedabad, Gujarat, India" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Website Development Company in Ahmedabad | Purvsoft Technologies" />
        <meta property="og:description" content="Top-rated website development company in Ahmedabad — custom web design, ecommerce, web applications & responsive development." />
        <meta property="og:url" content="https://www.purvsoft.com/services/website-development" />
        <meta property="og:image" content="https://www.purvsoft.com/og-website-development.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Website Development Company in Ahmedabad | Purvsoft Technologies" />
        <meta name="twitter:description" content="Top-rated website development company in Ahmedabad. Custom web design, ecommerce & web apps." />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="web-hero">
        <div className="web-hero-bg"></div>
        <div className="web-container-inner">
          <div className="web-hero-content">
            <div className="web-badge">
              <Zap size={14} />
              <span>Web Development Agency</span>
            </div>
            <h1 className="web-hero-title">
              Innovative <span className="web-gradient">Web Design & Development</span> Services in Ahmedabad, India
            </h1>
            <p className="web-hero-desc">
              Creating impactful, user-centric websites that drive success and elevate
              your digital presence. Serving businesses across Ahmedabad, Gujarat, and India.
            </p>
            
            <div className="web-stats-row">
              {stats.map((stat, index) => (
                <div key={index} className="web-stat-item">
                  <div className="web-stat-icon">{stat.icon}</div>
                  <div>
                    <div className="web-stat-value">{stat.value}</div>
                    <div className="web-stat-label">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="web-hero-buttons">
              <button
                  className="web-btn-primary"
                  onClick={scrollToForm}
                  aria-label="Get a free quote for website development"
                >
                  Get Free Quote <ArrowRight size={18} />
                </button>
              <a href="#services" className="web-btn-outline">
                Explore Services
              </a>
            </div>
          </div>
          
          <div className="web-hero-image">
            <div className="web-image-wrapper">
              <img
                src={web}
                alt="Professional website development services by Purvsoft Technologies, Ahmedabad, India"
                loading="eager"
                fetchpriority="high"
              />
              <div className="web-image-shape"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="web-services">
        <div className="web-container-inner">
          <div className="web-section-header">
            <span className="web-section-badge">Our Services</span>
            <h2 className="web-section-title">
              World-Class Web Development <span className="web-gradient">Services</span>
            </h2>
            <p className="web-section-desc">
              From design to deployment, we offer end-to-end website development solutions
              tailored to your business goals.
            </p>
          </div>
          
          <div className="web-services-grid">
            {services.map((service, index) => (
              <div key={index} className="web-service-card">
                <div className="web-service-icon" style={{ backgroundColor: `${service.color}15`, color: service.color }}>
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <div className="web-service-hover"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="web-why-us">
        <div className="web-container-inner">
          <div className="web-why-grid">
            <div className="web-why-content">
              <span className="web-section-badge">Why Choose Us</span>
              <h2 className="web-section-title">
                Your Trusted <span className="web-gradient">Web Development Partner</span> in Ahmedabad
              </h2>
              <p className="web-section-desc">
                We combine technical expertise with creative innovation to deliver websites that perform.
              </p>
              
              <div className="web-features-list">
                <div className="web-feature-item">
                  <CheckCircle size={20} />
                  <div>
                    <h4>500+ Successful Projects</h4>
                    <p>Delivered across diverse industries with exceptional quality.</p>
                  </div>
                </div>
                <div className="web-feature-item">
                  <CheckCircle size={20} />
                  <div>
                    <h4>SEO Optimized Websites</h4>
                    <p>Built with best practices to rank higher on search engines.</p>
                  </div>
                </div>
                <div className="web-feature-item">
                  <CheckCircle size={20} />
                  <div>
                    <h4>24/7 Technical Support</h4>
                    <p>Round-the-clock assistance for your website needs.</p>
                  </div>
                </div>
                <div className="web-feature-item">
                  <CheckCircle size={20} />
                  <div>
                    <h4>Affordable Pricing</h4>
                    <p>Competitive rates without compromising on quality.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="web-why-stats">
              <div className="web-stats-card">
                <div className="web-stats-card-icon">
                  <Globe size={24} />
                </div>
                <div className="web-stats-card-value">500+</div>
                <div className="web-stats-card-label">Websites Launched</div>
              </div>
              <div className="web-stats-card">
                <div className="web-stats-card-icon">
                  <TrendingUp size={24} />
                </div>
                <div className="web-stats-card-value">200%</div>
                <div className="web-stats-card-label">Avg Traffic Growth</div>
              </div>
              <div className="web-stats-card">
                <div className="web-stats-card-icon">
                  <Award size={24} />
                </div>
                <div className="web-stats-card-value">4.9★</div>
                <div className="web-stats-card-label">Client Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="web-tech">
        <div className="web-container-inner">
          <div className="web-section-header">
            <span className="web-section-badge">Tech Stack</span>
            <h2 className="web-section-title">
              Modern <span className="web-gradient">Technologies</span> We Use
            </h2>
            <p className="web-section-desc">
              We leverage cutting-edge technologies to build future-ready websites.
            </p>
          </div>
          
          <div className="web-tech-grid">
            {technologies.map((tech, index) => (
              <div key={index} className="web-tech-item">
                <Code size={16} />
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="web-process">
        <div className="web-container-inner">
          <div className="web-section-header">
            <span className="web-section-badge">Our Process</span>
            <h2 className="web-section-title">
              How We <span className="web-gradient">Build Your Website</span>
            </h2>
            <p className="web-section-desc">
              A streamlined approach that ensures quality and timely delivery.
            </p>
          </div>
          
          <div className="web-process-grid">
            <div className="web-process-step">
              <div className="web-step-number">1</div>
              <div className="web-step-icon">
                <MessageCircle size={24} />
              </div>
              <h3>Discovery</h3>
              <p>Understanding your requirements and business goals.</p>
            </div>
            <div className="web-process-step">
              <div className="web-step-number">2</div>
              <div className="web-step-icon">
                <Layout size={24} />
              </div>
              <h3>Design</h3>
              <p>Creating wireframes and visual designs for approval.</p>
            </div>
            <div className="web-process-step">
              <div className="web-step-number">3</div>
              <div className="web-step-icon">
                <Code size={24} />
              </div>
              <h3>Development</h3>
              <p>Building your website with clean, efficient code.</p>
            </div>
            <div className="web-process-step">
              <div className="web-step-number">4</div>
              <div className="web-step-icon">
                <Rocket size={24} />
              </div>
              <h3>Launch</h3>
              <p>Testing, deployment, and post-launch support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="web-faq">
        <div className="web-container-inner">
          <div className="web-section-header">
            <span className="web-section-badge">FAQ</span>
            <h2 className="web-section-title">
              Frequently Asked <span className="web-gradient">Questions</span>
            </h2>
          </div>
          
          <div className="web-faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="web-faq-card">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="form" className="web-cta-section">
        <div className="web-container-inner">
          <Form />
        </div>
      </section>
    </div>
  );
};

export default Web;