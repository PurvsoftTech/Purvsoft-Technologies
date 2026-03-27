import React from 'react';
import {
  Smartphone,
  Code,
  Palette,
  Zap,
  Globe,
  Users,
  Rocket,
  Shield,
  Cpu,
  Terminal,
  ArrowRight,
  TrendingUp,
  Heart,
  Github,
  Youtube,
  Monitor,
  Tablet,
  Apple,
  Facebook,
  Instagram,
  Twitter,
  Figma,
  Chrome,
  DollarSign,
  ShoppingCart,
  Briefcase,
  Gamepad,
  Car,
  Percent,
  MessageCircle,
  Wifi,
  Battery

} from 'lucide-react';
import '../../css/FlutterDevelopment.css';
import { Helmet} from 'react-helmet-async';
import Form from "../../config/Form";

const FlutterDevelopment = () => {
  const features = [
    {
      icon: <Zap size={28} />,
      title: "Hot Reload",
      desc: "See changes instantly in your app with Flutter's hot reload feature for faster development."
    },
    {
      icon: <Smartphone size={28} />,
      title: "Single Codebase",
      desc: "Write once, deploy to iOS, Android, web, and desktop from a single codebase."
    },
    {
      icon: <Palette size={28} />,
      title: "Beautiful UI",
      desc: "Create stunning, customizable UIs with Flutter's rich set of widgets and animations."
    },
    {
      icon: <Zap size={28} />,
      title: "Native Performance",
      desc: "Compile to native ARM code for 60fps smooth performance on all platforms."
    },
    {
      icon: <Cpu size={28} />,
      title: "Own Rendering Engine",
      desc: "Consistent UI across platforms with Flutter's own high-performance rendering engine."
    },
    {
      icon: <Users size={28} />,
      title: "Growing Community",
      desc: "Backed by Google with extensive documentation and active developer community."
    }
  ];

  const benefits = [
    {
      icon: <Rocket size={24} />,
      title: "Faster Time to Market",
      desc: "Build apps 2x faster with single codebase and hot reload functionality."
    },
    {
      icon: <DollarSign size={24} />,
      title: "Cost Effective",
      desc: "Reduce development costs by maintaining one codebase for multiple platforms."
    },
    {
      icon: <Globe size={24} />,
      title: "Cross-Platform",
      desc: "Reach users on iOS, Android, web, Windows, macOS, and Linux."
    },
    {
      icon: <Shield size={24} />,
      title: "Reliable & Stable",
      desc: "Used by Google for their own apps, ensuring production-ready stability."
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Future-Proof",
      cr: "Google's long-term commitment ensures continuous improvement and support."
    },
    {
      icon: <Heart size={24} />,
      title: "Great Developer Experience",
      desc: "Expressive UI, great tooling, and extensive widget catalog."
    }
  ];

  const platforms = [
    { name: "iOS", icon: <Apple size={20} />, color: "#000000" },
    { name: "Android", icon: <Smartphone size={20} />, color: "#3ddc84" },
    { name: "Web", icon: <Globe size={20} />, color: "#4285f4" },
    { name: "Windows", icon: <Monitor size={20} />, color: "#00a4ef" },
    { name: "macOS", icon: <Monitor size={20} />, color: "#000000" },
    { name: "Linux", icon: <Terminal size={20} />, color: "#fcc624" }
  ];

  const useCases = [
    {
      icon: <ShoppingCart size={24} />,
      title: "E-commerce Apps",
      desc: "Beautiful shopping experiences with smooth animations and payments."
    },
    {
      icon: <Facebook size={24} />,
      title: "Social Media Apps",
      desc: "Feature-rich social platforms with real-time updates."
    },
    {
      icon: <Briefcase size={24} />,
      title: "Business Apps",
      desc: "Enterprise applications with complex data visualization."
    },
    {
      icon: <Heart size={24} />,
      title: "Health & Fitness",
      desc: "Track workouts, health metrics, and wellness activities."
    },
    {
      icon: <Globe size={24} />,
      title: "News & Content",
      desc: "Content-rich apps with beautiful typography and layouts."
    },
    {
      icon: <Gamepad size={24} />,
      title: "Gaming Apps",
      desc: "Casual games with smooth 60fps animations."
    }
  ];

  const process = [
    {
      step: "1",
      title: "Discovery",
      desc: "Understanding your requirements and target platforms.",
      icon: <Users size={24} />
    },
    {
      step: "2",
      title: "Design",
      desc: "Creating beautiful UI/UX designs for all platforms.",
      icon: <Palette size={24} />
    },
    {
      step: "3",
      title: "Development",
      desc: "Building your app with clean, maintainable code.",
      icon: <Code size={24} />
    },
    {
      step: "4",
      title: "Testing",
      desc: "Compatible android,ios,windows all plateform .",
      icon: <Shield size={24} />
    },
    {
      step: "5",
      title: "Deployment",
      desc: "Launch on app stores and web platforms.",
      icon: <Rocket size={24} />
    },
    {
      step: "6",
      title: "Support",
      desc: "Ongoing maintenance and updates.",
      icon: <Heart size={24} />
    }
  ];

  const companies = [
    { name: "Google", icon: <Globe size={16} /> },
    { name: "Alibaba", icon: <ShoppingCart size={16} /> },
    { name: "eBay", icon: <ShoppingCart size={16} /> },
    { name: "BMW", icon: <Car size={16} /> },
    { name: "Tencent", icon: <MessageCircle size={16} /> },
    { name: "Groupon", icon: <Percent size={16} /> }
  ];

  const faqs = [
    {
      question: "What is Flutter?",
      answer: "Flutter is Google's UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase."
    },
    {
      question: "How long does Flutter development take?",
      answer: "Development time depends on complexity. Simple apps take 2-3 months, complex apps 4-6 months. Single codebase saves 40% time compared to native."
    },
    {
      question: "Can Flutter apps perform like native?",
      answer: "Yes! Flutter compiles to native ARM code and uses its own rendering engine for 60fps performance, matching native app performance."
    },
    {
      question: "Which platforms does Flutter support?",
      answer: "Flutter supports iOS, Android, web, Windows, macOS, and Linux from a single codebase."
    }
  ];

  return (
    <div className="fd-container">
       <Helmet>
      <title>Flutter App Development | Purvsoft Technologies – Cross-Platform Apps</title>
      <meta name="description" content="Build beautiful cross-platform mobile apps with Purvsoft Technologies's Flutter development services. Single codebase for iOS and Android with native performance." />
      <meta name="keywords" content="Flutter development, cross-platform app, Flutter iOS Android, Flutter developer India, Flutter app company" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href="https://www.purvsoft.com/services/flutter" />
 
      <meta property="og:title" content="Flutter App Development | Purvsoft Technologies" />
      <meta property="og:description" content="Beautiful cross-platform Flutter apps for iOS and Android — single codebase, native performance." />
      <meta property="og:url" content="https://www.purvsoft.com/services/flutter" />
      <meta property="og:image" content="https://www.purvsoft.com/og-image.jpg" />
 
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Flutter Development | Purvsoft Technologies" />
      <meta name="twitter:description" content="Cross-platform Flutter app development by Purvsoft Technologies." />
    </Helmet>
      {/* Hero Section */}
      <section className="fd-hero">
        <div className="fd-wrapper">
          <div className="fd-hero-grid">
            <div className="fd-hero-content">
              <div className="fd-badge">
                <Smartphone size={16} />
                <span>Flutter App Development</span>
              </div>
              <h1>
                Build Beautiful Apps for <br />
                <span className="fd-gradient-text">iOS, Android, Web & Desktop</span>
              </h1>
              <p className="fd-hero-description">
                Create stunning native applications for multiple platforms from a single codebase. 
                Flutter delivers beautiful UIs, fast performance, and exceptional developer experience.
              </p>
              <div className="fd-hero-stats">
                <div className="fd-stat-item">
                  <span className="fd-stat-number">150K+</span>
                  <span className="fd-stat-label">Apps Published</span>
                </div>
                <div className="fd-stat-item">
                  <span className="fd-stat-number">500K+</span>
                  <span className="fd-stat-label">Developers</span>
                </div>
                <div className="fd-stat-item">
                  <span className="fd-stat-number">4.9</span>
                  <span className="fd-stat-label">Developer Rating</span>
                </div>
              </div>
              <div className="fd-hero-buttons">
                <a href="#form" className="fd-btn-primary">
                  Contact Us <ArrowRight size={18} />
                </a>
              </div>
            </div>
            <div className="fd-hero-visual">
              <div className="fd-device-mockup">
                <div className="fd-phone">
                  <div className="fd-phone-notch"></div>
                  <div className="fd-phone-screen">
                    <div className="fd-app-header">
                      <span className="fd-app-time">9:41</span>
                      <div className="fd-app-icons">
                        <Wifi size={12} />
                        <Battery size={12} />
                      </div>
                    </div>
                    <div className="fd-app-content">
                      <div className="fd-app-card">
                        <div className="fd-card-icon blue"></div>
                        <div>
                          <div className="fd-card-title"></div>
                          <div className="fd-card-subtitle"></div>
                        </div>
                      </div>
                      <div className="fd-app-card">
                        <div className="fd-card-icon green"></div>
                        <div>
                          <div className="fd-card-title"></div>
                          <div className="fd-card-subtitle"></div>
                        </div>
                      </div>
                      <div className="fd-app-card">
                        <div className="fd-card-icon purple"></div>
                        <div>
                          <div className="fd-card-title"></div>
                          <div className="fd-card-subtitle"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="fd-platform-badges">
                  <span className="fd-platform-badge apple">
                    <Apple size={14} /> iOS
                  </span>
                  <span className="fd-platform-badge android">
                    <Smartphone size={14} /> Android
                  </span>
                  <span className="fd-platform-badge web">
                    <Globe size={14} /> Web
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Support Section */}
      <section className="fd-platforms">
        <div className="fd-wrapper">
          <div className="fd-platforms-grid">
            {platforms.map((platform, index) => (
              <div key={index} className="fd-platform-card">
                <div className="fd-platform-icon" style={{ color: platform.color }}>
                  {platform.icon}
                </div>
                <span className="fd-platform-name">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="fd-features">
        <div className="fd-wrapper">
          <div className="fd-section-header">
            <h6 className="fd-section-subtitle">Why Flutter</h6>
            <h2 className="fd-section-title">
              Powerful Features for <span className="fd-gradient-text">Modern App Development</span>
            </h2>
            <p className="fd-section-description">
              Flutter provides everything you need to build beautiful, high-performance apps.
            </p>
          </div>

          <div className="fd-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="fd-feature-card">
                <div className="fd-feature-icon">{feature.icon}</div>
                <h3 className="fd-feature-title">{feature.title}</h3>
                <p className="fd-feature-description">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="fd-benefits">
        <div className="fd-wrapper">
          <div className="fd-section-header">
            <h6 className="fd-section-subtitle">Benefits</h6>
            <h2 className="fd-section-title">
              Why Businesses Choose <span className="fd-gradient-text">Flutter</span>
            </h2>
          </div>

          <div className="fd-benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="fd-benefit-card">
                <div className="fd-benefit-icon">{benefit.icon}</div>
                <h3 className="fd-benefit-title">{benefit.title}</h3>
                <p className="fd-benefit-description">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="fd-use-cases">
        <div className="fd-wrapper">
          <div className="fd-section-header">
            <h6 className="fd-section-subtitle">Use Cases</h6>
            <h2 className="fd-section-title">
              Perfect for <span className="fd-gradient-text">Every Type of App</span>
            </h2>
            <p className="fd-section-description">
              Flutter is versatile enough for any application type.
            </p>
          </div>

          <div className="fd-use-cases-grid">
            {useCases.map((useCase, index) => (
              <div key={index} className="fd-use-case-card">
                <div className="fd-use-case-icon">{useCase.icon}</div>
                <h3 className="fd-use-case-title">{useCase.title}</h3>
                <p className="fd-use-case-description">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="fd-process">
        <div className="fd-wrapper">
          <div className="fd-section-header">
            <h6 className="fd-section-subtitle">Our Process</h6>
            <h2 className="fd-section-title">
              How We Build <span className="fd-gradient-text">Your Flutter App</span>
            </h2>
            <p className="fd-section-description">
              A streamlined process that delivers quality apps on time.
            </p>
          </div>

          <div className="fd-process-grid">
            {process.map((item, index) => (
              <div key={index} className="fd-process-card">
                <div className="fd-process-number">{item.step}</div>
                <div className="fd-process-icon">{item.icon}</div>
                <h3 className="fd-process-title">{item.title}</h3>
                <p className="fd-process-description">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="fd-trusted">
        <div className="fd-wrapper">
          <h3 className="fd-trusted-title">Trusted by companies worldwide</h3>
          <div className="fd-trusted-grid">
            {companies.map((company, index) => (
              <div key={index} className="fd-trusted-item">
                {company.icon}
                <span>{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="fd-faq">
        <div className="fd-wrapper">
          <div className="fd-section-header">
            <h6 className="fd-section-subtitle">FAQ</h6>
            <h2 className="fd-section-title">
              Frequently Asked <span className="fd-gradient-text">Questions</span>
            </h2>
          </div>

          <div className="fd-faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="fd-faq-card">
                <h3 className="fd-faq-question">{faq.question}</h3>
                <p className="fd-faq-answer">{faq.answer}</p>
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

export default FlutterDevelopment;