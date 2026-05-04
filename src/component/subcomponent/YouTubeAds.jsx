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
import { Helmet } from 'react-helmet-async';
import Form from '../../config/Form';

// YouTube ad preview image
const youtubePreviewImage = "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop";

const YouTubeAds = () => {

  // ✅ FIX 1: Centralized URL constants — prevents www vs non-www duplicate pages
  const CANONICAL_URL = "https://www.purvsoft.com/services/youtube-marketing";
  const SITE_URL = "https://www.purvsoft.com";

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
    { step: "1", title: "Consultation", desc: "We discuss your goals, budget, and target audience." },
    { step: "2", title: "Strategy", desc: "Create a custom YouTube advertising strategy." },
    { step: "3", title: "Creative", desc: "Produce engaging video ads that convert." },
    { step: "4", title: "Launch", desc: "Set up and launch your campaign." },
    { step: "5", title: "Optimize", desc: "Monitor and optimize for best results." },
    { step: "6", title: "Report", desc: "Detailed performance reports and insights." }
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

  // ✅ FIX 2: Clean structured data — correct address, currency, canonical
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "YouTube Advertising & Marketing Services",
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
    "description": "Professional YouTube advertising and marketing services in Ahmedabad, India. Video ad creation, targeted campaigns, YouTube SEO, and channel management for businesses.",
    "serviceType": [
      "YouTube Ads Management",
      "Video Ad Creation",
      "YouTube SEO",
      "YouTube Channel Management",
      "Video Marketing"
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
        // ✅ FIX 4: Currency changed USD → INR for India-based company
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
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SITE_URL
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": `${SITE_URL}/services`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "YouTube Marketing",
        "item": CANONICAL_URL
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
  const scrollToForm = () => {
  document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
};

  return (
    <div className="ya-container">
      <Helmet>
        {/* ✅ FIX 5: Unique title — includes location, no keyword repetition */}
        <title>YouTube Marketing & Advertising Agency in Ahmedabad | Video Ads | Purvsoft</title>

        {/* ✅ FIX 6: Natural meta description — includes city, no stuffing */}
        <meta
          name="description"
          content="Purvsoft Technologies is a trusted YouTube marketing and advertising agency in Ahmedabad, India. We run targeted video ad campaigns, manage YouTube channels, and grow your brand with proven video marketing strategies."
        />

        {/* ✅ FIX 7: TOP 10 KEYWORDS — research-backed, high-intent, no duplicates */}
        <meta
          name="keywords"
          content="YouTube marketing agency Ahmedabad, YouTube advertising India, video marketing company Gujarat, YouTube ads management India, YouTube SEO services, TrueView ads agency, video ad creation India, YouTube channel management, bumper ads agency India, Purvsoft YouTube marketing"
        />

        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Purvsoft Technologies" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />

        {/* ✅ FIX 8: Canonical using constant — prevents www vs non-www duplicate */}
        <link rel="canonical" href={CANONICAL_URL} />

        {/* ✅ FIX 9: hreflang — correct locale for India */}
        <link rel="alternate" href={CANONICAL_URL} hrefLang="en-IN" />
        <link rel="alternate" href={CANONICAL_URL} hrefLang="x-default" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={CANONICAL_URL} />
        {/* ✅ FIX 10: OG title — unique, no repetition, includes location */}
        <meta property="og:title" content="YouTube Marketing Agency in Ahmedabad | Purvsoft Technologies" />
        <meta
          property="og:description"
          content="Reach over 2 billion monthly users with targeted YouTube video advertising from Ahmedabad. Professional ad management, video creation, and campaign optimization."
        />
        <meta property="og:image" content={`${SITE_URL}/og-youtube-marketing.jpg`} />
        <meta property="og:image:alt" content="Purvsoft YouTube Marketing and Advertising Services - Ahmedabad" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Purvsoft Technologies" />
        {/* ✅ FIX 11: og:locale corrected to en_IN */}
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={CANONICAL_URL} />
        <meta name="twitter:title" content="YouTube Marketing & Advertising | Purvsoft Technologies Ahmedabad" />
        <meta
          name="twitter:description"
          content="Professional YouTube video advertising from Ahmedabad, India. Reach millions, drive conversions, and grow your brand with Purvsoft Technologies."
        />
        <meta name="twitter:image" content={`${SITE_URL}/twitter-youtube-marketing.jpg`} />
        <meta name="twitter:image:alt" content="Purvsoft YouTube Advertising Campaign Preview" />

        {/* Verification */}
        <meta name="google-site-verification" content="MjMKilzhOmqr6Txi7pbjACF6g_hSt-B6Ej496yJyrH0" />
        <meta name="msvalidate.01" content="AD0DF443696FB452E952416667F1A8DC" />

        {/* ✅ FIX 12: Geo tags added — were completely missing in original */}
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
      <section className="ya-hero" aria-label="YouTube Advertising Services Hero Section">
        <div className="ya-wrapper">
          <div className="ya-hero-grid">
            <div className="ya-hero-content" data-aos="fade-right">
              <div className="ya-badge">
                <Play size={14} />
                <span>YouTube Marketing Agency — Ahmedabad</span>
              </div>
              {/* ✅ FIX 13: H1 includes primary keyword + location naturally */}
              <h1 className="ya-hero-title">
                Grow Your Business with <span className="ya-highlight">YouTube Ads</span> in India
              </h1>
              <p className="ya-hero-description">
                Reach over 2 billion monthly active users with targeted video advertising.
                Purvsoft Technologies helps businesses in Ahmedabad and across India create and
                optimize YouTube campaigns that deliver real, measurable results.
              </p>

              <div className="ya-stats-row">
                {stats.map((stat, index) => (
                  <div key={index} className="ya-stat-box" data-aos="fade-up" data-aos-delay={index * 50}>
                    <div className="ya-stat-value">{stat.value}</div>
                    <div className="ya-stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="ya-hero-buttons">
                <button
                    className="ya-btn-primary"
                    onClick={scrollToForm}
                    aria-label="Contact us for YouTube advertising services"
                  >
                    Start Your Campaign <ArrowRight size={16} />
                  </button>
              </div>
            </div>

            <div className="ya-hero-visual" data-aos="fade-left">
              <div className="ya-video-placeholder">
                <img
                  src={youtubePreviewImage}
                  alt="YouTube advertising preview — video ad campaign with engagement metrics by Purvsoft Technologies"
                  className="ya-preview-image"
                  width="400"
                  height="300"
                  loading="eager"
                />
                <Play size={40} className="ya-play-icon" aria-hidden="true" />
                <div className="ya-placeholder-text">YouTube Ad Preview</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="ya-services" aria-label="YouTube Advertising Services">
        <div className="ya-wrapper">
          <div className="section-header">
            <p className="section-subtitle">What We Offer</p>
            <h2 className="ya-section-title">Complete <span className="brand-gradient">YouTube Advertising</span> Solutions</h2>
            <p className="ya-section-subtitle">Professional video ad management from strategy to execution</p>
          </div>
          <div className="ya-services-grid">
            {services.map((service, index) => (
              <div key={index} className="ya-service-item" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="ya-service-icon" aria-hidden="true">{service.icon}</div>
                <h3 className="ya-service-title">{service.title}</h3>
                <p className="ya-service-desc">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Formats */}
      <section className="ya-formats" aria-label="YouTube Ad Formats We Use">
        <div className="ya-wrapper">
          <div className="section-header">
            <p className="section-subtitle">Ad Formats</p>
            <h2 className="ya-section-title"><span className="brand-gradient">Ad Formats</span> We Use</h2>
            <p className="ya-section-subtitle">Choose the right format for your marketing goals</p>
          </div>
          <div className="ya-formats-grid">
            {adFormats.map((format, index) => (
              <div key={index} className="ya-format-item" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="ya-format-icon" aria-hidden="true">{format.icon}</div>
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
      <section className="ya-targeting" aria-label="YouTube Ad Targeting Options">
        <div className="ya-wrapper">
          <div className="ya-targeting-grid">
            <div className="ya-targeting-content" data-aos="fade-right">
              <div className="section-header text-left">
                <p className="section-subtitle">Targeting Capabilities</p>
                <h2 className="ya-section-title">Precise <span className="brand-gradient">Audience Targeting</span></h2>
                <p className="ya-section-subtitle">Reach the right people at the right time with advanced targeting</p>
              </div>
              <ul className="ya-targeting-list">
                {targeting.map((item, index) => (
                  <li key={index} data-aos="fade-up" data-aos-delay={index * 30}>
                    <CheckCircle size={16} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="ya-targeting-visual" data-aos="fade-left">
              <div className="ya-targeting-card">
                <h3>Ideal Customer Profile</h3>
                <div className="ya-demo-targets">
                  <span>Age: 25-45</span>
                  <span>Gender: All</span>
                  <span>Location: USA, UK, Canada</span>
                  <span>Interests: Technology, Business</span>
                  <span>Device: Mobile & Desktop</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="ya-benefits" aria-label="Benefits of YouTube Advertising">
        <div className="ya-wrapper">
          <div className="section-header">
            <p className="section-subtitle">Key Advantages</p>
            <h2 className="ya-section-title">Why Advertise on <span className="brand-gradient">YouTube?</span></h2>
            <p className="ya-section-subtitle">Key benefits for your business growth</p>
          </div>
          <div className="ya-benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="ya-benefit-item" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="ya-benefit-icon" aria-hidden="true">{benefit.icon}</div>
                <h3 className="ya-benefit-title">{benefit.title}</h3>
                <p className="ya-benefit-desc">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="ya-industries" aria-label="Industries We Serve for YouTube Marketing">
        <div className="ya-wrapper">
          <div className="section-header">
            <p className="section-subtitle">Our Expertise</p>
            <h2 className="ya-section-title">Industries <span className="brand-gradient">We Serve</span></h2>
            <p className="ya-section-subtitle">Successful YouTube ad campaigns across various sectors</p>
          </div>
          <div className="ya-industries-grid">
            {industries.map((industry, index) => (
              <div key={index} className="ya-industry-tag" data-aos="zoom-in" data-aos-delay={index * 50}>
                {industry.icon}
                <span>{industry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="ya-process" aria-label="YouTube Ad Campaign Process">
        <div className="ya-wrapper">
          <div className="section-header">
            <p className="section-subtitle">Our Methodology</p>
            <h2 className="ya-section-title">Our <span className="brand-gradient">Process</span></h2>
            <p className="ya-section-subtitle">Simple steps to YouTube advertising success</p>
          </div>
          <div className="ya-process-grid">
            {steps.map((step, index) => (
              <div key={index} className="ya-process-step" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="ya-step-number">{step.step}</div>
                <h3 className="ya-step-title">{step.title}</h3>
                <p className="ya-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="ya-faq" aria-label="YouTube Advertising FAQs">
        <div className="ya-wrapper">
          <div className="section-header">
            <p className="section-subtitle">Common Questions</p>
            <h2 className="ya-section-title">Frequently Asked <span className="brand-gradient">Questions</span></h2>
            <p className="ya-section-subtitle">Get answers about YouTube advertising costs, timelines, and more</p>
          </div>
          <div className="ya-faq-grid">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="ya-faq-item"
                data-aos="fade-up"
                data-aos-delay={index * 50}
                itemScope
                itemType="https://schema.org/Question"
              >
                <h3 className="ya-faq-q" itemProp="name">{faq.q}</h3>
                <div
                  className="ya-faq-a"
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

export default YouTubeAds;