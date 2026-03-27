import React from 'react';
import { 
  Search,
  TrendingUp,
  BarChart3,
  Globe,
  FileText,
  Link2,
  Target,
  Zap,
  Smartphone,
  Clock,
  DollarSign,
  Award,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Rocket,
  Settings,
  LineChart,
  PenTool,
  Code,
  MessageCircle,
  Shield,
  ShoppingCart,
  MapPin,
  Briefcase
} from 'lucide-react';
import '../../css/Seo.css';
import { Helmet} from 'react-helmet-async';
import Form from '../../config/Form'

const SEO = () => {
  const services = [
    {
      icon: <Search size={28} />,
      title: "Keyword Research & Strategy",
      desc: "In-depth keyword analysis to identify high-value search terms that drive qualified traffic and conversions.",
      features: ["Competitor Analysis", "Long-tail Keywords", "Search Intent Mapping"]
    },
    {
      icon: <FileText size={28} />,
      title: "On-Page SEO",
      desc: "Optimize your website's content, meta tags, headers, and internal linking structure for better rankings.",
      features: ["Meta Tags Optimization", "Header Tags", "Content Optimization", "Internal Linking"]
    },
    {
      icon: <Code size={28} />,
      title: "Technical SEO",
      desc: "Ensure your website meets technical requirements for search engine crawling and indexing.",
      features: ["Site Speed Optimization", "Mobile-Friendliness", "XML Sitemaps", "Schema Markup"]
    },
    {
      icon: <Link2 size={28} />,
      title: "Link Building",
      desc: "Build high-quality backlinks from authoritative websites to boost your domain authority.",
      features: ["Guest Posting", "Broken Link Building", "Digital PR", "Local Citations"]
    },
    {
      icon: <MessageCircle size={28} />,
      title: "Local SEO",
      desc: "Dominate local search results and attract customers in your geographic area.",
      features: ["Google My Business", "Local Citations", "Review Management", "Local Keywords"]
    },
    {
      icon: <BarChart3 size={28} />,
      title: "SEO Analytics & Reporting",
      desc: "Track your rankings, traffic, and conversions with detailed monthly reports and insights.",
      features: ["Rank Tracking", "Traffic Analysis", "Conversion Tracking", "Competitor Monitoring"]
    },
    {
      icon: <PenTool size={28} />,
      title: "Content SEO",
      desc: "Create and optimize content that ranks well and engages your target audience.",
      features: ["Blog Posts", "Infographics", "Videos", "Case Studies"]
    },
    {
      icon: <Smartphone size={28} />,
      title: "Mobile SEO",
      desc: "Optimize your website for mobile users to improve rankings and user experience.",
      features: ["Responsive Design", "Mobile Speed", "AMP Implementation", "Mobile UX"]
    },
    {
      icon: <ShoppingCart size={28} />,
      title: "E-commerce SEO",
      desc: "Specialized SEO strategies for online stores to increase product visibility and sales.",
      features: ["Product Page SEO", "Category Optimization", "Review Schema", "Site Structure"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Audit & Analysis",
      desc: "Comprehensive website audit to identify issues and opportunities for improvement.",
      icon: <Settings size={32} />
    },
    {
      step: "02",
      title: "Strategy Development",
      desc: "Custom SEO strategy tailored to your business goals and target audience.",
      icon: <Target size={32} />
    },
    {
      step: "03",
      title: "Implementation",
      desc: "Execute on-page, technical, and off-page optimizations with precision.",
      icon: <Rocket size={32} />
    },
    {
      step: "04",
      title: "Monitoring & Optimization",
      desc: "Continuous tracking and refinement to maximize results and ROI.",
      icon: <LineChart size={32} />
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp size={24} />,
      title: "Increased Organic Traffic",
      desc: "Drive more qualified visitors to your website through higher search rankings."
    },
    {
      icon: <DollarSign size={24} />,
      title: "Higher ROI",
      desc: "SEO provides long-term results with better ROI compared to paid advertising."
    },
    {
      icon: <Award size={24} />,
      title: "Brand Credibility",
      desc: "Top rankings build trust and establish your brand as an industry authority."
    },
    {
      icon: <Users size={24} />,
      title: "Better User Experience",
      desc: "SEO improvements enhance site usability and customer satisfaction."
    },
    {
      icon: <Globe size={24} />,
      title: "Market Reach",
      desc: "Expand your reach to new markets and demographics organically."
    },
    {
      icon: <Clock size={24} />,
      title: "24/7 Visibility",
      desc: "Your website works for you around the clock, attracting customers 24/7."
    }
  ];

  const caseStudies = [
    {
      title: "E-commerce Fashion Brand",
      result: "300% Increase in Organic Traffic",
      description: "Implemented comprehensive SEO strategy including technical fixes and content optimization.",
      icon: <ShoppingCart size={24} />
    },
    {
      title: "Local Service Business",
      result: "150% More Local Leads",
      description: "Local SEO optimization with GMB optimization and local citation building.",
      icon: <MapPin size={24} />
    },
    {
      title: "B2B Software Company",
      result: "200% Growth in Conversions",
      description: "Targeted content marketing and link building strategy for high-value keywords.",
      icon: <Briefcase size={24} />
    }
  ];

  const faqs = [
    {
      question: "How long does SEO take to show results?",
      answer: "SEO is a long-term strategy. Typically, you can start seeing results in 3-6 months, with significant improvements in 6-12 months depending on competition and your industry."
    },
    {
      question: "What's included in your SEO packages?",
      answer: "Our SEO packages include keyword research, on-page optimization, technical SEO, content creation, link building, and monthly reporting with actionable insights."
    },
    {
      question: "Do you guarantee #1 rankings?",
      answer: "We don't guarantee specific rankings as search engines algorithms are complex. However, we guarantee ethical practices and continuous improvement in your visibility."
    },
    {
      question: "How do you measure SEO success?",
      answer: "We track key metrics including organic traffic, keyword rankings, conversion rates, bounce rates, and ROI through comprehensive analytics and reporting."
    }
  ];

  return (
    <div className="seo-container">
      <Helmet>
      <title>SEO Services | Purvsoft Technologies – Rank Higher on Google</title>
      <meta name="description" content="Boost your website ranking with Purvsoft Technologies's expert SEO services. On-page SEO, off-page SEO, technical SEO, local SEO, and keyword research for sustainable growth." />
      <meta name="keywords" content="SEO services, search engine optimization, Google ranking, on-page SEO, off-page SEO, technical SEO, local SEO, SEO agency India" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href="https://www.purvsoft.com/services/seo" />
 
      <meta property="og:title" content="SEO Services | Purvsoft Technologies – Rank Higher on Google" />
      <meta property="og:description" content="Expert SEO services — on-page, off-page, technical SEO for sustainable Google rankings." />
      <meta property="og:url" content="https://www.purvsoft.com/services/seo" />
      <meta property="og:image" content="https://www.purvsoft.com/og-image.jpg" />
 
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="SEO Services | Purvsoft Technologies" />
      <meta name="twitter:description" content="Rank higher on Google with Purvsoft Technologies's expert SEO services." />
    </Helmet>
      {/* Hero Section */}
      <section className="seo-hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content" data-aos="fade-right">
              <div className="badge">#1 SEO Agency</div>
              <h1>
                Dominate Search Rankings with <br />
                <span className="gradient-text">Data-Driven SEO Strategies</span>
              </h1>
              <p className="hero-description">
                Drive organic traffic, increase visibility, and grow your business with our 
                comprehensive SEO services. We use ethical white-hat techniques to deliver 
                sustainable long-term results.
              </p>
              <div className="hero-stats">
                <div className="hero-stat">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="hero-stat">
                  <span className="stat-number">98%</span>
                  <span className="stat-label">Satisfaction</span>
                </div>
                <div className="hero-stat">
                  <span className="stat-number">10x</span>
                  <span className="stat-label">Avg ROI</span>
                </div>
              </div>
              <div className="hero-buttons">
                <a href="#form" className="btn-primary">
                  Contact Us <ArrowRight size={18} />
                </a>
              </div>
            </div>
            <div className="hero-visual" data-aos="fade-left">
              <div className="rankings-card">
                <div className="ranking-header">
                  <Globe size={24} />
                  <span>Top Rankings</span>
                </div>
                <div className="ranking-item">
                  <Search size={16} />
                  <span>digital marketing agency</span>
                  <span className="position">#1</span>
                </div>
                <div className="ranking-item">
                  <Search size={16} />
                  <span>seo services company</span>
                  <span className="position">#2</span>
                </div>
                <div className="ranking-item">
                  <Search size={16} />
                  <span>best seo agency</span>
                  <span className="position">#1</span>
                </div>
                <div className="ranking-item">
                  <Search size={16} />
                  <span>organic search experts</span>
                  <span className="position">#3</span>
                </div>
              </div>
              <div className="graph-element">
                <LineChart size={40} />
                <div className="graph-lines">
                  <div className="line up"></div>
                  <div className="line up"></div>
                  <div className="line up"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
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
                <p>SEO Specialists</p>
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
                <h4>100% Ethical</h4>
                <p>White Hat SEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h6 className="section-subtitle">Our SEO Services</h6>
            <h2 className="section-title">
              Comprehensive <span className="gradient-text">SEO Solutions</span> <br />
              That Drive Real Results
            </h2>
            <p className="section-description">
              From technical audits to content strategy, we provide end-to-end SEO services 
              tailored to your business goals and industry.
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
            <h6 className="section-subtitle">Our Process</h6>
            <h2 className="section-title">
              How We <span className="gradient-text">Drive Results</span>
            </h2>
            <p className="section-description">
              A systematic approach to SEO that ensures consistent growth and measurable outcomes.
            </p>
          </div>

          <div className="process-grid">
            {process.map((item, index) => (
              <div key={index} className="process-card" data-aos="fade-up" data-aos-delay={index * 100}>
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
              Benefits of <span className="gradient-text">Professional SEO</span>
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

      {/* Case Studies */}
      <section className="case-studies-section">
        <div className="container">
          <div className="section-header">
            <h6 className="section-subtitle">Success Stories</h6>
            <h2 className="section-title">
              Real <span className="gradient-text">Results</span> for Real Businesses
            </h2>
          </div>

          <div className="case-studies-grid">
            {caseStudies.map((study, index) => (
              <div key={index} className="case-study-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="case-study-icon">{study.icon}</div>
                <h3 className="case-study-title">{study.title}</h3>
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
      <div id="form">
        <Form />
      </div>
    </div>
  );
};

export default SEO;