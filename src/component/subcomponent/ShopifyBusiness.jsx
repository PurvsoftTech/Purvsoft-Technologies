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
  Gift,
  BarChart3,
  Mail,
  DollarSign,
  Clock,
  CheckCircle,
  ArrowRight,
  Zap,
  Headphones,
  Briefcase,
  Target,
  Rocket,
  Palette,
  Code
} from 'lucide-react';
import '../../css/ShopifyBusiness.css';
import { Helmet} from 'react-helmet-async';
import Form from '../../config/Form'

const ShopifyBusiness = () => {
  const businessSolutions = [
    {
      icon: <ShoppingCart size={32} />,
      title: "Store Setup & Configuration",
      desc: "Complete Shopify store setup with custom theme configuration and product organization.",
      features: ["Store Design", "Product Setup", "Payment Gateways", "Shipping Settings"]
    },
    {
      icon: <Palette size={32} />,
      title: "Custom Theme Development",
      desc: "Bespoke Shopify themes that reflect your brand identity and convert visitors.",
      features: ["Custom Design", "Mobile Responsive", "Fast Loading", "Brand Integration"]
    },
    {
      icon: <Package size={32} />,
      title: "Product Management",
      desc: "Efficient product catalog management with variants, collections, and bulk operations.",
      features: ["Bulk Import/Export", "Variant Management", "Collection Setup", "Inventory Tracking"]
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Marketing & SEO",
      desc: "Drive traffic and increase sales with integrated marketing tools and SEO optimization.",
      features: ["SEO Setup", "Email Marketing", "Social Media", "Discount Campaigns"]
    },
    {
      icon: <CreditCard size={32} />,
      title: "Payment Solutions",
      desc: "Multiple payment gateways with secure checkout and fraud protection.",
      features: ["Shopify Payments", "PayPal", "Stripe", "Installment Plans"]
    },
    {
      icon: <Truck size={32} />,
      title: "Shipping & Fulfillment",
      desc: "Automated shipping rates, label printing, and order tracking integration.",
      features: ["Real-time Rates", "Label Printing", "Order Tracking", "Multi-carrier"]
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Analytics & Reporting",
      desc: "Detailed insights into sales, customer behavior, and store performance.",
      features: ["Sales Reports", "Customer Analytics", "Inventory Reports", "ROI Tracking"]
    },
    {
      icon: <Users size={32} />,
      title: "Customer Management",
      desc: "Build customer relationships with profiles, order history, and segmentation.",
      features: ["Customer Profiles", "Order History", "Segmentation", "Loyalty Programs"]
    },
    {
      icon: <Rocket size={32} />,
      title: "Store Migration",
      desc: "Seamless migration from WooCommerce, Magento, or custom platforms.",
      features: ["Data Migration", "Zero Downtime", "SEO Preservation", "URL Redirects"]
    }
  ];

  const businessBenefits = [
    {
      icon: <DollarSign size={24} />,
      title: "Increase Revenue",
      desc: "Optimized checkout flows and upsells that boost average order value by 30%."
    },
    {
      icon: <Clock size={24} />,
      title: "Save Time",
      desc: "Automated inventory, order processing, and customer communications."
    },
    {
      icon: <Users size={24} />,
      title: "Customer Loyalty",
      desc: "Built-in loyalty tools and personalized experiences that retain customers."
    },
    {
      icon: <Globe size={24} />,
      title: "Global Reach",
      desc: "Sell internationally with multi-currency and multi-language support."
    },
    {
      icon: <Smartphone size={24} />,
      title: "Mobile Commerce",
      desc: "60% of sales come from mobile. Our stores are optimized for all devices."
    },
    {
      icon: <Shield size={24} />,
      title: "Secure & Reliable",
      desc: "PCI compliant, SSL encrypted, and 99.9% uptime guaranteed."
    }
  ];

  const industries = [
    {
      icon: <ShoppingCart size={24} />,
      title: "Fashion & Apparel",
      desc: "Clothing, footwear, and accessories stores with size variants and lookbooks."
    },
    {
      icon: <Gift size={24} />,
      title: "Health & Beauty",
      desc: "Skincare, cosmetics, and wellness products with subscription options."
    },
    {
      icon: <Package size={24} />,
      title: "Home & Living",
      desc: "Furniture, decor, and home goods with visual product customization."
    },
    {
      icon: <Smartphone size={24} />,
      title: "Electronics",
      desc: "Gadgets, accessories, and tech products with detailed specifications."
    },
    {
      icon: <Users size={24} />,
      title: "Food & Beverage",
      desc: "Gourmet foods, beverages, and subscription boxes with delivery scheduling."
    },
    {
      icon: <Briefcase size={24} />,
      title: "B2B Wholesale",
      desc: "Wholesale stores with tiered pricing, bulk ordering, and account management."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery Call",
      desc: "We discuss your business goals, products, and target audience.",
      icon: <Target size={32} />
    },
    {
      step: "02",
      title: "Store Design",
      desc: "Custom design that reflects your brand and converts visitors.",
      icon: <Palette size={32} />
    },
    {
      step: "03",
      title: "Development",
      desc: "Build your store with all features and integrations.",
      icon: <Code size={32} />
    },
    {
      step: "04",
      title: "Product Setup",
      desc: "Import products, configure variants, and optimize images.",
      icon: <Package size={32} />
    },
    {
      step: "05",
      title: "Testing & Launch",
      desc: "Rigorous testing and smooth go-live with zero downtime.",
      icon: <Rocket size={32} />
    },
    {
      step: "06",
      title: "Ongoing Support",
      desc: "Continuous optimization, updates, and 24/7 support.",
      icon: <Headphones size={32} />
    }
  ];

  const roiMetrics = [
    {
      metric: "Average Order Value",
      increase: "+35%",
      desc: "Through optimized upsells and cross-sells"
    },
    {
      metric: "Conversion Rate",
      increase: "+50%",
      desc: "With faster loading and better UX"
    },
    {
      metric: "Customer Retention",
      increase: "+45%",
      desc: "Via loyalty programs and email marketing"
    },
    {
      metric: "Mobile Sales",
      increase: "+60%",
      desc: "With mobile-optimized checkout"
    }
  ];

  const features = [
    {
      icon: <Zap size={18} />,
      title: "Fast Loading",
      desc: "Optimized for speed to reduce bounce rates"
    },
    {
      icon: <Search size={18} />,
      title: "SEO Optimized",
      desc: "Rank higher in search results"
    },
    {
      icon: <Smartphone size={18} />,
      title: "Mobile First",
      desc: "Perfect on all devices"
    },
    {
      icon: <CreditCard size={18} />,
      title: "Multiple Payments",
      desc: "Accept all payment methods"
    },
    {
      icon: <Globe size={18} />,
      title: "Multi-currency",
      desc: "Sell globally with local pricing"
    },
    {
      icon: <Mail size={18} />,
      title: "Email Automation",
      desc: "Abandoned cart recovery"
    },
    {
      icon: <BarChart3 size={18} />,
      title: "Analytics",
      desc: "Real-time business insights"
    },
    {
      icon: <Shield size={18} />,
      title: "Secure",
      desc: "PCI compliant & SSL protected"
    },
    {
      icon: <RefreshCw size={18} />,
      title: "Auto Updates",
      desc: "Always up-to-date and secure"
    }
  ];

  const successStories = [
    {
      business: "Fashion Boutique",
      challenge: "Low mobile conversion rate",
      solution: "Mobile-optimized theme with quick buy",
      result: "156% increase in mobile sales",
      icon: <ShoppingCart size={24} />
    },
    {
      business: "Organic Food Store",
      challenge: "High cart abandonment",
      solution: "Abandoned cart recovery + subscriptions",
      result: "45% recovery rate achieved",
      icon: <Gift size={24} />
    },
    {
      business: "Electronics Retailer",
      challenge: "Complex product variants",
      solution: "Custom variant management system",
      result: "Order processing time reduced by 70%",
      icon: <Smartphone size={24} />
    }
  ];

  const faqs = [
    {
      question: "How quickly can you launch my Shopify store?",
      answer: "Basic stores can launch in 2-3 weeks. Complex stores with custom features take 4-6 weeks. We provide a detailed timeline during our discovery call."
    },
    {
      question: "What's the cost of Shopify development?",
      answer: "Costs vary based on complexity. We offer transparent pricing with no hidden fees. Contact us for a customized quote based on your requirements."
    },
    {
      question: "Can you migrate my existing store to Shopify?",
      answer: "Yes! We specialize in migrating from WooCommerce, Magento, BigCommerce, and custom platforms with zero data loss and preserved SEO."
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer: "Absolutely! We offer maintenance packages including updates, security patches, backups, and 24/7 support for your peace of mind."
    }
  ];

  return (
    <div className="sb-container">
      <Helmet>
      <title>Shopify Development Services | Purvsoft Technologies</title>
      <meta name="description" content="Launch and grow your Shopify store with Purvsoft Technologies. Custom Shopify theme development, app integration, store setup, and optimization for higher conversions." />
      <meta name="keywords" content="Shopify development, Shopify store, Shopify theme, Shopify expert, e-commerce Shopify India, Shopify optimization" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href="https://www.purvsoft.com/services/shopify-ECommerce" />
 
      <meta property="og:title" content="Shopify Development Services | Purvsoft Technologies" />
      <meta property="og:description" content="Custom Shopify development — theme, apps, store setup, and optimization for higher sales." />
      <meta property="og:url" content="https://www.purvsoft.com/services/shopify" />
      <meta property="og:image" content="https://www.purvsoft.com/og-image.jpg" />
 
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Shopify Development | Purvsoft Technologies" />
      <meta name="twitter:description" content="Expert Shopify store development and optimization by Purvsoft Technologies." />
    </Helmet>
      {/* Hero Section */}
      <section className="sb-hero">
        <div className="sb-wrapper">
          <div className="sb-hero-grid">
            <div className="sb-hero-content">
              <div className="sb-badge">
                <ShoppingCart size={16} />
                <span>Shopify Business Solutions</span>
              </div>
              <h1>
                Grow Your Business with <br />
                <span className="sb-gradient-text">Shopify Development</span>
              </h1>
              <p className="sb-hero-description">
                Launch a powerful e-commerce store that drives sales and scales with your business. 
                We build custom Shopify solutions tailored to your unique business needs and goals.
              </p>
              <div className="sb-hero-stats">
                <div className="sb-stat-item">
                  <span className="sb-stat-number">200+</span>
                  <span className="sb-stat-label">Stores Launched</span>
                </div>
                <div className="sb-stat-item">
                  <span className="sb-stat-number">$50M+</span>
                  <span className="sb-stat-label">Revenue Generated</span>
                </div>
                <div className="sb-stat-item">
                  <span className="sb-stat-number">98%</span>
                  <span className="sb-stat-label">Client Retention</span>
                </div>
              </div>
              <div className="sb-hero-buttons">
                <a href="#form" className="sb-btn-primary">
                  Contact Us<ArrowRight size={18} />
                </a>
              </div>
            </div>
            <div className="sb-hero-visual">
              <div className="sb-visual-card">
                <div className="sb-visual-header">
                  <div className="sb-header-dots">
                    <span className="sb-dot sb-dot-red"></span>
                    <span className="sb-dot sb-dot-yellow"></span>
                    <span className="sb-dot sb-dot-green"></span>
                  </div>
                  <span className="sb-header-title">Your Shopify Store</span>
                </div>
                <div className="sb-visual-content">
                  <div className="sb-metrics">
                    <div className="sb-metric">
                      <DollarSign size={20} className="sb-metric-icon" />
                      <div>
                        <span className="sb-metric-value">$12,450</span>
                        <span className="sb-metric-label">Today's Sales</span>
                      </div>
                    </div>
                    <div className="sb-metric">
                      <Users size={20} className="sb-metric-icon" />
                      <div>
                        <span className="sb-metric-value">156</span>
                        <span className="sb-metric-label">Orders</span>
                      </div>
                    </div>
                  </div>
                  <div className="sb-product-list">
                    <div className="sb-product-item">
                      <div className="sb-product-image"></div>
                      <div className="sb-product-details">
                        <span className="sb-product-name">Premium T-Shirt</span>
                        <span className="sb-product-price">$29.99</span>
                      </div>
                      <span className="sb-product-status">Sold</span>
                    </div>
                    <div className="sb-product-item">
                      <div className="sb-product-image"></div>
                      <div className="sb-product-details">
                        <span className="sb-product-name">Leather Wallet</span>
                        <span className="sb-product-price">$49.99</span>
                      </div>
                      <span className="sb-product-status sb-pending">Pending</span>
                    </div>
                    <div className="sb-product-item">
                      <div className="sb-product-image"></div>
                      <div className="sb-product-details">
                        <span className="sb-product-name">Sunglasses</span>
                        <span className="sb-product-price">$89.99</span>
                      </div>
                      <span className="sb-product-status">Shipped</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Metrics Section */}
      <section className="sb-roi">
        <div className="sb-wrapper">
          <div className="sb-roi-grid">
            {roiMetrics.map((metric, index) => (
              <div key={index} className="sb-roi-card">
                <h3 className="sb-roi-increase">{metric.increase}</h3>
                <p className="sb-roi-metric">{metric.metric}</p>
                <p className="sb-roi-desc">{metric.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Solutions Section */}
      <section className="sb-solutions">
        <div className="sb-wrapper">
          <div className="sb-section-header">
            <h6 className="sb-section-subtitle">Business Solutions</h6>
            <h2 className="sb-section-title">
              Complete Shopify Services for <span className="sb-gradient-text">Your Business</span>
            </h2>
            <p className="sb-section-description">
              From store setup to ongoing optimization, we provide everything you need to succeed on Shopify.
            </p>
          </div>

          <div className="sb-solutions-grid">
            {businessSolutions.map((solution, index) => (
              <div key={index} className="sb-solution-card">
                <div className="sb-solution-icon">{solution.icon}</div>
                <h3 className="sb-solution-title">{solution.title}</h3>
                <p className="sb-solution-description">{solution.desc}</p>
                <ul className="sb-solution-features">
                  {solution.features.map((feature, idx) => (
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

      {/* Industries Section */}
      <section className="sb-industries">
        <div className="sb-wrapper">
          <div className="sb-section-header">
            <h6 className="sb-section-subtitle">Industries We Serve</h6>
            <h2 className="sb-section-title">
              Shopify Solutions for <span className="sb-gradient-text">Every Industry</span>
            </h2>
            <p className="sb-section-description">
              We've built successful stores for businesses across various industries.
            </p>
          </div>

          <div className="sb-industries-grid">
            {industries.map((industry, index) => (
              <div key={index} className="sb-industry-card">
                <div className="sb-industry-icon">{industry.icon}</div>
                <h3 className="sb-industry-title">{industry.title}</h3>
                <p className="sb-industry-desc">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Benefits Section */}
      <section className="sb-benefits">
        <div className="sb-wrapper">
          <div className="sb-section-header">
            <h6 className="sb-section-subtitle">Business Benefits</h6>
            <h2 className="sb-section-title">
              Why Businesses Choose <span className="sb-gradient-text">Shopify</span>
            </h2>
          </div>

          <div className="sb-benefits-grid">
            {businessBenefits.map((benefit, index) => (
              <div key={index} className="sb-benefit-card">
                <div className="sb-benefit-icon">{benefit.icon}</div>
                <h3 className="sb-benefit-title">{benefit.title}</h3>
                <p className="sb-benefit-description">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="sb-features">
        <div className="sb-wrapper">
          <div className="sb-section-header">
            <h6 className="sb-section-subtitle">Powerful Features</h6>
            <h2 className="sb-section-title">
              Everything You Need to <span className="sb-gradient-text">Succeed</span>
            </h2>
          </div>

          <div className="sb-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="sb-feature-item">
                <div className="sb-feature-icon">{feature.icon}</div>
                <div>
                  <h4 className="sb-feature-title">{feature.title}</h4>
                  <p className="sb-feature-desc">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="sb-process">
        <div className="sb-wrapper">
          <div className="sb-section-header">
            <h6 className="sb-section-subtitle">Our Process</h6>
            <h2 className="sb-section-title">
              How We Build Your <span className="sb-gradient-text">Shopify Store</span>
            </h2>
            <p className="sb-section-description">
              A proven methodology that delivers results on time and on budget.
            </p>
          </div>

          <div className="sb-process-grid">
            {process.map((item, index) => (
              <div key={index} className="sb-process-card">
                <div className="sb-process-step">{item.step}</div>
                <div className="sb-process-icon">{item.icon}</div>
                <h3 className="sb-process-title">{item.title}</h3>
                <p className="sb-process-description">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="sb-stories">
        <div className="sb-wrapper">
          <div className="sb-section-header">
            <h6 className="sb-section-subtitle">Success Stories</h6>
            <h2 className="sb-section-title">
              Real Results for <span className="sb-gradient-text">Real Businesses</span>
            </h2>
          </div>

          <div className="sb-stories-grid">
            {successStories.map((story, index) => (
              <div key={index} className="sb-story-card">
                <div className="sb-story-icon">{story.icon}</div>
                <h3 className="sb-story-business">{story.business}</h3>
                <div className="sb-story-details">
                  <p><strong>Challenge:</strong> {story.challenge}</p>
                  <p><strong>Solution:</strong> {story.solution}</p>
                </div>
                <div className="sb-story-result">{story.result}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="sb-faq">
        <div className="sb-wrapper">
          <div className="sb-section-header">
            <h6 className="sb-section-subtitle">FAQ</h6>
            <h2 className="sb-section-title">
              Frequently Asked <span className="sb-gradient-text">Questions</span>
            </h2>
          </div>

          <div className="sb-faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="sb-faq-card">
                <h3 className="sb-faq-question">{faq.question}</h3>
                <p className="sb-faq-answer">{faq.answer}</p>
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

export default ShopifyBusiness;