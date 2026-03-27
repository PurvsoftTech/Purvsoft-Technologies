import React from 'react';
import {
  Code,
  Rocket,
  Shield,
  Zap,
  Users,
  Settings,
  Database,
  Smartphone,
  Cloud,
  Cpu,
  GitBranch,
  CheckCircle,
  ArrowRight,
  Star,
  DollarSign,
  Headphones,
  Laptop,
  Globe,
  BarChart3,
  TrendingUp,
  Award,
  Briefcase,
  Target,
  Layers,
  Palette,
  RefreshCw,
  Server,
} from 'lucide-react';
import '../../css/CustomSoftwareDevelopment.css';
import { Helmet} from 'react-helmet-async';
import Form from '../../config/Form'


const CustomSoftwareDevelopment = () => {
  const services = [
    {
      icon: <Laptop size={32} />,
      title: "Web Applications",
      desc: "Scalable, secure, and high-performance web applications tailored to your business processes.",
      features: ["Single Page Apps", "Enterprise Portals", "E-commerce Platforms", "CRM Systems"]
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile Apps",
      desc: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: ["iOS Apps", "Android Apps", "React Native", "Flutter Development"]
    },
    {
      icon: <Database size={32} />,
      title: "Database Solutions",
      desc: "Robust database design and management for optimal data storage and retrieval.",
      features: ["SQL/NoSQL", "Data Migration", "Performance Tuning", "Backup Solutions"]
    },
    {
      icon: <Cloud size={32} />,
      title: "Cloud Integration",
      desc: "Seamless cloud migration and integration services for enhanced scalability.",
      features: ["AWS/Azure/GCP", "Cloud Migration", "Serverless Architecture", "DevOps"]
    },
    {
      icon: <Cpu size={32} />,
      title: "Enterprise Software",
      desc: "Comprehensive enterprise solutions that streamline operations and boost productivity.",
      features: ["ERP Systems", "HR Management", "Inventory Control", "Supply Chain"]
    },
    {
      icon: <Settings size={32} />,
      title: "API Development",
      desc: "Custom API development for seamless integration between systems and services.",
      features: ["RESTful APIs", "GraphQL", "Third-party Integration", "Microservices"]
    },
    {
      icon: <Shield size={32} />,
      title: "Cybersecurity",
      desc: "Advanced security measures to protect your software from threats and vulnerabilities.",
      features: ["Security Audits", "Encryption", "Authentication", "Penetration Testing"]
    },
    {
      icon: <GitBranch size={32} />,
      title: "DevOps Services",
      desc: "Streamline development and operations with modern DevOps practices.",
      features: ["CI/CD Pipeline", "Containerization", "Infrastructure as Code", "Monitoring"]
    },
    {
      icon: <Palette size={32} />,
      title: "UI/UX Design",
      desc: "User-centered design that creates intuitive and engaging software experiences.",
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      desc: "We analyze your requirements, market research, and create a detailed project roadmap.",
      icon: <Target size={32} />
    },
    {
      step: "02",
      title: "Design & Prototyping",
      desc: "Our designers create wireframes and interactive prototypes for your approval.",
      icon: <Palette size={32} />
    },
    {
      step: "03",
      title: "Development",
      desc: "Agile development with regular sprints, code reviews, and continuous integration.",
      icon: <Code size={32} />
    },
    {
      step: "04",
      title: "Testing & QA",
      desc: "Comprehensive testing including unit, integration, and user acceptance testing.",
      icon: <Shield size={32} />
    },
    {
      step: "05",
      title: "Deployment",
      desc: "Smooth deployment with minimal downtime and thorough documentation.",
      icon: <Rocket size={32} />
    },
    {
      step: "06",
      title: "Maintenance & Support",
      desc: "Ongoing support, updates, and enhancements to keep your software running smoothly.",
      icon: <Headphones size={32} />
    }
  ];

  const benefits = [
    {
      icon: <Zap size={24} />,
      title: "Faster Time to Market",
      desc: "Agile methodology ensures quick delivery without compromising quality."
    },
    {
      icon: <Shield size={24} />,
      title: "Enterprise-Grade Security",
      desc: "Bank-level security protocols to protect your valuable data."
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Scalable Solutions",
      desc: "Software that grows with your business, handling increased loads seamlessly."
    },
    {
      icon: <DollarSign size={24} />,
      title: "Cost-Effective",
      desc: "Optimized development process that maximizes ROI and minimizes waste."
    },
    {
      icon: <RefreshCw size={24} />,
      title: "Easy Maintenance",
      desc: "Clean code architecture that makes updates and maintenance simple."
    },
    {
      icon: <Award size={24} />,
      title: "Quality Assurance",
      desc: "Rigorous testing ensures bug-free, reliable software performance."
    }
  ];

  const technologies = [
    { name: "React", icon: <Code size={20} />, category: "Frontend" },
    { name: "Node.js", icon: <Server size={20} />, category: "Backend" },
    { name: "MongoDB", icon: <Database size={20} />, category: "Database" },
    { name: "Docker", icon: <Layers size={20} />, category: "DevOps" },
    { name: "GraphQL", icon: <BarChart3 size={20} />, category: "API" },
    { name: "Flutter", icon: <Smartphone size={20} />, category: "Mobile" },
  ];

  const caseStudies = [
    {
      title: "E-commerce Platform",
      company: "Fashion Retailer",
      result: "150% Increase in Sales",
      description: "Custom e-commerce solution with inventory management and payment integration.",
      icon: <Briefcase size={24} />
    },
    {
      title: "Healthcare Management System",
      company: "Regional Hospital",
      result: "40% Faster Patient Processing",
      description: "Integrated patient management system with electronic health records.",
      icon: <Database size={24} />
    },
    {
      title: "Logistics Mobile App",
      company: "Delivery Service",
      result: "60% Route Optimization",
      description: "Real-time tracking and route optimization for delivery fleet.",
      icon: <Globe size={24} />
    }
  ];

  const faqs = [
    {
      question: "How long does custom software development take?",
      answer: "Timeline varies based on complexity. Simple apps take 3-4 months, complex enterprise solutions can take 6-12 months. We provide detailed timelines during discovery."
    },
    {
      question: "How much does custom software cost?",
      answer: "Cost depends on features, complexity, and technology stack. We provide transparent pricing with detailed breakdowns and flexible engagement models."
    },
    {
      question: "Do you provide post-launch support?",
      answer: "Yes, we offer comprehensive maintenance packages including bug fixes, updates, security patches, and feature enhancements."
    },
    {
      question: "Can you integrate with existing systems?",
      answer: "Absolutely! We specialize in integrating new software with your existing tools, databases, and third-party services."
    }
  ];

  return (
    <div className="software-container">
      <Helmet>
      <title>Custom Software Development | Purvsoft Technologies</title>
      <meta name="description" content="Purvsoft Technologies delivers custom software development solutions tailored to your business needs. From ERP to CRM and SaaS — scalable, secure, and efficient software." />
      <meta name="keywords" content="custom software development, ERP development, CRM software, SaaS development, bespoke software, software company India" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href="https://www.purvsoft.com/services/custom-software-development" />
 
      <meta property="og:title" content="Custom Software Development | Purvsoft Technologies" />
      <meta property="og:description" content="Tailored software solutions — ERP, CRM, SaaS, and more. Scalable and secure." />
      <meta property="og:url" content="https://www.purvsoft.com/services/custom-software-development" />
      <meta property="og:image" content="https://www.purvsoft.com/og-image.jpg" />
 
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Custom Software Development | Purvsoft Technologies" />
      <meta name="twitter:description" content="Scalable and secure custom software development by Purvsoft Technologies." />
    </Helmet>
      {/* Hero Section */}
      <section className="software-hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content" data-aos="fade-right">
              <div className="badge">Custom Software Development</div>
              <h1>
                Build Powerful, Scalable Software <br />
                <span className="gradient-text">Tailored to Your Business</span>
              </h1>
              <p className="hero-description">
                Transform your ideas into reality with our custom software development services. 
                We create robust, scalable, and secure applications that drive business growth 
                and deliver exceptional user experiences.
              </p>
              <div className="hero-stats">
                <div className="hero-stat">
                  <span className="stat-number">200+</span>
                  <span className="stat-label">Projects Delivered</span>
                </div>
                <div className="hero-stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Expert Developers</span>
                </div>
                <div className="hero-stat">
                  <span className="stat-number">98%</span>
                  <span className="stat-label">Client Satisfaction</span>
                </div>
              </div>
              <div className="hero-buttons">
                <a href="#form" className="btn-primary">
                 Contact Us <ArrowRight size={18} />
                </a>
              </div>
            </div>
            <div className="hero-visual" data-aos="fade-left">
              <div className="code-window">
                <div className="window-header">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                  <span className="filename">app.js</span>
                </div>
                <div className="code-content">
                  <div className="code-line">
                    <span className="keyword">function</span> <span className="function">App</span>() {'{'}
                  </div>
                  <div className="code-line indent">
                    <span className="keyword">return</span> (
                  </div>
                  <div className="code-line indent2">
                    {'<'}div <span className="attr">className</span>=<span className="string">"app"</span>{'>'}
                  </div>
                  <div className="code-line indent3">
                    {'<'}Header /{'>'}
                  </div>
                  <div className="code-line indent3">
                    {'<'}MainContent /{'>'}
                  </div>
                  <div className="code-line indent3">
                    {'<'}Footer /{'>'}
                  </div>
                  <div className="code-line indent2">
                    {'<'}/div{'>'}
                  </div>
                  <div className="code-line indent">
                    );
                  </div>
                  <div className="code-line">{'}'}</div>
                </div>
              </div>
              <div className="floating-icons">
                <div className="icon-bubble react">React</div>
                <div className="icon-bubble node">Node.js</div>
                <div className="icon-bubble python">Python</div>
                <div className="icon-bubble aws">AWS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="trust-section">
        <div className="container">
          <div className="trust-grid">
            <div className="trust-item">
              <Award size={32} />
              <div>
                <h4>10+ Years</h4>
                <p>Industry Experience</p>
              </div>
            </div>
            <div className="trust-item">
              <Users size={32} />
              <div>
                <h4>50+ Experts</h4>
                <p>Dedicated Team</p>
              </div>
            </div>
            <div className="trust-item">
              <Star size={32} />
              <div>
                <h4>4.9 Rating</h4>
                <p>Client Reviews</p>
              </div>
            </div>
            <div className="trust-item">
              <Shield size={32} />
              <div>
                <h4>100% Secure</h4>
                <p>Enterprise Grade</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h6 className="section-subtitle">What We Build</h6>
            <h2 className="section-title">
              Comprehensive <span className="gradient-text">Software Solutions</span>
            </h2>
            <p className="section-description">
              From web applications to enterprise systems, we deliver custom software that 
              solves complex business challenges and drives digital transformation.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.desc}</p>
                <ul className="service-features">
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

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h6 className="section-subtitle">Our Development Process</h6>
            <h2 className="section-title">
              How We <span className="gradient-text">Build Excellence</span>
            </h2>
            <p className="section-description">
              A proven methodology that ensures timely delivery, quality code, and successful outcomes.
            </p>
          </div>

          <div className="process-grid">
            {process.map((item, index) => (
              <div key={index} className="process-card" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="process-step">{item.step}</div>
                <div className="process-icon">{item.icon}</div>
                <h3 className="process-title">{item.title}</h3>
                <p className="process-description">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <h6 className="section-subtitle">Why Choose Us</h6>
            <h2 className="section-title">
              Benefits of <span className="gradient-text">Custom Software</span>
            </h2>
          </div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="benefit-icon">{benefit.icon}</div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="tech-section">
        <div className="container">
          <div className="section-header">
            <h6 className="section-subtitle">Our Tech Stack</h6>
            <h2 className="section-title">
              Cutting-Edge <span className="gradient-text">Technologies</span>
            </h2>
            <p className="section-description">
              We leverage modern technologies to build robust, scalable, and future-proof solutions.
            </p>
          </div>

          <div className="tech-grid">
            {technologies.map((tech, index) => (
              <div key={index} className="tech-item" data-aos="zoom-in" data-aos-delay={index * 30}>
                <div className="tech-icon">{tech.icon}</div>
                <div className="tech-info">
                  <span className="tech-name">{tech.name}</span>
                  <span className="tech-category">{tech.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="case-studies-section">
        <div className="container">
          <div className="section-header">
            <h6 className="section-subtitle">Success Stories</h6>
            <h2 className="section-title">
              Real <span className="gradient-text">Results</span> for Our Clients
            </h2>
          </div>

          <div className="case-studies-grid">
            {caseStudies.map((study, index) => (
              <div key={index} className="case-study-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="case-study-icon">{study.icon}</div>
                <h3 className="case-study-title">{study.title}</h3>
                <div className="case-study-company">{study.company}</div>
                <div className="case-study-result">{study.result}</div>
                <p className="case-study-description">{study.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h6 className="section-subtitle">FAQ</h6>
            <h2 className="section-title">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-card" data-aos="fade-up" data-aos-delay={index * 50}>
                <h3 className="faq-question">{faq.question}</h3>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">
              Ready to Build Your <span className="gradient-text">Custom Software?</span>
            </h2>
            <p className="cta-description">
              Let's discuss your project requirements and create a solution that drives your business forward.
            </p>
            <div className="cta-buttons">
              <a href="#" className="btn-primary btn-large">
                Get Free Consultation <ArrowRight size={20} />
              </a>
              <a href="#" className="btn-outline btn-large">
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </section>
      <div id="form">
        <Form />
      </div>
    </div>
  );
};

export default CustomSoftwareDevelopment;