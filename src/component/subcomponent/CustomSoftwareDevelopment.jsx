import React, { useMemo } from 'react';
import {
  Code, Rocket, Shield, Zap, Users, Settings, Database,
  Smartphone, Cloud, Cpu, GitBranch, CheckCircle, ArrowRight,
  Star, DollarSign, Headphones, Laptop, Globe, BarChart3,
  TrendingUp, Award, Briefcase, Target, Layers, Palette,
  RefreshCw, Server,
} from 'lucide-react';
import '../../css/CustomSoftwareDevelopment.css';
import { Helmet } from 'react-helmet-async';
import Form from '../../config/Form';

// ✅ FIX 1: All static data moved OUTSIDE component
const services = [
  {
    icon: <Laptop size={32} />,
    title: "Web Applications",
    desc: "Scalable, secure, and high-performance web applications tailored to your business processes and workflows.",
    features: ["Single Page Apps", "Enterprise Portals", "E-commerce Platforms", "CRM Systems"]
  },
  {
    icon: <Smartphone size={32} />,
    title: "Mobile Apps",
    desc: "Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.",
    features: ["iOS Apps", "Android Apps", "React Native", "Flutter Development"]
  },
  {
    icon: <Database size={32} />,
    title: "Database Solutions",
    desc: "Robust database design and management for optimal data storage, retrieval, and long-term scalability.",
    features: ["SQL/NoSQL", "Data Migration", "Performance Tuning", "Backup Solutions"]
  },
  {
    icon: <Cloud size={32} />,
    title: "Cloud Integration",
    desc: "Seamless cloud migration and integration services on AWS, Azure, and GCP for enhanced scalability.",
    features: ["AWS/Azure/GCP", "Cloud Migration", "Serverless Architecture", "DevOps"]
  },
  {
    icon: <Cpu size={32} />,
    title: "Enterprise Software",
    desc: "Comprehensive enterprise solutions including ERP and HR systems that streamline operations and boost productivity.",
    features: ["ERP Systems", "HR Management", "Inventory Control", "Supply Chain"]
  },
  {
    icon: <Settings size={32} />,
    title: "API Development",
    desc: "Custom RESTful and GraphQL API development for seamless integration between systems and third-party services.",
    features: ["RESTful APIs", "GraphQL", "Third-party Integration", "Microservices"]
  },
  {
    icon: <Shield size={32} />,
    title: "Cybersecurity",
    desc: "Advanced security measures including audits, encryption, and penetration testing to protect your software.",
    features: ["Security Audits", "Encryption", "Authentication", "Penetration Testing"]
  },
  {
    icon: <GitBranch size={32} />,
    title: "DevOps Services",
    desc: "Streamline development and operations with modern CI/CD pipelines, containerization, and infrastructure as code.",
    features: ["CI/CD Pipeline", "Containerization", "Infrastructure as Code", "Monitoring"]
  },
  {
    icon: <Palette size={32} />,
    title: "UI/UX Design",
    desc: "User-centered design that creates intuitive, engaging, and conversion-optimized software experiences.",
    features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"]
  }
];

const procesSteps = [
  {
    step: "01",
    title: "Discovery & Planning",
    desc: "We analyze your requirements, conduct market research, and create a detailed project roadmap.",
    icon: <Target size={32} />
  },
  {
    step: "02",
    title: "Design & Prototyping",
    desc: "Our designers create wireframes and interactive prototypes for your review and approval.",
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
    desc: "Bank-level security protocols to protect your valuable data and systems."
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
    answer: "Timeline varies based on complexity. Simple apps take 3-4 months, complex enterprise solutions can take 6-12 months. We provide detailed timelines during the discovery phase."
  },
  {
    question: "How much does custom software development cost in India?",
    answer: "Cost depends on features, complexity, and technology stack. We provide transparent pricing with detailed breakdowns and flexible engagement models suited to businesses of all sizes."
  },
  {
    question: "Do you provide post-launch support and maintenance?",
    answer: "Yes, we offer comprehensive maintenance packages including bug fixes, updates, security patches, and feature enhancements to keep your software running smoothly."
  },
  {
    question: "Can you integrate custom software with our existing systems?",
    answer: "Absolutely! We specialize in integrating new software with your existing tools, databases, and third-party services including ERP, CRM, and payment gateways."
  },
  {
    question: "What technologies do you use for custom software development?",
    answer: "We use modern, battle-tested technologies including React, Node.js, Python, Flutter, MongoDB, PostgreSQL, AWS, Azure, Docker, and GraphQL based on your project requirements."
  },
  {
    question: "Do you offer custom software development services in Ahmedabad?",
    answer: "Yes. Purvsoft Technologies is based in Ahmedabad, Gujarat and serves clients across India and internationally with end-to-end custom software development services."
  }
];

const CustomSoftwareDevelopment = () => {

  // ✅ FIX 2: All schemas in useMemo — computed once, not on every render
  const softwareServiceSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom Software Development",
    "alternateName": "Bespoke Software Development Services",
    "url": "https://www.purvsoft.com/services/custom-software-development",
    "description": "Purvsoft Technologies delivers custom software development services including web applications, mobile apps, ERP, CRM, cloud integration, API development, and cybersecurity solutions for businesses across India.",
    "provider": {
      "@type": "Organization",
      "name": "Purvsoft Technologies",
      "url": "https://www.purvsoft.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.purvsoft.com/logo.png"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ahmedabad",
        "addressRegion": "Gujarat",
        "postalCode": "380001",
        "addressCountry": "IN"
      },
      // ✅ FIX 3: Removed placeholder "+91-XXXXXXXXXX" telephone
      // Add real number here when available: "telephone": "+91-XXXXXXXXXX"
      "email": "info@purvsoft.com"
    },
    "areaServed": [
      { "@type": "City", "name": "Ahmedabad" },
      { "@type": "State", "name": "Gujarat" },
      { "@type": "Country", "name": "India" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Custom Software Development Services",
      "itemListElement": services.map((s, i) => ({
        "@type": "Offer",
        "position": i + 1,
        "itemOffered": {
          "@type": "Service",
          "name": s.title,
          "description": s.desc
        }
      }))
    }
  }), []);

  const breadcrumbSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.purvsoft.com/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.purvsoft.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Custom Software Development", "item": "https://www.purvsoft.com/services/custom-software-development" }
    ]
  }), []);

  const faqSchema = useMemo(() => ({
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
  }), []);

  const caseStudySchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Custom Software Development Success Stories — Purvsoft Technologies",
    "url": "https://www.purvsoft.com/services/custom-software-development",
    "itemListElement": caseStudies.map((study, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": study.title,
      "description": `${study.company} — ${study.result}. ${study.description}`
    }))
  }), []);

  // ✅ FIX 4: Removed fake aggregateRating schema — Google penalizes unverified ratings
  // Add back only when real reviews are visible on the page

  const howToSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How Purvsoft Technologies Builds Custom Software",
    "description": "A 6-step proven software development process from discovery to ongoing maintenance.",
    "step": procesSteps.map((item) => ({
      "@type": "HowToStep",
      "position": parseInt(item.step),
      "name": item.title,
      "text": item.desc
    }))
  }), []);

  return (
    <div className="software-container">
      <Helmet>
        {/* ✅ FIX 5: Title shortened to under 60 chars */}
        <title>Custom Software Development in Ahmedabad | Purvsoft</title>

        <meta
          name="description"
          content="Purvsoft Technologies builds custom software — web apps, mobile apps, ERP, CRM, APIs & cloud solutions in Ahmedabad, India. 200+ projects. 98% satisfaction. Get a free consultation!"
        />

        <meta
          name="keywords"
          content="custom software development Ahmedabad, bespoke software India, ERP development Gujarat, CRM software development, web app development India, mobile app development Ahmedabad, API development, cloud integration, Purvsoft Technologies"
        />

        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Purvsoft Technologies" />

        {/* ✅ Canonical — no trailing slash, lowercase */}
        <link rel="canonical" href="https://www.purvsoft.com/services/custom-software-development" />

        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Ahmedabad, Gujarat, India" />
        <meta name="geo.position" content="23.0225;72.5714" />
        <meta name="ICBM" content="23.0225, 72.5714" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Custom Software Development in Ahmedabad | Purvsoft Technologies" />
        <meta property="og:description" content="Build scalable custom software — web apps, mobile apps, ERP, CRM & APIs. 200+ projects. 98% satisfaction. Free consultation available." />
        <meta property="og:url" content="https://www.purvsoft.com/services/custom-software-development" />
        <meta property="og:site_name" content="Purvsoft Technologies" />
        <meta property="og:image" content="https://www.purvsoft.com/og-custom-software.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Custom Software Development Services by Purvsoft Technologies, Ahmedabad" />
        <meta property="og:locale" content="en_IN" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@purvsoft" />
        <meta name="twitter:creator" content="@purvsoft" />
        <meta name="twitter:title" content="Custom Software Development in Ahmedabad | Purvsoft Technologies" />
        <meta name="twitter:description" content="Scalable custom software — web apps, mobile apps, ERP, CRM & APIs. 200+ projects. Free consultation!" />
        <meta name="twitter:image" content="https://www.purvsoft.com/og-custom-software.jpg" />
        <meta name="twitter:image:alt" content="Custom Software Development by Purvsoft Technologies" />

        <meta name="google-site-verification" content="MjMKilzhOmqr6Txi7pbjACF6g_hSt-B6Ej496yJyrH0" />
        <meta name="msvalidate.01" content="AD0DF443696FB452E952416667F1A8DC" />

        {/* ✅ FIX 6: 5 schemas (removed fake aggregateRating) */}
        <script type="application/ld+json">{JSON.stringify(softwareServiceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(caseStudySchema)}</script>
        <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="software-hero" aria-label="Custom Software Development Services — Purvsoft Technologies">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <p className="badge" aria-label="Service category">Custom Software Development</p>

              <h1>
                Build Powerful, Scalable Software <br />
                <span className="brand-gradient">Tailored to Your Business in India</span>
              </h1>

              <p className="hero-description">
                Transform your ideas into reality with our custom software development services
                in Ahmedabad, India. We create robust, scalable, and secure applications that
                drive business growth and deliver exceptional user experiences.
              </p>

              <div className="hero-stats" aria-label="Our software development track record">
                <div className="hero-stat">
                  <p className="stat-number"><strong>200+</strong></p>
                  <p className="stat-label">Projects Delivered</p>
                </div>
                <div className="hero-stat">
                  <p className="stat-number"><strong>50+</strong></p>
                  <p className="stat-label">Expert Developers</p>
                </div>
                <div className="hero-stat">
                  <p className="stat-number"><strong>98%</strong></p>
                  <p className="stat-label">Client Satisfaction</p>
                </div>
              </div>

              <div className="hero-buttons">
                <button
                  className="btn-primary"
                  onClick={() => {
                    document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Get Free Consultation <ArrowRight size={18} />
                </button>
              </div>
            </div>

            {/* ✅ Decorative — aria-hidden */}
            <div className="hero-visual" aria-hidden="true">
              <div className="code-window" role="presentation">
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
                  <div className="code-line indent3">{'<'}Header /{'>'}</div>
                  <div className="code-line indent3">{'<'}MainContent /{'>'}</div>
                  <div className="code-line indent3">{'<'}Footer /{'>'}</div>
                  <div className="code-line indent2">{'<'}/div{'>'}</div>
                  <div className="code-line indent">);</div>
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
      <section className="trust-section" aria-label="Why Trust Purvsoft Technologies">
        <div className="container">
          <div className="trust-grid">
            {[
              { icon: <Award size={32} />, heading: "10+ Years", sub: "Industry Experience" },
              { icon: <Users size={32} />, heading: "50+ Experts", sub: "Dedicated Team" },
              { icon: <Star size={32} />, heading: "4.9 Rating", sub: "Client Reviews" },
              { icon: <Shield size={32} />, heading: "100% Secure", sub: "Enterprise Grade" }
            ].map((item, i) => (
              <div key={i} className="trust-item">
                <div aria-hidden="true">{item.icon}</div>
                <div>
                  <h4>{item.heading}</h4>
                  <p>{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" aria-label="Custom Software Development Services We Offer">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">What We Build</p>
            <h2 className="section-title">
              Comprehensive <span className="brand-gradient">Software Solutions</span>
            </h2>
            <p className="section-description">
              From web applications to enterprise systems, we deliver custom software that
              solves complex business challenges and drives digital transformation.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <article key={index} className="service-card" aria-label={service.title}>
                <div className="service-icon" aria-hidden="true">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.desc}</p>
                <ul className="service-features" aria-label={`Features of ${service.title}`}>
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <CheckCircle size={14} aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section" aria-label="Our Software Development Process">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Our Development Process</p>
            <h2 className="section-title">
              How We <span className="brand-gradient">Build Excellence</span>
            </h2>
            <p className="section-description">
              A proven methodology that ensures timely delivery, quality code, and successful outcomes.
            </p>
          </div>

          <div className="process-grid">
            {procesSteps.map((item, index) => (
              <div key={index} className="process-card">
                <div className="process-step" aria-hidden="true">{item.step}</div>
                <div className="process-icon" aria-hidden="true">{item.icon}</div>
                <h3 className="process-title">{item.title}</h3>
                <p className="process-description">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section" aria-label="Benefits of Custom Software Development">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Why Choose Us</p>
            <h2 className="section-title">
              Benefits of <span className="brand-gradient">Custom Software</span>
            </h2>
          </div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon" aria-hidden="true">{benefit.icon}</div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="tech-section" aria-label="Technologies We Use for Software Development">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Our Tech Stack</p>
            <h2 className="section-title">
              Cutting-Edge <span className="brand-gradient">Technologies</span>
            </h2>
            <p className="section-description">
              We leverage modern technologies to build robust, scalable, and future-proof solutions.
            </p>
          </div>

          <div className="tech-grid">
            {technologies.map((tech, index) => (
              <div key={index} className="tech-item" aria-label={`${tech.name} — ${tech.category}`}>
                <div className="tech-icon" aria-hidden="true">{tech.icon}</div>
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
      <section className="case-studies-section" aria-label="Custom Software Development Success Stories">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Success Stories</p>
            <h2 className="section-title">
              Real <span className="brand-gradient">Results</span> for Our Clients
            </h2>
          </div>

          <div className="case-studies-grid">
            {caseStudies.map((study, index) => (
              <article
                key={index}
                className="case-study-card"
                aria-label={`Case study: ${study.title} — ${study.company}`}
              >
                <div className="case-study-icon" aria-hidden="true">{study.icon}</div>
                <h3 className="case-study-title">{study.title}</h3>
                <p className="case-study-company">{study.company}</p>
                {/* <p className="case-study-result">{study.result}</p> */}
                <p className="case-study-description">{study.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section" aria-label="Custom Software Development FAQs">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">FAQ</p>
            <h2 className="section-title">
              Frequently Asked <span className="brand-gradient">Questions</span>
            </h2>
          </div>

          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-card">
                <h3 className="faq-question">{faq.question}</h3>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="form" aria-label="Contact Purvsoft Technologies for Custom Software Development">
        <Form />
      </section>
    </div>
  );
};

export default CustomSoftwareDevelopment;