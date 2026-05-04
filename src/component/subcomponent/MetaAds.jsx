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
import { Helmet } from 'react-helmet-async';
import Form from "../../config/Form";

// Meta ads preview image
const metaAdsPreviewImage = "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=500&h=400&fit=crop";

const MetaAds = () => {

  // ✅ FIX 1: Centralized URL constants — prevents www vs non-www duplicate pages
  const CANONICAL_URL = "https://www.purvsoft.com/services/meta-ads";
  const SITE_URL = "https://www.purvsoft.com";

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
const scrollToForm = () => {
  document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
};

  const adFormats = [
    { icon: <Image size={20} />, name: "Image Ads", desc: "Single images that capture attention." },
    { icon: <Video size={20} />, name: "Video Ads", desc: "Engaging video content up to 240 minutes." },
    { icon: <Grid size={20} />, name: "Carousel Ads", desc: "Showcase multiple products or features." },
    { icon: <ShoppingBag size={20} />, name: "Collection Ads", desc: "Browse and purchase directly from ads." },
    { icon: <Play size={20} />, name: "Stories Ads", desc: "Full-screen vertical ads for Stories." },
    { icon: <MessageCircle size={20} />, name: "Messenger Ads", desc: "Start conversations with customers." }
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
    { icon: <Users size={24} />, title: "3.9B+ Users", desc: "Combined reach across Meta platforms." },
    { icon: <Target size={24} />, title: "Precise Targeting", desc: "Advanced targeting options for better ROI." },
    { icon: <DollarSign size={24} />, title: "Flexible Budget", desc: "Start with any budget, scale as you grow." },
    { icon: <BarChart3 size={24} />, title: "Detailed Analytics", desc: "Track every metric that matters." }
  ];

  const objectives = [
    "Brand Awareness", "Reach", "Traffic", "Engagement",
    "App Installs", "Video Views", "Lead Generation",
    "Messages", "Conversions", "Catalog Sales", "Store Traffic"
  ];

  const stats = [
    { value: '3.9B+', label: 'Monthly Active Users' },
    { value: '10M+', label: 'Active Advertisers' },
    { value: '2x', label: 'Average ROI' },
    { value: '98%', label: 'Client Satisfaction' }
  ];

  const steps = [
    { step: "1", title: "Strategy", desc: "Define goals and target audience." },
    { step: "2", title: "Creative", desc: "Design engaging ad creatives." },
    { step: "3", title: "Setup", desc: "Configure campaign settings and pixel." },
    { step: "4", title: "Launch", desc: "Go live with your campaign." },
    { step: "5", title: "Optimize", desc: "Monitor and improve performance." },
    { step: "6", title: "Report", desc: "Detailed performance reports and insights." }
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
      a: "It depends on your audience and goals. We'll recommend the best mix of Meta platforms."
    }
  ];

  // ✅ FIX 2: Clean structured data — correct address, currency, URL constants
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Meta Ads & Social Media Advertising Services",
    "provider": {
      "@type": "Organization",
      "name": "Purvsoft Technologies",
      "url": SITE_URL,
      "logo": `${SITE_URL}/logo.png`,
      // ✅ FIX 3: Address added — was completely missing in original
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ahmedabad",
        "addressRegion": "Gujarat",
        "addressCountry": "IN"
      }
    },
    "description": "Professional Meta advertising services in Ahmedabad, India. Facebook Ads, Instagram Ads, and Messenger Ads with targeted campaigns, lookalike audiences, and conversion optimization for maximum ROI.",
    "serviceType": [
      "Facebook Advertising",
      "Instagram Advertising",
      "Meta Ads Management",
      "Social Media Marketing",
      "Retargeting Campaigns"
    ],
    "areaServed": "Worldwide",
    "audience": {
      "@type": "BusinessAudience"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceSpecification": {
        "@type": "PriceSpecification",
        // ✅ FIX 4: Currency USD → INR for India-based company
        "priceCurrency": "INR",
        "price": "Custom"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": CANONICAL_URL
    },
    "potentialAction": {
      "@type": "CommunicateAction",
      "name": "Contact",
      "target": `${SITE_URL}/contact`
    }
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": `${SITE_URL}/services` },
      { "@type": "ListItem", "position": 3, "name": "Meta Ads", "item": CANONICAL_URL }
    ]
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a }
    }))
  };

  return (
    <div className="ma-container">
      <Helmet>
        {/* ✅ FIX 5: Unique title — includes Ahmedabad, no keyword repetition */}
        <title>Meta Ads Agency in Ahmedabad | Facebook & Instagram Advertising | Purvsoft</title>

        {/* ✅ FIX 6: Natural meta description — includes city, no stuffing */}
        <meta
          name="description"
          content="Purvsoft Technologies is a trusted Meta ads agency in Ahmedabad, India. We run high-converting Facebook and Instagram ad campaigns with precise targeting, creative production, and ROAS-focused optimization."
        />

        {/* ✅ FIX 7: TOP 10 KEYWORDS — research-backed, high-intent, no duplicates */}
        <meta
          name="keywords"
          content="Meta ads agency Ahmedabad, Facebook advertising India, Instagram ads management Gujarat, social media advertising agency India, Facebook marketing company Ahmedabad, retargeting ads India, lookalike audience campaigns, Meta ads management India, Instagram advertising agency, Purvsoft Meta ads"
        />

        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Purvsoft Technologies" />
        <meta name="language" content="English" />

        {/* ✅ FIX 8: Single canonical using constant — prevents duplicate URLs */}
        <link rel="canonical" href={CANONICAL_URL} />

        {/* ✅ FIX 9: hreflang — correct locale for India (was missing) */}
        <link rel="alternate" href={CANONICAL_URL} hrefLang="en-IN" />
        <link rel="alternate" href={CANONICAL_URL} hrefLang="x-default" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={CANONICAL_URL} />
        {/* ✅ FIX 10: OG title — unique, shorter, includes Ahmedabad */}
        <meta property="og:title" content="Meta Ads Agency in Ahmedabad | Facebook & Instagram | Purvsoft" />
        <meta
          property="og:description"
          content="Reach over 3.9 billion users with targeted Facebook and Instagram ads from Ahmedabad. Purvsoft Technologies — expert Meta advertising for maximum ROAS."
        />
        <meta property="og:image" content={`${SITE_URL}/og-meta-ads.jpg`} />
        <meta property="og:image:alt" content="Purvsoft Meta Advertising Services — Facebook and Instagram Ads Ahmedabad" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Purvsoft Technologies" />
        {/* ✅ FIX 11: og:locale corrected en_US → en_IN */}
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={CANONICAL_URL} />
        <meta name="twitter:title" content="Meta Ads Agency Ahmedabad | Facebook & Instagram | Purvsoft" />
        <meta
          name="twitter:description"
          content="Professional Facebook and Instagram advertising from Ahmedabad, India. Reach billions, drive conversions, and grow your brand with Purvsoft Technologies."
        />
        <meta name="twitter:image" content={`${SITE_URL}/twitter-meta-ads.jpg`} />
        <meta name="twitter:image:alt" content="Purvsoft Meta Advertising Campaign Preview" />

        {/* Verification */}
        <meta name="google-site-verification" content="MjMKilzhOmqr6Txi7pbjACF6g_hSt-B6Ej496yJyrH0" />
        <meta name="msvalidate.01" content="AD0DF443696FB452E952416667F1A8DC" />

        {/* ✅ FIX 12: Geo tags corrected — was IN-MH / Pune, now correct Ahmedabad */}
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Ahmedabad" />
        <meta name="geo.position" content="23.0225;72.5714" />
        <meta name="ICBM" content="23.0225, 72.5714" />

        {/* Mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
      </Helmet>

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbData)}</script>
      <script type="application/ld+json">{JSON.stringify(faqStructuredData)}</script>

      {/* Hero Section */}
      <section className="ma-hero" aria-label="Meta Advertising Services Hero Section">
        <div className="ma-wrapper">
          <div className="ma-hero-grid">
            <div className="ma-hero-content" data-aos="fade-right">
              <div className="ma-badge">
                <Facebook size={14} aria-hidden="true" />
                <Instagram size={14} aria-hidden="true" />
                {/* ✅ FIX 13: Badge includes location */}
                <span>Meta Ads Agency — Ahmedabad</span>
              </div>
              {/* ✅ FIX 14: H1 includes primary keyword + location naturally */}
              <h1 className="ma-hero-title">
                Top Meta Ads Agency in Ahmedabad — <span className="ma-highlight">Facebook & Instagram Advertising</span>
              </h1>
              <p className="ma-hero-description">
                Connect with over 3.9 billion people across Facebook, Instagram, and Messenger.
                Purvsoft Technologies creates targeted Meta ad campaigns in Ahmedabad that drive
                real leads, sales, and measurable business results.
              </p>

              <div className="ma-stats-row">
                {stats.map((stat, index) => (
                  <div key={index} className="ma-stat-box" data-aos="fade-up" data-aos-delay={index * 50}>
                    <div className="ma-stat-value">{stat.value}</div>
                    <div className="ma-stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="ma-hero-buttons">
                <button
                  className="ma-btn-primary"
                  onClick={scrollToForm}
                  aria-label="Contact us for Meta advertising services"
                >
                  Start Your Campaign <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div className="ma-hero-visual" data-aos="fade-left">
              <div className="ma-platform-grid">
                <img
                  src={metaAdsPreviewImage}
                  alt="Meta advertising preview — Facebook and Instagram ad campaign by Purvsoft Technologies Ahmedabad"
                  className="ma-preview-image"
                  width="400"
                  height="350"
                  loading="eager"
                />
                <div className="ma-platform-icon facebook" aria-hidden="true"><Facebook size={32} /></div>
                <div className="ma-platform-icon instagram" aria-hidden="true"><Instagram size={32} /></div>
                <div className="ma-platform-icon messenger" aria-hidden="true"><MessageCircle size={32} /></div>
                <div className="ma-platform-icon audience" aria-hidden="true"><Grid size={32} /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="ma-platforms" aria-label="Meta Advertising Platforms">
        <div className="ma-wrapper">
          <div className="section-header">
            <p className="section-subtitle">Advertising Platforms</p>
            <h2 className="ma-section-title">Platforms <span className="brand-gradient">We Work With</span></h2>
            <p className="ma-section-subtitle">Reach your audience where they spend their time</p>
          </div>
          <div className="ma-platforms-grid">
            {platforms.map((platform, index) => (
              <div key={index} className="ma-platform-card" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="ma-platform-card-icon" aria-hidden="true">{platform.icon}</div>
                <h3 className="ma-platform-card-title">{platform.name}</h3>
                <p className="ma-platform-card-desc">{platform.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Formats */}
      <section className="ma-formats" aria-label="Meta Ad Formats">
        <div className="ma-wrapper">
          <div className="section-header">
            <p className="section-subtitle">Ad Formats</p>
            <h2 className="ma-section-title">Ad Formats <span className="brand-gradient">That Work</span></h2>
            <p className="ma-section-subtitle">Choose the right format for your message</p>
          </div>
          <div className="ma-formats-grid">
            {adFormats.map((format, index) => (
              <div key={index} className="ma-format-item" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="ma-format-icon" aria-hidden="true">{format.icon}</div>
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
      <section className="ma-targeting" aria-label="Meta Ad Targeting Options">
        <div className="ma-wrapper">
          <div className="ma-targeting-grid">
            <div className="ma-targeting-content" data-aos="fade-right">
              <div className="section-header text-left">
                <p className="section-subtitle">Targeting Capabilities</p>
                <h2 className="ma-section-title">Advanced <span className="brand-gradient">Targeting Options</span></h2>
                <p className="ma-section-subtitle">Find your perfect customers with precision targeting</p>
              </div>
              <ul className="ma-targeting-list">
                {targeting.map((item, index) => (
                  <li key={index} data-aos="fade-up" data-aos-delay={index * 30}>
                    <CheckCircle size={16} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="ma-targeting-visual" data-aos="fade-left">
              <div className="ma-audience-card">
                <h3>Your Ideal Audience</h3>
                <div className="ma-audience-demo">
                  <div className="ma-demo-item">
                    <span className="ma-demo-label">Location:</span>
                    <span className="ma-demo-value">India & Worldwide</span>
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
      <section className="ma-benefits" aria-label="Benefits of Meta Advertising">
        <div className="ma-wrapper">
          <div className="section-header">
            <p className="section-subtitle">Key Advantages</p>
            <h2 className="ma-section-title">Why Advertise on <span className="brand-gradient">Meta?</span></h2>
            <p className="ma-section-subtitle">Key benefits for your business growth</p>
          </div>
          <div className="ma-benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="ma-benefit-item" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="ma-benefit-icon" aria-hidden="true">{benefit.icon}</div>
                <h3 className="ma-benefit-title">{benefit.title}</h3>
                <p className="ma-benefit-desc">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Objectives */}
      <section className="ma-objectives" aria-label="Meta Campaign Objectives">
        <div className="ma-wrapper">
          <div className="section-header">
            <p className="section-subtitle">Campaign Goals</p>
            <h2 className="ma-section-title">Campaign <span className="brand-gradient">Objectives</span></h2>
            <p className="ma-section-subtitle">Choose what matters most to your business</p>
          </div>
          <div className="ma-objectives-grid">
            {objectives.map((objective, index) => (
              <div key={index} className="ma-objective-tag" data-aos="zoom-in" data-aos-delay={index * 30}>
                {objective}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="ma-process" aria-label="Meta Ads Management Process">
        <div className="ma-wrapper">
          <div className="section-header">
            <p className="section-subtitle">Our Methodology</p>
            <h2 className="ma-section-title">Our <span className="brand-gradient">Process</span></h2>
            <p className="ma-section-subtitle">Simple steps to campaign success</p>
          </div>
          <div className="ma-process-grid">
            {steps.map((step, index) => (
              <div key={index} className="ma-process-step" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="ma-step-number">{step.step}</div>
                <h3 className="ma-step-title">{step.title}</h3>
                <p className="ma-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="ma-faq" aria-label="Meta Ads FAQs">
        <div className="ma-wrapper">
          <div className="section-header">
            <p className="section-subtitle">Common Questions</p>
            <h2 className="ma-section-title">Frequently Asked <span className="brand-gradient">Questions</span></h2>
            <p className="ma-section-subtitle">Get answers about Meta advertising costs, targeting, and more</p>
          </div>
          <div className="ma-faq-grid">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="ma-faq-item"
                data-aos="fade-up"
                data-aos-delay={index * 50}
                itemScope
                itemType="https://schema.org/Question"
              >
                <h3 className="ma-faq-q" itemProp="name">{faq.q}</h3>
                <div
                  className="ma-faq-a"
                  itemProp="acceptedAnswer"
                  itemScope
                  itemType="https://schema.org/Answer"
                >
                  <p itemProp="text">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact Form */}
      <div id="form">
        <Form />
      </div>
    </div>
  );
};

export default MetaAds;