import React from 'react';
import {
  Search,
  Globe,
  Youtube,
  Mail,
  ShoppingBag,
  MapPin,
  Target,
  Users,
  DollarSign,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Smartphone,
  Play,
  Image,
  MessageCircle
} from 'lucide-react';
import '../../css/GoogleAds.css';
import { Helmet} from 'react-helmet-async';
import Form from '../../config/Form'

const GoogleAds = () => {
  const networks = [
    {
      icon: <Search size={24} />,
      name: "Search Network",
      desc: "Show ads when people search for your products or services on Google."
    },
    {
      icon: <Globe size={24} />,
      name: "Display Network",
      desc: "Reach customers across millions of websites, apps, and videos."
    },
    {
      icon: <Youtube size={24} />,
      name: "YouTube Ads",
      desc: "Connect with audiences through video advertising on YouTube."
    },
    {
      icon: <ShoppingBag size={24} />,
      name: "Shopping Ads",
      desc: "Showcase your products with images and prices directly in search results."
    },
    {
      icon: <Mail size={24} />,
      name: "Gmail Ads",
      desc: "Reach customers in their inbox with interactive Gmail ads."
    },
    {
      icon: <MapPin size={24} />,
      name: "Local Ads",
      desc: "Drive foot traffic to your physical stores with location-based advertising."
    }
  ];

  const campaignTypes = [
    {
      icon: <Search size={20} />,
      name: "Search Campaigns",
      desc: "Text ads on Google search results."
    },
    {
      icon: <Image size={20} />,
      name: "Display Campaigns",
      desc: "Image and banner ads across the web."
    },
    {
      icon: <ShoppingBag size={20} />,
      name: "Shopping Campaigns",
      desc: "Product listings with images and prices."
    },
    {
      icon: <Play size={20} />,
      name: "Video Campaigns",
      desc: "Video ads on YouTube and partner sites."
    },
    {
      icon: <Smartphone size={20} />,
      name: "App Campaigns",
      desc: "Promote your mobile apps across Google."
    },
    {
      icon: <MessageCircle size={20} />,
      name: "Smart Campaigns",
      desc: "Automated campaigns for small businesses."
    }
  ];

  const targeting = [
    "Keyword Targeting",
    "Demographic Targeting",
    "Location Targeting",
    "Device Targeting",
    "Audience Targeting",
    "Remarketing Lists",
    "Custom Intent Audiences",
    "Topic & Placement",
    "Schedule & Frequency",
    "Language Targeting"
  ];

  const benefits = [
    {
      icon: <Users size={24} />,
      title: "Billions of Searches",
      desc: "Reach customers actively searching for your products."
    },
    {
      icon: <Target size={24} />,
      title: "Intent-Based",
      desc: "Show ads to people with high purchase intent."
    },
    {
      icon: <DollarSign size={24} />,
      title: "Pay for Performance",
      desc: "Only pay when someone clicks or calls."
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Measurable ROI",
      desc: "Track every dollar spent and every conversion."
    }
  ];

  const stats = [
    { value: '3.5B+', label: 'Daily Searches' },
    { value: '2M+', label: 'Partner Sites' },
    { value: '200%', label: 'Average ROI' },
    { value: '97%', label: 'Client Retention' }
  ];

  const steps = [
    {
      step: "1",
      title: "Research",
      desc: "Keyword research and competitor analysis."
    },
    {
      step: "2",
      title: "Strategy",
      desc: "Campaign structure and budget planning."
    },
    {
      step: "3",
      title: "Setup",
      desc: "Account creation and campaign configuration."
    },
    {
      step: "4",
      title: "Launch",
      desc: "Go live with your campaigns."
    },
    {
      step: "5",
      title: "Monitor",
      desc: "Track performance and make adjustments."
    },
    {
      step: "6",
      title: "Optimize",
      desc: "Continuous improvement for better results."
    }
  ];

  const keywords = [
    "digital marketing agency",
    "web development services",
    "mobile app developers",
    "SEO services near me",
    "custom software solutions",
    "ecommerce website design"
  ];

  const faqs = [
    {
      q: "How does Google Ads work?",
      a: "You bid on keywords relevant to your business. When someone searches those terms, your ad can appear. You pay only when someone clicks."
    },
    {
      q: "What's the minimum budget?",
      a: "You can start with any budget. We recommend at least $500/month for meaningful results."
    },
    {
      q: "How soon will I see results?",
      a: "Search ads can show immediate results. Display and video campaigns may take 2-3 weeks to optimize."
    },
    {
      q: "Do you manage the entire campaign?",
      a: "Yes, we handle everything from keyword research to ad creation and ongoing optimization."
    }
  ];

  return (
    <div className="ga-container">
      <Helmet>
      <title>Google Ads Services | Purvsoft Technologies – PPC Campaigns</title>
      <meta name="description" content="Drive qualified traffic with Purvsoft Technologies's Google Ads management. Search ads, display ads, shopping campaigns, and remarketing — all optimized for high ROI." />
      <meta name="keywords" content="Google Ads, PPC campaign, Google AdWords, paid search, display advertising, Google ads management India" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href="https://www.purvsoft.com/services/google-ads" />
 
      <meta property="og:title" content="Google Ads Services | Purvsoft Technologies – PPC Campaigns" />
      <meta property="og:description" content="High-ROI Google Ads — search, display, shopping, and remarketing campaigns by Purvsoft Technologies." />
      <meta property="og:url" content="https://www.purvsoft.com/services/google-ads" />
      <meta property="og:image" content="https://www.purvsoft.com/og-image.jpg" />
 
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Google Ads | Purvsoft Technologies" />
      <meta name="twitter:description" content="Managed Google Ads PPC campaigns by Purvsoft Technologies." />
    </Helmet>

      {/* Hero Section */}
      <section className="ga-hero">
        <div className="ga-wrapper">
          <div className="ga-hero-grid">
            <div className="ga-hero-content">
              <div className="ga-badge">
                <Search size={14} />
                <span>Google Ads Management</span>
              </div>
              <h1 className="ga-hero-title">
                Get Found on <span className="ga-highlight">Google</span>
              </h1>
              <p className="ga-hero-description">
                Reach customers at the exact moment they're searching for your products or services. 
                We create and manage Google Ads campaigns that deliver real, measurable results.
              </p>
              
              <div className="ga-stats-row">
                {stats.map((stat, index) => (
                  <div key={index} className="ga-stat-box">
                    <div className="ga-stat-value">{stat.value}</div>
                    <div className="ga-stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="ga-hero-buttons">
                <a href="#form" className="ga-btn-primary">
                  Contact Us <ArrowRight size={16} />
                </a>
              </div>
            </div>
            
            <div className="ga-hero-visual">
              <div className="ga-search-preview">
                <div className="ga-search-bar">
                  <Search size={16} />
                  <span>digital marketing agency</span>
                </div>
                <div className="ga-ad-preview">
                  <div className="ga-ad-url">www.purvsoft.com</div>
                  <div className="ga-ad-title">Digital Marketing Agency | Purvsoft Technologies</div>
                  <div className="ga-ad-desc">Expert SEO, PPC & Social Media Marketing. Get a Free Quote Today.</div>
                </div>
                <div className="ga-ad-preview">
                  <div className="ga-ad-url">www.purvsoft.com/ads</div>
                  <div className="ga-ad-title">Google Ads Management | Purvsoft</div>
                  <div className="ga-ad-desc">Maximize Your ROI with Professional Google Ads Management.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Networks Section */}
      <section className="ga-networks">
        <div className="ga-wrapper">
          <h2 className="ga-section-title">Google Advertising Networks</h2>
          <p className="ga-section-subtitle">Reach customers across all Google platforms</p>
          
          <div className="ga-networks-grid">
            {networks.map((network, index) => (
              <div key={index} className="ga-network-card">
                <div className="ga-network-icon">{network.icon}</div>
                <h3 className="ga-network-name">{network.name}</h3>
                <p className="ga-network-desc">{network.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Types */}
      <section className="ga-campaigns">
        <div className="ga-wrapper">
          <h2 className="ga-section-title">Campaign Types</h2>
          <p className="ga-section-subtitle">Choose the right campaign for your goals</p>
          
          <div className="ga-campaigns-grid">
            {campaignTypes.map((campaign, index) => (
              <div key={index} className="ga-campaign-item">
                <div className="ga-campaign-icon">{campaign.icon}</div>
                <div>
                  <h3 className="ga-campaign-name">{campaign.name}</h3>
                  <p className="ga-campaign-desc">{campaign.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Targeting Section */}
      <section className="ga-targeting">
        <div className="ga-wrapper">
          <div className="ga-targeting-grid">
            <div className="ga-targeting-content">
              <h2 className="ga-section-title">Advanced Targeting Options</h2>
              <p className="ga-section-subtitle">Reach the right customers at the right time</p>
              
              <ul className="ga-targeting-list">
                {targeting.map((item, index) => (
                  <li key={index}>
                    <CheckCircle size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="ga-targeting-visual">
              <div className="ga-keyword-card">
                <h3>Sample Keywords</h3>
                <div className="ga-keyword-cloud">
                  {keywords.map((keyword, index) => (
                    <span key={index} className="ga-keyword-tag">{keyword}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="ga-benefits">
        <div className="ga-wrapper">
          <h2 className="ga-section-title">Why Google Ads?</h2>
          <p className="ga-section-subtitle">Key benefits for your business</p>
          
          <div className="ga-benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="ga-benefit-item">
                <div className="ga-benefit-icon">{benefit.icon}</div>
                <h3 className="ga-benefit-title">{benefit.title}</h3>
                <p className="ga-benefit-desc">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="ga-process">
        <div className="ga-wrapper">
          <h2 className="ga-section-title">Our Process</h2>
          <p className="ga-section-subtitle">Simple steps to campaign success</p>
          
          <div className="ga-process-grid">
            {steps.map((step, index) => (
              <div key={index} className="ga-process-step">
                <div className="ga-step-number">{step.step}</div>
                <h3 className="ga-step-title">{step.title}</h3>
                <p className="ga-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="ga-faq">
        <div className="ga-wrapper">
          <h2 className="ga-section-title">Frequently Asked Questions</h2>
          
          <div className="ga-faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="ga-faq-item">
                <h3 className="ga-faq-q">{faq.q}</h3>
                <p className="ga-faq-a">{faq.a}</p>
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

export default GoogleAds;