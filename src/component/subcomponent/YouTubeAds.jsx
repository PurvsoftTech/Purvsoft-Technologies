import React from 'react';
import {
  Play,
  Target,
  Users,
  Eye,
  DollarSign,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Globe,
  Smartphone,
  Monitor,
  Settings,
  Film,
  Music,
  Gamepad,
  ShoppingBag,
  Coffee,
  Heart,
} from 'lucide-react';
import '../../css/YouTubeAds.css';
import { Helmet} from 'react-helmet-async';
import Form from '../../config/Form'

const YouTubeAds = () => {
  const services = [
    {
      icon: <Film size={24} />,
      title: "Video Ad Creation",
      desc: "Professional video production tailored for YouTube advertising."
    },
    {
      icon: <Target size={24} />,
      title: "Targeted Campaigns",
      desc: "Reach the right audience with precise demographic and interest targeting."
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Performance Tracking",
      desc: "Real-time analytics and detailed reporting on ad performance."
    },
    {
      icon: <Settings size={24} />,
      title: "Campaign Optimization",
      desc: "Continuous optimization to improve ROI and reduce costs."
    }
  ];

  const adFormats = [
    {
      icon: <Play size={20} />,
      name: "TrueView In-Stream",
      desc: "Skippable ads that play before, during, or after other videos."
    },
    {
      icon: <Eye size={20} />,
      name: "Bumper Ads",
      desc: "6-second non-skippable ads for maximum recall."
    },
    {
      icon: <Monitor size={20} />,
      name: "Video Discovery Ads",
      desc: "Appear in YouTube search results and related videos."
    },
    {
      icon: <Smartphone size={20} />,
      name: "Outstream Ads",
      desc: "Mobile-only ads that play on partner sites and apps."
    },
    {
      icon: <ShoppingBag size={20} />,
      name: "Shopping Ads",
      desc: "Showcase products with direct purchase links."
    },
    {
      icon: <Globe size={20} />,
      name: "Brand Awareness",
      desc: "Reach millions of viewers with high-impact formats."
    }
  ];

  const targeting = [
    "Demographic Targeting (Age, Gender, Location)",
    "Interest-Based Targeting",
    "Keyword Targeting",
    "Placement Targeting",
    "Remarketing Lists",
    "Custom Intent Audiences",
    "Life Events Targeting",
    "Device & Operating System"
  ];

  const benefits = [
    {
      icon: <Users size={24} />,
      title: "2 Billion+ Users",
      desc: "Reach YouTube's massive global audience."
    },
    {
      icon: <Target size={24} />,
      title: "Precise Targeting",
      desc: "Show ads only to potential customers."
    },
    {
      icon: <DollarSign size={24} />,
      title: "Cost Effective",
      desc: "Pay only for views or engagements."
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Measurable Results",
      desc: "Track views, clicks, and conversions."
    }
  ];

  const industries = [
    { icon: <ShoppingBag size={16} />, name: "E-commerce" },
    { icon: <Gamepad size={16} />, name: "Gaming" },
    { icon: <Coffee size={16} />, name: "Food & Beverage" },
    { icon: <Music size={16} />, name: "Music & Entertainment" },
    { icon: <Heart size={16} />, name: "Health & Fitness" },
    { icon: <Globe size={16} />, name: "Travel & Tourism" }
  ];

  const stats = [
    { value: '2B+', label: 'Monthly Users' },
    { value: '1B+', label: 'Hours Watched' },
    { value: '70%', label: 'View Through Rate' },
    { value: '3x', label: 'ROI Average' }
  ];

  const steps = [
    {
      step: "1",
      title: "Consultation",
      desc: "We discuss your goals, budget, and target audience."
    },
    {
      step: "2",
      title: "Strategy",
      desc: "Create a custom YouTube advertising strategy."
    },
    {
      step: "3",
      title: "Creative",
      desc: "Produce engaging video ads that convert."
    },
    {
      step: "4",
      title: "Launch",
      desc: "Set up and launch your campaign."
    },
    {
      step: "5",
      title: "Optimize",
      desc: "Monitor and optimize for best results."
    },
    {
      step: "6",
      title: "Report",
      desc: "Detailed performance reports."
    }
  ];

  const faqs = [
    {
      q: "How much do YouTube ads cost?",
      a: "Cost varies based on targeting and competition. You can start with as little as $10/day."
    },
    {
      q: "How long does it take to see results?",
      a: "You can see initial results within 24-48 hours of campaign launch."
    },
    {
      q: "Do I need a YouTube channel?",
      a: "Yes, you need a YouTube channel to run ads. We can help set one up."
    },
    {
      q: "Can you help with video creation?",
      a: "Yes, we offer professional video production services for ads."
    }
  ];

  return (
    <div className="ya-container">
      <Helmet>
      <title>YouTube Marketing & Ads Services | Purvsoft Technologies</title>
      <meta name="description" content="Reach millions with Purvsoft Technologies's YouTube advertising and marketing services. Video ad campaigns, channel management, and YouTube SEO to grow your brand." />
      <meta name="keywords" content="YouTube marketing, YouTube ads, video advertising, YouTube SEO, YouTube channel management, video marketing India" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href="https://www.purvsoft.com/services/youtube-marketing" />
 
      <meta property="og:title" content="YouTube Marketing & Ads | Purvsoft Technologies" />
      <meta property="og:description" content="Reach millions with YouTube video ad campaigns, channel management, and YouTube SEO." />
      <meta property="og:url" content="https://www.purvsoft.com/services/youtube-marketing" />
      <meta property="og:image" content="https://www.purvsoft.com/og-image.jpg" />
 
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="YouTube Marketing | Purvsoft Technologies" />
      <meta name="twitter:description" content="YouTube ads and marketing services by Purvsoft Technologies." />
    </Helmet>
      {/* Hero Section */}
      <section className="ya-hero">
        <div className="ya-wrapper">
          <div className="ya-hero-grid">
            <div className="ya-hero-content">
              <div className="ya-badge">
                <Play size={14} />
                <span>YouTube Advertising</span>
              </div>
              <h1 className="ya-hero-title">
                Grow Your Business with <span className="ya-highlight">YouTube Ads</span>
              </h1>
              <p className="ya-hero-description">
                Reach over 2 billion monthly active users with targeted video advertising. 
                We help businesses create and optimize YouTube campaigns that deliver real results.
              </p>
              
              <div className="ya-stats-row">
                {stats.map((stat, index) => (
                  <div key={index} className="ya-stat-box">
                    <div className="ya-stat-value">{stat.value}</div>
                    <div className="ya-stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="ya-hero-buttons">
                <a href="#form" className="ya-btn-primary">
                 Contact Us<ArrowRight size={16} />
                </a>
              </div>
            </div>
            
            <div className="ya-hero-visual">
              <div className="ya-video-placeholder">
                <Play size={40} className="ya-play-icon" />
                <div className="ya-placeholder-text">YouTube Ad Preview</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="ya-services">
        <div className="ya-wrapper">
          <h2 className="ya-section-title">What We Offer</h2>
          <p className="ya-section-subtitle">Complete YouTube advertising solutions</p>
          
          <div className="ya-services-grid">
            {services.map((service, index) => (
              <div key={index} className="ya-service-item">
                <div className="ya-service-icon">{service.icon}</div>
                <h3 className="ya-service-title">{service.title}</h3>
                <p className="ya-service-desc">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Formats */}
      <section className="ya-formats">
        <div className="ya-wrapper">
          <h2 className="ya-section-title">Ad Formats We Use</h2>
          <p className="ya-section-subtitle">Choose the right format for your goals</p>
          
          <div className="ya-formats-grid">
            {adFormats.map((format, index) => (
              <div key={index} className="ya-format-item">
                <div className="ya-format-icon">{format.icon}</div>
                <div>
                  <h3 className="ya-format-name">{format.name}</h3>
                  <p className="ya-format-desc">{format.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Targeting Options */}
      <section className="ya-targeting">
        <div className="ya-wrapper">
          <div className="ya-targeting-grid">
            <div className="ya-targeting-content">
              <h2 className="ya-section-title">Precise Audience Targeting</h2>
              <p className="ya-section-subtitle">Reach the right people at the right time</p>
              
              <ul className="ya-targeting-list">
                {targeting.map((item, index) => (
                  <li key={index}>
                    <CheckCircle size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="ya-targeting-visual">
              <div className="ya-targeting-card">
                <h3>Ideal Customer Profile</h3>
                <div className="ya-demo-targets">
                  <span>Age: 25-45</span>
                  <span>Gender: All</span>
                  <span>Location: USA</span>
                  <span>Interests: Technology</span>
                  <span>Device: Mobile</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="ya-benefits">
        <div className="ya-wrapper">
          <h2 className="ya-section-title">Why Advertise on YouTube?</h2>
          <p className="ya-section-subtitle">Key benefits for your business</p>
          
          <div className="ya-benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="ya-benefit-item">
                <div className="ya-benefit-icon">{benefit.icon}</div>
                <h3 className="ya-benefit-title">{benefit.title}</h3>
                <p className="ya-benefit-desc">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="ya-industries">
        <div className="ya-wrapper">
          <h2 className="ya-section-title">Industries We Serve</h2>
          <p className="ya-section-subtitle">Successful campaigns across various sectors</p>
          
          <div className="ya-industries-grid">
            {industries.map((industry, index) => (
              <div key={index} className="ya-industry-tag">
                {industry.icon}
                <span>{industry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="ya-process">
        <div className="ya-wrapper">
          <h2 className="ya-section-title">Our Process</h2>
          <p className="ya-section-subtitle">Simple steps to campaign success</p>
          
          <div className="ya-process-grid">
            {steps.map((step, index) => (
              <div key={index} className="ya-process-step">
                <div className="ya-step-number">{step.step}</div>
                <h3 className="ya-step-title">{step.title}</h3>
                <p className="ya-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="ya-faq">
        <div className="ya-wrapper">
          <h2 className="ya-section-title">Frequently Asked Questions</h2>
          
          <div className="ya-faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="ya-faq-item">
                <h3 className="ya-faq-q">{faq.q}</h3>
                <p className="ya-faq-a">{faq.a}</p>
              </div>
            ))}
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

export default YouTubeAds;