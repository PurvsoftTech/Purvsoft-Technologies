import React, { useState } from 'react';
import { 
  Globe,
  Smartphone,
  Code,
  TrendingUp,
  Search,
  Youtube,
  Facebook,
  Instagram,
  ShoppingCart,
  BarChart3,
  Mail,
  PenTool,
  Layers,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Users,
  Award
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../css/ProductShowcase.css';
import { Helmet } from 'react-helmet-async';

const ServicesShowcase = () => {
  const navigate = useNavigate();
  const [hoveredService, setHoveredService] = useState(null);

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
      path: "/service/mobile-app-development"
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
    }
  ];

  const categories = [
    { name: "All", icon: <Layers size={16} /> },
    { name: "Development", icon: <Code size={16} /> },
    { name: "Marketing", icon: <TrendingUp size={16} /> },
    { name: "Advertising", icon: <BarChart3 size={16} /> }
  ];

  const [activeCategory, setActiveCategory] = useState("All");

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

  return (
    <div className="ss-container">
      <Helmet>
        <title>Our Services | Purvsoft Technologies – Digital Solutions</title>
        <meta name="description" content="Explore Purvsoft Technologies' range of digital services including Web Development, Mobile Apps, SEO, Google Ads, YouTube Ads, and Digital Marketing solutions." />
        <meta name="keywords" content="web development, mobile app development, digital marketing, SEO services, Google Ads, YouTube Ads, Meta Ads, e-commerce development" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://www.purvsoft.com/services" />
        <meta property="og:title" content="Our Services | Purvsoft Technologies" />
        <meta property="og:description" content="Digital solutions including Web Development, Mobile Apps, SEO, Google Ads, YouTube Ads, and Digital Marketing." />
        <meta property="og:url" content="https://www.purvsoft.com/services" />
        <meta property="og:image" content="https://www.purvsoft.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Services | Purvsoft Technologies" />
      </Helmet>

      {/* Header */}
      <div className="ss-header">
        <h1 className="ss-title">Our Services</h1>
        <p className="ss-subtitle">Comprehensive digital solutions for your business growth</p>
      </div>

      {/* Stats Section */}
      <div className="ss-stats">
        <div className="ss-wrapper">
          <div className="ss-stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="ss-stat-card">
                <div className="ss-stat-icon">{stat.icon}</div>
                <div className="ss-stat-value">{stat.value}</div>
                <div className="ss-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="ss-category-filter">
        <div className="ss-wrapper">
          <div className="ss-filter-grid">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`ss-filter-btn ${activeCategory === category.name ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.name)}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="ss-services">
        <div className="ss-wrapper">
          <div className="ss-services-grid">
            {filteredServices.map((service) => (
              <div 
                key={service.id} 
                className="ss-service-card"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="ss-service-image">
                  <img src={service.image} alt={service.name} />
                  {service.badge && (
                    <span className={`ss-badge ss-badge-${service.badge.toLowerCase().replace(' ', '-')}`}>
                      {service.badge}
                    </span>
                  )}
                  <div className={`ss-service-overlay ${hoveredService === service.id ? 'show' : ''}`}>
                    <div className="ss-service-icon-large">{service.icon}</div>
                  </div>
                </div>
                
                <div className="ss-service-info">
                  <div className="ss-service-icon">{service.icon}</div>
                  <span className="ss-service-category">{service.category}</span>
                  <h3 className="ss-service-name">{service.name}</h3>
                  <p className="ss-service-description">{service.description}</p>
                  
                  <div className="ss-service-features">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="ss-feature-item">
                        <CheckCircle size={14} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    className="ss-learn-btn"
                    onClick={() => handleLearnMore(service.path)}
                  >
                    Learn More <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* View All Button */}
      <div className="ss-view-all">
        <button className="ss-view-btn">
          Explore All Services <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default ServicesShowcase;