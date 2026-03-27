import React from 'react';
import {
  Rocket,
  Zap,
  Globe,
  Smartphone,
  Shield,
  TrendingUp,
  Users,
  Code,
  Database,
  Palette,
  Award,
  Clock,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Star,
  Target,
  Briefcase,
  BarChart3,
  Layers,
  Server,
  GitBranch,
  RefreshCw,
  Lock,
  MessageCircle,
  Headphones,
  FileText,
  Image,
  Link,
  ShoppingCart,
} from 'lucide-react';
import '../../css/NextJSSolutions.css';
import { Helmet} from 'react-helmet-async';
import Form from "../../config/Form";

const NextJSSolutions = () => {
  const solutions = [
    {
      icon: <ShoppingCart size={32} />,
      title: "E-commerce Solutions",
      desc: "Build high-performance online stores with server-side rendering for better SEO and faster page loads.",
      features: ["Product Catalogs", "Shopping Cart", "Secure Checkout", "Order Management"]
    },
    {
      icon: <FileText size={32} />,
      title: "Content Management",
      desc: "Create dynamic content websites with headless CMS integration and static site generation.",
      features: ["Blog Platforms", "Documentation Sites", "News Portals", "Marketing Pages"]
    },
    {
      icon: <BarChart3 size={32} />,
      title: "SaaS Applications",
      desc: "Develop scalable SaaS platforms with API routes, authentication, and real-time features.",
      features: ["User Dashboards", "Subscription Management", "Analytics", "Real-time Updates"]
    },
    {
      icon: <Briefcase size={32} />,
      title: "Corporate Websites",
      desc: "Build professional company websites with excellent performance and global reach.",
      features: ["Company Profiles", "Career Pages", "Investor Relations", "News & Updates"]
    },
    {
      icon: <Users size={32} />,
      title: "Portfolio & Creative",
      desc: "Showcase your work with beautiful, fast-loading portfolio websites and galleries.",
      features: ["Project Showcase", "Image Galleries", "Client Testimonials", "Contact Forms"]
    },
    {
      icon: <MessageCircle size={32} />,
      title: "Community Platforms",
      desc: "Build interactive communities with forums, user profiles, and social features.",
      features: ["User Forums", "Discussion Boards", "User Profiles", "Private Messaging"]
    },
    {
      icon: <Database size={32} />,
      title: "Enterprise Portals",
      desc: "Create secure internal portals and dashboards for enterprise organizations.",
      features: ["Employee Portals", "Admin Dashboards", "Data Visualization", "Access Control"]
    },
    {
      icon: <Smartphone size={32} />,
      title: "Progressive Web Apps",
      desc: "Build PWAs that work offline and provide native app-like experiences.",
      features: ["Offline Support", "Push Notifications", "App-like UI", "Fast Loading"]
    },
    {
      icon: <Globe size={32} />,
      title: "Multi-language Sites",
      desc: "Create international websites with built-in i18n support and localized content.",
      features: ["Language Switching", "Localized URLs", "SEO Optimization", "RTL Support"]
    }
  ];

  const benefits = [
    {
      icon: <Zap size={24} />,
      title: "Lightning Fast Performance",
      desc: "Automatic code splitting, static generation, and image optimization for blazing fast sites."
    },
    {
      icon: <Shield size={24} />,
      title: "Enterprise Security",
      desc: "Built-in security features, API route protection, and secure authentication options."
    },
    {
      icon: <TrendingUp size={24} />,
      title: "SEO Excellence",
      desc: "Server-side rendering and static generation ensure your content is always crawlable."
    },
    {
      icon: <Rocket size={24} />,
      title: "Scalable Architecture",
      desc: "Easily scale from startup to enterprise with Vercel's global edge network."
    },
    {
      icon: <Clock size={24} />,
      title: "Faster Development",
      desc: "Fast Refresh, file-based routing, and built-in features speed up development."
    },
    {
      icon: <DollarSign size={24} />,
      title: "Cost Effective",
      desc: "Reduce hosting costs with static generation and optimized performance."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      desc: "We understand your business requirements, target audience, and project goals.",
      icon: <Target size={32} />
    },
    {
      step: "02",
      title: "Design & Prototyping",
      desc: "Create wireframes and interactive prototypes for your approval.",
      icon: <Palette size={32} />
    },
    {
      step: "03",
      title: "Development",
      desc: "Build your Next.js application with clean code and best practices.",
      icon: <Code size={32} />
    },
    {
      step: "04",
      title: "Testing & QA",
      desc: "Rigorous testing across devices and browsers for quality assurance.",
      icon: <Shield size={32} />
    },
    {
      step: "05",
      title: "Deployment",
      desc: "Deploy to Vercel with automatic optimizations and global CDN.",
      icon: <Rocket size={32} />
    },
    {
      step: "06",
      title: "Maintenance & Support",
      desc: "Ongoing support, updates, and performance monitoring.",
      icon: <Headphones size={32} />
    }
  ];

  const features = [
    {
      icon: <Server size={20} />,
      title: "Server-Side Rendering",
      desc: "Dynamic content with SSR for real-time data"
    },
    {
      icon: <Layers size={20} />,
      title: "Static Generation",
      desc: "Pre-render pages at build time for speed"
    },
    {
      icon: <GitBranch size={20} />,
      title: "API Routes",
      desc: "Build your backend within Next.js"
    },
    {
      icon: <Image size={20} />,
      title: "Image Optimization",
      desc: "Automatic image resizing and optimization"
    },
    {
      icon: <Link size={20} />,
      title: "Dynamic Routing",
      desc: "Create dynamic routes with file system"
    },
    {
      icon: <RefreshCw size={20} />,
      title: "Fast Refresh",
      desc: "Instant feedback during development"
    },
    {
      icon: <Lock size={20} />,
      title: "Built-in Security",
      desc: "Headers, CSP, and XSS protection"
    },
    {
      icon: <Globe size={20} />,
      title: "Edge Functions",
      desc: "Run code at the edge for low latency"
    },
    {
      icon: <Database size={20} />,
      title: "Data Fetching",
      desc: "Multiple data fetching strategies"
    }
  ];

  const caseStudies = [
    {
      company: "Fashion Retailer",
      title: "E-commerce Platform",
      result: "200% Increase in Conversions",
      description: "Migrated from legacy platform to Next.js, resulting in faster page loads and better SEO.",
      icon: <ShoppingCart size={24} />
    },
    {
      company: "Tech Startup",
      title: "SaaS Dashboard",
      result: "50% Faster Development",
      description: "Built real-time analytics dashboard with Next.js API routes and serverless functions.",
      icon: <BarChart3 size={24} />
    },
    {
      company: "Media Company",
      title: "Content Portal",
      result: "300K Monthly Visitors",
      description: "Scalable content platform with static generation and headless CMS integration.",
      icon: <FileText size={24} />
    }
  ];

  const stats = [
    { icon: <Award size={24} />, value: "100+", label: "Projects Delivered" },
    { icon: <Users size={24} />, value: "50+", label: "Happy Clients" },
    { icon: <Star size={24} />, value: "4.9", label: "Client Rating" },
    { icon: <Clock size={24} />, value: "5+ Years", label: "Next.js Experience" }
  ];

  const faqs = [
    {
      question: "Why choose Next.js for my business?",
      answer: "Next.js offers superior performance, SEO benefits, and developer experience. It's perfect for businesses that need fast, scalable, and secure web applications."
    },
    {
      question: "How long does development take?",
      answer: "Timeline varies based on complexity. Simple sites take 4-6 weeks, while complex applications can take 3-4 months. We provide detailed timelines during planning."
    },
    {
      question: "Can I migrate my existing site to Next.js?",
      answer: "Yes, we specialize in migrating existing React apps, WordPress sites, and other platforms to Next.js with minimal downtime."
    },
    {
      question: "Do you provide hosting and maintenance?",
      answer: "Yes, we offer comprehensive hosting on Vercel with maintenance packages including updates, security patches, and performance monitoring."
    }
  ];

  return (
    <div className="njs-container">
      <Helmet>
      <title>Next.js Development Services | Purvsoft Technologies</title>
      <meta name="description" content="Purvsoft Technologies offers expert Next.js development for SEO-optimized, server-side rendered web applications. Fast, scalable, and production-ready Next.js solutions." />
      <meta name="keywords" content="Next.js development, SSR, server-side rendering, Next.js company, SEO web app, hire Next.js developer India" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href="https://www.purvsoft.com/services/nextjs" />
 
      <meta property="og:title" content="Next.js Development Services | Purvsoft Technologies" />
      <meta property="og:description" content="SEO-optimized, server-side rendered Next.js web applications by Purvsoft Technologies." />
      <meta property="og:url" content="https://www.purvsoft.com/services/nextjs" />
      <meta property="og:image" content="https://www.purvsoft.com/og-image.jpg" />
 
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Next.js Development | Purvsoft Technologies" />
      <meta name="twitter:description" content="Fast and SEO-friendly Next.js solutions by Purvsoft Technologies." />
    </Helmet>
      {/* Hero Section */}
      <section className="njs-hero">
        <div className="njs-wrapper">
          <div className="njs-hero-grid">
            <div className="njs-hero-content">
              <div className="njs-badge">
                <Rocket size={16} />
                <span>Customized Next.js Solutions</span>
              </div>
              <h1>
                Next.js Solutions for <br />
                <span className="njs-gradient-text">Your Business Needs</span>
              </h1>
              <p className="njs-hero-description">
                Leverage the power of Next.js to build fast, scalable, and SEO-friendly web applications 
                tailored to your specific business requirements. From e-commerce to enterprise portals, 
                we deliver solutions that drive growth.
              </p>
              <div className="njs-hero-stats">
                <div className="njs-stat-item">
                  <span className="njs-stat-number">100+</span>
                  <span className="njs-stat-label">Projects</span>
                </div>
                <div className="njs-stat-item">
                  <span className="njs-stat-number">50+</span>
                  <span className="njs-stat-label">Clients</span>
                </div>
                <div className="njs-stat-item">
                  <span className="njs-stat-number">4.9</span>
                  <span className="njs-stat-label">Rating</span>
                </div>
              </div>
              <div className="njs-hero-buttons">
                <a href="#form" className="njs-btn-primary">
                  Contact Us <ArrowRight size={18} />
                </a>
              </div>
            </div>
            <div className="njs-hero-visual">
              <div className="njs-visual-card">
                <div className="njs-card-header">
                  <div className="njs-header-dots">
                    <span className="njs-dot njs-dot-red"></span>
                    <span className="njs-dot njs-dot-yellow"></span>
                    <span className="njs-dot njs-dot-green"></span>
                  </div>
                  <span className="njs-header-title">Your Next.js Project</span>
                </div>
                <div className="njs-card-content">
                  <div className="njs-metrics">
                    <div className="njs-metric">
                      <Zap size={20} className="njs-metric-icon" />
                      <div>
                        <span className="njs-metric-value">98</span>
                        <span className="njs-metric-label">Performance</span>
                      </div>
                    </div>
                    <div className="njs-metric">
                      <Globe size={20} className="njs-metric-icon" />
                      <div>
                        <span className="njs-metric-value">100</span>
                        <span className="njs-metric-label">SEO Score</span>
                      </div>
                    </div>
                    <div className="njs-metric">
                      <Clock size={20} className="njs-metric-icon" />
                      <div>
                        <span className="njs-metric-value">0.3s</span>
                        <span className="njs-metric-label">Load Time</span>
                      </div>
                    </div>
                  </div>
                  <div className="njs-feature-list">
                    <div className="njs-feature-item">
                      <CheckCircle size={16} />
                      <span>Server-Side Rendering</span>
                    </div>
                    <div className="njs-feature-item">
                      <CheckCircle size={16} />
                      <span>Static Generation</span>
                    </div>
                    <div className="njs-feature-item">
                      <CheckCircle size={16} />
                      <span>API Routes</span>
                    </div>
                    <div className="njs-feature-item">
                      <CheckCircle size={16} />
                      <span>Image Optimization</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="njs-stats">
        <div className="njs-wrapper">
          <div className="njs-stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="njs-stat-card">
                <div className="njs-stat-icon">{stat.icon}</div>
                <h3 className="njs-stat-value">{stat.value}</h3>
                <p className="njs-stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="njs-solutions">
        <div className="njs-wrapper">
          <div className="njs-section-header">
            <h6 className="njs-section-subtitle">Our Solutions</h6>
            <h2 className="njs-section-title">
              Tailored Next.js Solutions for <span className="njs-gradient-text">Every Business</span>
            </h2>
            <p className="njs-section-description">
              We build custom Next.js applications that solve real business problems and deliver exceptional user experiences.
            </p>
          </div>

          <div className="njs-solutions-grid">
            {solutions.map((solution, index) => (
              <div key={index} className="njs-solution-card">
                <div className="njs-solution-icon">{solution.icon}</div>
                <h3 className="njs-solution-title">{solution.title}</h3>
                <p className="njs-solution-description">{solution.desc}</p>
                <ul className="njs-solution-features">
                  {solution.features.map((feature, idx) => (
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
      <section className="njs-features">
        <div className="njs-wrapper">
          <div className="njs-section-header">
            <h6 className="njs-section-subtitle">Why Next.js</h6>
            <h2 className="njs-section-title">
              Powerful Features for <span className="njs-gradient-text">Modern Web Apps</span>
            </h2>
            <p className="njs-section-description">
              Next.js provides everything you need to build production-ready applications.
            </p>
          </div>

          <div className="njs-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="njs-feature-card">
                <div className="njs-feature-icon">{feature.icon}</div>
                <div>
                  <h3 className="njs-feature-title">{feature.title}</h3>
                  <p className="njs-feature-desc">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="njs-benefits">
        <div className="njs-wrapper">
          <div className="njs-section-header">
            <h6 className="njs-section-subtitle">Benefits</h6>
            <h2 className="njs-section-title">
              Why Businesses Choose <span className="njs-gradient-text">Our Next.js Solutions</span>
            </h2>
          </div>

          <div className="njs-benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="njs-benefit-card">
                <div className="njs-benefit-icon">{benefit.icon}</div>
                <h3 className="njs-benefit-title">{benefit.title}</h3>
                <p className="njs-benefit-description">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="njs-process">
        <div className="njs-wrapper">
          <div className="njs-section-header">
            <h6 className="njs-section-subtitle">Our Process</h6>
            <h2 className="njs-section-title">
              How We Build Your <span className="njs-gradient-text">Next.js Solution</span>
            </h2>
            <p className="njs-section-description">
              A proven methodology that ensures successful project delivery.
            </p>
          </div>

          <div className="njs-process-grid">
            {process.map((item, index) => (
              <div key={index} className="njs-process-card">
                <div className="njs-process-step">{item.step}</div>
                <div className="njs-process-icon">{item.icon}</div>
                <h3 className="njs-process-title">{item.title}</h3>
                <p className="njs-process-description">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="njs-case-studies">
        <div className="njs-wrapper">
          <div className="njs-section-header">
            <h6 className="njs-section-subtitle">Success Stories</h6>
            <h2 className="njs-section-title">
              Real Results for <span className="njs-gradient-text">Our Clients</span>
            </h2>
          </div>

          <div className="njs-case-studies-grid">
            {caseStudies.map((study, index) => (
              <div key={index} className="njs-case-card">
                <div className="njs-case-icon">{study.icon}</div>
                <span className="njs-case-company">{study.company}</span>
                <h3 className="njs-case-title">{study.title}</h3>
                <div className="njs-case-result">{study.result}</div>
                <p className="njs-case-description">{study.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="njs-faq">
        <div className="njs-wrapper">
          <div className="njs-section-header">
            <h6 className="njs-section-subtitle">FAQ</h6>
            <h2 className="njs-section-title">
              Frequently Asked <span className="njs-gradient-text">Questions</span>
            </h2>
          </div>

          <div className="njs-faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="njs-faq-card">
                <h3 className="njs-faq-question">{faq.question}</h3>
                <p className="njs-faq-answer">{faq.answer}</p>
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

export default NextJSSolutions;