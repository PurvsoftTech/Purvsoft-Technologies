import React, { useState } from 'react';
import {
  Globe,
  Smartphone,
  Code,
  TrendingUp,
  Search,
  Youtube,
  Facebook,
  ShoppingCart,
  BarChart3,
  PenTool,
  Layers,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Users,
  Award,
  Bot
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../css/ProductShowcase.css';
import { Helmet } from 'react-helmet-async';

const ProductShowcase = () => {
  const navigate = useNavigate();
  const [hoveredService, setHoveredService] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const services = [
    {
      id: 1,
      name: "Web Development",
      category: "Development",
      icon: <Globe size={32} />,
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "Popular",
      description: "Custom websites and web applications built with modern technologies like React, Laravel, and Node.js.",
      features: ["React.js Development", "Laravel PHP Framework", "Node.js Backend", "Responsive Design"],
      path: "/services/website-development"
    },
    {
      id: 2,
      name: "Mobile App Development",
      category: "Development",
      icon: <Smartphone size={32} />,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "Trending",
      description: "Native and cross-platform mobile apps for iOS and Android using Flutter and React Native.",
      features: ["Flutter Development", "React Native", "iOS & Android Apps", "App Store Optimization"],
      path: "/services/mobile-app-development"
    },
    {
      id: 3,
      name: "Digital Marketing",
      category: "Marketing",
      icon: <TrendingUp size={32} />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "Best Seller",
      description: "Data-driven digital marketing strategies to grow your online presence and drive sales.",
      features: ["SEO Optimization", "Social Media Marketing", "Content Strategy", "Analytics & Reporting"],
      path: "/services/digital-marketing"
    },
    {
      id: 4,
      name: "SEO Services",
      category: "Marketing",
      icon: <Search size={32} />,
      image: "https://images.unsplash.com/photo-1571781418606-70265b9cce90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "Popular",
      description: "Improve your search engine rankings and drive organic traffic with our SEO expertise.",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building"],
      path: "/services/seo"
    },
    {
      id: 5,
      name: "YouTube Ads",
      category: "Advertising",
      icon: <Youtube size={32} />,
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "New",
      description: "Reach millions of viewers with targeted YouTube video advertising campaigns.",
      features: ["Video Ad Creation", "Audience Targeting", "Performance Tracking", "ROI Optimization"],
      path: "/services/youtube-marketing"
    },
    {
      id: 6,
      name: "Google Ads",
      category: "Advertising",
      icon: <BarChart3 size={32} />,
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "Trending",
      description: "PPC advertising on Google Search, Display Network, and Shopping platforms.",
      features: ["Search Ads", "Display Ads", "Shopping Campaigns", "Remarketing"],
      path: "/services/google-ads"
    },
    {
      id: 7,
      name: "Meta Ads",
      category: "Advertising",
      icon: <Facebook size={32} />,
      image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "Popular",
      description: "Facebook and Instagram advertising to reach your target audience effectively.",
      features: ["Facebook Ads", "Instagram Ads", "Audience Targeting", "Retargeting Campaigns"],
      path: "/services/meta-ads"
    },
    {
      id: 8,
      name: "E-commerce Development",
      category: "Development",
      icon: <ShoppingCart size={32} />,
      image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "Best Seller",
      description: "Custom online stores with secure checkout and inventory management.",
      features: ["Shopify Development", "WooCommerce", "Magento", "Payment Integration"],
      path: "/services/e-commerce-development"
    },
    {
      id: 10,
      name: "Custom Software Development",
      category: "Development",
      icon: <Code size={32} />,
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "Popular",
      description: "Tailored software solutions for your unique business needs and challenges.",
      features: ["ERP Systems", "CRM Solutions", "Business Automation", "API Integration"],
      path: "/services/custom-software-development"
    },
    {
      id: 11,
      name: "Content Management",
      category: "Marketing",
      icon: <PenTool size={32} />,
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "New",
      description: "Create and manage content that engages your audience and builds brand authority.",
      features: ["Blog Writing", "Video Content", "Social Media Content", "Content Strategy"],
      path: "/services/content-management"
    },
    {
      id: 12,
      name: "Our Challenges",
      category: "Development",
      icon: <Layers size={32} />,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "Trending",
      description: "See how we've solved complex challenges for our clients with innovative solutions.",
      features: ["Problem Solving", "Innovation", "Case Studies", "Success Stories"],
      path: "/services/our-challenges"
    },
    {
      id: 13,
      name: "AI Automation",
      category: "AI & Automation",
      icon: <Bot size={32} />,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "Trending",
      description: "We build intelligent AI-powered automation systems using n8n, OpenAI, and Claude to streamline business processes, reduce manual work, and improve efficiency.",
      features: [
        "AI Chatbot Development (OpenAI & Claude)",
        "Workflow Automation using n8n",
        "Lead Generation & CRM Automation",
        "Email & WhatsApp Automation",
        "Data Processing & AI-based Insights",
        "Custom API Integrations",
        "AI Content Generation Systems",
        "Business Process Automation"
      ],
      path: "/services/ai-automation"
    }
  ];

  const categories = [
    { name: "All", icon: <Layers size={16} /> },
    { name: "Development", icon: <Code size={16} /> },
    { name: "Marketing", icon: <TrendingUp size={16} /> },
    { name: "Advertising", icon: <BarChart3 size={16} /> },
    { name: "AI & Automation", icon: <Bot size={16} /> }
  ];

  const filteredServices = activeCategory === "All"
    ? services
    : services.filter(service => service.category === activeCategory);

  const stats = [
    { icon: <Award size={20} />, value: "500+", label: "Projects Delivered" },
    { icon: <Users size={20} />, value: "200+", label: "Happy Clients" },
    { icon: <Zap size={20} />, value: "98%", label: "Success Rate" },
    { icon: <Shield size={20} />, value: "24/7", label: "Support" }
  ];

  const handleLearnMore = (path) => {
    navigate(path);
  };

  // ✅ Fixed: addressCountry "India" → "IN", provider → author for CollectionPage
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Purvsoft Technologies Services - Digital Solutions for Business",
    "description": "Explore our comprehensive range of digital services including Web Development, Mobile Apps, SEO, Google Ads, YouTube Ads, Meta Ads, E-commerce Development, AI Automation, and Digital Marketing solutions.",
    "url": "https://www.purvsoft.com/services",
    "author": {
      "@type": "Organization",
      "name": "Purvsoft Technologies",
      "url": "https://www.purvsoft.com",
      "logo": "https://www.purvsoft.com/logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sv Square, 333, Near GST Road, New Ranip",
        "addressLocality": "Ahmedabad",
        "addressRegion": "Gujarat",
        "postalCode": "382470",
        "addressCountry": "IN"
      }
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": services.map((service, index) => ({
        "@type": "Service",
        "position": index + 1,
        "name": service.name,
        "description": service.description,
        "category": service.category,
        "provider": {
          "@type": "Organization",
          "name": "Purvsoft Technologies"
        },
        "serviceType": service.features,
        "url": `https://www.purvsoft.com${service.path}`
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
        "name": "Services",
        "item": "https://www.purvsoft.com/services"
      }
    ]
  };

  // ✅ Fixed: addressCountry "India" → "IN", added full address
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Purvsoft Technologies",
    "url": "https://www.purvsoft.com",
    "logo": "https://www.purvsoft.com/logo.png",
    "sameAs": [
      "https://www.facebook.com/purvsoft",
      "https://twitter.com/purvsoft",
      "https://www.linkedin.com/company/purvsoft-technologies"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sv Square, 333, Near GST Road, New Ranip",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "postalCode": "382470",
      "addressCountry": "IN"
    }
  };

  return (
    // ✅ Added role="main" for semantic structure
    <main className="ss-container" role="main">
      <Helmet>
        {/* ✅ Removed: redundant <meta name="title"> */}
        <title>Digital Services | Web Development, SEO, Marketing & AI Solutions | Purvsoft</title>
        <meta name="description" content="Purvsoft Technologies offers comprehensive digital services including Web Development, Mobile Apps, SEO, Google Ads, YouTube Ads, Meta Ads, E-commerce Development, AI Automation, and Digital Marketing solutions for business growth." />
        <meta name="keywords" content="web development services, mobile app development, digital marketing agency, SEO services, Google Ads management, YouTube Ads, Meta Ads, e-commerce development, AI automation services, custom software development, content marketing, Purvsoft Technologies services Ahmedabad" />

        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        {/* ✅ Added: googlebot directive (was missing) */}
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Purvsoft Technologies" />
        <meta name="language" content="English" />
        {/* ✅ Removed: revisit-after — deprecated */}

        {/* Canonical */}
        {/* ✅ Note: add /services to sitemap.xml — this page has a canonical but is not in the sitemap */}
        <link rel="canonical" href="https://www.purvsoft.com/services" />
        {/* ✅ Removed: hreflang alternate — pointless with only one language version */}

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.purvsoft.com/services" />
        <meta property="og:title" content="Digital Services | Web Development, SEO, Marketing & AI | Purvsoft" />
        <meta property="og:description" content="Comprehensive digital solutions including Web Development, Mobile Apps, SEO, Google Ads, YouTube Ads, Meta Ads, E-commerce, and AI Automation for your business." />
        <meta property="og:image" content="https://www.purvsoft.com/og-services.jpg" />
        <meta property="og:image:alt" content="Purvsoft Technologies Digital Services - Web, Mobile, SEO & AI" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Purvsoft Technologies" />
        {/* ✅ Fixed: en_US → en_IN */}
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        {/* ✅ Removed: twitter:url — not a standard Twitter card tag */}
        {/* ✅ Added: twitter:site and twitter:creator (were missing) */}
        <meta name="twitter:site" content="@purvsoft" />
        <meta name="twitter:creator" content="@purvsoft" />
        <meta name="twitter:title" content="Digital Services | Purvsoft Technologies" />
        <meta name="twitter:description" content="Web Development, Mobile Apps, SEO, Google Ads, YouTube Ads, Meta Ads, E-commerce, and AI Automation solutions." />
        {/* ✅ Fixed: unified twitter image with OG image */}
        <meta name="twitter:image" content="https://www.purvsoft.com/og-services.jpg" />
        <meta name="twitter:image:alt" content="Purvsoft Technologies Digital Services - Web, Mobile, SEO & AI" />

        {/* Verification */}
        <meta name="google-site-verification" content="MjMKilzhOmqr6Txi7pbjACF6g_hSt-B6Ej496yJyrH0" />
        <meta name="msvalidate.01" content="AD0DF443696FB452E952416667F1A8DC" />

        {/* Geo Tags */}
        <meta name="geo.region" content="IN-GJ" />
        {/* ✅ Fixed: was just "Ahmedabad" — now consistent with other pages */}
        <meta name="geo.placename" content="Ahmedabad, Gujarat, India" />
        <meta name="geo.position" content="23.0225;72.5714" />
        <meta name="ICBM" content="23.0225, 72.5714" />

        {/* ✅ JSON-LD moved inside Helmet — was incorrectly placed in JSX body */}
        <script type="application/ld+json">{JSON.stringify(organizationStructuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbData)}</script>
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      {/* ✅ Fixed: div → section with proper aria-label for semantic HTML */}
      <section className="ss-header" aria-label="Services Page Header" data-aos="fade-up">
        <h1 className="ss-title">Our Digital <span className="ss-highlight">Services</span></h1>
        <p className="ss-subtitle">Comprehensive digital solutions for your business growth</p>
      </section>

      {/* ✅ Fixed: div → section */}
      <section className="ss-stats" aria-label="Company Statistics">
        <div className="ss-wrapper">
          <div className="ss-stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="ss-stat-card" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="ss-stat-icon" aria-hidden="true">{stat.icon}</div>
                <div className="ss-stat-value">{stat.value}</div>
                <div className="ss-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Fixed: div → section */}
      <section className="ss-category-filter" aria-label="Filter services by category">
        <div className="ss-wrapper">
          <div className="ss-filter-grid">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`ss-filter-btn ${activeCategory === category.name ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.name)}
                aria-label={`Filter services by ${category.name}`}
                aria-pressed={activeCategory === category.name}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Fixed: div → section */}
      <section className="ss-services" aria-label="All Digital Services">
        <div className="ss-wrapper">
          <div className="ss-services-grid">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className="ss-service-card"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                data-aos="fade-up"
                data-aos-delay={(index % 6) * 50}
                itemScope
                itemType="https://schema.org/Service"
              >
                <div className="ss-service-image">
                  <img
                    src={service.image}
                    alt={`${service.name} - ${service.category} services by Purvsoft Technologies`}
                    loading="lazy"
                    itemProp="image"
                    width="800"
                    height="450"
                  />
                  {service.badge && (
                    <span className={`ss-badge ss-badge-${service.badge.toLowerCase().replace(' ', '-')}`}>
                      {service.badge}
                    </span>
                  )}
                  <div className={`ss-service-overlay ${hoveredService === service.id ? 'show' : ''}`} aria-hidden="true">
                    <div className="ss-service-icon-large">{service.icon}</div>
                  </div>
                </div>

                <div className="ss-service-info">
                  <div className="ss-service-icon" aria-hidden="true">{service.icon}</div>
                  <span className="ss-service-category" itemProp="category">{service.category}</span>
                  <h3 className="ss-service-name" itemProp="name">{service.name}</h3>
                  <p className="ss-service-description" itemProp="description">{service.description}</p>

                  <div className="ss-service-features">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="ss-feature-item">
                        <CheckCircle size={14} aria-hidden="true" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="ss-feature-more">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>

                  <button
                    className="ss-learn-btn"
                    onClick={() => handleLearnMore(service.path)}
                    aria-label={`Learn more about ${service.name}`}
                  >
                    Learn More <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="ss-no-results" role="status">
              <p>No services found in this category. Please try another filter.</p>
            </div>
          )}
        </div>
      </section>

      <div className="ss-view-all">
        <button
          className="ss-view-btn"
          onClick={() => setActiveCategory("All")}
          aria-label="View all services"
        >
          Explore All Services <ArrowRight size={18} />
        </button>
      </div>
    </main>
  );
};

export default ProductShowcase;