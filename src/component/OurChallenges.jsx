import React from 'react';
import { useState } from 'react';
import {
  TrendingUp,
  Users,
  Clock,
  Code,
  Smartphone,
  Globe,
  ShoppingCart,
  Lightbulb,
  Shield,
  RefreshCw,
  Award,
  Briefcase,
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

  // JSON-LD Structured Data for Case Studies / Challenges
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Our Challenges - Business Problems We Solve",
    "description": "Discover how Purvsoft Technologies solves complex business challenges including website performance, mobile app development, digital marketing ROI, and security vulnerabilities.",
    "provider": {
      "@type": "Organization",
      "name": "Purvsoft Technologies",
      "url": "https://www.purvsoft.com",
      "logo": "https://www.purvsoft.com/logo.png"
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": challenges.map((challenge, index) => ({
        "@type": "CreativeWork",
        "position": index + 1,
        "name": challenge.title,
        "description": `Challenge: ${challenge.challenge} Solution: ${challenge.solution} Result: ${challenge.result}`,
        "category": challenge.category
      }))
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
        "name": "Our Challenges",
        "item": "https://www.purvsoft.com/our-challenges"
      }
    ]
  };

  return (
    <div className="oc-container">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Our Challenges | Business Problems Solved | Purvsoft Technologies</title>
        <meta name="title" content="Our Challenges | Business Problems Solved | Purvsoft Technologies" />
        <meta name="description" content="Discover how Purvsoft Technologies solves complex business challenges including website performance issues, mobile app development hurdles, digital marketing ROI problems, and security vulnerabilities with proven solutions." />
        <meta name="keywords" content="business challenges, technology problems solved, website performance issues, mobile app development challenges, digital marketing ROI, e-commerce problems, security vulnerabilities, legacy system migration, cart abandonment solutions, SEO recovery, Purvsoft case studies" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Purvsoft Technologies" />
        <meta name="language" content="English" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.purvsoft.com/our-challenges" />
        
        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.purvsoft.com/our-challenges" />
        <meta property="og:title" content="Our Challenges | Business Problems Solved | Purvsoft Technologies" />
        <meta property="og:description" content="See how Purvsoft Technologies transforms business obstacles into opportunities. Real challenges, real solutions, remarkable results across web development, mobile apps, marketing, and security." />
        <meta property="og:image" content="https://www.purvsoft.com/og-our-challenges.jpg" />
        <meta property="og:image:alt" content="Purvsoft Technologies - Business Challenges Solved" />
        <meta property="og:site_name" content="Purvsoft Technologies" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.purvsoft.com/our-challenges" />
        <meta name="twitter:title" content="Our Challenges | Business Problems Solved | Purvsoft" />
        <meta name="twitter:description" content="Discover how Purvsoft solves complex business challenges from performance issues to security vulnerabilities." />
        <meta name="twitter:image" content="https://www.purvsoft.com/twitter-our-challenges.jpg" />
        <meta name="twitter:image:alt" content="Purvsoft Case Studies and Problem Solving" />
        
        {/* Verification tags - replace with your actual codes */}
        <meta name="google-site-verification" content="MjMKilzhOmqr6Txi7pbjACF6g_hSt-B6Ej496yJyrH0" />
         <meta name="msvalidate.01" content="AD0DF443696FB452E952416667F1A8DC" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Ahmedabad, Gujarat" />
      </Helmet>

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbData)}
      </script>

      {/* Hero Section */}
      <section className="oc-hero" aria-label="Our Challenges Hero Section - Business Problem Solving">
        <div className="oc-wrapper">
          <div className="oc-hero-content" data-aos="fade-up">
            <p className="oc-hero-subtitle">Case Studies & Success Stories</p>
            <h1 className="oc-hero-title">
              Turning <span className="oc-highlight">Obstacles</span> into Opportunities
            </h1>
            <p className="oc-hero-description">
              Every project comes with unique challenges. Here's how we've helped our clients overcome 
              technical hurdles, performance issues, and business obstacles to achieve remarkable results.
            </p>
            
            <div className="oc-stats-row">
              {stats.map((stat, index) => (
                <div key={index} className="oc-stat-item" data-aos="fade-up" data-aos-delay={index * 50}>
                  <span className="oc-stat-icon" aria-hidden="true">{stat.icon}</span>
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
      <section className="oc-filter-section" aria-label="Filter challenges by category">
        <div className="oc-wrapper">
          <div className="oc-filter-container">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`oc-filter-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
                aria-label={`Filter challenges by ${category}`}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges Grid */}
      <section className="oc-challenges" aria-label="Business challenges and solutions">
        <div className="oc-wrapper">
          <div className="section-header">
            <h2 className="oc-section-title">Real <span className="brand-gradient">Challenges</span>, Real Solutions</h2>
            <p className="oc-section-subtitle">See how we've helped businesses overcome their toughest obstacles</p>
          </div>
          
          <div className="oc-challenges-grid">
            {filteredChallenges.map((item, index) => (
              <div key={item.id} className="oc-challenge-card" data-aos="fade-up" data-aos-delay={index * 50} itemScope itemType="https://schema.org/CreativeWork">
                <div className="oc-card-header">
                  <div className="oc-card-icon" aria-hidden="true">{item.icon}</div>
                  <span className="oc-card-category" itemProp="category">{item.category}</span>
                </div>
                
                <h3 className="oc-card-title" itemProp="name">{item.title}</h3>
                
                <div className="oc-card-section">
                  <h4 className="oc-section-label">Challenge:</h4>
                  <p className="oc-card-text" itemProp="description">{item.challenge}</p>
                </div>
                
                <div className="oc-card-section">
                  <h4 className="oc-section-label">Solution:</h4>
                  <p className="oc-card-text">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
          
          {filteredChallenges.length === 0 && (
            <div className="oc-no-results" data-aos="fade-up">
              <p>No challenges found in this category. Please try another category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Approach Section */}
      <section className="oc-approach" aria-label="Our problem-solving approach">
        <div className="oc-wrapper">
          <div className="section-header">
            <h2 className="oc-section-title">Our <span className="brand-gradient">Problem-Solving Approach</span></h2>
            <p className="oc-section-subtitle">How we tackle complex challenges with proven methodology</p>
          </div>
          
          <div className="oc-approach-grid">
            <div className="oc-approach-item" data-aos="fade-up" data-aos-delay="0">
              <div className="oc-approach-number">1</div>
              <h3 className="oc-approach-title">Analyze</h3>
              <p className="oc-approach-desc">Deep dive into the problem, understanding root causes and impact on business operations.</p>
            </div>
            
            <div className="oc-approach-item" data-aos="fade-up" data-aos-delay="50">
              <div className="oc-approach-number">2</div>
              <h3 className="oc-approach-title">Strategize</h3>
              <p className="oc-approach-desc">Develop multiple solution approaches and choose the best path for optimal results.</p>
            </div>
            
            <div className="oc-approach-item" data-aos="fade-up" data-aos-delay="100">
              <div className="oc-approach-number">3</div>
              <h3 className="oc-approach-title">Execute</h3>
              <p className="oc-approach-desc">Implement solution with precision, attention to detail, and agile methodology.</p>
            </div>
            
            <div className="oc-approach-item" data-aos="fade-up" data-aos-delay="150">
              <div className="oc-approach-number">4</div>
              <h3 className="oc-approach-title">Measure</h3>
              <p className="oc-approach-desc">Track results, analyze performance metrics, and optimize for even better outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="oc-testimonial" aria-label="Client testimonial">
        <div className="oc-wrapper">
          <div className="oc-testimonial-card" data-aos="fade-up">
            <p className="oc-testimonial-quote" aria-hidden="true">"</p>
            <p className="oc-testimonial-text" itemProp="review">
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