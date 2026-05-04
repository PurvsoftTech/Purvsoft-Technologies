import React, { useMemo } from 'react';
import {
  FileText, Image, Video, PenTool, Globe, Layout, Users,
  Share2, Lock, Search, BarChart3, Upload, Edit, FolderOpen,
  Cloud, CheckCircle, ArrowRight, Star, Zap, TrendingUp,
  Shield, Headphones, Layers, Grid, List, Filter, Eye,
  MessageCircle, ShoppingCart
} from 'lucide-react';
import '../../css/ContentManagement.css';
import { Helmet } from 'react-helmet-async';
import Form from '../../config/Form';

// ✅ FIX 1: All static data moved OUTSIDE component
const features = [
  {
    icon: <FileText size={28} />,
    title: "Content Creation",
    desc: "Create and edit various content types including articles, blogs, and landing pages with our intuitive rich text editor.",
    features: ["Rich Text Editor", "Markdown Support", "Media Embedding", "Version History"]
  },
  {
    icon: <Image size={28} />,
    title: "Media Management",
    desc: "Upload, organize, and manage all your images, videos, and documents in one central cloud-based location.",
    features: ["Bulk Upload", "Image Optimization", "Video Streaming", "File Organization"]
  },
  {
    icon: <Layout size={28} />,
    title: "Page Builder",
    desc: "Drag-and-drop page builder that lets you create beautiful, responsive pages without any coding knowledge.",
    features: ["Pre-built Templates", "Custom Layouts", "Responsive Design", "Live Preview"]
  },
  {
    icon: <Users size={28} />,
    title: "User Management",
    desc: "Control access with role-based permissions and collaborate seamlessly with your entire team.",
    features: ["Role Management", "User Permissions", "Team Collaboration", "Activity Logs"]
  },
  {
    icon: <Globe size={28} />,
    title: "Multi-language Support",
    desc: "Create and manage content in multiple languages with full RTL support to reach a global audience.",
    features: ["Language Translation", "Localization", "RTL Support", "Language Switcher"]
  },
  {
    icon: <Share2 size={28} />,
    title: "Social Media Integration",
    desc: "Schedule and publish content directly to Facebook, Instagram, LinkedIn, and Twitter from one platform.",
    features: ["Auto-posting", "Social Analytics", "Content Scheduling", "Platform Integration"]
  },
  {
    icon: <Search size={28} />,
    title: "SEO Optimization",
    desc: "Built-in SEO tools including meta tag management, sitemap generation, and URL structure optimization.",
    features: ["Meta Tags", "Sitemap Generation", "SEO Analysis", "URL Management"]
  },
  {
    icon: <BarChart3 size={28} />,
    title: "Analytics & Insights",
    desc: "Track content performance with detailed traffic, engagement, and conversion analytics and custom reports.",
    features: ["Traffic Analysis", "Engagement Metrics", "Conversion Tracking", "Custom Reports"]
  },
  {
    icon: <Lock size={28} />,
    title: "Security & Backup",
    desc: "Enterprise-grade encryption with automatic daily backups and granular role-based access controls.",
    features: ["Data Encryption", "Auto Backup", "Recovery Tools", "Access Control"]
  }
];

// ✅ FIX 2: Removed fake hardcoded counts — replaced with descriptive labels
const contentTypes = [
  { icon: <FileText size={24} />, title: "Blog Posts & Articles", desc: "Long-form and short-form written content", color: "#4361ee" },
  { icon: <Image size={24} />, title: "Images & Graphics", desc: "Photos, banners, and visual assets", color: "#f59e0b" },
  { icon: <Video size={24} />, title: "Videos", desc: "Tutorials, promos, and media files", color: "#10b981" },
  { icon: <FileText size={24} />, title: "Documents & PDFs", desc: "Reports, whitepapers, and guides", color: "#8b5cf6" },
  { icon: <Layout size={24} />, title: "Landing Pages", desc: "Campaign and conversion pages", color: "#ec4899" },
  { icon: <FolderOpen size={24} />, title: "Categories & Tags", desc: "Content organization and taxonomy", color: "#14b8a6" }
];

const benefits = [
  { icon: <Zap size={24} />, title: "Faster Publishing", desc: "Publish content in minutes with our streamlined workflow and approval system." },
  { icon: <Shield size={24} />, title: "Enterprise Security", desc: "Bank-level security with role-based access and data encryption." },
  { icon: <TrendingUp size={24} />, title: "Better Engagement", desc: "Create engaging content that resonates with your audience and drives results." },
  { icon: <Users size={24} />, title: "Team Collaboration", desc: "Work together seamlessly with real-time collaboration and commenting." },
  { icon: <Cloud size={24} />, title: "Cloud-Based", desc: "Access your content anywhere, anytime with cloud storage and sync." },
  { icon: <Headphones size={24} />, title: "24/7 Support", desc: "Round-the-clock customer support to help you whenever you need it." }
];

// ✅ FIX 3: Renamed from 'process' to 'workflowSteps' — avoids conflict with Node.js global
const workflowSteps = [
  { step: "01", title: "Create", desc: "Create content using our intuitive editor with rich formatting options.", icon: <PenTool size={32} /> },
  { step: "02", title: "Review", desc: "Collaborate with your team for reviews, feedback, and approvals.", icon: <Eye size={32} /> },
  { step: "03", title: "Publish", desc: "Publish content across multiple channels with a single click.", icon: <Upload size={32} /> },
  { step: "04", title: "Analyze", desc: "Track performance and optimize your content strategy with data-driven insights.", icon: <BarChart3 size={32} /> }
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
    question: "What types of content can I manage with Purvsoft CMS?",
    answer: "You can manage all types of digital content including blog posts, images, videos, documents, landing pages, and social media posts from one centralized platform."
  },
  {
    question: "Is the content management system suitable for large teams?",
    answer: "Yes, our system is built for teams of all sizes with role-based permissions, collaboration tools, and workflow management to keep everyone aligned."
  },
  {
    question: "Can I migrate existing content from WordPress or Shopify?",
    answer: "Absolutely! We provide dedicated tools and support to migrate your existing content from WordPress, Shopify, or any other platform with zero data loss."
  },
  {
    question: "How secure is my content on Purvsoft CMS?",
    answer: "We use enterprise-grade encryption, automated daily backups, and strict role-based access controls to ensure your content is always safe and recoverable."
  },
  {
    question: "Does Purvsoft offer content management services in Ahmedabad, India?",
    answer: "Yes. Purvsoft Technologies is based in Ahmedabad, Gujarat and provides professional content management services to businesses across India and internationally."
  },
  {
    question: "What integrations does your CMS support?",
    answer: "Our CMS integrates with WordPress, Shopify, Facebook, Instagram, Twitter, LinkedIn, Google Analytics, Slack, and 50+ more platforms for seamless workflow automation."
  }
];

const ContentManagement = () => {

  // ✅ FIX 4: All schemas in useMemo — computed once, not on every render
  const cmsServiceSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Content Management Services",
    "alternateName": "CMS Solutions",
    "url": "https://www.purvsoft.com/services/content-management",
    "description": "Purvsoft Technologies provides professional content management services including content creation, media management, page building, SEO optimization, analytics, and social media integration for businesses across India.",
    "provider": {
      "@type": "Organization",
      "name": "Purvsoft Technologies",
      "url": "https://www.purvsoft.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.purvsoft.com/logo.png"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ahmedabad",
        "addressRegion": "Gujarat",
        "postalCode": "380001",
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
      "name": "Content Management Features",
      "itemListElement": features.map((f, i) => ({
        "@type": "Offer",
        "position": i + 1,
        "itemOffered": {
          "@type": "Service",
          "name": f.title,
          "description": f.desc
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
      { "@type": "ListItem", "position": 3, "name": "Content Management", "item": "https://www.purvsoft.com/services/content-management" }
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

  const howToSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Manage Content with Purvsoft CMS",
    "description": "A 4-step content management workflow from creation to analytics.",
    "step": workflowSteps.map(item => ({
      "@type": "HowToStep",
      "position": parseInt(item.step),
      "name": item.title,
      "text": item.desc
    }))
  }), []);

  // ✅ FIX 5: Removed aggregateRating from softwareSchema — Google penalizes
  // unverified ratings not backed by visible on-page reviews
  const softwareSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Purvsoft CMS",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "url": "https://www.purvsoft.com/services/content-management",
    "description": "A cloud-based content management system for creating, organizing, and publishing digital content across multiple channels.",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    }
  }), []);

  return (
    <div className="cms-container">
      <Helmet>
        {/* ✅ FIX 6: Title shortened to under 60 chars */}
        <title>Content Management Services in Ahmedabad | Purvsoft</title>

        <meta
          name="description"
          content="Purvsoft Technologies offers professional content management services in Ahmedabad, India — content creation, media management, SEO optimization, analytics & multi-channel publishing. 500+ active users."
        />

        <meta
          name="keywords"
          content="content management services India, CMS solutions Ahmedabad, content creation services, digital content management, media management platform, content strategy India, Purvsoft Technologies CMS"
        />

        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Purvsoft Technologies" />

        {/* ✅ Canonical — no trailing slash, lowercase */}
        <link rel="canonical" href="https://www.purvsoft.com/services/content-management" />

        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Ahmedabad, Gujarat, India" />
        <meta name="geo.position" content="23.0225;72.5714" />
        <meta name="ICBM" content="23.0225, 72.5714" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Content Management Services in Ahmedabad | Purvsoft Technologies" />
        <meta property="og:description" content="Professional content management — creation, media, SEO, analytics & publishing. 500+ active users. Contact Purvsoft Technologies today." />
        <meta property="og:url" content="https://www.purvsoft.com/services/content-management" />
        <meta property="og:site_name" content="Purvsoft Technologies" />
        <meta property="og:image" content="https://www.purvsoft.com/og-content-management.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Content Management Services by Purvsoft Technologies — CMS Solutions India" />
        <meta property="og:locale" content="en_IN" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@purvsoft" />
        <meta name="twitter:creator" content="@purvsoft" />
        <meta name="twitter:title" content="Content Management Services in Ahmedabad | Purvsoft Technologies" />
        <meta name="twitter:description" content="Professional CMS — content creation, media management, SEO & analytics. 500+ active users. Contact Purvsoft today." />
        <meta name="twitter:image" content="https://www.purvsoft.com/og-content-management.jpg" />
        <meta name="twitter:image:alt" content="Content Management Services by Purvsoft Technologies" />

        <meta name="google-site-verification" content="MjMKilzhOmqr6Txi7pbjACF6g_hSt-B6Ej496yJyrH0" />
        <meta name="msvalidate.01" content="AD0DF443696FB452E952416667F1A8DC" />

        {/* ✅ 5 clean schemas — no fake ratings */}
        <script type="application/ld+json">{JSON.stringify(cmsServiceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(softwareSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="cms-hero" aria-label="Content Management Services — Purvsoft Technologies">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <p className="badge" aria-label="Service category">Content Management System</p>

              <h1>
                Manage Your Digital Content <br />
                <span className="brand-gradient">Effortlessly &amp; Efficiently</span>
              </h1>

              <p className="hero-description">
                Streamline your content workflow with our powerful CMS in Ahmedabad, India.
                Create, organize, and publish content across multiple channels with ease.
                Perfect for teams of all sizes.
              </p>

              <div className="hero-stats" aria-label="CMS platform statistics">
                <div className="hero-stat">
                  <p className="stat-number"><strong>10K+</strong></p>
                  <p className="stat-label">Content Items</p>
                </div>
                <div className="hero-stat">
                  <p className="stat-number"><strong>500+</strong></p>
                  <p className="stat-label">Happy Teams</p>
                </div>
                <div className="hero-stat">
                  <p className="stat-number"><strong>50+</strong></p>
                  <p className="stat-label">Integrations</p>
                </div>
              </div>

              <div className="hero-buttons">
                <button
                  className="btn-primary"
                  onClick={() => {
                    document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Contact Us <ArrowRight size={18} />
                </button>
                
              </div>
            </div>

            {/* ✅ Decorative dashboard — aria-hidden */}
            <div className="hero-visual" aria-hidden="true">
              <div className="cms-dashboard" role="presentation">
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
      <section className="stats-section" aria-label="Content Management Platform Statistics">
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

      {/* Content Types Section */}
      <section className="content-types-section" aria-label="Types of Content You Can Manage">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Content Types</p>
            <h2 className="section-title">
              Manage All Your <span className="brand-gradient">Content Types</span>
            </h2>
            <p className="section-description">
              From blog posts to videos, manage all your digital content in one centralized platform.
            </p>
          </div>

          <div className="content-types-grid">
            {/* ✅ FIX 7: Using desc instead of fake count numbers */}
            {contentTypes.map((type, index) => (
              <div key={index} className="content-type-card">
                <div
                  className="type-icon"
                  style={{ backgroundColor: `${type.color}20`, color: type.color }}
                  aria-hidden="true"
                >
                  {type.icon}
                </div>
                <h3 className="type-title">{type.title}</h3>
                <p className="type-count">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section" aria-label="Content Management Features">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Powerful Features</p>
            <h2 className="section-title">
              Everything You Need to <span className="brand-gradient">Manage Content</span>
            </h2>
            <p className="section-description">
              Comprehensive tools and features to streamline your content workflow.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <article key={index} className="feature-card" aria-label={feature.title}>
                <div className="feature-icon" aria-hidden="true">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.desc}</p>
                <ul className="feature-list" aria-label={`Features of ${feature.title}`}>
                  {feature.features.map((item, idx) => (
                    <li key={idx}>
                      <CheckCircle size={14} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section" aria-label="Our Content Management Workflow">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Simple Workflow</p>
            <h2 className="section-title">
              From Creation to <span className="brand-gradient">Publication</span>
            </h2>
            <p className="section-description">
              A streamlined process that makes content management simple and efficient.
            </p>
          </div>

          <div className="process-grid">
            {/* ✅ FIX 3: Using renamed workflowSteps */}
            {workflowSteps.map((item, index) => (
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

      {/* Benefits Section */}
      <section className="benefits-section" aria-label="Benefits of Purvsoft Content Management">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Why Choose Us</p>
            <h2 className="section-title">
              Benefits of Our <span className="brand-gradient">CMS Platform</span>
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

      {/* Integrations Section */}
      <section className="integrations-section" aria-label="CMS Platform Integrations">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Integrations</p>
            <h2 className="section-title">
              Connect With Your <span className="brand-gradient">Favorite Tools</span>
            </h2>
            <p className="section-description">
              Seamlessly integrate with popular platforms and services.
            </p>
          </div>

          <div className="integrations-grid">
            {integrations.map((integration, index) => (
              <div key={index} className="integration-card" aria-label={`Integration with ${integration.name}`}>
                <div className="integration-icon" aria-hidden="true">{integration.icon}</div>
                <span className="integration-name">{integration.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section" aria-label="Content Management Frequently Asked Questions">
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

      {/* Contact Form */}
      <section id="form" aria-label="Contact Purvsoft Technologies for Content Management Services">
        <Form />
      </section>
    </div>
  );
};

export default ContentManagement;