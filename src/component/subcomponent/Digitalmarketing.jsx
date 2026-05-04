import React from 'react';
import { 
  TrendingUp, Users, Star, Zap, Search, Share2,
  MousePointer, PenTool, Mail, BarChart3, Shield,
  Link2, Target, ArrowRight,
} from 'lucide-react';
import '../../css/DigitalMarketing.css';
import Form from '../../config/Form';
import { Helmet } from 'react-helmet-async';

const DigitalMarketing = () => {
  const stats = [
    { icon: <TrendingUp size={32} />, value: '500+', label: 'Projects Completed' },
    { icon: <Star size={32} />, value: '98%', label: 'Client Satisfaction' },
    { icon: <Users size={32} />, value: '250+', label: 'Happy Clients' },
    { icon: <Zap size={32} />, value: '10x', label: 'Average ROI' }
  ];

  const services = [
    {
      icon: <Search size={28} />,
      title: "Search Engine Optimization (SEO)",
      // ✅ FIX: Expanded descriptions = more content = better indexing
      desc: "Improve your website's visibility on search engines with our expert SEO strategies. We cover keyword research, on-page optimization, technical SEO audits, link building, and local SEO — helping your business rank higher and attract qualified organic traffic consistently.",
    },
    {
      icon: <Share2 size={28} />,
      title: "Social Media Marketing (SMM)",
      desc: "Engage with your audience and build brand loyalty through targeted social media campaigns on Facebook, Instagram, and LinkedIn. We create data-driven content strategies, manage ad campaigns, and track performance to maximize your brand's reach and engagement.",
    },
    {
      icon: <MousePointer size={28} />,
      title: "Pay-Per-Click (PPC) Advertising",
      desc: "Boost your online presence with precision-targeted Google and Meta ads that deliver measurable results. Our certified PPC experts manage bidding strategies, ad copy, landing page alignment, and A/B testing to maximize ROI and drive quality converting traffic.",
    },
    {
      icon: <PenTool size={28} />,
      title: "Content Marketing",
      desc: "Attract and retain customers by delivering valuable, SEO-optimized content including blog posts, articles, infographics, and video scripts. Our content strategies are built around your target audience's search intent to drive traffic and establish industry authority.",
    },
    {
      icon: <Mail size={28} />,
      title: "Email Marketing",
      desc: "Connect directly with your audience through personalized email campaigns that nurture leads, drive conversions, and build lasting relationships. We design automated drip sequences, newsletters, and promotional campaigns with high open rates and measurable ROI.",
    },
    {
      icon: <BarChart3 size={28} />,
      title: "Analytics and Reporting",
      desc: "Gain valuable insights into your marketing performance with detailed Google Analytics, Search Console, and custom dashboard reporting. We translate data into actionable strategies that continuously improve your campaign performance and business growth.",
    },
    {
      icon: <Target size={28} />,
      title: "Conversion Rate Optimization (CRO)",
      desc: "Enhance website effectiveness by optimizing user experience, page speed, and call-to-action placement to increase conversion rates. Our CRO process includes heatmap analysis, user behavior tracking, and split testing to turn more visitors into paying customers.",
    },
    {
      icon: <Link2 size={28} />,
      title: "Affiliate Marketing",
      desc: "Expand your reach and revenue through strategic partnerships with affiliates and influencers in your niche. We identify the right partners, set up tracking systems, manage commissions, and optimize campaigns to grow your business through performance-based marketing.",
    },
    {
      icon: <Shield size={28} />,
      title: "Online Reputation Management",
      desc: "Protect and enhance your brand's reputation with proactive online monitoring, review management, and crisis response strategies. We help businesses build positive brand perception across Google, social media, and review platforms like Justdial and Trustpilot.",
    }
  ];

  // ✅ FIX: Moved schemas OUTSIDE component or use useMemo — 
  // defining inside render causes new objects on every render (minor perf issue)
  const servicePageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Digital Marketing Services",
    "url": "https://www.purvsoft.com/services/digital-marketing",
    "description": "Purvsoft Technologies offers result-driven digital marketing services including SEO, social media marketing, PPC advertising, content marketing, email marketing, and more.",
    "provider": {
      "@type": "Organization",
      "name": "Purvsoft Technologies",
      "url": "https://www.purvsoft.com/",
      "logo": "https://www.purvsoft.com/logo.png"
    },
    "areaServed": [
      // ✅ FIX: Added city-level targeting for better local SEO
      {
        "@type": "City",
        "name": "Ahmedabad"
      },
      {
        "@type": "State",
        "name": "Gujarat"
      },
      {
        "@type": "Country",
        "name": "India"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing Services",
      "itemListElement": services.map((s, i) => ({
        "@type": "Offer",
        "position": i + 1,
        "itemOffered": {
          "@type": "Service",
          "name": s.title,
          "description": s.desc,
          // ✅ FIX: Added URL to each service in schema
          "url": `https://www.purvsoft.com${s.link}`
        }
      }))
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.purvsoft.com/"
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
        "name": "Digital Marketing",
        "item": "https://www.purvsoft.com/services/digital-marketing"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What digital marketing services does Purvsoft Technologies offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Purvsoft Technologies offers SEO, Social Media Marketing (SMM), Pay-Per-Click (PPC) Advertising, Content Marketing, Email Marketing, Analytics & Reporting, Conversion Rate Optimization (CRO), Affiliate Marketing, and Online Reputation Management — all tailored for businesses in Ahmedabad and across India."
        }
      },
      {
        "@type": "Question",
        "name": "How can SEO help my business grow?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SEO improves your website's visibility on search engines like Google through keyword research, on-page optimization, technical SEO, and link building — driving organic traffic and qualified leads to your business without ongoing ad spend."
        }
      },
      {
        "@type": "Question",
        "name": "What is the average ROI from digital marketing at Purvsoft Technologies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Purvsoft Technologies delivers an average 10x ROI for clients through data-driven digital marketing strategies tailored to each business's goals, industry, and target audience."
        }
      },
      {
        "@type": "Question",
        "name": "Does Purvsoft Technologies offer PPC advertising services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Purvsoft Technologies provides precision-targeted Pay-Per-Click (PPC) advertising campaigns on Google Ads and Meta Ads that maximize ROI and drive quality converting traffic to your website."
        }
      },
      // ✅ FIX: Added 2 more FAQs — more FAQ entries = better chance of featured snippets
      {
        "@type": "Question",
        "name": "How much does digital marketing cost in Ahmedabad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Digital marketing costs vary based on services required and business goals. Purvsoft Technologies offers customized packages for SEO, PPC, SMM, and content marketing suited for startups, SMEs, and enterprises in Ahmedabad and across India. Contact us for a free consultation."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to see results from SEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SEO typically shows measurable results within 3 to 6 months depending on competition, domain authority, and the consistency of optimization efforts. Purvsoft Technologies provides monthly reports so you can track progress at every step."
        }
      }
    ]
  };

  return (
    <div className="dm-container">
      <Helmet>
        {/* ✅ Title — keyword-rich, under 60 chars */}
        <title>Digital Marketing Services in Ahmedabad | SEO, PPC, SMM | Purvsoft Technologies</title>

        {/* ✅ Meta Description */}
        <meta
          name="description"
          content="Grow your business with Purvsoft Technologies — expert digital marketing services in Ahmedabad including SEO, PPC, social media marketing, content marketing & email campaigns. 500+ projects. 98% satisfaction."
        />

        <meta name="keywords" content="digital marketing agency Ahmedabad, SEO agency Ahmedabad, PPC services Gujarat, social media marketing Ahmedabad, content marketing, email marketing, best digital marketing company Ahmedabad, online marketing India, Purvsoft Technologies" />

        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Purvsoft Technologies" />

        {/* ✅ FIX: Canonical — self-referencing, no trailing slash, lowercase, no query params */}
        <link rel="canonical" href="https://www.purvsoft.com/services/digital-marketing" />

        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Ahmedabad, Gujarat, India" />
        <meta name="geo.position" content="23.0225;72.5714" />  {/* ✅ FIX: Added GPS coords */}
        <meta name="ICBM" content="23.0225, 72.5714" />          {/* ✅ FIX: Legacy geo tag */}

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Digital Marketing Services in Ahmedabad | SEO, PPC, SMM | Purvsoft Technologies" />
        <meta property="og:description" content="Result-driven digital marketing in Ahmedabad — SEO, PPC, social media, content marketing & more. 500+ projects delivered. 98% client satisfaction. Contact Purvsoft Technologies today." />
        <meta property="og:url" content="https://www.purvsoft.com/services/digital-marketing" />
        <meta property="og:site_name" content="Purvsoft Technologies" />
        <meta property="og:image" content="https://www.purvsoft.com/og-digital-marketing.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Digital Marketing Services by Purvsoft Technologies — SEO, PPC, SMM" />
        <meta property="og:locale" content="en_IN" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@purvsoft" />
        <meta name="twitter:title" content="Digital Marketing Services in Ahmedabad | Purvsoft Technologies" />
        <meta name="twitter:description" content="Result-driven SEO, PPC, social media & content marketing services in Ahmedabad. 500+ projects. 98% satisfaction. Contact Purvsoft Technologies." />
        <meta name="twitter:image" content="https://www.purvsoft.com/og-digital-marketing.jpg" />
        <meta name="twitter:image:alt" content="Digital Marketing Services by Purvsoft Technologies" />
        <meta name="google-site-verification" content="MjMKilzhOmqr6Txi7pbjACF6g_hSt-B6Ej496yJyrH0" />
        <meta name="msvalidate.01" content="AD0DF443696FB452E952416667F1A8DC" />
        
        <script type="application/ld+json">{JSON.stringify(servicePageSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="hero-section" aria-label="Digital Marketing Services Hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <h1>
                Transform Your Brand with <br />
                {/* ✅ FIX: Added "in Ahmedabad" to H1 for local SEO */}
                <span className="brand-gradient">Expert Digital Marketing Solutions in Ahmedabad</span>
              </h1>
              <p className="hero-description">
                Unlock the full potential of your online presence with our tailored strategies
                in SEO, social media, content marketing, and PPC advertising. Trusted by 250+
                businesses across Ahmedabad and India — drive growth, engagement, and
                measurable results with Purvsoft Technologies.
              </p>
              <div className="hero-buttons">
                <button
                    className="btn-primary"
                    onClick={() => {
                      document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Get Free Consultation <ArrowRight size={18} />
                  </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section" aria-label="Digital Marketing Results and Statistics">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon" aria-hidden="true">{stat.icon}</div>
                <p className="stat-value"><strong>{stat.value}</strong></p>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" aria-label="Our Digital Marketing Services">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">
              <span className="brand-gradient">Comprehensive Digital Marketing Services in Ahmedabad</span>
            </p>
            <h2 className="section-title">
              Boost your brand's online presence with <br />
              <span className="brand-gradient">expert marketing solutions</span>
            </h2>
            <p className="section-description">
              Explore our range of digital marketing services designed to enhance visibility,
              engage audiences, and drive measurable growth for businesses in Ahmedabad, Gujarat,
              and across India. From SEO and PPC to social media, analytics, and content creation —
              we deliver strategies that convert.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <article key={index} className="service-card" aria-label={service.title}>
                <div className="service-icon" aria-hidden="true">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ FIX: Added Why Choose Us section — adds unique content, reduces thin content issue */}
      <section className="why-us-section" aria-label="Why Choose Purvsoft Technologies">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Why Choose <span className="brand-gradient">Purvsoft Technologies?</span>
            </h2>
            <p className="section-description">
              We are a results-driven digital marketing agency based in Ahmedabad, Gujarat,
              with over 5 years of experience helping businesses grow online. Our team of
              certified SEO specialists, PPC experts, and content strategists work together
              to deliver measurable ROI for every client.
            </p>
          </div>
          <div className="why-us-grid">
            <div className="why-us-card">
              <h3>Data-Driven Strategies</h3>
              <p>Every campaign is backed by research, analytics, and performance data — no guesswork, only results.</p>
            </div>
            <div className="why-us-card">
              <h3>Transparent Reporting</h3>
              <p>Monthly detailed reports keep you informed about exactly what's working and where your budget is going.</p>
            </div>
            <div className="why-us-card">
              <h3>Dedicated Account Manager</h3>
              <p>You get a single point of contact who understands your business goals and coordinates all marketing efforts.</p>
            </div>
            <div className="why-us-card">
              <h3>Proven Track Record</h3>
              <p>500+ completed projects and 98% client satisfaction rate across industries including e-commerce, healthcare, and real estate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="form" aria-label="Contact Purvsoft Technologies for Digital Marketing Services">
        <Form />
      </section>
    </div>
  );
};

export default DigitalMarketing;