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
import { Helmet} from 'react-helmet-async';
import Form from '../../config/Form'


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

  return (
    <div className="mobile-container">
      <Helmet>
      <title>Mobile App Development | Purvsoft Technologies – iOS & Android</title>
      <meta name="description" content="Purvsoft Technologies builds high-performance mobile applications for iOS and Android. Native, hybrid, and cross-platform app development tailored to your business goals." />
      <meta name="keywords" content="mobile app development, iOS app development, Android app development, cross-platform app, Flutter app, React Native, mobile app company India" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href="https://www.purvsoft.com/service/mobile-app-development" />
 
      <meta property="og:title" content="Mobile App Development | Purvsoft Technologies – iOS & Android" />
      <meta property="og:description" content="High-performance iOS and Android mobile app development — native, hybrid, and cross-platform." />
      <meta property="og:url" content="https://www.purvsoft.com/service/mobile-app-development" />
      <meta property="og:image" content="https://www.purvsoft.com/og-image.jpg" />
 
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Mobile App Development | Purvsoft Technologies" />
      <meta name="twitter:description" content="iOS and Android app development by Purvsoft Technologies." />
    </Helmet>
      {/* Hero Section */}
      <section className="mobile-hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content" data-aos="fade-right">
              <div className="badge">Mobile App Development</div>
              <h1>
                Create Powerful Mobile Experiences <br />
                <span className="gradient-text">That Users Love</span>
              </h1>
              <p className="hero-description">
                Transform your ideas into feature-rich mobile applications. We build native and 
                cross-platform apps that deliver exceptional performance and engaging user experiences.
              </p>
              <div className="hero-stats">
                <div className="hero-stat">
                  <span className="stat-number">100+</span>
                  <span className="stat-label">Apps Built</span>
                </div>
                <div className="hero-stat">
                  <span className="stat-number">5M+</span>
                  <span className="stat-label">Downloads</span>
                </div>
                <div className="hero-stat">
                  <span className="stat-number">4.9</span>
                  <span className="stat-label">App Rating</span>
                </div>
              </div>
              <div className="hero-buttons">
                <a href="#" className="btn-primary">
                  Contact us<ArrowRight size={18} />
                </a>
              </div>
            </div>
            <div className="hero-visual" data-aos="fade-left">
              <div className="phone-mockup">
                <div className="phone-notch"></div>
                <div className="phone-screen">
                  <div className="app-header">
                    <div className="app-time">9:41</div>
                    <div className="app-battery">
                      <Battery size={14} />
                    </div>
                  </div>
                  <div className="app-content">
                    <div className="app-card">
                      <Smartphone size={20} />
                      <span>Mobile App</span>
                    </div>
                    <div className="app-card">
                      <Code size={20} />
                      <span>Development</span>
                    </div>
                    <div className="app-card">
                      <Palette size={20} />
                      <span>UI/UX Design</span>
                    </div>
                  </div>
                  <div className="app-footer">
                    <div className="footer-icon">
                      <Home size={16} />
                    </div>
                    <div className="footer-icon active">
                      <Search size={16} />
                    </div>
                    <div className="footer-icon">
                      <User size={16} />
                    </div>
                  </div>
                </div>
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
              <div key={index} className="stat-card" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="stat-icon">{stat.icon}</div>
                <h3 className="stat-value">{stat.value}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Types Section */}
      <section className="app-types-section">
        <div className="container">
          <div className="section-header">
            <h6 className="section-subtitle">App Categories</h6>
            <h2 className="section-title">
              We Build Apps for <span className="gradient-text">Every Industry</span>
            </h2>
            <p className="section-description">
              From e-commerce to healthcare, we create mobile solutions for diverse business needs.
            </p>
          </div>

          <div className="app-types-grid">
            {appTypes.map((type, index) => (
              <div key={index} className="app-type-card" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="type-icon" style={{ backgroundColor: `${type.color}20`, color: type.color }}>
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
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h6 className="section-subtitle">Our Services</h6>
            <h2 className="section-title">
              Comprehensive <span className="gradient-text">Mobile Development</span>
            </h2>
            <p className="section-description">
              End-to-end mobile app development services tailored to your business needs.
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

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h6 className="section-subtitle">Key Features</h6>
            <h2 className="section-title">
              Powerful <span className="gradient-text">App Features</span>
            </h2>
            <p className="section-description">
              Integrate cutting-edge features to enhance your mobile app functionality.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h6 className="section-subtitle">Development Process</h6>
            <h2 className="section-title">
              How We <span className="gradient-text">Build Your App</span>
            </h2>
            <p className="section-description">
              A proven methodology that ensures quality, timely delivery, and successful outcomes.
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
              Benefits of <span className="gradient-text">Mobile Apps</span>
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
            <h6 className="section-subtitle">Technologies</h6>
            <h2 className="section-title">
              Cutting-Edge <span className="gradient-text">Tech Stack</span>
            </h2>
            <p className="section-description">
              We use modern technologies to build robust and scalable mobile applications.
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
     <div id="form">
        <Form />
      </div>
    </div>
  );
};

export default MobileAppDevelopment;