import React from 'react';
import {
  Code,
  Zap,
  Shield,
  Database,
  Globe,
  Users,
  Star,
  Rocket,
  ArrowRight,
  Clock,
  TrendingUp,
  Award,
  Heart,
  ShoppingCart,
  Mail,
  Briefcase,
  Key,
  Bell,
  FileText,
  RefreshCw,
  Smartphone,
  DollarSign
} from 'lucide-react';
import '../../css/LaravelDevelopment.css';
import { Helmet} from 'react-helmet-async';
import Form from "../../config/Form";

const LaravelDevelopment = () => {
  const features = [
    {
      icon: <Zap size={28} />,
      title: "Blazing Fast Performance",
      desc: "Optimized for speed with built-in caching, queue management, and efficient query handling."
    },
    {
      icon: <Shield size={28} />,
      title: "Security First",
      desc: "Built-in protection against SQL injection, XSS, CSRF, and other web vulnerabilities."
    },
    {
      icon: <Database size={28} />,
      title: "Eloquent ORM",
      desc: "Beautiful, simple ActiveRecord implementation for working with your database."
    },
    {
      icon: <Code size={28} />,
      title: "Artisan Console",
      desc: "Powerful command-line tools for migrations, testing, and task automation."
    },
    {
      icon: <Mail size={28} />,
      title: "Mail Integration",
      desc: "Clean, simple API over the popular SwiftMailer library with drivers for Mailgun, SES, and more."
    },
    {
      icon: <Globe size={28} />,
      title: "RESTful Routing",
      desc: "Expressive, elegant routing syntax with resource controllers and API support."
    }
  ];
  const scrollToForm = () => {
  document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
};

  const benefits = [
    {
      icon: <Rocket size={24} />,
      title: "Rapid Development",
      desc: "Build applications 2x faster with built-in tools and elegant syntax."
    },
    {
      icon: <DollarSign size={24} />,
      title: "Cost Effective",
      desc: "Open source framework with extensive ecosystem, reducing development costs."
    },
    {
      icon: <Shield size={24} />,
      title: "Enterprise Security",
      desc: "Bank-level security features trusted by thousands of businesses."
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Scalable Architecture",
      desc: "Handle millions of users with caching, queues, and database optimization."
    },
    {
      icon: <Users size={24} />,
      title: "Large Community",
      desc: "Extensive documentation, packages, and community support."
    },
    {
      icon: <Heart size={24} />,
      title: "Long-term Support",
      desc: "Regular updates and LTS versions for enterprise stability."
    }
  ];

  const modules = [
    {
      icon: <Users size={24} />,
      title: "Authentication",
      desc: "Complete auth system with registration, login, password reset, and email verification."
    },
    {
      icon: <Key size={24} />,
      title: "Authorization",
      desc: "Fine-grained access control with gates and policies."
    },
    {
      icon: <Bell size={24} />,
      title: "Notifications",
      desc: "Send notifications across email, SMS, Slack, and database."
    },
    {
      icon: <RefreshCw size={24} />,
      title: "Queues & Jobs",
      desc: "Background job processing with Redis, Beanstalk, or database drivers."
    },
    {
      icon: <FileText size={24} />,
      title: "File Storage",
      desc: "Unified API for local, S3, and cloud storage systems."
    },
    {
      icon: <Clock size={24} />,
      title: "Task Scheduling",
      desc: "Fluent cron-style task scheduling within the framework."
    },
    {
      icon: <Database size={24} />,
      title: "Migrations",
      desc: "Version control for your database schema with easy rollbacks."
    },
    {
      icon: <Globe size={24} />,
      title: "API Development",
      desc: "Built-in API support with rate limiting and token authentication."
    },
    {
      icon: <Code size={24} />,
      title: "Testing",
      desc: "PHPUnit integration with helper methods for application testing."
    }
  ];

  const useCases = [
    {
      icon: <ShoppingCart size={24} />,
      title: "E-commerce Platforms",
      desc: "Build robust online stores with inventory, payments, and order management."
    },
    {
      icon: <Users size={24} />,
      title: "CRM Systems",
      desc: "Customer relationship management with contact tracking and analytics."
    },
    {
      icon: <FileText size={24} />,
      title: "Content Management",
      desc: "Custom CMS solutions for blogs, news sites, and publications."
    },
    {
      icon: <Briefcase size={24} />,
      title: "Enterprise Portals",
      desc: "Internal tools, dashboards, and business applications."
    },
    {
      icon: <Globe size={24} />,
      title: "SaaS Applications",
      desc: "Multi-tenant applications with subscription management."
    },
    {
      icon: <Smartphone size={24} />,
      title: "RESTful APIs",
      desc: "Backend APIs for mobile apps and single-page applications."
    }
  ];

  const process = [
    {
      step: "1",
      title: "Requirements Analysis",
      desc: "Understanding your business needs and technical requirements.",
      icon: <Users size={24} />
    },
    {
      step: "2",
      title: "Database Design",
      desc: "Schema design, relationships, and optimization planning.",
      icon: <Database size={24} />
    },
    {
      step: "3",
      title: "Development",
      desc: "Agile development with regular sprints and code reviews.",
      icon: <Code size={24} />
    },
    {
      step: "4",
      title: "Testing",
      desc: "Unit testing, integration testing, and QA processes.",
      icon: <Shield size={24} />
    },
    {
      step: "5",
      title: "Deployment",
      desc: "Server setup, configuration, and deployment automation.",
      icon: <Rocket size={24} />
    },
    {
      step: "6",
      title: "Maintenance",
      desc: "Ongoing support, updates, and performance monitoring.",
      icon: <Heart size={24} />
    }
  ];

  const stats = [
    { icon: <Star size={24} />, value: "70K+", label: "GitHub Stars" },
    { icon: <Users size={24} />, value: "1M+", label: "Developers Worldwide" },
    { icon: <Award size={24} />, value: "100K+", label: "Sites Built" },
    { icon: <Globe size={24} />, value: "4.9", label: "Developer Rating" }
  ];

  const faqs = [
    {
      question: "What is Laravel and why should I use it?",
      answer: "Laravel is a PHP web application framework with expressive, elegant syntax. It provides tools and resources to build modern PHP applications faster, more securely, and with better code organization."
    },
    {
      question: "Is Laravel good for large enterprise applications?",
      answer: "Yes! Laravel is highly scalable and used by many enterprise companies worldwide. It handles millions of users with caching, queues, database optimization, and horizontal scaling capabilities."
    },
    {
      question: "How long does Laravel development take?",
      answer: "Timeline varies by complexity. Simple CRUD applications take 2-3 weeks, while complex enterprise systems with custom features take 2-4 months. We provide detailed timelines during consultation."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive maintenance packages including security updates, bug fixes, performance optimization, and feature enhancements for your Laravel applications."
    },
    {
      question: "Are there Laravel jobs available in Ahmedabad?",
      answer: "Yes, Purvsoft Technologies regularly hires Laravel developers in Ahmedabad. We have openings for Laravel fresher jobs, PHP Laravel developer jobs, senior Laravel developer positions, remote Laravel jobs, and work from home opportunities."
    }
  ];

  // JSON-LD Structured Data for Laravel Development Services
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Laravel Development Services in Ahmedabad",
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
    "description": "Professional Laravel PHP development services in Ahmedabad, India. Build secure, scalable, and high-performance web applications, REST APIs, and backend systems.",
    "serviceType": ["Laravel Web Development", "REST API Development", "Laravel E-commerce", "SaaS Development", "Laravel Migration"],
    "areaServed": "Ahmedabad, Gujarat, India",
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
      "@id": "https://www.purvsoft.com/services/laravel"
    }
  };

  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Purvsoft Technologies",
    "url": "https://www.purvsoft.com",
    "logo": "https://www.purvsoft.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "addressCountry": "India"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["English", "Hindi"]
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
        "name": "Laravel Development",
        "item": "https://www.purvsoft.com/services/laravel"
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
    <div className="lv-container">
      <Helmet>
        {/* Primary Meta Tags with Laravel Job Keywords */}
        <title>Laravel Development Company in Ahmedabad | PHP Laravel Jobs | Purvsoft</title>
        <meta name="title" content="Laravel Development Company in Ahmedabad | PHP Laravel Jobs | Purvsoft" />
        <meta name="description" content="Purvsoft Technologies is a leading Laravel development company in Ahmedabad, Gujarat. We offer Laravel development services and hire Laravel developers for full-time, part-time, remote, work from home, contract, internship, and fresher positions. Apply for PHP Laravel developer jobs today." />
        <meta name="keywords" content="laravel development company in ahmedabad, laravel jobs in ahmedabad remote, laravel jobs in ahmedabad full time, laravel jobs in ahmedabad part time, laravel jobs in ahmedabad contract, laravel jobs in ahmedabad internship, laravel jobs in ahmedabad work from home, laravel developer jobs in ahmedabad for freshers, php laravel jobs in ahmedabad, senior laravel developer jobs, laravel developer in ahmedabad, laravel developer jobs remote, php laravel developer jobs in ahmedabad, laravel fresher jobs in ahmedabad, best laravel development company in ahmedabad, top laravel development company in ahmedabad, Purvsoft Laravel" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Purvsoft Technologies" />
        <meta name="language" content="English" />
        
        {/* Canonical URL - Critical for fixing duplicate issues */}
        <link rel="canonical" href="https://www.purvsoft.com/services/laravel" />
        
        {/* Alternate language versions */}
        <link rel="alternate" href="https://www.purvsoft.com/services/laravel" hrefLang="x-default" />
        
        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.purvsoft.com/services/laravel" />
        <meta property="og:title" content="Laravel Development Company in Ahmedabad | PHP Laravel Jobs | Purvsoft" />
        <meta property="og:description" content="Looking for Laravel jobs in Ahmedabad? Purvsoft Technologies is a top Laravel development company hiring Laravel developers for full-time, part-time, remote, work from home, contract, and internship positions. Apply now!" />
        <meta property="og:image" content="https://www.purvsoft.com/og-laravel-development.jpg" />
        <meta property="og:image:alt" content="Laravel Development Services & Laravel Jobs in Ahmedabad" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Purvsoft Technologies" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.purvsoft.com/services/laravel" />
        <meta name="twitter:title" content="Laravel Development Company in Ahmedabad | Purvsoft" />
        <meta name="twitter:description" content="Find Laravel developer jobs in Ahmedabad. Full-time, part-time, remote, work from home, contract, and internship positions available at Purvsoft Technologies." />
        <meta name="twitter:image" content="https://www.purvsoft.com/twitter-laravel-development.jpg" />
        <meta name="twitter:image:alt" content="Laravel Development Services" />
        
        {/* Verification tags - Google Search Console */}
        <meta name="google-site-verification" content="MjMKilzhOmqr6Txi7pbjACF6g_hSt-B6Ej496yJyrH0" />
        <meta name="msvalidate.01" content="AD0DF443696FB452E952416667F1A8DC" />
        
        {/* Geographic Meta Tags - Ahmedabad, Gujarat (FIXED) */}
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Ahmedabad, Gujarat, India" />
        <meta name="geo.position" content="23.0225;72.5714" />
        <meta name="ICBM" content="23.0225, 72.5714" />
        
        {/* Mobile Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="theme-color" content="#2563eb" />
        
      </Helmet>

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationStructuredData)}
      </script>
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
      <section className="lv-hero" aria-label="Laravel Development Hero Section">
        <div className="lv-wrapper">
          <div className="lv-hero-grid">
            <div className="lv-hero-content" data-aos="fade-right">
              <div className="lv-badge">
                <Code size={16} />
                <span>Laravel Development Company in Ahmedabad</span>
              </div>
              <h1>
                Build Powerful Web Applications with <br />
                <span className="lv-brand-gradient">Laravel PHP Framework</span>
              </h1>
              <p className="lv-hero-description">
                Laravel is a web application framework with expressive, elegant syntax. 
                We build secure, scalable, and high-performance PHP applications that grow with your business.
                Based in Ahmedabad, Gujarat, India.
              </p>
              <div className="lv-hero-stats">
                <div className="lv-stat-item" data-aos="fade-up" data-aos-delay="0">
                  <span className="lv-stat-number">70K+</span>
                  <span className="lv-stat-label">GitHub Stars</span>
                </div>
                <div className="lv-stat-item" data-aos="fade-up" data-aos-delay="50">
                  <span className="lv-stat-number">1M+</span>
                  <span className="lv-stat-label">Developers Worldwide</span>
                </div>
                <div className="lv-stat-item" data-aos="fade-up" data-aos-delay="100">
                  <span className="lv-stat-number">4.9</span>
                  <span className="lv-stat-label">Client Rating</span>
                </div>
              </div>
              <div className="lv-hero-buttons">
                <button
                  className="lv-btn-primary"
                  onClick={scrollToForm}
                  aria-label="Contact us for Laravel development"
                >
                  Hire Laravel Developer in Ahmedabad <ArrowRight size={18} />
                </button>
              </div>
            </div>
            <div className="lv-hero-visual" data-aos="fade-left">
              <div className="lv-code-block">
                <div className="lv-code-header">
                  <span className="lv-dot lv-dot-red"></span>
                  <span className="lv-dot lv-dot-yellow"></span>
                  <span className="lv-dot lv-dot-green"></span>
                  <span className="lv-filename">web.php</span>
                </div>
                <div className="lv-code-content">
                  <div className="lv-line">
                    <span className="lv-comment">Route definition</span>
                  </div>
                  <div className="lv-line">
                    <span className="lv-keyword">Route</span>::<span className="lv-function">get</span>(<span className="lv-string">'/'</span>, <span className="lv-keyword">function</span> () {'{'}
                  </div>
                  <div className="lv-line lv-indent">
                    <span className="lv-keyword">return</span> <span className="lv-function">view</span>(<span className="lv-string">'welcome'</span>);
                  </div>
                  <div className="lv-line">{'}'});</div>
                  <div className="lv-line"> </div>
                  <div className="lv-line">
                    <span className="lv-keyword">Route</span>::<span className="lv-function">resource</span>(<span className="lv-string">'posts'</span>, <span className="lv-string">PostController::class</span>);
                  </div>
                  <div className="lv-line"> </div>
                  <div className="lv-line">
                    <span className="lv-keyword">Route</span>::<span className="lv-function">middleware</span>(<span className="lv-string">'auth'</span>)<span className="lv-function">group</span>(<span className="lv-keyword">function</span> () {'{'}
                  </div>
                  <div className="lv-line lv-indent">
                    <span className="lv-keyword">Route</span>::<span className="lv-function">get</span>(<span className="lv-string">'/dashboard'</span>, [<span className="lv-string">DashboardController::class</span>, <span className="lv-string">'index'</span>]);
                  </div>
                  <div className="lv-line">{'}'});</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="lv-stats" aria-label="Laravel Statistics">
        <div className="lv-wrapper">
          <div className="lv-stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="lv-stat-card" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="lv-stat-icon" aria-hidden="true">{stat.icon}</div>
                <h3 className="lv-stat-value">{stat.value}</h3>
                <p className="lv-stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="lv-features" aria-label="Laravel Key Features">
        <div className="lv-wrapper">
          <div className="lv-section-header">
            <p className="lv-section-subtitle">Why Laravel</p>
            <h2 className="lv-section-title">
              Powerful Features for <span className="lv-brand-gradient">Modern PHP Development</span>
            </h2>
            <p className="lv-section-description">
              Laravel provides elegant syntax and powerful tools for building robust web applications.
            </p>
          </div>

          <div className="lv-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="lv-feature-card" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="lv-feature-icon" aria-hidden="true">{feature.icon}</div>
                <h3 className="lv-feature-title">{feature.title}</h3>
                <p className="lv-feature-description">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="lv-modules" aria-label="Laravel Built-in Modules">
        <div className="lv-wrapper">
          <div className="lv-section-header">
            <p className="lv-section-subtitle">Built-in Modules</p>
            <h2 className="lv-section-title">
              Everything You Need <span className="lv-brand-gradient">Built-in</span>
            </h2>
            <p className="lv-section-description">
              Laravel comes with comprehensive built-in modules for common web development tasks.
            </p>
          </div>

          <div className="lv-modules-grid">
            {modules.map((module, index) => (
              <div key={index} className="lv-module-card" data-aos="fade-up" data-aos-delay={index * 30}>
                <div className="lv-module-icon" aria-hidden="true">{module.icon}</div>
                <div>
                  <h3 className="lv-module-title">{module.title}</h3>
                  <p className="lv-module-description">{module.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="lv-benefits" aria-label="Benefits of Laravel Development">
        <div className="lv-wrapper">
          <div className="lv-section-header">
            <p className="lv-section-subtitle">Business Benefits</p>
            <h2 className="lv-section-title">
              Why Businesses Choose <span className="lv-brand-gradient">Laravel</span>
            </h2>
            <p className="lv-section-description">
              Discover the advantages that make Laravel the top choice for PHP development
            </p>
          </div>

          <div className="lv-benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="lv-benefit-card" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="lv-benefit-icon" aria-hidden="true">{benefit.icon}</div>
                <h3 className="lv-benefit-title">{benefit.title}</h3>
                <p className="lv-benefit-description">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="lv-use-cases" aria-label="Laravel Use Cases">
        <div className="lv-wrapper">
          <div className="lv-section-header">
            <p className="lv-section-subtitle">Use Cases</p>
            <h2 className="lv-section-title">
              Perfect for <span className="lv-brand-gradient">Every Application</span>
            </h2>
            <p className="lv-section-description">
              Laravel is versatile enough for any web application you need to build.
            </p>
          </div>

          <div className="lv-use-cases-grid">
            {useCases.map((useCase, index) => (
              <div key={index} className="lv-use-case-card" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="lv-use-case-icon" aria-hidden="true">{useCase.icon}</div>
                <h3 className="lv-use-case-title">{useCase.title}</h3>
                <p className="lv-use-case-description">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="lv-process" aria-label="Laravel Development Process">
        <div className="lv-wrapper">
          <div className="lv-section-header">
            <p className="lv-section-subtitle">Our Process</p>
            <h2 className="lv-section-title">
              How We Build <span className="lv-brand-gradient">Your Laravel Application</span>
            </h2>
            <p className="lv-section-description">
              A proven methodology that delivers quality applications on time and within budget.
            </p>
          </div>

          <div className="lv-process-grid">
            {process.map((item, index) => (
              <div key={index} className="lv-process-card" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="lv-process-number">{item.step}</div>
                <div className="lv-process-icon" aria-hidden="true">{item.icon}</div>
                <h3 className="lv-process-title">{item.title}</h3>
                <p className="lv-process-description">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="lv-faq" aria-label="Laravel FAQs">
        <div className="lv-wrapper">
          <div className="lv-section-header">
            <p className="lv-section-subtitle">FAQ</p>
            <h2 className="lv-section-title">
              Frequently Asked <span className="lv-brand-gradient">Questions</span>
            </h2>
            <p className="lv-section-description">
              Get answers to common questions about Laravel development and jobs in Ahmedabad
            </p>
          </div>

          <div className="lv-faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="lv-faq-card" data-aos="fade-up" data-aos-delay={index * 50} itemScope itemType="https://schema.org/Question">
                <h3 className="lv-faq-question" itemProp="name">{faq.question}</h3>
                <div className="lv-faq-answer" itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
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

export default LaravelDevelopment;