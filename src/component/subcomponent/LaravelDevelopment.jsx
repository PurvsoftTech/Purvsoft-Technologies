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
      cnt: "Regular updates and LTS versions for enterprise stability."
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
    { icon: <Users size={24} />, value: "1M+", label: "Developers" },
    { icon: <Award size={24} />, value: "100K+", label: "Sites Built" },
    { icon: <Globe size={24} />, value: "4.9", label: "Developer Rating" }
  ];

  const faqs = [
    {
      question: "What is Laravel?",
      answer: "Laravel is a PHP web application framework with expressive, elegant syntax. It provides tools and resources to build modern PHP applications."
    },
    {
      question: "Is Laravel good for large applications?",
      answer: "Yes! Laravel is highly scalable and used by many enterprise companies. It handles millions of users with caching, queues, and optimization features."
    },
    {
      question: "How long does Laravel development take?",
      answer: "Timeline varies by complexity. Simple CRUD apps take 2-3 weeks, complex enterprise systems take 2-4 months."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer maintenance packages including updates, security patches, and performance optimization."
    }
  ];

  return (
    <div className="lv-container">
      <Helmet>
      <title>Laravel Development Services | Purvsoft Technologies</title>
      <meta name="description" content="Purvsoft Technologies offers expert Laravel PHP development for web applications, REST APIs, and backend systems. Secure, scalable, and fast Laravel solutions." />
      <meta name="keywords" content="Laravel development, PHP Laravel, Laravel web app, REST API, Laravel developer India, backend development" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href="https://www.purvsoft.com/services/laravel" />
 
      <meta property="og:title" content="Laravel Development Services | Purvsoft Technologies" />
      <meta property="og:description" content="Expert Laravel PHP development — web apps, REST APIs, and backend systems." />
      <meta property="og:url" content="https://www.purvsoft.com/services/laravel" />
      <meta property="og:image" content="https://www.purvsoft.com/og-image.jpg" />
 
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Laravel Development | Purvsoft Technologies" />
      <meta name="twitter:description" content="Secure and scalable Laravel development by Purvsoft Technologies." />
    </Helmet>
      {/* Hero Section */}
      <section className="lv-hero">
        <div className="lv-wrapper">
          <div className="lv-hero-grid">
            <div className="lv-hero-content">
              <div className="lv-badge">
                <Code size={16} />
                <span>Laravel Development</span>
              </div>
              <h1>
                Build Powerful Web Applications with <br />
                <span className="lv-gradient-text">Laravel Framework</span>
              </h1>
              <p className="lv-hero-description">
                Laravel is a web application framework with expressive, elegant syntax. 
                We believe development must be an enjoyable, creative experience to be truly fulfilling.
              </p>
              <div className="lv-hero-stats">
                <div className="lv-stat-item">
                  <span className="lv-stat-number">70K+</span>
                  <span className="lv-stat-label">GitHub Stars</span>
                </div>
                <div className="lv-stat-item">
                  <span className="lv-stat-number">1M+</span>
                  <span className="lv-stat-label">Developers</span>
                </div>
                <div className="lv-stat-item">
                  <span className="lv-stat-number">4.9</span>
                  <span className="lv-stat-label">Rating</span>
                </div>
              </div>
              <div className="lv-hero-buttons">
                <a href="#form" className="lv-btn-primary">
                  Contact Us<ArrowRight size={18} />
                </a>
              </div>
            </div>
            <div className="lv-hero-visual">
              <div className="lv-code-block">
                <div className="lv-code-header">
                  <span className="lv-dot lv-dot-red"></span>
                  <span className="lv-dot lv-dot-yellow"></span>
                  <span className="lv-dot lv-dot-green"></span>
                  <span className="lv-filename">web.php</span>
                </div>
                <div className="lv-code-content">
                  <div className="lv-line">
                    <span className="lv-comment">// Route definition</span>
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
      <section className="lv-stats">
        <div className="lv-wrapper">
          <div className="lv-stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="lv-stat-card">
                <div className="lv-stat-icon">{stat.icon}</div>
                <h3 className="lv-stat-value">{stat.value}</h3>
                <p className="lv-stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="lv-features">
        <div className="lv-wrapper">
          <div className="lv-section-header">
            <h6 className="lv-section-subtitle">Why Laravel</h6>
            <h2 className="lv-section-title">
              Powerful Features for <span className="lv-gradient-text">Modern PHP Development</span>
            </h2>
            <p className="lv-section-description">
              Laravel provides elegant syntax and powerful tools for building robust applications.
            </p>
          </div>

          <div className="lv-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="lv-feature-card">
                <div className="lv-feature-icon">{feature.icon}</div>
                <h3 className="lv-feature-title">{feature.title}</h3>
                <p className="lv-feature-description">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="lv-modules">
        <div className="lv-wrapper">
          <div className="lv-section-header">
            <h6 className="lv-section-subtitle">Built-in Modules</h6>
            <h2 className="lv-section-title">
              Everything You Need <span className="lv-gradient-text">Built-in</span>
            </h2>
            <p className="lv-section-description">
              Laravel comes with comprehensive built-in modules for common web development tasks.
            </p>
          </div>

          <div className="lv-modules-grid">
            {modules.map((module, index) => (
              <div key={index} className="lv-module-card">
                <div className="lv-module-icon">{module.icon}</div>
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
      <section className="lv-benefits">
        <div className="lv-wrapper">
          <div className="lv-section-header">
            <h6 className="lv-section-subtitle">Business Benefits</h6>
            <h2 className="lv-section-title">
              Why Businesses Choose <span className="lv-gradient-text">Laravel</span>
            </h2>
          </div>

          <div className="lv-benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="lv-benefit-card">
                <div className="lv-benefit-icon">{benefit.icon}</div>
                <h3 className="lv-benefit-title">{benefit.title}</h3>
                <p className="lv-benefit-description">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="lv-use-cases">
        <div className="lv-wrapper">
          <div className="lv-section-header">
            <h6 className="lv-section-subtitle">Use Cases</h6>
            <h2 className="lv-section-title">
              Perfect for <span className="lv-gradient-text">Every Application</span>
            </h2>
            <p className="lv-section-description">
              Laravel is versatile enough for any web application.
            </p>
          </div>

          <div className="lv-use-cases-grid">
            {useCases.map((useCase, index) => (
              <div key={index} className="lv-use-case-card">
                <div className="lv-use-case-icon">{useCase.icon}</div>
                <h3 className="lv-use-case-title">{useCase.title}</h3>
                <p className="lv-use-case-description">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="lv-process">
        <div className="lv-wrapper">
          <div className="lv-section-header">
            <h6 className="lv-section-subtitle">Our Process</h6>
            <h2 className="lv-section-title">
              How We Build <span className="lv-gradient-text">Your Laravel Application</span>
            </h2>
            <p className="lv-section-description">
              A proven methodology that delivers quality applications on time.
            </p>
          </div>

          <div className="lv-process-grid">
            {process.map((item, index) => (
              <div key={index} className="lv-process-card">
                <div className="lv-process-number">{item.step}</div>
                <div className="lv-process-icon">{item.icon}</div>
                <h3 className="lv-process-title">{item.title}</h3>
                <p className="lv-process-description">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="lv-faq">
        <div className="lv-wrapper">
          <div className="lv-section-header">
            <h6 className="lv-section-subtitle">FAQ</h6>
            <h2 className="lv-section-title">
              Frequently Asked <span className="lv-gradient-text">Questions</span>
            </h2>
          </div>

          <div className="lv-faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="lv-faq-card">
                <h3 className="lv-faq-question">{faq.question}</h3>
                <p className="lv-faq-answer">{faq.answer}</p>
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