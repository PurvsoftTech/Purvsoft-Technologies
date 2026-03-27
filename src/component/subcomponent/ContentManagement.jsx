import React from 'react';
import {
  FileText,
  Image,
  Video,
  PenTool,
  Globe,
  Layout,
  Users,
  Share2,
  Lock,
  Search,
  BarChart3,
  Upload,
  Edit,
  FolderOpen,
  Cloud,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  TrendingUp,
  Shield,
  Headphones,
  Layers,
  Grid,
  List,
  Filter,
  Eye,
  MessageCircle,
  ShoppingCart
} from 'lucide-react';
import '../../css/ContentManagement.css';
import { Helmet} from 'react-helmet-async';
import Form from '../../config/Form'

const ContentManagement = () => {
  const features = [
    {
      icon: <FileText size={28} />,
      title: "Content Creation",
      desc: "Create and edit various content types including articles, blogs, and landing pages with our intuitive editor.",
      features: ["Rich Text Editor", "Markdown Support", "Media Embedding", "Version History"]
    },
    {
      icon: <Image size={28} />,
      title: "Media Management",
      desc: "Easily upload, organize, and manage all your images, videos, and documents in one central location.",
      features: ["Bulk Upload", "Image Optimization", "Video Streaming", "File Organization"]
    },
    {
      icon: <Layout size={28} />,
      title: "Page Builder",
      desc: "Drag-and-drop page builder that lets you create beautiful pages without any coding knowledge.",
      features: ["Pre-built Templates", "Custom Layouts", "Responsive Design", "Live Preview"]
    },
    {
      icon: <Users size={28} />,
      title: "User Management",
      desc: "Control access with role-based permissions and collaborate seamlessly with your team.",
      features: ["Role Management", "User Permissions", "Team Collaboration", "Activity Logs"]
    },
    {
      icon: <Globe size={28} />,
      title: "Multi-language Support",
      desc: "Create and manage content in multiple languages to reach a global audience.",
      features: ["Language Translation", "Localization", "RTL Support", "Language Switcher"]
    },
    {
      icon: <Share2 size={28} />,
      title: "Social Media Integration",
      desc: "Schedule and publish content directly to your social media platforms.",
      features: ["Auto-posting", "Social Analytics", "Content Scheduling", "Platform Integration"]
    },
    {
      icon: <Search size={28} />,
      title: "SEO Optimization",
      desc: "Built-in SEO tools to optimize your content for better search engine rankings.",
      features: ["Meta Tags", "Sitemap Generation", "SEO Analysis", "URL Management"]
    },
    {
      icon: <BarChart3 size={28} />,
      title: "Analytics & Insights",
      desc: "Track content performance with detailed analytics and actionable insights.",
      features: ["Traffic Analysis", "Engagement Metrics", "Conversion Tracking", "Custom Reports"]
    },
    {
      icon: <Lock size={28} />,
      title: "Security & Backup",
      desc: "Enterprise-grade security with automatic backups and content recovery options.",
      features: ["Data Encryption", "Auto Backup", "Recovery Tools", "Access Control"]
    }
  ];

  const contentTypes = [
    {
      icon: <FileText size={24} />,
      title: "Blog Posts",
      count: "1,234 Articles",
      color: "#4361ee"
    },
    {
      icon: <Image size={24} />,
      title: "Images",
      count: "5,678 Files",
      color: "#f59e0b"
    },
    {
      icon: <Video size={24} />,
      title: "Videos",
      count: "456 Videos",
      color: "#10b981"
    },
    {
      icon: <FileText size={24} />,
      title: "Documents",
      count: "892 Files",
      color: "#8b5cf6"
    },
    {
      icon: <Layout size={24} />,
      title: "Landing Pages",
      count: "123 Pages",
      color: "#ec4899"
    },
    {
      icon: <FolderOpen size={24} />,
      title: "Categories",
      count: "45 Categories",
      color: "#14b8a6"
    }
  ];

  const benefits = [
    {
      icon: <Zap size={24} />,
      title: "Faster Publishing",
      desc: "Publish content in minutes with our streamlined workflow and approval system."
    },
    {
      icon: <Shield size={24} />,
      title: "Enterprise Security",
      desc: "Bank-level security with role-based access and data encryption."
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Better Engagement",
      desc: "Create engaging content that resonates with your audience and drives results."
    },
    {
      icon: <Users size={24} />,
      title: "Team Collaboration",
      desc: "Work together seamlessly with real-time collaboration and commenting."
    },
    {
      icon: <Cloud size={24} />,
      title: "Cloud-Based",
      desc: "Access your content anywhere, anytime with cloud storage and sync."
    },
    {
      icon: <Headphones size={24} />,
      title: "24/7 Support",
      desc: "Round-the-clock customer support to help you whenever you need it."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Create",
      desc: "Create content using our intuitive editor with rich formatting options.",
      icon: <PenTool size={32} />
    },
    {
      step: "02",
      title: "Review",
      desc: "Collaborate with your team for reviews, feedback, and approvals.",
      icon: <Eye size={32} />
    },
    {
      step: "03",
      title: "Publish",
      desc: "Publish content across multiple channels with a single click.",
      icon: <Upload size={32} />
    },
    {
      step: "04",
      title: "Analyze",
      desc: "Track performance and optimize your content strategy.",
      icon: <BarChart3 size={32} />
    }
  ];

  const integrations = [
    { name: "WordPress", icon: <Globe size={20} /> },
    { name: "Shopify", icon: <ShoppingCart size={20} /> },
    { name: "Facebook", icon: <Share2 size={20} /> },
    { name: "Instagram", icon: <Image size={20} /> },
    { name: "Twitter", icon: <MessageCircle size={20} /> },
    { name: "LinkedIn", icon: <Users size={20} /> },
    { name: "Google Analytics", icon: <BarChart3 size={20} /> },
    { name: "Slack", icon: <MessageCircle size={20} /> }
  ];

  const stats = [
    { icon: <FileText size={24} />, value: "10K+", label: "Content Pieces" },
    { icon: <Users size={24} />, value: "500+", label: "Active Users" },
    { icon: <Globe size={24} />, value: "50+", label: "Languages" },
    { icon: <Star size={24} />, value: "4.9", label: "User Rating" }
  ];

  const faqs = [
    {
      question: "What types of content can I manage?",
      answer: "You can manage all types of digital content including blog posts, images, videos, documents, landing pages, and social media posts."
    },
    {
      question: "Is it suitable for large teams?",
      answer: "Yes, our system is built for teams of all sizes with role-based permissions, collaboration tools, and workflow management."
    },
    {
      question: "Can I migrate existing content?",
      answer: "Absolutely! We provide tools and support to migrate your existing content from WordPress, Shopify, or any other platform."
    },
    {
      question: "How secure is my content?",
      answer: "We use enterprise-grade encryption, regular backups, and strict access controls to ensure your content is always safe."
    }
  ];

  return (
    <div className="cms-container">
      <Helmet>
      <title>Content Management Services | Purvsoft Technologies</title>
      <meta name="description" content="Purvsoft Technologies provides professional content management services — content strategy, creation, publishing, and optimization to keep your digital presence fresh and engaging." />
      <meta name="keywords" content="content management, content strategy, content creation, CMS, content marketing, digital content services" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href="https://www.purvsoft.com/services/content-management" />
 
      <meta property="og:title" content="Content Management Services | Purvsoft Technologies" />
      <meta property="og:description" content="Professional content management — strategy, creation, publishing, and optimization." />
      <meta property="og:url" content="https://www.purvsoft.com/services/content-management" />
      <meta property="og:image" content="https://www.purvsoft.com/og-image.jpg" />
 
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Content Management Services | Purvsoft Technologies" />
      <meta name="twitter:description" content="Keep your digital presence fresh with Purvsoft Technologies's content management services." />
    </Helmet>
      {/* Hero Section */}
      <section className="cms-hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content" data-aos="fade-right">
              <div className="badge">Content Management System</div>
              <h1>
                Manage Your Digital Content <br />
                <span className="gradient-text">Effortlessly & Efficiently</span>
              </h1>
              <p className="hero-description">
                Streamline your content workflow with our powerful CMS. Create, organize, and 
                publish content across multiple channels with ease. Perfect for teams of all sizes.
              </p>
              <div className="hero-stats">
                <div className="hero-stat">
                  <span className="stat-number">10K+</span>
                  <span className="stat-label">Content Items</span>
                </div>
                <div className="hero-stat">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Happy Teams</span>
                </div>
                <div className="hero-stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Integrations</span>
                </div>
              </div>
              <div className="hero-buttons">
                <a href="#form" className="btn-primary">
                  Contact Us <ArrowRight size={18} />
                </a>
              </div>
            </div>
            <div className="hero-visual" data-aos="fade-left">
              <div className="cms-dashboard">
                <div className="dashboard-header">
                  <div className="header-left">
                    <Layers size={20} />
                    <span>Content Dashboard</span>
                  </div>
                  <div className="header-right">
                    <Search size={16} />
                    <Filter size={16} />
                    <Grid size={16} />
                    <List size={16} />
                  </div>
                </div>
                <div className="dashboard-content">
                  <div className="content-stats">
                    <div className="stat-box">
                      <FileText size={20} />
                      <div>
                        <span className="stat-value">1,234</span>
                        <span className="stat-label">Posts</span>
                      </div>
                    </div>
                    <div className="stat-box">
                      <Image size={20} />
                      <div>
                        <span className="stat-value">5,678</span>
                        <span className="stat-label">Images</span>
                      </div>
                    </div>
                    <div className="stat-box">
                      <Video size={20} />
                      <div>
                        <span className="stat-value">456</span>
                        <span className="stat-label">Videos</span>
                      </div>
                    </div>
                  </div>
                  <div className="content-list">
                    <div className="content-item">
                      <FileText size={16} />
                      <span>Welcome to Our Blog</span>
                      <span className="status published">Published</span>
                      <Edit size={14} />
                    </div>
                    <div className="content-item">
                      <FileText size={16} />
                      <span>Product Launch Guide</span>
                      <span className="status draft">Draft</span>
                      <Edit size={14} />
                    </div>
                    <div className="content-item">
                      <Image size={16} />
                      <span>Team Photos</span>
                      <span className="status published">Published</span>
                      <Edit size={14} />
                    </div>
                    <div className="content-item">
                      <Video size={16} />
                      <span>Tutorial Video</span>
                      <span className="status review">Review</span>
                      <Edit size={14} />
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

      {/* Content Types Section */}
      <section className="content-types-section">
        <div className="container">
          <div className="section-header">
            <h6 className="section-subtitle">Content Types</h6>
            <h2 className="section-title">
              Manage All Your <span className="gradient-text">Content Types</span>
            </h2>
            <p className="section-description">
              From blog posts to videos, manage all your digital content in one centralized platform.
            </p>
          </div>

          <div className="content-types-grid">
            {contentTypes.map((type, index) => (
              <div key={index} className="content-type-card" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="type-icon" style={{ backgroundColor: `${type.color}20`, color: type.color }}>
                  {type.icon}
                </div>
                <h3 className="type-title">{type.title}</h3>
                <p className="type-count">{type.count}</p>
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
              Everything You Need to <span className="gradient-text">Manage Content</span>
            </h2>
            <p className="section-description">
              Comprehensive tools and features to streamline your content workflow.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.desc}</p>
                <ul className="feature-list">
                  {feature.features.map((item, idx) => (
                    <li key={idx}>
                      <CheckCircle size={14} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h6 className="section-subtitle">Simple Workflow</h6>
            <h2 className="section-title">
              From Creation to <span className="gradient-text">Publication</span>
            </h2>
            <p className="section-description">
              A streamlined process that makes content management simple and efficient.
            </p>
          </div>

          <div className="process-grid">
            {process.map((item, index) => (
              <div key={index} className="process-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="process-step">{item.step}</div>
                <div className="process-icon">{item.icon}</div>
                <h3 className="process-title">{item.title}</h3>
                <p className="process-description">{item.desc}</p>
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
              Benefits of Our <span className="gradient-text">CMS Platform</span>
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

      {/* Integrations Section */}
      <section className="integrations-section">
        <div className="container">
          <div className="section-header">
            <h6 className="section-subtitle">Integrations</h6>
            <h2 className="section-title">
              Connect With Your <span className="gradient-text">Favorite Tools</span>
            </h2>
            <p className="section-description">
              Seamlessly integrate with popular platforms and services.
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
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">
              Ready to Streamline Your <span className="gradient-text">Content Management?</span>
            </h2>
            <p className="cta-description">
              Start your free trial today and experience the power of modern content management.
            </p>
            <div className="cta-buttons">
              <a href="#" className="btn-primary btn-large">
                Start Free Trial <ArrowRight size={20} />
              </a>
              <a href="#" className="btn-outline btn-large">
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </section>
      <div id="form">
        <Form />
      </div>
    </div>
  );
};

export default ContentManagement;