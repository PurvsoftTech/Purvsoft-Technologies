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
import { Helmet} from 'react-helmet-async';
import Form from '../../config/Form'

const EcommerceDevelopment = () => {
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

  return (
    <div className="ecommerce-container">
      <Helmet>
      <title>E-Commerce Development | Purvsoft Technologies – Online Store Solutions</title>
      <meta name="description" content="Launch your online store with Purvsoft Technologies's e-commerce development services. Custom Shopify, WooCommerce, and headless e-commerce solutions for maximum conversions." />
      <meta name="keywords" content="e-commerce development, online store, Shopify development, WooCommerce, headless commerce, e-commerce website India" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href="https://www.purvsoft.com/services/e-commerce-development" />
 
      <meta property="og:title" content="E-Commerce Development | Purvsoft Technologies" />
      <meta property="og:description" content="Custom e-commerce solutions — Shopify, WooCommerce, and headless commerce for maximum conversions." />
      <meta property="og:url" content="https://www.purvsoft.com/services/e-commerce-development" />
      <meta property="og:image" content="https://www.purvsoft.com/og-image.jpg" />
 
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="E-Commerce Development | Purvsoft Technologies" />
      <meta name="twitter:description" content="Launch your online store with Purvsoft Technologies's e-commerce development." />
    </Helmet>
      {/* Hero Section */}
      <section className="ecommerce-hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content" data-aos="fade-right">
              <div className="badge">E-commerce Development</div>
              <h1>
                Build Your Dream Online Store <br />
                <span className="gradient-text">That Converts Visitors to Customers</span>
              </h1>
              <p className="hero-description">
                Create a powerful e-commerce platform with custom features, seamless checkout, 
                and exceptional user experience. We build stores that drive sales and grow your business.
              </p>
              <div className="hero-stats">
                <div className="hero-stat">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Stores Built</span>
                </div>
                <div className="hero-stat">
                  <span className="stat-number">$100M+</span>
                  <span className="stat-label">Revenue</span>
                </div>
                <div className="hero-stat">
                  <span className="stat-number">1M+</span>
                  <span className="stat-label">Customers</span>
                </div>
              </div>
              <div className="hero-buttons">
                <a href="#form" className="btn-primary">
                  Contact Us <ArrowRight size={18} />
                </a>
              </div>
            </div>
            <div className="hero-visual" data-aos="fade-left">
              <div className="store-preview">
                <div className="store-header">
                  <div className="store-logo">🛍️ Store</div>
                  <div className="store-icons">
                    <Search size={16} />
                    <Heart size={16} />
                    <ShoppingCart size={16} />
                  </div>
                </div>
                <div className="store-banner">
                  <span>Summer Sale - 50% Off</span>
                </div>
                <div className="store-products">
                  <div className="product-card">
                    <div className="product-image"></div>
                    <div className="product-info">
                      <span className="product-name">Product 1</span>
                      <span className="product-price">$49.99</span>
                    </div>
                  </div>
                  <div className="product-card">
                    <div className="product-image"></div>
                    <div className="product-info">
                      <span className="product-name">Product 2</span>
                      <span className="product-price">$79.99</span>
                    </div>
                  </div>
                  <div className="product-card">
                    <div className="product-image"></div>
                    <div className="product-info">
                      <span className="product-name">Product 3</span>
                      <span className="product-price">$99.99</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="stat-icon">{stat.icon}</div>
                <h3 className="stat-value">{stat.value}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="platforms-section">
        <div className="container">
          <div className="section-header">
            <h6 className="section-subtitle">Platforms We Work With</h6>
            <h2 className="section-title">
              Choose Your <span className="gradient-text">E-commerce Platform</span>
            </h2>
            <p className="section-description">
              We build on leading platforms and create custom solutions tailored to your needs.
            </p>
          </div>

          <div className="platforms-grid">
            {platforms.map((platform, index) => (
              <div key={index} className="platform-card" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="platform-icon" style={{ color: platform.color }}>
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
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h6 className="section-subtitle">What We Offer</h6>
            <h2 className="section-title">
              Complete <span className="gradient-text">E-commerce Solutions</span>
            </h2>
            <p className="section-description">
              End-to-end e-commerce development services to build and grow your online business.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.desc}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <CheckCircle size={14} />
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
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h6 className="section-subtitle">Powerful Features</h6>
            <h2 className="section-title">
              Everything You Need for <span className="gradient-text">E-commerce Success</span>
            </h2>
            <p className="section-description">
              Built-in features that enhance user experience and drive conversions.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <h6 className="section-subtitle">Why Choose Us</h6>
            <h2 className="section-title">
              Benefits of <span className="gradient-text">Professional E-commerce</span>
            </h2>
          </div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="benefit-icon">{benefit.icon}</div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h6 className="section-subtitle">Development Process</h6>
            <h2 className="section-title">
              How We <span className="gradient-text">Build Your Store</span>
            </h2>
            <p className="section-description">
              A proven methodology that ensures quality, timely delivery, and successful outcomes.
            </p>
          </div>

          <div className="process-grid">
            {process.map((item, index) => (
              <div key={index} className="process-card" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="process-step">{item.step}</div>
                <div className="process-icon">{item.icon}</div>
                <h3 className="process-title">{item.title}</h3>
                <p className="process-description">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="integrations-section">
        <div className="container">
          <div className="section-header">
            <h6 className="section-subtitle">Integrations</h6>
            <h2 className="section-title">
              Connect With Your <span className="gradient-text">Favorite Tools</span>
            </h2>
            <p className="section-description">
              Seamless integration with payment gateways, shipping carriers, and marketing tools.
            </p>
          </div>

          <div className="integrations-grid">
            {integrations.map((integration, index) => (
              <div key={index} className="integration-card" data-aos="zoom-in" data-aos-delay={index * 30}>
                <div className="integration-icon">{integration.icon}</div>
                <span className="integration-name">{integration.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h6 className="section-subtitle">FAQ</h6>
            <h2 className="section-title">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-card" data-aos="fade-up" data-aos-delay={index * 50}>
                <h3 className="faq-question">{faq.question}</h3>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div id="form">
        <Form />
      </div>
    </div>
  );
};

export default EcommerceDevelopment;