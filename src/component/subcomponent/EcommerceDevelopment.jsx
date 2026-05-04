import React from 'react';
import {
  ShoppingCart,
  CreditCard,
  Package,
  Truck,
  RefreshCw,
  Shield,
  TrendingUp,
  Users,
  Globe,
  Smartphone,
  Search,
  Filter,
  Star,
  Heart,
  Gift,
  Percent,
  BarChart3,
  Mail,
  MessageCircle,
  Camera,
  Image,
  DollarSign,
  Clock,
  Award,
  CheckCircle,
  ArrowRight,
  Layers,
  Eye,
  Zap,
  Cloud,
  Database,
  Code,
  Rocket
} from 'lucide-react';
import '../../css/EcommerceDevelopment.css';
import { Helmet } from 'react-helmet-async';
import Form from '../../config/Form';

// Sample product images for hero section
const productImages = {
  product1: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop",
  product2: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=200&h=200&fit=crop",
  product3: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop",
};

const EcommerceDevelopment = () => {

  // ✅ FIX 1: Centralized URL constants — prevents www vs non-www duplicates
  const CANONICAL_URL = "https://www.purvsoft.com/services/e-commerce-development";
  const SITE_URL = "https://www.purvsoft.com";

  const services = [
    {
      icon: <ShoppingCart size={28} />,
      title: "Custom E-commerce Development",
      desc: "Build tailored online stores with unique features and custom functionality for your business needs.",
      features: ["Custom Shopping Cart", "Product Catalogs", "Inventory Management", "Order Processing"]
    },
    {
      icon: <Smartphone size={28} />,
      title: "Mobile Commerce Apps",
      desc: "Native mobile shopping apps for iOS and Android to reach customers on their preferred devices.",
      features: ["iOS & Android Apps", "Mobile Checkout", "Push Notifications", "In-App Purchases"]
    },
    {
      icon: <CreditCard size={28} />,
      title: "Payment Gateway Integration",
      desc: "Secure payment processing with multiple gateways and support for various payment methods.",
      features: ["Multiple Gateways", "Digital Wallets", "Subscription Billing", "Fraud Protection"]
    },
    {
      icon: <Package size={28} />,
      title: "Inventory Management",
      desc: "Real-time inventory tracking, stock alerts, and automated reordering systems.",
      features: ["Stock Tracking", "Low Stock Alerts", "Bulk Import/Export", "Multi-warehouse"]
    },
    {
      icon: <Truck size={28} />,
      title: "Shipping & Fulfillment",
      desc: "Integrated shipping solutions with real-time rates, tracking, and multiple carrier options.",
      features: ["Real-time Rates", "Label Printing", "Order Tracking", "Multi-carrier Support"]
    },
    {
      icon: <Users size={28} />,
      title: "Customer Management",
      desc: "Comprehensive CRM tools for managing customer data, orders, and communication.",
      features: ["Customer Profiles", "Order History", "Wish Lists", "Reviews & Ratings"]
    },
    {
      icon: <BarChart3 size={28} />,
      title: "Analytics & Reporting",
      desc: "Detailed insights into sales, customer behavior, and store performance metrics.",
      features: ["Sales Reports", "Customer Analytics", "Product Performance", "Conversion Tracking"]
    },
    {
      icon: <Mail size={28} />,
      title: "Marketing Automation",
      desc: "Automated email campaigns, abandoned cart recovery, and promotional tools.",
      features: ["Email Campaigns", "Abandoned Cart", "Discount Codes", "Loyalty Programs"]
    },
    {
      icon: <Shield size={28} />,
      title: "Security & Compliance",
      desc: "Enterprise-grade security with SSL, PCI compliance, and data protection measures.",
      features: ["SSL Encryption", "PCI Compliance", "GDPR Ready", "Secure Checkout"]
    }
  ];

  const platforms = [
    {
      name: "Shopify",
      icon: <ShoppingCart size={24} />,
      desc: "Custom Shopify stores with unique themes and apps",
      color: "#96bf48"
    },
    {
      name: "WooCommerce",
      icon: <Globe size={24} />,
      desc: "WordPress-based e-commerce with full flexibility",
      color: "#96588a"
    },
    {
      name: "Magento",
      icon: <Layers size={24} />,
      desc: "Enterprise-level solutions for large catalogs",
      color: "#f46f25"
    },
    {
      name: "BigCommerce",
      icon: <Zap size={24} />,
      desc: "Scalable solutions for growing businesses",
      color: "#0f4750"
    },
    {
      name: "Custom Built",
      icon: <Code size={24} />,
      desc: "Fully custom solutions with any technology",
      color: "#4361ee"
    },
    {
      name: "Headless Commerce",
      icon: <Cloud size={24} />,
      desc: "API-first architecture for maximum flexibility",
      color: "#8b5cf6"
    }
  ];

  const features = [
    {
      icon: <Search size={24} />,
      title: "Advanced Search",
      desc: "Powerful product search with filters and faceted navigation."
    },
    {
      icon: <Filter size={24} />,
      title: "Smart Filtering",
      desc: "Multi-category filtering by price, brand, size, and more."
    },
    {
      icon: <Star size={24} />,
      title: "Reviews & Ratings",
      desc: "Customer reviews with photo uploads and ratings."
    },
    {
      icon: <Heart size={24} />,
      title: "Wish Lists",
      desc: "Save products for later and share with friends."
    },
    {
      icon: <Gift size={24} />,
      title: "Gift Cards",
      desc: "Sell and manage digital gift cards easily."
    },
    {
      icon: <Percent size={24} />,
      title: "Discounts & Coupons",
      desc: "Flexible discount rules and promotional codes."
    },
    {
      icon: <RefreshCw size={24} />,
      title: "Easy Returns",
      desc: "Self-service return management and tracking."
    },
    {
      icon: <Clock size={24} />,
      title: "Order Tracking",
      desc: "Real-time order status and shipping updates."
    },
    {
      icon: <Eye size={24} />,
      title: "Product Zoom",
      desc: "High-quality product images with zoom capability."
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp size={24} />,
      title: "Increase Sales",
      desc: "Convert more visitors into customers with optimized checkout flows."
    },
    {
      icon: <Users size={24} />,
      title: "Customer Loyalty",
      desc: "Build lasting relationships with loyalty programs and personalized experiences."
    },
    {
      icon: <Globe size={24} />,
      title: "Global Reach",
      desc: "Sell internationally with multi-currency and multi-language support."
    },
    {
      icon: <Smartphone size={24} />,
      title: "Mobile Ready",
      desc: "Responsive design that works perfectly on all devices."
    },
    {
      icon: <Zap size={24} />,
      title: "Fast Performance",
      desc: "Lightning-fast loading speeds for better user experience and SEO."
    },
    {
      icon: <Shield size={24} />,
      title: "Secure Shopping",
      desc: "PCI compliant with SSL encryption for customer peace of mind."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      desc: "Understanding your products, target audience, and business goals.",
      icon: <Users size={32} />
    },
    {
      step: "02",
      title: "Design",
      desc: "Creating beautiful, conversion-focused store designs.",
      icon: <Image size={32} />
    },
    {
      step: "03",
      title: "Development",
      desc: "Building your store with robust features and functionality.",
      icon: <Code size={32} />
    },
    {
      step: "04",
      title: "Testing",
      desc: "Rigorous testing across devices and payment methods.",
      icon: <Shield size={32} />
    },
    {
      step: "05",
      title: "Launch",
      desc: "Smooth deployment and product migration.",
      icon: <Rocket size={32} />
    },
    {
      step: "06",
      title: "Optimize",
      desc: "Continuous improvement and performance monitoring.",
      icon: <TrendingUp size={32} />
    }
  ];

  const stats = [
    { icon: <ShoppingCart size={24} />, value: "500+", label: "Stores Built" },
    { icon: <DollarSign size={24} />, value: "$100M+", label: "Revenue Generated" },
    { icon: <Users size={24} />, value: "1M+", label: "Customers Served" },
    { icon: <Award size={24} />, value: "98%", label: "Client Satisfaction" }
  ];

  const integrations = [
    { name: "PayPal", icon: <CreditCard size={20} /> },
    { name: "Stripe", icon: <CreditCard size={20} /> },
    { name: "Square", icon: <CreditCard size={20} /> },
    { name: "UPS", icon: <Truck size={20} /> },
    { name: "FedEx", icon: <Truck size={20} /> },
    { name: "USPS", icon: <Package size={20} /> },
    { name: "Mailchimp", icon: <Mail size={20} /> },
    { name: "Google Analytics", icon: <BarChart3 size={20} /> },
    { name: "Facebook", icon: <MessageCircle size={20} /> },
    { name: "Instagram", icon: <Camera size={20} /> },
    { name: "QuickBooks", icon: <Database size={20} /> },
    { name: "ShipStation", icon: <Package size={20} /> }
  ];

  const faqs = [
    {
      question: "How long does it take to build an e-commerce store?",
      answer: "Timeline varies based on complexity. Simple stores take 4-6 weeks, while complex enterprise solutions can take 3-4 months. We provide detailed timelines during planning."
    },
    {
      question: "How much does e-commerce development cost?",
      answer: "Cost depends on features, platform, and complexity. We offer flexible pricing models and provide detailed quotes based on your requirements."
    },
    {
      question: "Can I migrate my existing store?",
      answer: "Yes, we specialize in migrating stores from platforms like Shopify, WooCommerce, Magento, and custom solutions with zero data loss."
    },
    {
      question: "Do you provide ongoing maintenance?",
      answer: "Absolutely! We offer comprehensive maintenance packages including updates, security patches, backups, and feature enhancements."
    }
  ];

  // ✅ FIX 2: Clean structured data — correct currency, address, no keyword stuffing
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "E-commerce Development Services",
    "provider": {
      "@type": "Organization",
      "name": "Purvsoft Technologies",
      "url": SITE_URL,
      "logo": `${SITE_URL}/logo.png`,
      // ✅ FIX 3: Correct address — Ahmedabad, Gujarat (not left blank)
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ahmedabad",
        "addressRegion": "Gujarat",
        "addressCountry": "IN"
      }
    },
    "description": "Professional e-commerce development services in Ahmedabad, India. We build custom online stores on Shopify, WooCommerce, Magento, and headless platforms for maximum conversions.",
    "serviceType": [
      "Shopify Development",
      "WooCommerce Development",
      "Magento Development",
      "Headless Commerce",
      "Custom E-commerce Solutions"
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
        // ✅ FIX 4: Currency corrected from USD to INR for India-based company
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
        "name": "E-commerce Development",
        "item": CANONICAL_URL
      }
    ]
  };

  const faqStructuredData = {
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
  };

  return (
    <div className="ecommerce-container">
      <Helmet>
        {/* ✅ FIX 5: Clean, unique title — no repetition, includes location */}
        <title>E-commerce Development Company in Ahmedabad | Shopify & WooCommerce | Purvsoft</title>

        {/* ✅ FIX 6: Natural meta description — unique, no stuffing, includes city */}
        <meta
          name="description"
          content="Purvsoft Technologies is a trusted e-commerce development company in Ahmedabad, India. We build custom Shopify, WooCommerce, Magento, and headless online stores that convert visitors into customers."
        />

        {/* ✅ FIX 7: TOP 10 KEYWORDS — research-backed, high-intent, no duplicates */}
        <meta
          name="keywords"
          content="ecommerce development company Ahmedabad, Shopify development India, WooCommerce development Gujarat, Magento development company, headless commerce development, online store development India, custom ecommerce solutions, B2B ecommerce development, ecommerce website development Ahmedabad, Purvsoft Technologies ecommerce"
        />

        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Purvsoft Technologies" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />

        {/* ✅ FIX 8: Single canonical using constant — prevents www vs non-www duplicate */}
        <link rel="canonical" href={CANONICAL_URL} />

        {/* ✅ FIX 9: hreflang for India — correct locale */}
        <link rel="alternate" href={CANONICAL_URL} hrefLang="en-IN" />
        <link rel="alternate" href={CANONICAL_URL} hrefLang="x-default" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={CANONICAL_URL} />
        {/* ✅ FIX 10: OG title unique — no keyword repetition */}
        <meta property="og:title" content="E-commerce Development Company in Ahmedabad | Purvsoft" />
        <meta
          property="og:description"
          content="Build a high-converting online store with Purvsoft Technologies in Ahmedabad. Expert Shopify, WooCommerce, Magento, and custom e-commerce development for your business."
        />
        <meta property="og:image" content={`${SITE_URL}/og-ecommerce-development.jpg`} />
        <meta property="og:image:alt" content="Purvsoft E-commerce Development Services - Ahmedabad" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Purvsoft Technologies" />
        {/* ✅ FIX 11: og:locale corrected to en_IN for India */}
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={CANONICAL_URL} />
        <meta name="twitter:title" content="E-commerce Development | Purvsoft Technologies Ahmedabad" />
        <meta
          name="twitter:description"
          content="Professional e-commerce development — Shopify, WooCommerce, Magento, and headless commerce from Ahmedabad, India."
        />
        <meta name="twitter:image" content={`${SITE_URL}/twitter-ecommerce-development.jpg`} />
        <meta name="twitter:image:alt" content="Purvsoft E-commerce Development Services" />

        {/* Verification */}
        <meta name="google-site-verification" content="MjMKilzhOmqr6Txi7pbjACF6g_hSt-B6Ej496yJyrH0" />
        <meta name="msvalidate.01" content="AD0DF443696FB452E952416667F1A8DC" />

        {/* ✅ FIX 12: Geo tags — Ahmedabad coordinates (consistent with MobileAppDevelopment page) */}
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
      <section className="ecommerce-hero" aria-label="E-commerce Development Hero Section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content" data-aos="fade-right">
              <div className="badge">E-commerce Development Experts in Ahmedabad</div>
              {/* ✅ FIX 13: H1 includes primary keyword + location naturally */}
              <h1>
                Top E-commerce Development Company in Ahmedabad <br />
                <span className="brand-gradient">That Converts Visitors to Customers</span>
              </h1>
              <p className="hero-description">
                Create a powerful e-commerce platform with custom features, seamless checkout,
                and exceptional user experience. Purvsoft Technologies builds Shopify, WooCommerce,
                and custom stores that drive sales and grow your business.
              </p>
              <div className="hero-stats">
                <div className="hero-stat" data-aos="fade-up" data-aos-delay="0">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Stores Built</span>
                </div>
                <div className="hero-stat" data-aos="fade-up" data-aos-delay="50">
                  <span className="stat-number">$100M+</span>
                  <span className="stat-label">Revenue Generated</span>
                </div>
                <div className="hero-stat" data-aos="fade-up" data-aos-delay="100">
                  <span className="stat-number">1M+</span>
                  <span className="stat-label">Happy Customers</span>
                </div>
              </div>
              <div className="hero-buttons">
                <button
                  className="btn-primary"
                  onClick={() => {
                    document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Start Your Online Store <ArrowRight size={18} />
                </button>
                <a href="/contact" className="btn-primary">Contact Us</a>
              </div>
            </div>
            <div className="hero-visual" data-aos="fade-left">
              <div className="store-preview">
                <div className="store-header">
                  <div className="store-logo">🛍️ Purvsoft Store</div>
                  <div className="store-icons">
                    <Search size={16} aria-hidden="true" />
                    <Heart size={16} aria-hidden="true" />
                    <ShoppingCart size={16} aria-hidden="true" />
                  </div>
                </div>
                <div className="store-banner">
                  <span>🔥 Mega Sale - Up to 50% Off 🔥</span>
                </div>
                <div className="store-products">
                  <div className="product-card">
                    <div className="product-image">
                      <img
                        src={productImages.product1}
                        alt="Premium Classic Watch - Luxury timepiece for e-commerce store"
                        loading="lazy"
                        width="120"
                        height="120"
                      />
                    </div>
                    <div className="product-info">
                      <span className="product-name">Classic Chrono Watch</span>
                      <span className="product-price">$49.99</span>
                      <span className="product-rating">★★★★☆</span>
                    </div>
                  </div>
                  <div className="product-card">
                    <div className="product-image">
                      <img
                        src={productImages.product2}
                        alt="Polaroid Instant Camera - Vintage camera for online store"
                        loading="lazy"
                        width="120"
                        height="120"
                      />
                    </div>
                    <div className="product-info">
                      <span className="product-name">Polaroid Instant Cam</span>
                      <span className="product-price">$79.99</span>
                      <span className="product-rating">★★★★★</span>
                    </div>
                  </div>
                  <div className="product-card">
                    <div className="product-image">
                      <img
                        src={productImages.product3}
                        alt="Wireless Headphones - Bluetooth headphones for e-commerce website"
                        loading="lazy"
                        width="120"
                        height="120"
                      />
                    </div>
                    <div className="product-info">
                      <span className="product-name">Bass+ Wireless Headphones</span>
                      <span className="product-price">$99.99</span>
                      <span className="product-rating">★★★★☆</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section" aria-label="Company Statistics">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="stat-icon" aria-hidden="true">{stat.icon}</div>
                <h3 className="stat-value">{stat.value}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="platforms-section" aria-label="E-commerce Platforms We Work With">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Platforms We Work With</p>
            <h2 className="section-title">
              Choose Your <span className="brand-gradient">E-commerce Platform</span>
            </h2>
            <p className="section-description">
              We build on leading platforms and create custom solutions tailored to your business needs.
            </p>
          </div>
          <div className="platforms-grid">
            {platforms.map((platform, index) => (
              <div key={index} className="platform-card" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="platform-icon" style={{ color: platform.color }} aria-hidden="true">
                  {platform.icon}
                </div>
                <h3 className="platform-title">{platform.name}</h3>
                <p className="platform-description">{platform.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" aria-label="E-commerce Development Services">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">What We Offer</p>
            <h2 className="section-title">
              Complete <span className="brand-gradient">E-commerce Solutions</span>
            </h2>
            <p className="section-description">
              End-to-end e-commerce development services to build and grow your online business.
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="service-icon" aria-hidden="true">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.desc}</p>
                <ul className="service-features" aria-label={`${service.title} features`}>
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <CheckCircle size={14} aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section" aria-label="E-commerce Features">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Powerful Features</p>
            <h2 className="section-title">
              Everything You Need for <span className="brand-gradient">E-commerce Success</span>
            </h2>
            <p className="section-description">
              Built-in features that enhance user experience and drive conversions.
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="feature-icon" aria-hidden="true">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section" aria-label="Benefits of E-commerce">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Why Choose Us</p>
            <h2 className="section-title">
              Benefits of <span className="brand-gradient">Professional E-commerce</span>
            </h2>
            <p className="section-description">
              Discover why businesses trust us for their online store development.
            </p>
          </div>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="benefit-icon" aria-hidden="true">{benefit.icon}</div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section" aria-label="Development Process">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Development Process</p>
            <h2 className="section-title">
              How We <span className="brand-gradient">Build Your Store</span>
            </h2>
            <p className="section-description">
              A proven methodology that ensures quality, timely delivery, and successful outcomes.
            </p>
          </div>
          <div className="process-grid">
            {process.map((item, index) => (
              <div key={index} className="process-card" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="process-step" aria-label={`Step ${item.step}`}>{item.step}</div>
                <div className="process-icon" aria-hidden="true">{item.icon}</div>
                <h3 className="process-title">{item.title}</h3>
                <p className="process-description">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="integrations-section" aria-label="E-commerce Integrations">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Integrations</p>
            <h2 className="section-title">
              Connect With Your <span className="brand-gradient">Favorite Tools</span>
            </h2>
            <p className="section-description">
              Seamless integration with payment gateways, shipping carriers, and marketing tools.
            </p>
          </div>
          <div className="integrations-grid">
            {integrations.map((integration, index) => (
              <div key={index} className="integration-card" data-aos="zoom-in" data-aos-delay={index * 30}>
                <div className="integration-icon" aria-hidden="true">{integration.icon}</div>
                <span className="integration-name">{integration.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section" aria-label="E-commerce Development FAQs">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">FAQ</p>
            <h2 className="section-title">
              Frequently Asked <span className="brand-gradient">Questions</span>
            </h2>
            <p className="section-description">
              Get answers to common questions about e-commerce development.
            </p>
          </div>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="faq-card"
                data-aos="fade-up"
                data-aos-delay={index * 50}
                itemScope
                itemType="https://schema.org/Question"
              >
                <h3 className="faq-question" itemProp="name">{faq.question}</h3>
                <div
                  className="faq-answer"
                  itemProp="acceptedAnswer"
                  itemScope
                  itemType="https://schema.org/Answer"
                >
                  <p itemProp="text">{faq.answer}</p>
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

export default EcommerceDevelopment;