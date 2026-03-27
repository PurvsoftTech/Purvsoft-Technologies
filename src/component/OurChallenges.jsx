import React from 'react';
import { useState } from 'react';
import {
  Target,
  TrendingUp,
  Users,
  Clock,
  DollarSign,
  Code,
  Smartphone,
  Globe,
  ShoppingCart,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Rocket,
  Shield,
  Zap,
  RefreshCw,
  Award,
  Heart,
  Briefcase,
  Coffee,
  ThumbsUp
} from 'lucide-react';
import '../css/OurChallenges.css';
import { Helmet} from 'react-helmet-async';
import Form from '../config/Form'

const OurChallenges = () => {
  const challenges = [
    {
      id: 1,
      category: "Website Development",
      icon: <Code size={24} />,
      title: "E-commerce Performance Optimization",
      challenge: "Client's e-commerce site was loading in 8+ seconds, causing 70% cart abandonment rate.",
      solution: "Implemented code splitting, image optimization, and CDN integration. Reduced load time to 2.1 seconds.",
      result: "45% increase in conversions, 60% decrease in bounce rate",
      metrics: ["Load Time: 8s → 2.1s", "Conversions: +45%", "Bounce Rate: -60%"]
    },
    {
      id: 2,
      category: "Mobile App Development",
      icon: <Smartphone size={24} />,
      title: "Cross-Platform App Performance",
      challenge: "Client needed a single codebase that works seamlessly on both iOS and Android with native performance.",
      solution: "Built using Flutter with platform-specific optimizations and custom UI components.",
      result: "Launched on both platforms simultaneously with 4.8+ star ratings",
      metrics: ["Time Saved: 40%", "Users: 50K+", "Rating: 4.8★"]
    },
    {
      id: 3,
      category: "Custom Software",
      icon: <Briefcase size={24} />,
      title: "Legacy System Migration",
      challenge: "Manufacturing company running on 15-year-old software with security vulnerabilities and no support.",
      solution: "Migrated to modern Laravel-based ERP system with real-time inventory tracking.",
      result: "99.9% uptime, 30% faster order processing",
      metrics: ["Uptime: 99.9%", "Speed: +30%", "Errors: -90%"]
    },
    {
      id: 4,
      category: "Digital Marketing",
      icon: <TrendingUp size={24} />,
      title: "Low ROI on Ad Spend",
      challenge: "Client spending $10K/month on Google Ads with only 1.2x ROI and high cost per acquisition.",
      solution: "Restructured campaigns, optimized keywords, and implemented conversion tracking.",
      result: "ROI increased to 4.5x, CPA reduced by 60%",
      metrics: ["ROI: 1.2x → 4.5x", "CPA: -60%", "Conversions: +200%"]
    },
    {
      id: 5,
      category: "SEO Optimization",
      icon: <Globe size={24} />,
      title: "Lost Search Rankings",
      challenge: "Client lost 80% of organic traffic after Google algorithm update.",
      solution: "Technical SEO audit, content optimization, and quality backlink building.",
      result: "Recovered rankings within 3 months, traffic up 120%",
      metrics: ["Traffic: +120%", "Keywords: Top 10 for 50+ terms", "Revenue: +80%"]
    },
    {
      id: 6,
      category: "E-commerce",
      icon: <ShoppingCart size={24} />,
      title: "High Cart Abandonment",
      challenge: "65% cart abandonment rate due to complicated checkout process.",
      solution: "Simplified checkout to 2 steps, added guest checkout, and multiple payment options.",
      result: "Abandonment reduced to 35%, revenue up 50%",
      metrics: ["Abandonment: 65% → 35%", "Revenue: +50%", "Conversion: +40%"]
    },
    {
      id: 7,
      category: "API Integration",
      icon: <RefreshCw size={24} />,
      title: "System Integration Failure",
      challenge: "Client's CRM couldn't sync with their e-commerce platform, causing manual data entry.",
      solution: "Developed custom REST APIs with real-time sync and error handling.",
      result: "100% automated sync, 20 hours/week saved",
      metrics: ["Time Saved: 20hrs/week", "Errors: 0", "Efficiency: +200%"]
    },
    {
      id: 8,
      category: "UI/UX Design",
      icon: <Lightbulb size={24} />,
      title: "Poor User Engagement",
      challenge: "Mobile app had 90% drop-off rate within first minute.",
      solution: "Complete UX redesign with intuitive navigation and onboarding flow.",
      result: "Retention improved to 65%, daily active users up 3x",
      metrics: ["Retention: 10% → 65%", "DAU: +200%", "Session Time: +150%"]
    },
    {
      id: 9,
      category: "Security",
      icon: <Shield size={24} />,
      title: "Security Vulnerability",
      challenge: "Client's website had multiple security vulnerabilities and was flagged by Google.",
      solution: "Security audit, patch implementation, SSL upgrade, and ongoing monitoring.",
      result: "100% vulnerability fixed, security score A+",
      metrics: ["Vulnerabilities: 0", "Security Score: A+", "Uptime: 99.99%"]
    }
  ];

  const stats = [
    { icon: <Award size={20} />, value: '50+', label: 'Challenges Solved' },
    { icon: <Users size={20} />, value: '40+', label: 'Happy Clients' },
    { icon: <Clock size={20} />, value: '5+', label: 'Years Experience' },
    { icon: <ThumbsUp size={20} />, value: '98%', label: 'Success Rate' }
  ];

  const categories = [
    "All",
    "Website Development",
    "Mobile App",
    "Software",
    "Marketing",
    "E-commerce",
    "Security"
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredChallenges = activeCategory === "All" 
    ? challenges 
    : challenges.filter(c => c.category.includes(activeCategory));

  return (
    <div className="oc-container">
      <Helmet>
      <title>Our Challenges | Purvsoft Technologies – Problems We Solve</title>
      <meta name="description" content="Discover the business challenges Purvsoft Technologies solves for its clients — from digital transformation to marketing ROI, scalability, and technology adoption." />
      <meta name="keywords" content="business challenges, digital transformation, marketing problems, technology solutions, Purvsoft Technologies challenges" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href="https://www.purvsoft.com/services/our-challenges" />
 
      <meta property="og:title" content="Our Challenges | Purvsoft Technologies" />
      <meta property="og:description" content="Business challenges Purvsoft Technologies solves — digital transformation, marketing ROI, and scalability." />
      <meta property="og:url" content="https://www.purvsoft.com/services/our-challenges" />
      <meta property="og:image" content="https://www.purvsoft.com/og-image.jpg" />
 
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Our Challenges | Purvsoft Technologies" />
      <meta name="twitter:description" content="See what problems Purvsoft Technologies solves for businesses." />
    </Helmet>
      {/* Hero Section */}
      <section className="oc-hero">
        <div className="oc-wrapper">
          <div className="oc-hero-content">
            <h6 className="oc-hero-subtitle">Our Challenges</h6>
            <h1 className="oc-hero-title">
              Turning <span className="oc-highlight">Obstacles</span> into Opportunities
            </h1>
            <p className="oc-hero-description">
              Every project comes with unique challenges. Here's how we've helped our clients overcome 
              technical hurdles, performance issues, and business obstacles to achieve remarkable results.
            </p>
            
            <div className="oc-stats-row">
              {stats.map((stat, index) => (
                <div key={index} className="oc-stat-item">
                  <span className="oc-stat-icon">{stat.icon}</span>
                  <div>
                    <span className="oc-stat-value">{stat.value}</span>
                    <span className="oc-stat-label">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="oc-filter-section">
        <div className="oc-wrapper">
          <div className="oc-filter-container">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`oc-filter-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges Grid */}
      <section className="oc-challenges">
        <div className="oc-wrapper">
          <div className="oc-challenges-grid">
            {filteredChallenges.map((item) => (
              <div key={item.id} className="oc-challenge-card">
                <div className="oc-card-header">
                  <div className="oc-card-icon">{item.icon}</div>
                  <span className="oc-card-category">{item.category}</span>
                </div>
                
                <h3 className="oc-card-title">{item.title}</h3>
                
                <div className="oc-card-section">
                  <h4 className="oc-section-label">Challenge:</h4>
                  <p className="oc-card-text">{item.challenge}</p>
                </div>
                
                <div className="oc-card-section">
                  <h4 className="oc-section-label">Solution:</h4>
                  <p className="oc-card-text">{item.solution}</p>
                </div>
                
                <div className="oc-card-section">
                  <h4 className="oc-section-label">Result:</h4>
                  <p className="oc-card-result">{item.result}</p>
                </div>
                
                <div className="oc-metrics">
                  {item.metrics.map((metric, idx) => (
                    <span key={idx} className="oc-metric-tag">{metric}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="oc-approach">
        <div className="oc-wrapper">
          <h2 className="oc-section-title">Our Problem-Solving Approach</h2>
          <p className="oc-section-subtitle">How we tackle complex challenges</p>
          
          <div className="oc-approach-grid">
            <div className="oc-approach-item">
              <div className="oc-approach-number">1</div>
              <h3 className="oc-approach-title">Analyze</h3>
              <p className="oc-approach-desc">Deep dive into the problem, understanding root causes and impact.</p>
            </div>
            
            <div className="oc-approach-item">
              <div className="oc-approach-number">2</div>
              <h3 className="oc-approach-title">Strategize</h3>
              <p className="oc-approach-desc">Develop multiple solution approaches and choose the best path.</p>
            </div>
            
            <div className="oc-approach-item">
              <div className="oc-approach-number">3</div>
              <h3 className="oc-approach-title">Execute</h3>
              <p className="oc-approach-desc">Implement solution with precision and attention to detail.</p>
            </div>
            
            <div className="oc-approach-item">
              <div className="oc-approach-number">4</div>
              <h3 className="oc-approach-title">Measure</h3>
              <p className="oc-approach-desc">Track results and optimize for even better outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="oc-testimonial">
        <div className="oc-wrapper">
          <div className="oc-testimonial-card">
            <p className="oc-testimonial-quote">"</p>
            <p className="oc-testimonial-text">
              When our e-commerce site crashed during peak season, Purvsoft team worked through the weekend 
              to restore everything. They didn't just fix the problem – they implemented solutions that made 
              our site faster and more reliable than ever before.
            </p>
            <div className="oc-testimonial-author">
              <strong>Rajesh Mehta</strong>
              <span>CEO, TechCorp India</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div id="form">
        <Form />
      </div>
    </div>
  );
};

export default OurChallenges;