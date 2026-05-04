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
  const scrollToForm = () => {
  document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
};
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

  // JSON-LD Structured Data for Google Ads Service
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Google Ads Management & PPC Services",
    "provider": {
      "@type": "Organization",
      "name": "Purvsoft Technologies",
      "url": "https://www.purvsoft.com",
      "logo": "https://www.purvsoft.com/logo.png"
    },
    "description": "Professional Google Ads management services including Search Ads, Display Ads, Shopping Campaigns, YouTube Ads, and Remarketing. Maximize ROI with expert PPC campaign management.",
    "serviceType": ["Google Search Ads", "Display Advertising", "Shopping Campaigns", "YouTube Ads", "Remarketing", "PPC Management"],
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
      "@id": "https://www.purvsoft.com/services/google-ads"
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
        "name": "Google Ads",
        "item": "https://www.purvsoft.com/services/google-ads"
      }
    ]
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };
  

  return (
    <div className="ga-container">
     <Helmet>
  {/* Primary Meta Tags */}
  <title>Google Ads Management Services | PPC Agency Ahmedabad | Purvsoft</title>
  <meta name="title" content="Google Ads Management Services | PPC Agency Ahmedabad | Purvsoft" />
  <meta name="description" content="Purvsoft Technologies offers professional Google Ads management services in Ahmedabad, Gujarat. Run search ads, display campaigns, shopping ads, and remarketing to drive qualified traffic and maximize ROI." />
  <meta name="keywords" content="Google Ads, PPC management, Google Ads services, search advertising, display advertising, shopping campaigns, YouTube ads, remarketing, pay per click, Google Ads agency Ahmedabad, Google Ads agency Gujarat, Purvsoft Google Ads" />
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
  <meta name="author" content="Purvsoft Technologies" />
  <meta name="language" content="English" />
  
  {/* ✅ Canonical URL - FIX DUPLICATE ISSUE */}
  <link rel="canonical" href="https://www.purvsoft.com/services/google-ads" />
  
  {/* ✅ Alternate language versions */}
  <link rel="alternate" href="https://www.purvsoft.com/services/google-ads" hrefLang="x-default" />
  
  {/* Open Graph / Facebook Meta Tags */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.purvsoft.com/services/google-ads" />
  <meta property="og:title" content="Google Ads Management | PPC Agency Ahmedabad | Purvsoft" />
  <meta property="og:description" content="Drive qualified traffic with professional Google Ads management. Search ads, display campaigns, shopping ads, and remarketing for maximum ROI." />
  <meta property="og:image" content="https://www.purvsoft.com/og-google-ads.jpg" />
  <meta property="og:image:alt" content="Google Ads Management Services - PPC Campaign Preview" />
  <meta property="og:site_name" content="Purvsoft Technologies" />
  <meta property="og:locale" content="en_IN" />
  
  {/* Twitter Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://www.purvsoft.com/services/google-ads" />
  <meta name="twitter:title" content="Google Ads Management | PPC Agency Ahmedabad" />
  <meta name="twitter:description" content="Professional Google Ads management. Search, display, shopping, and remarketing campaigns optimized for high ROI." />
  <meta name="twitter:image" content="https://www.purvsoft.com/twitter-google-ads.jpg" />
  
  {/* ✅ Verification tags */}
  <meta name="google-site-verification" content="MjMKilzhOmqr6Txi7pbjACF6g_hSt-B6Ej496yJyrH0" />
  <meta name="msvalidate.01" content="AD0DF443696FB452E952416667F1A8DC" />
  
  {/* ✅ Geographic Meta Tags - FIXED to Ahmedabad */}
  <meta name="geo.region" content="IN-GJ" />
  <meta name="geo.placename" content="Ahmedabad" />
  <meta name="geo.position" content="23.0225;72.5714" />
  <meta name="ICBM" content="23.0225, 72.5714" />
  
  {/* ✅ Mobile Optimization */}
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
  
  {/* ✅ Prevent duplicate issues - Add this */}
  <meta name="googlebot" content="index, follow" />
</Helmet>

      {/* JSON-LD Structured Data */}
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
      <section className="ga-hero" aria-label="Google Ads Management Services Hero Section">
        <div className="ga-wrapper">
          <div className="ga-hero-grid">
            <div className="ga-hero-content" data-aos="fade-right">
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
                  <div key={index} className="ga-stat-box" data-aos="fade-up" data-aos-delay={index * 50}>
                    <div className="ga-stat-value">{stat.value}</div>
                    <div className="ga-stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="ga-hero-buttons">
                <button
                  className="ga-btn-primary"
                  onClick={scrollToForm}
                  aria-label="Contact us for Google Ads management"
                >
                  Contact Us <ArrowRight size={16} />
                </button>
              </div>
            </div>
            
            <div className="ga-hero-visual" data-aos="fade-left">
              <div className="ga-search-preview">
                <div className="ga-search-bar">
                  <Search size={16} aria-hidden="true" />
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
      <section className="ga-networks" aria-label="Google Advertising Networks">
        <div className="ga-wrapper">
          <div className="section-header">
            <p className="section-subtitle">Advertising Networks</p>
            <h2 className="ga-section-title">Google <span className="brand-gradient">Advertising Networks</span></h2>
            <p className="ga-section-subtitle">Reach customers across all Google platforms</p>
          </div>
          
          <div className="ga-networks-grid">
            {networks.map((network, index) => (
              <div key={index} className="ga-network-card" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="ga-network-icon" aria-hidden="true">{network.icon}</div>
                <h3 className="ga-network-name">{network.name}</h3>
                <p className="ga-network-desc">{network.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Types */}
      <section className="ga-campaigns" aria-label="Google Ads Campaign Types">
        <div className="ga-wrapper">
          <div className="section-header">
            <p className="section-subtitle">Campaign Solutions</p>
            <h2 className="ga-section-title"><span className="brand-gradient">Campaign Types</span></h2>
            <p className="ga-section-subtitle">Choose the right campaign for your business goals</p>
          </div>
          
          <div className="ga-campaigns-grid">
            {campaignTypes.map((campaign, index) => (
              <div key={index} className="ga-campaign-item" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="ga-campaign-icon" aria-hidden="true">{campaign.icon}</div>
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
      <section className="ga-targeting" aria-label="Google Ads Targeting Options">
        <div className="ga-wrapper">
          <div className="ga-targeting-grid">
            <div className="ga-targeting-content" data-aos="fade-right">
              <div className="section-header text-left">
                <p className="section-subtitle">Targeting Capabilities</p>
                <h2 className="ga-section-title">Advanced <span className="brand-gradient">Targeting Options</span></h2>
                <p className="ga-section-subtitle">Reach the right customers at the right time with precision targeting</p>
              </div>
              
              <ul className="ga-targeting-list">
                {targeting.map((item, index) => (
                  <li key={index} data-aos="fade-up" data-aos-delay={index * 30}>
                    <CheckCircle size={16} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="ga-targeting-visual" data-aos="fade-left">
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
      <section className="ga-benefits" aria-label="Benefits of Google Advertising">
        <div className="ga-wrapper">
          <div className="section-header">
            <p className="section-subtitle">Key Advantages</p>
            <h2 className="ga-section-title">Why <span className="brand-gradient">Google Ads?</span></h2>
            <p className="ga-section-subtitle">Key benefits for your business growth</p>
          </div>
          
          <div className="ga-benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="ga-benefit-item" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="ga-benefit-icon" aria-hidden="true">{benefit.icon}</div>
                <h3 className="ga-benefit-title">{benefit.title}</h3>
                <p className="ga-benefit-desc">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="ga-process" aria-label="Google Ads Management Process">
        <div className="ga-wrapper">
          <div className="section-header">
            <p className="section-subtitle">Our Methodology</p>
            <h2 className="ga-section-title">Our <span className="brand-gradient">Process</span></h2>
            <p className="ga-section-subtitle">Simple steps to campaign success</p>
          </div>
          
          <div className="ga-process-grid">
            {steps.map((step, index) => (
              <div key={index} className="ga-process-step" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="ga-step-number">{step.step}</div>
                <h3 className="ga-step-title">{step.title}</h3>
                <p className="ga-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="ga-faq" aria-label="Google Ads FAQs">
        <div className="ga-wrapper">
          <div className="section-header">
            <p className="section-subtitle">Common Questions</p>
            <h2 className="ga-section-title">Frequently Asked <span className="brand-gradient">Questions</span></h2>
            <p className="ga-section-subtitle">Get answers about Google Ads costs, targeting, and campaign management</p>
          </div>
          
          <div className="ga-faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="ga-faq-item" data-aos="fade-up" data-aos-delay={index * 50} itemScope itemType="https://schema.org/Question">
                <h3 className="ga-faq-q" itemProp="name">{faq.q}</h3>
                <div className="ga-faq-a" itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                  <p itemProp="text">{faq.a}</p>
                </div>
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