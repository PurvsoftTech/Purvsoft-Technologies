import React from 'react';
import {
  Server,
  Zap,
  Database,
  Globe,
  Shield,
  ArrowRight,
  CheckCircle,
  Users,
  Clock,
  Cpu,
  Layers,
  Cloud,
  Lock,
  Package
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

  return (
    <div className="nj-container">
     <Helmet>
      <title>Node.js Development Services | Purvsoft Technologies</title>
      <meta name="description" content="Build fast and scalable server-side applications with Purvsoft Technologies's Node.js development services. REST APIs, real-time apps, and microservices with Node.js." />
      <meta name="keywords" content="Node.js development, NodeJS, REST API development, real-time app, microservices, Node.js company India" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href="https://www.purvsoft.com/services/nodejs" />
 
      <meta property="og:title" content="Node.js Development Services | Purvsoft Technologies" />
      <meta property="og:description" content="Fast and scalable Node.js development — REST APIs, real-time apps, and microservices." />
      <meta property="og:url" content="https://www.purvsoft.com/services/nodejs" />
      <meta property="og:image" content="https://www.purvsoft.com/og-image.jpg" />
 
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Node.js Development | Purvsoft Technologies" />
      <meta name="twitter:description" content="Scalable Node.js development services by Purvsoft Technologies." />
    </Helmet>
      {/* Hero Section */}
      <section className="nj-hero">
        <div className="nj-wrapper">
          <div className="nj-hero-content">
            <div className="nj-badge">
              <Server size={14} />
              <span>Node.js Development</span>
            </div>
            <h1 className="nj-hero-title">
              Build Scalable Backend with <span className="nj-highlight">Node.js</span>
            </h1>
            <p className="nj-hero-description">
              Create fast, scalable, and secure server-side applications with Node.js. 
              We build high-performance APIs, real-time applications, and microservices.
            </p>

            <div className="nj-stats-row">
              {stats.map((stat, index) => (
                <div key={index} className="nj-stat-item">
                  <div className="nj-stat-value">{stat.value}</div>
                  <div className="nj-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="nj-features">
        <div className="nj-wrapper">
          <h2 className="nj-section-title">Why Choose Node.js?</h2>
          <p className="nj-section-subtitle">Powerful features for modern applications</p>
          
          <div className="nj-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="nj-feature-card">
                <div className="nj-feature-icon">{feature.icon}</div>
                <h3 className="nj-feature-title">{feature.title}</h3>
                <p className="nj-feature-desc">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="nj-services">
        <div className="nj-wrapper">
          <h2 className="nj-section-title">Our Node.js Services</h2>
          <p className="nj-section-subtitle">Complete backend solutions for your business</p>
          
          <div className="nj-services-grid">
            {services.map((service, index) => (
              <div key={index} className="nj-service-card">
                <h3 className="nj-service-title">{service.title}</h3>
                <p className="nj-service-desc">{service.desc}</p>
                <ul className="nj-service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <CheckCircle size={14} />
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
      <section className="nj-benefits">
        <div className="nj-wrapper">
          <h2 className="nj-section-title">Key Benefits</h2>
          
          <div className="nj-benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="nj-benefit-item">
                <div className="nj-benefit-icon">{benefit.icon}</div>
                <span className="nj-benefit-text">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="nj-use-cases">
        <div className="nj-wrapper">
          <h2 className="nj-section-title">Perfect For</h2>
          
          <div className="nj-use-cases-grid">
            {useCases.map((item, index) => (
              <div key={index} className="nj-use-case-item">
                <CheckCircle size={16} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
    </div>
  );
};

export default NodeJSDevelopment;