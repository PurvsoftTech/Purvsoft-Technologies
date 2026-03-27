import React from 'react';
import {
  Facebook,
  Instagram,
  Target,
  Users,
  DollarSign,
  BarChart3,
  CheckCircle,
  ArrowRight,
  ShoppingBag,
  MessageCircle,
  Image,
  Video,
  Grid,
  Play
} from 'lucide-react';
import '../../css/MetaAds.css';
import { Helmet} from 'react-helmet-async';
import Form from "../../config/Form";

const MetaAds = () => {
  const platforms = [
    {
      icon: <Facebook size={24} />,
      name: "Facebook Ads",
      desc: "Reach over 2.9 billion monthly active users on Facebook."
    },
    {
      icon: <Instagram size={24} />,
      name: "Instagram Ads",
      desc: "Connect with 2 billion+ users through visual storytelling."
    },
    {
      icon: <Grid size={24} />,
      name: "Audience Network",
      desc: "Extend your reach across thousands of apps and websites."
    },
    {
      icon: <MessageCircle size={24} />,
      name: "Messenger Ads",
      desc: "Engage customers directly through Facebook Messenger."
    }
  ];

  const adFormats = [
    {
      icon: <Image size={20} />,
      name: "Image Ads",
      desc: "Single images that capture attention."
    },
    {
      icon: <Video size={20} />,
      name: "Video Ads",
      desc: "Engaging video content up to 240 minutes."
    },
    {
      icon: <Grid size={20} />,
      name: "Carousel Ads",
      desc: "Showcase multiple products or features."
    },
    {
      icon: <ShoppingBag size={20} />,
      name: "Collection Ads",
      desc: "Browse and purchase directly from ads."
    },
    {
      icon: <Play size={20} />,
      name: "Stories Ads",
      desc: "Full-screen vertical ads for Stories."
    },
    {
      icon: <MessageCircle size={20} />,
      name: "Messenger Ads",
      desc: "Start conversations with customers."
    }
  ];

  const targeting = [
    "Demographic Targeting (Age, Gender, Location)",
    "Interest-Based Targeting",
    "Behavioral Targeting",
    "Custom Audiences",
    "Lookalike Audiences",
    "Retargeting Campaigns",
    "Life Events Targeting",
    "Device & Connection Type"
  ];

  const benefits = [
    {
      icon: <Users size={24} />,
      title: "3.9B+ Users",
      desc: "Combined reach across Meta platforms."
    },
    {
      icon: <Target size={24} />,
      title: "Precise Targeting",
      desc: "Advanced targeting options for better ROI."
    },
    {
      icon: <DollarSign size={24} />,
      title: "Flexible Budget",
      desc: "Start with any budget, scale as you grow."
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Detailed Analytics",
      desc: "Track every metric that matters."
    }
  ];

  const objectives = [
    "Brand Awareness",
    "Reach",
    "Traffic",
    "Engagement",
    "App Installs",
    "Video Views",
    "Lead Generation",
    "Messages",
    "Conversions",
    "Catalog Sales",
    "Store Traffic"
  ];

  const stats = [
    { value: '3.9B+', label: 'Monthly Active Users' },
    { value: '10M+', label: 'Active Advertisers' },
    { value: '2x', label: 'Average ROI' },
    { value: '98%', label: 'Client Satisfaction' }
  ];

  const steps = [
    {
      step: "1",
      title: "Strategy",
      desc: "Define goals and target audience."
    },
    {
      step: "2",
      title: "Creative",
      desc: "Design engaging ad creatives."
    },
    {
      step: "3",
      title: "Setup",
      desc: "Configure campaign settings."
    },
    {
      step: "4",
      title: "Launch",
      desc: "Go live with your campaign."
    },
    {
      step: "5",
      title: "Optimize",
      desc: "Monitor and improve performance."
    },
    {
      step: "6",
      title: "Report",
      desc: "Detailed performance reports."
    }
  ];

  const faqs = [
    {
      q: "What's the minimum budget for Meta ads?",
      a: "You can start with as little as $5 per day. We'll help you optimize your budget for best results."
    },
    {
      q: "How soon will I see results?",
      a: "Initial results can be seen within 24-48 hours. Full optimization takes 2-3 weeks."
    },
    {
      q: "Do you create ad creatives?",
      a: "Yes, we provide complete creative services including images, videos, and copywriting."
    },
    {
      q: "Which platform is best for my business?",
      a: "It depends on your audience and goals. We'll recommend the best mix of platforms."
    }
  ];

  return (
    <div className="ma-container">
      <Helmet>
      <title>Meta Ads Services | Purvsoft Technologies – Facebook & Instagram Ads</title>
      <meta name="description" content="Grow your brand on Facebook and Instagram with Purvsoft Technologies's Meta Ads services. Targeted ad campaigns, retargeting, and conversion optimization for maximum ROI." />
      <meta name="keywords" content="Meta ads, Facebook ads, Instagram ads, social media advertising, Meta advertising India, Facebook marketing" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href="https://www.purvsoft.com/services/meta-ads" />
 
      <meta property="og:title" content="Meta Ads Services | Purvsoft Technologies – Facebook & Instagram Ads" />
      <meta property="og:description" content="Targeted Facebook and Instagram ad campaigns with maximum ROI by Purvsoft Technologies." />
      <meta property="og:url" content="https://www.purvsoft.com/services/meta-ads" />
      <meta property="og:image" content="https://www.purvsoft.com/og-image.jpg" />
 
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Meta Ads | Purvsoft Technologies" />
      <meta name="twitter:description" content="Facebook and Instagram ad services by Purvsoft Technologies." />
    </Helmet>
      {/* Hero Section */}
      <section className="ma-hero">
        <div className="ma-wrapper">
          <div className="ma-hero-grid">
            <div className="ma-hero-content">
              <div className="ma-badge">
                <Facebook size={14} />
                <Instagram size={14} />
                <span>Meta Advertising</span>
              </div>
              <h1 className="ma-hero-title">
                Reach Billions with <span className="ma-highlight">Meta Ads</span>
              </h1>
              <p className="ma-hero-description">
                Connect with over 3.9 billion people across Facebook, Instagram, and Messenger. 
                We create targeted ad campaigns that drive real business results.
              </p>
              
              <div className="ma-stats-row">
                {stats.map((stat, index) => (
                  <div key={index} className="ma-stat-box">
                    <div className="ma-stat-value">{stat.value}</div>
                    <div className="ma-stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="ma-hero-buttons">
                <a href="#form" className="ma-btn-primary">
                 Contact Us <ArrowRight size={16} />
                </a>
              </div>
            </div>
            
            <div className="ma-hero-visual">
              <div className="ma-platform-grid">
                <div className="ma-platform-icon facebook">
                  <Facebook size={32} />
                </div>
                <div className="ma-platform-icon instagram">
                  <Instagram size={32} />
                </div>
                <div className="ma-platform-icon messenger">
                  <MessageCircle size={32} />
                </div>
                <div className="ma-platform-icon audience">
                  <Grid size={32} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="ma-platforms">
        <div className="ma-wrapper">
          <h2 className="ma-section-title">Platforms We Work With</h2>
          <p className="ma-section-subtitle">Reach your audience where they spend their time</p>
          
          <div className="ma-platforms-grid">
            {platforms.map((platform, index) => (
              <div key={index} className="ma-platform-card">
                <div className="ma-platform-card-icon">{platform.icon}</div>
                <h3 className="ma-platform-card-title">{platform.name}</h3>
                <p className="ma-platform-card-desc">{platform.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Formats */}
      <section className="ma-formats">
        <div className="ma-wrapper">
          <h2 className="ma-section-title">Ad Formats That Work</h2>
          <p className="ma-section-subtitle">Choose the right format for your message</p>
          
          <div className="ma-formats-grid">
            {adFormats.map((format, index) => (
              <div key={index} className="ma-format-item">
                <div className="ma-format-icon">{format.icon}</div>
                <div>
                  <h3 className="ma-format-name">{format.name}</h3>
                  <p className="ma-format-desc">{format.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Targeting Section */}
      <section className="ma-targeting">
        <div className="ma-wrapper">
          <div className="ma-targeting-grid">
            <div className="ma-targeting-content">
              <h2 className="ma-section-title">Advanced Targeting Options</h2>
              <p className="ma-section-subtitle">Find your perfect customers</p>
              
              <ul className="ma-targeting-list">
                {targeting.map((item, index) => (
                  <li key={index}>
                    <CheckCircle size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="ma-targeting-visual">
              <div className="ma-audience-card">
                <h3>Your Ideal Audience</h3>
                <div className="ma-audience-demo">
                  <div className="ma-demo-item">
                    <span className="ma-demo-label">Location:</span>
                    <span className="ma-demo-value">United States</span>
                  </div>
                  <div className="ma-demo-item">
                    <span className="ma-demo-label">Age:</span>
                    <span className="ma-demo-value">25-45</span>
                  </div>
                  <div className="ma-demo-item">
                    <span className="ma-demo-label">Interests:</span>
                    <span className="ma-demo-value">Technology, Business</span>
                  </div>
                  <div className="ma-demo-item">
                    <span className="ma-demo-label">Behavior:</span>
                    <span className="ma-demo-value">Online Shoppers</span>
                  </div>
                </div>
                <div className="ma-audience-size">
                  <span className="ma-size-number">12.5M</span>
                  <span className="ma-size-label">Estimated Reach</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="ma-benefits">
        <div className="ma-wrapper">
          <h2 className="ma-section-title">Why Advertise on Meta?</h2>
          <p className="ma-section-subtitle">Key benefits for your business</p>
          
          <div className="ma-benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="ma-benefit-item">
                <div className="ma-benefit-icon">{benefit.icon}</div>
                <h3 className="ma-benefit-title">{benefit.title}</h3>
                <p className="ma-benefit-desc">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Objectives */}
      <section className="ma-objectives">
        <div className="ma-wrapper">
          <h2 className="ma-section-title">Campaign Objectives</h2>
          <p className="ma-section-subtitle">Choose what matters most to your business</p>
          
          <div className="ma-objectives-grid">
            {objectives.map((objective, index) => (
              <div key={index} className="ma-objective-tag">
                {objective}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="ma-process">
        <div className="ma-wrapper">
          <h2 className="ma-section-title">Our Process</h2>
          <p className="ma-section-subtitle">Simple steps to campaign success</p>
          
          <div className="ma-process-grid">
            {steps.map((step, index) => (
              <div key={index} className="ma-process-step">
                <div className="ma-step-number">{step.step}</div>
                <h3 className="ma-step-title">{step.title}</h3>
                <p className="ma-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="ma-faq">
        <div className="ma-wrapper">
          <h2 className="ma-section-title">Frequently Asked Questions</h2>
          
          <div className="ma-faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="ma-faq-item">
                <h3 className="ma-faq-q">{faq.q}</h3>
                <p className="ma-faq-a">{faq.a}</p>
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

export default MetaAds;