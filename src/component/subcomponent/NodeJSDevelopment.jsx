import React from 'react';
import {
  Server,
  Zap,
  Database,
  Globe,
  Shield,
  CheckCircle,
  Users,
  Clock,
  Cpu,
  Layers,
  Cloud,
  Lock,
  Package,
  ArrowRight,
} from 'lucide-react';
import '../../css/NodeJSDevelopment.css';
import { Helmet} from 'react-helmet-async';
import Form from "../../config/Form";


const NodeJSDevelopment = () => {
  const features = [
    {
      icon: <Zap size={24} />,
      title: "High Performance",
      desc: "Event-driven, non-blocking I/O model for fast and scalable applications."
    },
    {
      icon: <Server size={24} />,
      title: "RESTful APIs",
      desc: "Build robust and scalable REST APIs for web and mobile applications."
    },
    {
      icon: <Database size={24} />,
      title: "Database Integration",
      desc: "Seamless integration with MongoDB, PostgreSQL, MySQL, and more."
    },
    {
      icon: <Globe size={24} />,
      title: "Real-time Apps",
      desc: "Build real-time applications with WebSockets and Socket.io."
    },
    {
      icon: <Shield size={24} />,
      title: "Secure & Robust",
      desc: "Built-in security features and best practices for enterprise apps."
    },
    {
      icon: <Package size={24} />,
      title: "NPM Ecosystem",
      desc: "Access to thousands of open-source packages via NPM."
    }
  ];

  const services = [
    {
      title: "Custom API Development",
      desc: "RESTful and GraphQL APIs for web and mobile applications.",
      features: ["RESTful APIs", "GraphQL APIs", "Third-party Integration", "API Documentation"]
    },
    {
      title: "Real-time Applications",
      desc: "Chat apps, live tracking, and collaborative tools with WebSockets.",
      features: ["WebSocket Integration", "Live Notifications", "Real-time Dashboards", "Collaborative Tools"]
    },
    {
      title: "Microservices Architecture",
      desc: "Scalable and maintainable microservices for enterprise applications.",
      features: ["Service Decomposition", "Docker Integration", "Kubernetes Ready", "Message Queues"]
    },
    {
      title: "Database Design",
      desc: "Efficient database design and optimization for Node.js apps.",
      features: ["MongoDB", "PostgreSQL", "MySQL", "Redis Caching"]
    },
    {
      title: "Backend Development",
      desc: "Complete backend solutions with authentication and authorization.",
      features: ["JWT Authentication", "OAuth2.0", "Role-based Access", "Session Management"]
    },
    {
      title: "Cloud Deployment",
      desc: "Deploy and scale Node.js apps on AWS, Google Cloud, and Azure.",
      features: ["AWS Integration", "Docker Deployment", "CI/CD Pipeline", "Auto-scaling"]
    }
  ];

  const benefits = [
    {
      icon: <Cpu size={20} />,
      text: "Fast & Scalable"
    },
    {
      icon: <Users size={20} />,
      text: "Large Community"
    },
    {
      icon: <Clock size={20} />,
      text: "Quick Development"
    },
    {
      icon: <Lock size={20} />,
      text: "Enterprise Security"
    },
    {
      icon: <Layers size={20} />,
      text: "Microservices Ready"
    },
    {
      icon: <Cloud size={20} />,
      text: "Cloud Native"
    }
  ];

  const stats = [
    { value: '4M+', label: 'Weekly Downloads' },
    { value: '1M+', label: 'NPM Packages' },
    { value: '200K+', label: 'Companies Using' },
    { value: '4.9', label: 'Developer Rating' }
  ];

  const useCases = [
    "E-commerce Platforms",
    "Real-time Chat Apps",
    "Streaming Services",
    "IoT Applications",
    "Social Media Platforms",
    "Enterprise Systems",
    "Payment Gateways",
    "Content Management"
  ];

  const faqs = [
    {
      question: "What is Node.js used for?",
      answer: "Node.js is used for building fast, scalable server-side applications, REST APIs, real-time applications like chat apps, streaming services, IoT backends, and microservices architecture."
    },
    {
      question: "Is Node.js good for large applications?",
      answer: "Yes! Node.js is highly scalable and used by major companies like Netflix, LinkedIn, Uber, PayPal, and Walmart for their large-scale applications."
    },
    {
      question: "How long does Node.js development take?",
      answer: "Timeline varies by complexity. Simple APIs take 2-3 weeks, while complex microservices architecture can take 2-4 months. We provide detailed timelines during consultation."
    },
    {
      question: "Do you provide API documentation?",
      answer: "Yes, we provide comprehensive API documentation using Swagger/OpenAPI, Postman collections, and inline code documentation for easy maintenance."
    }
  ];
  const scrollToForm = () => {
  document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
};


  // JSON-LD Structured Data for Node.js Development Services
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Node.js Development Services",
    "provider": {
      "@type": "Organization",
      "name": "Purvsoft Technologies",
      "url": "https://www.purvsoft.com",
      "logo": "https://www.purvsoft.com/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ahmedabad",
        "addressRegion": "Gujarat",
        "addressCountry": "India"
      }
    },
    "description": "Professional Node.js development services for building fast, scalable, and secure server-side applications, REST APIs, real-time apps, and microservices.",
    "serviceType": ["Node.js API Development", "Real-time Applications", "Microservices Architecture", "Backend Development", "Cloud Deployment"],
    "areaServed": "Worldwide",
    "audience": {
      "@type": "BusinessAudience"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "USD",
        "price": "Custom"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.purvsoft.com/services/nodejs"
    }
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.purvsoft.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.purvsoft.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Node.js Development",
        "item": "https://www.purvsoft.com/services/nodejs"
      }
    ]
  };

  const faqStructuredData = {
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

  return (
    <div className="nj-container">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Node.js Development Company | REST API & Backend Experts | Purvsoft</title>
        <meta name="title" content="Node.js Development Company | REST API & Backend Experts | Purvsoft" />
        <meta name="description" content="Purvsoft Technologies is a leading Node.js development company. Build fast, scalable backend systems, REST APIs, real-time applications, and microservices with expert Node.js developers." />
        <meta 
          name="keywords" 
          content="Node.js development company, REST API development, backend development, microservices architecture, Node.js developer Ahmedabad, scalable backend solutions"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Purvsoft Technologies" />
        <meta name="language" content="English" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.purvsoft.com/services/nodejs" />
        
        {/* Alternate language versions */}
        <link rel="alternate" href="https://www.purvsoft.com/services/nodejs" hrefLang="x-default" />
        
        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.purvsoft.com/services/nodejs" />
        <meta property="og:title" content="Node.js Development | REST APIs & Microservices | Purvsoft" />
        <meta property="og:description" content="Build fast, scalable backend systems with Purvsoft Technologies's Node.js development services. REST APIs, real-time apps, and microservices for modern applications." />
        <meta property="og:image" content="https://www.purvsoft.com/og-nodejs-development.jpg" />
        <meta property="og:image:alt" content="Node.js Development Services - Backend API Development" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Purvsoft Technologies" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.purvsoft.com/services/nodejs" />
        <meta name="twitter:title" content="Node.js Development | Purvsoft Technologies" />
        <meta name="twitter:description" content="Expert Node.js development for scalable backend systems, REST APIs, real-time applications, and microservices." />
        <meta name="twitter:image" content="https://www.purvsoft.com/twitter-nodejs-development.jpg" />
        <meta name="twitter:image:alt" content="Node.js Development Services" />
        
        {/* Verification tags - Google Search Console */}
        <meta name="google-site-verification" content="MjMKilzhOmqr6Txi7pbjACF6g_hSt-B6Ej496yJyrH0" />
        <meta name="msvalidate.01" content="AD0DF443696FB452E952416667F1A8DC" />
        {/* Geographic Meta Tags - Ahmedabad, Gujarat */}
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Ahmedabad, Gujarat, India" />
        <meta name="geo.position" content="23.0225;72.5714" />
        <meta name="ICBM" content="23.0225, 72.5714" />
        
        {/* Mobile Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      </Helmet>

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqStructuredData)}
      </script>

      {/* Hero Section */}
      <section className="nj-hero" aria-label="Node.js Development Hero Section">
        <div className="nj-wrapper">
          <div className="nj-hero-content" data-aos="fade-up">
            <div className="nj-badge">
              <Server size={14} />
              <span>Node.js Development Experts</span>
            </div>
            <h1 className="nj-hero-title">
              Build Scalable Backend with <span className="nj-highlight">Node.js</span>
            </h1>
            <p className="nj-hero-description">
              Create fast, scalable, and secure server-side applications with Node.js. 
              We build high-performance REST APIs, real-time applications, and microservices for modern businesses.
            </p>

            <div className="nj-stats-row">
              {stats.map((stat, index) => (
                <div key={index} className="nj-stat-item" data-aos="fade-up" data-aos-delay={index * 50}>
                  <div className="nj-stat-value">{stat.value}</div>
                  <div className="nj-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="nj-hero-buttons">
              <button
                className="nj-btn-primary"
                onClick={scrollToForm}
                aria-label="Contact us for Node.js development"
              >
                Start Your Backend Project <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="nj-features" aria-label="Node.js Key Features">
        <div className="nj-wrapper">
          <div className="nj-section-header">
            <p className="nj-section-subtitle">Why Node.js</p>
            <h2 className="nj-section-title">Powerful Features for <span className="nj-highlight">Modern Applications</span></h2>
            <p className="nj-section-desc">Node.js provides everything you need to build fast, scalable backend systems</p>
          </div>
          
          <div className="nj-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="nj-feature-card" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="nj-feature-icon" aria-hidden="true">{feature.icon}</div>
                <h3 className="nj-feature-title">{feature.title}</h3>
                <p className="nj-feature-desc">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="nj-services" aria-label="Node.js Development Services">
        <div className="nj-wrapper">
          <div className="nj-section-header">
            <p className="nj-section-subtitle">What We Offer</p>
            <h2 className="nj-section-title">Our <span className="nj-highlight">Node.js Services</span></h2>
            <p className="nj-section-desc">Complete backend solutions tailored to your business needs</p>
          </div>
          
          <div className="nj-services-grid">
            {services.map((service, index) => (
              <div key={index} className="nj-service-card" data-aos="fade-up" data-aos-delay={index * 50}>
                <h3 className="nj-service-title">{service.title}</h3>
                <p className="nj-service-desc">{service.desc}</p>
                <ul className="nj-service-features" aria-label={`${service.title} features`}>
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <CheckCircle size={14} aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="nj-benefits" aria-label="Benefits of Node.js Development">
        <div className="nj-wrapper">
          <div className="nj-section-header">
            <p className="nj-section-subtitle">Key Benefits</p>
            <h2 className="nj-section-title">Why Businesses Choose <span className="nj-highlight">Node.js</span></h2>
            <p className="nj-section-desc">Discover the advantages that make Node.js the top choice for backend development</p>
          </div>
          
          <div className="nj-benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="nj-benefit-item" data-aos="zoom-in" data-aos-delay={index * 50}>
                <div className="nj-benefit-icon" aria-hidden="true">{benefit.icon}</div>
                <span className="nj-benefit-text">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="nj-use-cases" aria-label="Node.js Use Cases">
        <div className="nj-wrapper">
          <div className="nj-section-header">
            <p className="nj-section-subtitle">Perfect For</p>
            <h2 className="nj-section-title">Node.js <span className="nj-highlight">Use Cases</span></h2>
            <p className="nj-section-desc">Node.js is versatile enough for any application type</p>
          </div>
          
          <div className="nj-use-cases-grid">
            {useCases.map((item, index) => (
              <div key={index} className="nj-use-case-item" data-aos="fade-up" data-aos-delay={index * 30}>
                <CheckCircle size={16} aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="nj-process" aria-label="Node.js Development Process">
        <div className="nj-wrapper">
          <div className="nj-section-header">
            <p className="nj-section-subtitle">Our Process</p>
            <h2 className="nj-section-title">How We Build <span className="nj-highlight">Your Node.js Backend</span></h2>
            <p className="nj-section-desc">A proven methodology that delivers scalable backend solutions</p>
          </div>
          
          <div className="nj-process-grid">
            <div className="nj-process-card" data-aos="fade-up" data-aos-delay="0">
              <div className="nj-process-number">1</div>
              <h3>Requirements Analysis</h3>
              <p>Understanding your business needs and technical requirements</p>
            </div>
            <div className="nj-process-card" data-aos="fade-up" data-aos-delay="50">
              <div className="nj-process-number">2</div>
              <h3>Architecture Design</h3>
              <p>Designing scalable and maintainable backend architecture</p>
            </div>
            <div className="nj-process-card" data-aos="fade-up" data-aos-delay="100">
              <div className="nj-process-number">3</div>
              <h3>API Development</h3>
              <p>Building RESTful APIs with best practices and documentation</p>
            </div>
            <div className="nj-process-card" data-aos="fade-up" data-aos-delay="150">
              <div className="nj-process-number">4</div>
              <h3>Testing & QA</h3>
              <p>Comprehensive testing for reliability and performance</p>
            </div>
            <div className="nj-process-card" data-aos="fade-up" data-aos-delay="200">
              <div className="nj-process-number">5</div>
              <h3>Deployment</h3>
              <p>Cloud deployment with CI/CD pipeline and auto-scaling</p>
            </div>
            <div className="nj-process-card" data-aos="fade-up" data-aos-delay="250">
              <div className="nj-process-number">6</div>
              <h3>Maintenance</h3>
              <p>Ongoing support, monitoring, and performance optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="nj-faq" aria-label="Node.js FAQs">
        <div className="nj-wrapper">
          <div className="nj-section-header">
            <p className="nj-section-subtitle">FAQ</p>
            <h2 className="nj-section-title">Frequently Asked <span className="nj-highlight">Questions</span></h2>
            <p className="nj-section-desc">Get answers to common questions about Node.js development</p>
          </div>

          <div className="nj-faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="nj-faq-card" data-aos="fade-up" data-aos-delay={index * 50} itemScope itemType="https://schema.org/Question">
                <h3 className="nj-faq-question" itemProp="name">{faq.question}</h3>
                <div className="nj-faq-answer" itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                  <p itemProp="text">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div id="form">
        <Form />
      </div>
    </div>
  );
};

export default NodeJSDevelopment;