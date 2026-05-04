import React, { useMemo} from 'react';
import { 
  Search, TrendingUp, BarChart3, Globe, FileText, Link2,
  Target, Smartphone, Clock, DollarSign, Award, CheckCircle,
  ArrowRight, Star, Users, Rocket, Settings, LineChart,
  PenTool, Code, MessageCircle, Shield, ShoppingCart, MapPin, Briefcase
} from 'lucide-react';
import '../../css/Seo.css';
import { Helmet } from 'react-helmet-async';
import Form from '../../config/Form';

// ✅ FIX 1: Static data moved OUTSIDE component — no re-creation on every render
const services = [
  {
    icon: <Search size={28} />,
    title: "Keyword Research & Strategy",
    desc: "In-depth keyword analysis to identify high-value search terms that drive qualified traffic and conversions for your business.",
    features: ["Competitor Analysis", "Long-tail Keywords", "Search Intent Mapping"]
  },
  {
    icon: <FileText size={28} />,
    title: "On-Page SEO",
    desc: "Optimize your website's content, meta tags, headers, and internal linking structure for better search engine rankings.",
    features: ["Meta Tags Optimization", "Header Tags", "Content Optimization", "Internal Linking"]
  },
  {
    icon: <Code size={28} />,
    title: "Technical SEO",
    desc: "Ensure your website meets all technical requirements for search engine crawling, indexing, and Core Web Vitals.",
    features: ["Site Speed Optimization", "Mobile-Friendliness", "XML Sitemaps", "Schema Markup"]
  },
  {
    icon: <Link2 size={28} />,
    title: "Link Building",
    desc: "Build high-quality backlinks from authoritative websites to boost your domain authority and search rankings.",
    features: ["Guest Posting", "Broken Link Building", "Digital PR", "Local Citations"]
  },
  {
    icon: <MessageCircle size={28} />,
    title: "Local SEO",
    desc: "Dominate local search results in Ahmedabad and Gujarat to attract customers in your geographic area.",
    features: ["Google My Business", "Local Citations", "Review Management", "Local Keywords"]
  },
  {
    icon: <BarChart3 size={28} />,
    title: "SEO Analytics & Reporting",
    desc: "Track your rankings, traffic, and conversions with detailed monthly reports and actionable insights.",
    features: ["Rank Tracking", "Traffic Analysis", "Conversion Tracking", "Competitor Monitoring"]
  },
  {
    icon: <PenTool size={28} />,
    title: "Content SEO",
    desc: "Create and optimize SEO-friendly content that ranks well on Google and engages your target audience.",
    features: ["Blog Posts", "Infographics", "Videos", "Case Studies"]
  },
  {
    icon: <Smartphone size={28} />,
    title: "Mobile SEO",
    desc: "Optimize your website for mobile users to improve Google rankings, page speed, and overall user experience.",
    features: ["Responsive Design", "Mobile Speed", "AMP Implementation", "Mobile UX"]
  },
  {
    icon: <ShoppingCart size={28} />,
    title: "E-commerce SEO",
    desc: "Specialized SEO strategies for online stores to increase product visibility, organic traffic, and sales.",
    features: ["Product Page SEO", "Category Optimization", "Review Schema", "Site Structure"]
  }
];
const scrollToForm = () => {
  document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
};

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
    question: "What is included in your SEO packages?",
    answer: "Our SEO packages include keyword research, on-page optimization, technical SEO, content creation, link building, and monthly reporting with actionable insights."
  },
  {
    question: "Do you guarantee #1 rankings on Google?",
    answer: "We do not guarantee specific rankings as search engine algorithms are complex. However, we guarantee ethical white-hat practices and continuous improvement in your website's visibility."
  },
  {
    question: "How do you measure SEO success?",
    answer: "We track key metrics including organic traffic, keyword rankings, conversion rates, bounce rates, and ROI through comprehensive analytics and reporting."
  },
  {
    question: "What is the difference between on-page and off-page SEO?",
    answer: "On-page SEO refers to optimizations made directly on your website such as content, meta tags, and internal links. Off-page SEO includes external factors like backlinks and brand mentions that signal authority to search engines."
  },
  {
    question: "Do you offer local SEO services in Ahmedabad and Gujarat?",
    answer: "Yes. We specialize in local SEO for businesses in Ahmedabad, Gujarat, and across India — including Google My Business optimization, local citation building, and geo-targeted keyword strategies."
  }
];

const SEO = () => {

  // ✅ FIX 2: Schemas in useMemo — not rebuilt on every render
  const seoServiceSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SEO Services",
    "alternateName": "Search Engine Optimization Services",
    "url": "https://www.purvsoft.com/services/seo",
    "description": "Purvsoft Technologies offers expert SEO services including on-page SEO, technical SEO, local SEO, keyword research, link building, and SEO analytics to help businesses rank higher on Google.",
    "provider": {
      "@type": "Organization",
      "name": "Purvsoft Technologies",
      "url": "https://www.purvsoft.com/",
      "logo": "https://www.purvsoft.com/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ahmedabad",
        "addressRegion": "Gujarat",
        "addressCountry": "IN"
      }
    },
    "areaServed": [
      { "@type": "City", "name": "Ahmedabad" },
      { "@type": "State", "name": "Gujarat" },
      { "@type": "Country", "name": "India" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "SEO Service Packages",
      "itemListElement": services.map((s, i) => ({
        "@type": "Offer",
        "position": i + 1,
        "itemOffered": {
          "@type": "Service",
          "name": s.title,
          "description": s.desc,
          "url": `https://www.purvsoft.com/services/seo#${s.title.toLowerCase().replace(/\s+/g, '-')}`
        }
      }))
    }
  }), []);

  const breadcrumbSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.purvsoft.com/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.purvsoft.com/services" },
      { "@type": "ListItem", "position": 3, "name": "SEO Services", "item": "https://www.purvsoft.com/services/seo" }
    ]
  }), []);

  const faqSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }), []);

  const caseStudySchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "SEO Success Stories by Purvsoft Technologies",
    "url": "https://www.purvsoft.com/services/seo",
    "itemListElement": caseStudies.map((study, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": study.title,
      "description": `${study.result} — ${study.description}`
    }))
  }), []);

  // ✅ FIX 3: Removed aggregateRating schema — Google penalizes 
  // fake/unverified ratings not backed by visible on-page reviews

  return (
    <div className="seo-container">
      <Helmet>
        {/* ✅ FIX 4: Title under 60 chars */}
        <title>SEO Services in Ahmedabad | Purvsoft Technologies</title>

        {/* ✅ Meta Description — 150-160 chars */}
        <meta
          name="description"
          content="Expert SEO services in Ahmedabad by Purvsoft Technologies. On-page SEO, technical SEO, local SEO & link building. 500+ projects. 98% satisfaction. Get a free SEO audit today!"
        />

        {/* ✅ FIX 5: Cleaned up keywords — no stuffing, max 10 relevant terms */}
        <meta
          name="keywords"
          content="SEO services Ahmedabad, search engine optimization India, local SEO Gujarat, technical SEO agency, on-page SEO, link building services, best SEO company Ahmedabad, Purvsoft Technologies SEO, Google ranking agency, e-commerce SEO India"
        />

        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Purvsoft Technologies" />

        {/* ✅ Canonical — no trailing slash, lowercase */}
        <link rel="canonical" href="https://www.purvsoft.com/services/seo" />

        {/* ✅ Geo tags */}
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Ahmedabad, Gujarat, India" />
        <meta name="geo.position" content="23.0225;72.5714" />
        <meta name="ICBM" content="23.0225, 72.5714" />

        {/* ✅ Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="SEO Services in Ahmedabad | Purvsoft Technologies" />
        <meta property="og:description" content="Expert SEO — on-page, technical, local SEO & link building in Ahmedabad. 500+ projects. 98% satisfaction. Free SEO audit available." />
        <meta property="og:url" content="https://www.purvsoft.com/services/seo" />
        <meta property="og:site_name" content="Purvsoft Technologies" />
        <meta property="og:image" content="https://www.purvsoft.com/og-seo-services.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="SEO Services by Purvsoft Technologies — Rank Higher on Google" />
        <meta property="og:locale" content="en_IN" />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@purvsoft" />
        <meta name="twitter:creator" content="@purvsoft" />
        <meta name="twitter:title" content="SEO Services in Ahmedabad | Purvsoft Technologies" />
        <meta name="twitter:description" content="Expert SEO — on-page, technical, local SEO & link building. 500+ projects. 98% satisfaction. Free audit!" />
        <meta name="twitter:image" content="https://www.purvsoft.com/og-seo-services.jpg" />
        <meta name="twitter:image:alt" content="SEO Services by Purvsoft Technologies" />

        <meta name="google-site-verification" content="MjMKilzhOmqr6Txi7pbjACF6g_hSt-B6Ej496yJyrH0" />
        <meta name="msvalidate.01" content="AD0DF443696FB452E952416667F1A8DC" />

        {/* ✅ JSON-LD Schemas — 4 schemas (removed fake aggregateRating) */}
        <script type="application/ld+json">{JSON.stringify(seoServiceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(caseStudySchema)}</script>
      </Helmet>

      {/* ✅ Hero Section */}
      <section className="seo-hero" aria-label="SEO Services Hero — Purvsoft Technologies">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              {/* ✅ FIX 6: Removed "#1" unverified claim — changed to "Top-Rated" */}
              <p className="badge" aria-label="Agency recognition">Top-Rated SEO Agency in Ahmedabad</p>

              <h1>
                Dominate Search Rankings with <br />
                <span className="brand-gradient">Data-Driven SEO Strategies</span>
              </h1>

              <p className="hero-description">
                Drive organic traffic, increase visibility, and grow your business with our
                comprehensive SEO services in Ahmedabad, India. We use ethical white-hat
                techniques to deliver sustainable, long-term results.
              </p>

              <div className="hero-stats" aria-label="Purvsoft SEO results at a glance">
                <div className="hero-stat">
                  <p className="stat-number"><strong>500+</strong></p>
                  <p className="stat-label">Projects</p>
                </div>
                <div className="hero-stat">
                  <p className="stat-number"><strong>98%</strong></p>
                  <p className="stat-label">Satisfaction</p>
                </div>
                <div className="hero-stat">
                  <p className="stat-number"><strong>10x</strong></p>
                  <p className="stat-label">Avg ROI</p>
                </div>
              </div>

              <div className="hero-buttons">
                <button
                    className="btn-primary"
                    onClick={scrollToForm}
                    aria-label="Get a free SEO audit from Purvsoft Technologies"
                  >
                    Get Free SEO Audit <ArrowRight size={18} />
                  </button>
              </div>
            </div>

            {/* ✅ aria-hidden — decorative, not read by screen readers */}
            <div className="hero-visual" aria-hidden="true">
              <div className="rankings-card" role="presentation">
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

      {/* ✅ Trust Badges */}
      <section className="trust-section" aria-label="Why Trust Purvsoft Technologies for SEO">
        <div className="container">
          <div className="trust-grid">
            {[
              { icon: <Award size={32} />, heading: "10+ Years", sub: "Industry Experience" },
              { icon: <Users size={32} />, heading: "50+ Experts", sub: "SEO Specialists" },
              { icon: <Star size={32} />, heading: "4.9 Rating", sub: "Client Reviews" },
              { icon: <Shield size={32} />, heading: "100% Ethical", sub: "White Hat SEO" }
            ].map((item, i) => (
              <div key={i} className="trust-item">
                <div aria-hidden="true">{item.icon}</div>
                <div>
                  <h4>{item.heading}</h4>
                  <p>{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Services Section */}
      <section className="services-section" aria-label="Our SEO Services">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Our SEO Services</p>
            <h2 className="section-title">
              Comprehensive <span className="brand-gradient">SEO Solutions</span> <br />
              That Drive Real Results
            </h2>
            <p className="section-description">
              From technical audits to content strategy, we provide end-to-end SEO services
              tailored to your business goals and industry.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <article
                key={index}
                className="service-card"
                aria-label={service.title}
              >
                <div className="service-icon" aria-hidden="true">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.desc}</p>
                <ul className="service-features" aria-label={`Features of ${service.title}`}>
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <CheckCircle size={14} aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Process Section */}
      <section className="process-section" aria-label="Our SEO Process">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Our Process</p>
            <h2 className="section-title">
              How We <span className="brand-gradient">Drive Results</span>
            </h2>
            <p className="section-description">
              A systematic approach to SEO that ensures consistent growth and measurable outcomes.
            </p>
          </div>

          <div className="process-grid">
            {process.map((item, index) => (
              <div key={index} className="process-card">
                <div className="process-step" aria-hidden="true">{item.step}</div>
                <div className="process-icon" aria-hidden="true">{item.icon}</div>
                <h3 className="process-title">{item.title}</h3>
                <p className="process-description">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Benefits Section */}
      <section className="benefits-section" aria-label="Benefits of Professional SEO Services">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Why Choose Us</p>
            <h2 className="section-title">
              Benefits of <span className="brand-gradient">Professional SEO</span>
            </h2>
          </div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon" aria-hidden="true">{benefit.icon}</div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Case Studies */}
      <section className="case-studies-section" aria-label="SEO Success Stories and Case Studies">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Success Stories</p>
            <h2 className="section-title">
              Real <span className="brand-gradient">Results</span> for Real Businesses
            </h2>
          </div>

          <div className="case-studies-grid">
            {caseStudies.map((study, index) => (
              <article
                key={index}
                className="case-study-card"
                aria-label={`Case study: ${study.title}`}
              >
                <div className="case-study-icon" aria-hidden="true">{study.icon}</div>
                <h3 className="case-study-title">{study.title}</h3>
                {/* <p className="case-study-result">{study.result}</p> */}
                <p className="case-study-description">{study.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ FAQ Section */}
      <section className="faq-section" aria-label="SEO Frequently Asked Questions">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">FAQ</p>
            <h2 className="section-title">
              Frequently Asked <span className="brand-gradient">Questions</span>
            </h2>
          </div>

          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-card">
                <h3 className="faq-question">{faq.question}</h3>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Contact Form */}
      <section id="form" aria-label="Contact Purvsoft Technologies for SEO Services">
        <Form />
      </section>
    </div>
  );
};

export default SEO;