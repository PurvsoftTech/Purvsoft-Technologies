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
  Monitor,
  Apple,
  Facebook,
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
import { Helmet } from 'react-helmet-async';
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
      desc: "Google's long-term commitment ensures continuous improvement and support."
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
      desc: "Compatible Android, iOS, and Windows platform testing.",
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
      question: "What is Flutter and why should I use it?",
      answer: "Flutter is Google's UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase. It saves development time and costs while delivering native performance."
    },
    {
      question: "How long does Flutter app development take?",
      answer: "Development time depends on complexity. Simple apps take 2-3 months, complex apps 4-6 months. Single codebase saves approximately 40% time compared to native iOS and Android development."
    },
    {
      question: "Can Flutter apps perform like native apps?",
      answer: "Yes! Flutter compiles to native ARM code and uses its own rendering engine for 60fps performance, matching or exceeding native app performance in many cases."
    },
    {
      question: "Which platforms does Flutter support?",
      answer: "Flutter supports iOS, Android, web (Chrome, Safari, Edge), Windows, macOS, and Linux from a single codebase."
    }
  ];

  // ✅ Fixed: addressCountry "India" → "IN"
  // ✅ Fixed: mainEntityOfPage URL → /flutter-development (matches sitemap & canonical)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Flutter App Development Services",
    "provider": {
      "@type": "Organization",
      "name": "Purvsoft Technologies",
      "url": "https://www.purvsoft.com",
      "logo": "https://www.purvsoft.com/logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sv Square, 333, Near GST Road, New Ranip",
        "addressLocality": "Ahmedabad",
        "addressRegion": "Gujarat",
        "postalCode": "382470",
        "addressCountry": "IN"
      }
    },
    "description": "Professional Flutter app development services for iOS, Android, Web, and Desktop. Build beautiful cross-platform apps with native performance from a single codebase.",
    "serviceType": ["Flutter App Development", "Cross-Platform Mobile Apps", "iOS & Android Development", "Flutter Web Development", "Flutter Desktop Apps"],
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
      // ✅ Fixed: was /services/flutter — corrected to match sitemap & canonical URL
      "@id": "https://www.purvsoft.com/services/flutter-development"
    }
  };

  // ✅ Fixed: breadcrumb last item URL → /flutter-development
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
        "name": "Flutter Development",
        "item": "https://www.purvsoft.com/services/flutter-development"
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
const scrollToForm = () => {
  document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
};
  return (
    <main className="fd-container" role="main">
      <Helmet>
        {/* ✅ Removed: redundant <meta name="title"> */}
        <title>Flutter App Development Company | Cross-Platform Mobile Apps | Purvsoft</title>
        <meta name="description" content="Purvsoft Technologies is a leading Flutter app development company. Build beautiful cross-platform iOS and Android apps with native performance from a single codebase. Hire Flutter experts today." />

        {/* ✅ Cleaned: trimmed keyword list, removed duplicates and repetitive phrases */}
        <meta name="keywords" content="Flutter development company, cross-platform app development, Flutter iOS Android, Flutter developer India, hire Flutter developer, Flutter app development Ahmedabad, Flutter web development, Flutter desktop apps, flutter app development company Ahmedabad, hire flutter developer India, software development company Ahmedabad, Purvsoft Flutter" />

        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        {/* ✅ Added: googlebot directive (was missing) */}
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Purvsoft Technologies" />
        <meta name="language" content="English" />
        {/* ✅ Removed: revisit-after — deprecated */}

        {/* ✅ Fixed: canonical URL was /services/flutter — corrected to /services/flutter-development */}
        <link rel="canonical" href="https://www.purvsoft.com/services/flutter-development" />
        {/* ✅ Removed: hreflang alternate — pointless with only one language version */}

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        {/* ✅ Fixed: OG URL was /services/flutter */}
        <meta property="og:url" content="https://www.purvsoft.com/services/flutter-development" />
        <meta property="og:title" content="Flutter App Development | Cross-Platform iOS & Android Apps | Purvsoft" />
        <meta property="og:description" content="Build beautiful cross-platform mobile apps with Purvsoft Technologies's Flutter development services. Single codebase for iOS and Android with native performance." />
        <meta property="og:image" content="https://www.purvsoft.com/og-flutter-development.jpg" />
        <meta property="og:image:alt" content="Flutter App Development Services - Cross-Platform Mobile Apps by Purvsoft" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Purvsoft Technologies" />
        {/* ✅ Fixed: en_US → en_IN */}
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        {/* ✅ Removed: twitter:url — non-standard tag */}
        {/* ✅ Added: twitter:site and twitter:creator (were missing) */}
        <meta name="twitter:site" content="@purvsoft" />
        <meta name="twitter:creator" content="@purvsoft" />
        <meta name="twitter:title" content="Flutter App Development | Purvsoft Technologies" />
        <meta name="twitter:description" content="Cross-platform Flutter app development for iOS, Android, Web, and Desktop. Single codebase, native performance." />
        {/* ✅ Fixed: unified twitter image with OG image */}
        <meta name="twitter:image" content="https://www.purvsoft.com/og-flutter-development.jpg" />
        <meta name="twitter:image:alt" content="Flutter App Development Services - Cross-Platform Mobile Apps by Purvsoft" />

        {/* Verification */}
        <meta name="google-site-verification" content="MjMKilzhOmqr6Txi7pbjACF6g_hSt-B6Ej496yJyrH0" />
        <meta name="msvalidate.01" content="AD0DF443696FB452E952416667F1A8DC" />

        {/* Geo Tags */}
        <meta name="geo.region" content="IN-GJ" />
        {/* ✅ Fixed: was just "Ahmedabad" */}
        <meta name="geo.placename" content="Ahmedabad, Gujarat, India" />
        <meta name="geo.position" content="23.0225;72.5714" />
        <meta name="ICBM" content="23.0225, 72.5714" />

        {/* ✅ JSON-LD moved inside Helmet — was incorrectly placed in JSX body */}
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqStructuredData)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="fd-hero" aria-label="Flutter Development Hero Section">
        <div className="fd-wrapper">
          <div className="fd-hero-grid">
            <div className="fd-hero-content" data-aos="fade-right">
              <div className="fd-badge">
                <Smartphone size={16} aria-hidden="true" />
                <span>Flutter App Development Experts</span>
              </div>
              <h1>
                Build Beautiful Cross-Platform Apps with <br />
                <span className="fd-brand-gradient">Flutter Development</span>
              </h1>
              <p className="fd-hero-description">
                Create stunning native applications for iOS, Android, Web, and Desktop from a single codebase.
                Flutter delivers beautiful UIs, 60fps performance, and exceptional developer experience.
              </p>
              <div className="fd-hero-buttons">
                <button
                className="fd-btn-primary"
                onClick={scrollToForm}
                aria-label="Contact us for Flutter development"
              >
                Start Your Flutter Project <ArrowRight size={18} />
              </button>
              </div>
            </div>

            <div className="fd-hero-visual" data-aos="fade-left" aria-hidden="true">
              <div className="fd-device-mockup">
                <div className="fd-phone">
                  <div className="fd-phone-notch"></div>
                  <div className="fd-phone-screen">
                    <div className="fd-app-header">
                      <span className="fd-app-time">9:41</span>
                      <div className="fd-app-icons">
                        <Wifi size={12} aria-hidden="true" />
                        <Battery size={12} aria-hidden="true" />
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
                    <Apple size={14} aria-hidden="true" /> iOS
                  </span>
                  <span className="fd-platform-badge android">
                    <Smartphone size={14} aria-hidden="true" /> Android
                  </span>
                  <span className="fd-platform-badge web">
                    <Globe size={14} aria-hidden="true" /> Web
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Support */}
      <section className="fd-platforms" aria-label="Flutter Supported Platforms">
        <div className="fd-wrapper">
          <div className="fd-platforms-grid">
            {platforms.map((platform, index) => (
              <div key={index} className="fd-platform-card" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="fd-platform-icon" style={{ color: platform.color }} aria-hidden="true">
                  {platform.icon}
                </div>
                <span className="fd-platform-name">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="fd-features" aria-label="Flutter Key Features">
        <div className="fd-wrapper">
          <div className="fd-section-header">
            <p className="fd-section-subtitle">Why Flutter</p>
            <h2 className="fd-section-title">
              Powerful Features for <span className="fd-brand-gradient">Modern App Development</span>
            </h2>
            <p className="fd-section-description">
              Flutter provides everything you need to build beautiful, high-performance cross-platform apps.
            </p>
          </div>
          <div className="fd-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="fd-feature-card" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="fd-feature-icon" aria-hidden="true">{feature.icon}</div>
                <h3 className="fd-feature-title">{feature.title}</h3>
                <p className="fd-feature-description">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="fd-benefits" aria-label="Benefits of Flutter Development">
        <div className="fd-wrapper">
          <div className="fd-section-header">
            <p className="fd-section-subtitle">Business Benefits</p>
            <h2 className="fd-section-title">
              Why Businesses Choose <span className="fd-brand-gradient">Flutter</span>
            </h2>
            <p className="fd-section-description">
              Discover the advantages that make Flutter the top choice for cross-platform development
            </p>
          </div>
          <div className="fd-benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="fd-benefit-card" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="fd-benefit-icon" aria-hidden="true">{benefit.icon}</div>
                <h3 className="fd-benefit-title">{benefit.title}</h3>
                <p className="fd-benefit-description">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="fd-use-cases" aria-label="Flutter App Use Cases">
        <div className="fd-wrapper">
          <div className="fd-section-header">
            <p className="fd-section-subtitle">Use Cases</p>
            <h2 className="fd-section-title">
              Perfect for <span className="fd-brand-gradient">Every Type of App</span>
            </h2>
            <p className="fd-section-description">
              Flutter is versatile enough for any application type you need to build.
            </p>
          </div>
          <div className="fd-use-cases-grid">
            {useCases.map((useCase, index) => (
              <div key={index} className="fd-use-case-card" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="fd-use-case-icon" aria-hidden="true">{useCase.icon}</div>
                <h3 className="fd-use-case-title">{useCase.title}</h3>
                <p className="fd-use-case-description">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="fd-process" aria-label="Flutter App Development Process">
        <div className="fd-wrapper">
          <div className="fd-section-header">
            <p className="fd-section-subtitle">Our Process</p>
            <h2 className="fd-section-title">
              How We Build <span className="fd-brand-gradient">Your Flutter App</span>
            </h2>
            <p className="fd-section-description">
              A streamlined process that delivers quality cross-platform apps on time and within budget.
            </p>
          </div>
          <div className="fd-process-grid">
            {process.map((item, index) => (
              <div key={index} className="fd-process-card" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="fd-process-number">{item.step}</div>
                <div className="fd-process-icon" aria-hidden="true">{item.icon}</div>
                <h3 className="fd-process-title">{item.title}</h3>
                <p className="fd-process-description">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="fd-trusted" aria-label="Companies Trusting Flutter">
        <div className="fd-wrapper">
          <h2 className="fd-trusted-title">Trusted by leading companies worldwide</h2>
          <div className="fd-trusted-grid">
            {companies.map((company, index) => (
              <div key={index} className="fd-trusted-item" data-aos="zoom-in" data-aos-delay={index * 30}>
                <span aria-hidden="true">{company.icon}</span>
                <span>{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="fd-faq" aria-label="Flutter Development FAQs">
        <div className="fd-wrapper">
          <div className="fd-section-header">
            <p className="fd-section-subtitle">FAQ</p>
            <h2 className="fd-section-title">
              Frequently Asked <span className="fd-brand-gradient">Questions</span>
            </h2>
            <p className="fd-section-description">
              Get answers to common questions about Flutter app development
            </p>
          </div>
          <div className="fd-faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="fd-faq-card" data-aos="fade-up" data-aos-delay={index * 50} itemScope itemType="https://schema.org/Question">
                <h3 className="fd-faq-question" itemProp="name">{faq.question}</h3>
                <div className="fd-faq-answer" itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                  <p itemProp="text">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section id="form" aria-label="Contact Purvsoft for Flutter Development">
        <Form />
      </section>
    </main>
  );
};

export default FlutterDevelopment;