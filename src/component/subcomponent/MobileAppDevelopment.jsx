import React from 'react';
import {
  Smartphone,
  Code,
  Palette,
  Shield,
  Zap,
  Users,
  Globe,
  Cloud,
  Database,
  Fingerprint,
  Camera,
  MapPin,
  Bell,
  Gift,
  Star,
  Award,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Download,
  Upload,
  RefreshCw,
  Battery,
  Wifi,
  Lock,
  Share2,
  MessageCircle,
  Heart,
  DollarSign,
  BarChart3,
  ShoppingCart,
  Home,
  User,
  Server,
  Search
} from 'lucide-react';
import '../../css/MobileAppDevelopment.css';
import { Helmet } from 'react-helmet-async';
import Form from '../../config/Form';

const MobileAppDevelopment = () => {
  const services = [
    {
      icon: <Smartphone size={28} />,
      title: "iOS App Development",
      desc: "Native iOS apps built with Swift and SwiftUI for exceptional performance and user experience.",
      features: ["Swift/SwiftUI", "iOS 15+ Support", "App Store Optimization", "Apple Pay Integration"]
    },
    {
      icon: <Code size={28} />,
      title: "Android App Development",
      desc: "Feature-rich Android apps using Kotlin and Jetpack Compose for the Google Play Store.",
      features: ["Kotlin/Java", "Material Design", "Google Play Services", "Firebase Integration"]
    },
    {
      icon: <Globe size={28} />,
      title: "Cross-Platform Apps",
      desc: "Build once, deploy everywhere with React Native and Flutter for cost-effective solutions.",
      features: ["React Native", "Flutter", "Code Reuse", "Native Performance"]
    },
    {
      icon: <Palette size={28} />,
      title: "UI/UX Design",
      desc: "Beautiful, intuitive interfaces that engage users and enhance the mobile experience.",
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"]
    },
    {
      icon: <Cloud size={28} />,
      title: "Backend Integration",
      desc: "Robust backend services and APIs to power your mobile applications.",
      features: ["RESTful APIs", "GraphQL", "Cloud Storage", "Real-time Sync"]
    },
    {
      icon: <Shield size={28} />,
      title: "App Security",
      desc: "Enterprise-grade security to protect user data and prevent vulnerabilities.",
      features: ["Data Encryption", "Secure Authentication", "SSL Pinning", "Code Obfuscation"]
    },
    {
      icon: <Database size={28} />,
      title: "Database Management",
      desc: "Efficient local and cloud database solutions for seamless data handling.",
      features: ["SQLite", "Realm", "Firebase", "Core Data"]
    },
    {
      icon: <BarChart3 size={28} />,
      title: "App Analytics",
      desc: "Track user behavior and app performance with comprehensive analytics.",
      features: ["User Tracking", "Crash Reporting", "Performance Monitoring", "User Engagement"]
    },
    {
      icon: <Award size={28} />,
      title: "App Store Optimization",
      desc: "Optimize your app store presence to increase visibility and downloads.",
      features: ["Keyword Research", "ASO Strategy", "Review Management", "Competitor Analysis"]
    }
  ];
const scrollToForm = () => {
  document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
};
  const appTypes = [
    {
      icon: <ShoppingCart size={24} />,
      title: "E-commerce Apps",
      desc: "Mobile shopping experiences with secure payments and product catalogs.",
      color: "#4361ee"
    },
    {
      icon: <MessageCircle size={24} />,
      title: "Social Media Apps",
      desc: "Connect users with messaging, feeds, and content sharing features.",
      color: "#f59e0b"
    },
    {
      icon: <MapPin size={24} />,
      title: "Location-Based Apps",
      desc: "GPS integration for maps, tracking, and location services.",
      color: "#10b981"
    },
    {
      icon: <Heart size={24} />,
      title: "Health & Fitness",
      desc: "Track workouts, health metrics, and wellness activities.",
      color: "#ec4899"
    },
    {
      icon: <Bell size={24} />,
      title: "On-Demand Services",
      desc: "Booking, scheduling, and service delivery platforms.",
      color: "#8b5cf6"
    },
    {
      icon: <Gift size={24} />,
      title: "Loyalty Programs",
      desc: "Rewards, points, and customer engagement features.",
      color: "#14b8a6"
    }
  ];

  const benefits = [
    {
      icon: <Zap size={24} />,
      title: "Faster Performance",
      desc: "Native-level performance with smooth animations and quick loading times."
    },
    {
      icon: <Users size={24} />,
      title: "Better Engagement",
      desc: "Push notifications and mobile features to keep users coming back."
    },
    {
      icon: <Lock size={24} />,
      title: "Enhanced Security",
      desc: "Biometric authentication and secure data storage for peace of mind."
    },
    {
      icon: <Globe size={24} />,
      title: "Global Reach",
      desc: "Reach users worldwide through App Store and Google Play."
    },
    {
      icon: <DollarSign size={24} />,
      title: "Monetization",
      desc: "Multiple revenue streams including in-app purchases and subscriptions."
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Business Growth",
      desc: "Scale your business with mobile-first strategies and solutions."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      desc: "Understanding your requirements, target audience, and market research.",
      icon: <Users size={32} />
    },
    {
      step: "02",
      title: "Design",
      desc: "Creating wireframes, prototypes, and beautiful UI/UX designs.",
      icon: <Palette size={32} />
    },
    {
      step: "03",
      title: "Development",
      desc: "Agile development with regular sprints and code reviews.",
      icon: <Code size={32} />
    },
    {
      step: "04",
      title: "Testing",
      desc: "Comprehensive testing on real devices for quality assurance.",
      icon: <Shield size={32} />
    },
    {
      step: "05",
      title: "Deployment",
      desc: "App store submission and launch strategy execution.",
      icon: <Upload size={32} />
    },
    {
      step: "06",
      title: "Maintenance",
      desc: "Ongoing support, updates, and performance optimization.",
      icon: <RefreshCw size={32} />
    }
  ];

  const technologies = [
    { name: "Flutter", icon: <Smartphone size={20} />, category: "Cross-Platform" },
    { name: "Node.js", icon: <Server size={20} />, category: "Backend" },
    { name: "MongoDB", icon: <Database size={20} />, category: "Database" },
    { name: "GraphQL", icon: <BarChart3 size={20} />, category: "API" }
  ];

  const stats = [
    { icon: <Smartphone size={24} />, value: "100+", label: "Apps Delivered" },
    { icon: <Users size={24} />, value: "50+", label: "Happy Clients" },
    { icon: <Download size={24} />, value: "5M+", label: "Downloads" },
    { icon: <Star size={24} />, value: "4.9", label: "App Store Rating" }
  ];

  const features = [
    {
      icon: <Fingerprint size={24} />,
      title: "Biometric Authentication",
      desc: "Face ID and fingerprint login for enhanced security."
    },
    {
      icon: <Camera size={24} />,
      title: "Camera Integration",
      desc: "QR code scanning, image capture, and video recording."
    },
    {
      icon: <MapPin size={24} />,
      title: "GPS & Maps",
      desc: "Location tracking, geofencing, and route optimization."
    },
    {
      icon: <Bell size={24} />,
      title: "Push Notifications",
      desc: "Engage users with timely and relevant notifications."
    },
    {
      icon: <Wifi size={24} />,
      title: "Offline Mode",
      desc: "Work without internet and sync when online."
    },
    {
      icon: <Share2 size={24} />,
      title: "Social Sharing",
      desc: "Easy sharing of content across social platforms."
    }
  ];

  const faqs = [
    {
      question: "How long does it take to develop a mobile app?",
      answer: "Timeline varies based on complexity. Simple apps take 2-3 months, while complex apps can take 4-6 months. We provide detailed timelines during planning."
    },
    {
      question: "How much does mobile app development cost?",
      answer: "Cost depends on features, platforms, and complexity. We offer flexible pricing models and provide detailed quotes based on your requirements."
    },
    {
      question: "Do you provide post-launch support?",
      answer: "Yes, we offer comprehensive maintenance packages including bug fixes, updates, and feature enhancements."
    },
    {
      question: "Can you help with app store submission?",
      answer: "Absolutely! We handle the entire app store submission process and ensure compliance with Apple and Google guidelines."
    }
  ];

  // ✅ FIX 1: Single canonical URL — use www consistently everywhere
  const CANONICAL_URL = "https://www.purvsoft.com/services/mobile-app-development";
  const SITE_URL = "https://www.purvsoft.com";

  // ✅ FIX 2: Clean, non-stuffed structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mobile App Development Services",
    "provider": {
      "@type": "Organization",
      "name": "Purvsoft Technologies",
      "url": SITE_URL,
      "logo": `${SITE_URL}/logo.png`,
      // ✅ FIX 3: Corrected address to Ahmedabad
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ahmedabad",
        "addressRegion": "Gujarat",
        "addressCountry": "IN"
      }
    },
    "areaServed": "Worldwide",
    "description": "Professional mobile app development for iOS and Android platforms. Native, hybrid, and cross-platform solutions built by Purvsoft Technologies, Ahmedabad.",
    "serviceType": [
      "iOS App Development",
      "Android App Development",
      "Cross-Platform App Development",
      "UI/UX Design for Mobile"
    ],
    "audience": {
      "@type": "BusinessAudience",
      "businessType": "Any"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "INR",
        "price": "Custom"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": CANONICAL_URL
    },
    "potentialAction": {
      "@type": "CommunicateAction",
      "name": "Contact",
      "target": `${SITE_URL}/contact`
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
        "item": SITE_URL
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": `${SITE_URL}/services`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Mobile App Development",
        "item": CANONICAL_URL
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
    <div className="mobile-container">
      <Helmet>
        {/* ✅ FIX 4: Clean, unique title — no keyword repetition */}
        <title>Mobile App Development Company in Ahmedabad | iOS & Android | Purvsoft</title>

        {/* ✅ FIX 5: Unique, natural meta description — no stuffing */}
        <meta
          name="description"
          content="Purvsoft Technologies is a trusted mobile app development company in Ahmedabad, India. We build high-performance iOS, Android, and cross-platform apps for startups and enterprises."
        />

        {/* ✅ TOP 10 KEYWORDS: Research-backed, high-intent, non-duplicate */}
        <meta
          name="keywords"
          content="mobile app development company Ahmedabad, iOS app development India, Android app development Gujarat, Flutter app development company, React Native development India, cross-platform app development, hire app developers India, custom mobile app development, app development company Ahmedabad, Purvsoft Technologies mobile apps"
        />

        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Purvsoft Technologies" />
        <meta name="language" content="English" />

        {/* ✅ FIX 7: Single canonical — prevents duplicate URL indexing */}
        <link rel="canonical" href={CANONICAL_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:title" content="Mobile App Development Company in Ahmedabad | Purvsoft" />
        <meta
          property="og:description"
          content="Purvsoft Technologies builds high-performance iOS and Android mobile apps in Ahmedabad. Native and cross-platform development for your business."
        />
        <meta property="og:image" content={`${SITE_URL}/og-mobile-app-development.jpg`} />
        <meta property="og:image:alt" content="Purvsoft Mobile App Development Services" />
        <meta property="og:site_name" content="Purvsoft Technologies" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={CANONICAL_URL} />
        <meta name="twitter:title" content="Mobile App Development | Purvsoft Technologies" />
        <meta
          name="twitter:description"
          content="Expert iOS and Android app development services from Ahmedabad, India. Custom apps built with modern technologies."
        />
        <meta name="twitter:image" content={`${SITE_URL}/twitter-mobile-app-development.jpg`} />
        <meta name="twitter:image:alt" content="Purvsoft Mobile App Development" />

        {/* ✅ FIX 8: Corrected geo tags — Ahmedabad, Gujarat */}
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Ahmedabad" />
        <meta name="geo.position" content="23.0225;72.5714" />
        <meta name="ICBM" content="23.0225, 72.5714" />

        {/* Mobile */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="google-site-verification" content="MjMKilzhOmqr6Txi7pbjACF6g_hSt-B6Ej496yJyrH0" />
        <meta name="msvalidate.01" content="AD0DF443696FB452E952416667F1A8DC" />
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
      <section className="mobile-hero" aria-label="Hero section with mobile app development overview">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content" data-aos="fade-right">
              <div className="badge" aria-label="Service category">Mobile App Development</div>
              {/* ✅ FIX 9: H1 contains primary keyword naturally — no stuffing */}
              <h1>
                Professional <span className="brand-gradient">Mobile App Development</span> Company in Ahmedabad
              </h1>
              <p className="hero-description">
                Transform your business ideas into powerful iOS and Android applications. Purvsoft Technologies delivers high-performance native and cross-platform mobile apps that drive engagement and revenue.
              </p>
              <div className="hero-stats">
                <div className="hero-stat">
                  <span className="stat-number">100+</span>
                  <span className="stat-label">Apps Built</span>
                </div>
                <div className="hero-stat">
                  <span className="stat-number">5M+</span>
                  <span className="stat-label">Global Downloads</span>
                </div>
                <div className="hero-stat">
                  <span className="stat-number">4.9</span>
                  <span className="stat-label">Client Rating</span>
                </div>
              </div>
              <div className="hero-buttons">
                <button
                  className="btn-primary"
                  onClick={scrollToForm}
                  aria-label="Contact us for mobile app development"
                >
                  Start Your App Project <ArrowRight size={18} />
                </button>
              </div>
            </div>
            <div className="hero-visual" data-aos="fade-left" aria-label="Mobile app interface preview">
              <div className="phone-mockup">
                <div className="phone-notch"></div>
                <div className="phone-screen">
                  <div className="app-header">
                    <div className="app-time">9:41</div>
                    <div className="app-battery">
                      <Battery size={14} aria-label="Battery indicator" />
                    </div>
                  </div>
                  <div className="app-content">
                    <div className="app-card">
                      <Smartphone size={20} aria-hidden="true" />
                      <span>Mobile Solutions</span>
                    </div>
                    <div className="app-card">
                      <Code size={20} aria-hidden="true" />
                      <span>Clean Code</span>
                    </div>
                    <div className="app-card">
                      <Palette size={20} aria-hidden="true" />
                      <span>Modern Design</span>
                    </div>
                  </div>
                  <div className="app-footer">
                    <div className="footer-icon">
                      <Home size={16} aria-hidden="true" />
                    </div>
                    <div className="footer-icon active">
                      <Search size={16} aria-hidden="true" />
                    </div>
                    <div className="footer-icon">
                      <User size={16} aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section" aria-label="Company achievements and statistics">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="stat-icon" aria-hidden="true">{stat.icon}</div>
                <h3 className="stat-value">{stat.value}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Types Section */}
      <section className="app-types-section" aria-label="Mobile app categories we develop">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Industry Solutions</p>
            <h2 className="section-title">
              Custom Mobile Apps for <span className="brand-gradient">Every Business</span>
            </h2>
            <p className="section-description">
              From retail startups to healthcare enterprises, we build specialized mobile applications tailored to your industry requirements.
            </p>
          </div>
          <div className="app-types-grid">
            {appTypes.map((type, index) => (
              <div key={index} className="app-type-card" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="type-icon" style={{ backgroundColor: `${type.color}20`, color: type.color }} aria-hidden="true">
                  {type.icon}
                </div>
                <h3 className="type-title">{type.title}</h3>
                <p className="type-description">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" aria-label="Mobile app development services offered">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Our Expertise</p>
            <h2 className="section-title">
              Comprehensive <span className="brand-gradient">Development Services</span>
            </h2>
            <p className="section-description">
              End-to-end mobile app development from concept to deployment and ongoing maintenance.
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="service-icon" aria-hidden="true">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.desc}</p>
                <ul className="service-features" aria-label={`Key features of ${service.title}`}>
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

      {/* Features Section */}
      <section className="features-section" aria-label="Advanced app features">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Capabilities</p>
            <h2 className="section-title">
              Enterprise-Grade <span className="brand-gradient">App Features</span>
            </h2>
            <p className="section-description">
              Integrate powerful functionality that enhances user experience and drives business results.
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="feature-icon" aria-hidden="true">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section" aria-label="App development methodology">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Workflow</p>
            <h2 className="section-title">
              Our <span className="brand-gradient">Development Process</span>
            </h2>
            <p className="section-description">
              A proven agile methodology ensuring quality, transparency, and timely delivery.
            </p>
          </div>
          <div className="process-grid">
            {process.map((item, index) => (
              <div key={index} className="process-card" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="process-step" aria-label={`Step ${item.step}`}>{item.step}</div>
                <div className="process-icon" aria-hidden="true">{item.icon}</div>
                <h3 className="process-title">{item.title}</h3>
                <p className="process-description">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section" aria-label="Benefits of mobile apps for business">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Advantages</p>
            <h2 className="section-title">
              Why Invest in <span className="brand-gradient">Mobile Applications</span>
            </h2>
            <p className="section-description">
              Mobile apps provide unmatched opportunities for customer engagement and business growth.
            </p>
          </div>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="benefit-icon" aria-hidden="true">{benefit.icon}</div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="tech-section" aria-label="Technologies we use for mobile development">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Tech Stack</p>
            <h2 className="section-title">
              Modern <span className="brand-gradient">Development Tools</span>
            </h2>
            <p className="section-description">
              We leverage cutting-edge frameworks and technologies to build robust mobile applications.
            </p>
          </div>
          <div className="tech-grid">
            {technologies.map((tech, index) => (
              <div key={index} className="tech-item" data-aos="zoom-in" data-aos-delay={index * 30}>
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

      {/* FAQ Section */}
      <section className="faq-section" aria-label="Frequently asked questions about mobile app development">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Common Questions</p>
            <h2 className="section-title">
              Mobile App Development <span className="brand-gradient">FAQs</span>
            </h2>
            <p className="section-description">
              Get answers to common questions about timelines, costs, and our development process.
            </p>
          </div>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="faq-card"
                data-aos="fade-up"
                data-aos-delay={index * 50}
                itemScope
                itemType="https://schema.org/Question"
              >
                <h3 className="faq-question" itemProp="name">{faq.question}</h3>
                <div
                  className="faq-answer"
                  itemProp="acceptedAnswer"
                  itemScope
                  itemType="https://schema.org/Answer"
                >
                  <p itemProp="text">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact Form */}
      <div id="form">
        <Form />
      </div>
    </div>
  );
};

export default MobileAppDevelopment;