import React from 'react';
import {
  Code,
  Globe,
  Smartphone,
  Award,
  Clock,
  Bot,
  DollarSign,
  Heart,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import '../../css/HireSource.css';
import { Helmet } from 'react-helmet-async';
import ServiceInquiryForm from '../../config/ServiceInquiryForm';

const HireSource = () => {
  const services = [
    {
      icon: <Code size={24} />,
      title: "Web Development",
      desc: "React, Laravel, Node.js",
      link: "/services/website-development",
      linkText: "Hire Web Developer"
    },
    {
      icon: <Smartphone size={24} />,
      title: "Mobile Apps",
      desc: "Flutter",
      link: "/services/mobile-app-development",
      linkText: "Hire Mobile Developer"
    },
    {
      icon: <Globe size={24} />,
      title: "Digital Marketing",
      desc: "SEO, Social Media, Google Ads, Meta Ads",
      link: "/services/digital-marketing",
      linkText: "Hire Marketing Expert"
    },
    {
      icon: <Bot size={24} />,
      title: "AI & Automation",
      desc: "n8n, OpenAI, Claude, Automation Workflows",
      link: "/services/ai-automation",
      linkText: "Hire AI Specialist"
    }
  ];

  const benefits = [
    { icon: <Clock size={20} />, text: "Quick hiring within 48 hours" },
    { icon: <Award size={20} />, text: "Pre-vetted expert developers" },
    { icon: <DollarSign size={20} />, text: "Flexible engagement models" },
    { icon: <Heart size={20} />, text: "Dedicated 24/7 support" }
  ];
  const scrollToForm = () => {
  document.getElementById("inquiry-form")?.scrollIntoView({ behavior: "smooth" });
};

  const hiringModels = [
    { title: "Hourly Hiring", desc: "Pay only for the hours worked. Perfect for short-term tasks." },
    { title: "Monthly Dedicated", desc: "Dedicated resource working full-time on your project." },
    { title: "Project Based", desc: "Fixed cost for complete project delivery." },
    { title: "Team Extension", desc: "Scale your existing team with our experts." }
  ];

  // ✅ Fixed: all tech stack links now use correct -development suffix
  const techStack = [
    { name: "React.js", link: "/services/reactjs-development" },
    { name: "Next.js", link: "/services/nextjs-development" },
    { name: "Laravel", link: "/services/laravel-development" },
    { name: "Node.js", link: "/services/nodejs-development" },
    { name: "Flutter", link: "/services/flutter-development" },
    { name: "Shopify", link: "/services/shopify-development" },
    { name: "Ai-Automation", link: "/services/ai-automation" },
  ];

  const faqs = [
    {
      question: "How quickly can I hire a developer?",
      answer: "We can provide a pre-vetted developer within 48-72 hours after understanding your requirements. For specialized skills, it may take 5-7 days."
    },
    {
      question: "What are your hiring models?",
      answer: "We offer hourly hiring, monthly dedicated resources, project-based pricing, and team extension models. Choose what works best for your business."
    },
    {
      question: "Can I interview the developers before hiring?",
      answer: "Yes! We arrange technical interviews with shortlisted candidates so you can assess their skills and communication before making a decision."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we provide ongoing support and maintenance for all projects. Our dedicated resources work as an extension of your team."
    }
  ];

  // ✅ Fixed: addressCountry changed from "India" to ISO code "IN"
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Hire Dedicated Developers & Digital Experts",
    "provider": {
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
    "description": "Hire dedicated developers, designers, and digital marketers from Purvsoft Technologies. Flexible hiring models for startups and enterprises. Scale your team quickly with pre-vetted experts.",
    "serviceType": ["Dedicated Developers", "Remote Team Hiring", "Staff Augmentation", "IT Resource Hiring"],
    "areaServed": "Worldwide",
    "audience": {
      "@type": "BusinessAudience"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "USD",
        "price": "Custom"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.purvsoft.com/hire-resource"
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
        "name": "Hire Resources",
        "item": "https://www.purvsoft.com/hire-resource"
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

  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Purvsoft Technologies",
    "url": "https://www.purvsoft.com",
    "logo": "https://www.purvsoft.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["English", "Hindi"]
    }
  };

  return (
    <div className="hs-container">
      <Helmet>
        {/* ✅ Removed redundant <meta name="title"> — not a standard tag */}
        <title>Hire Dedicated Developers | Remote Developers for Hire | Purvsoft Technologies</title>
        <meta name="description" content="Hire dedicated developers, designers, and digital marketers from Purvsoft Technologies. Flexible hiring models for startups and enterprises. Scale your team quickly with pre-vetted experts." />

        {/* ✅ Cleaned keywords — removed trailing comma and duplicate entries */}
        <meta name="keywords" content="hire dedicated developers, hire remote developers, hire web developer India, dedicated development team, staff augmentation, resource hiring, hire React developer, hire Laravel developer, hire Flutter developer, hire digital marketer, hire developers Ahmedabad, hire developers India, Purvsoft Technologies hiring" />

        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        {/* ✅ Added: googlebot directive (missing, present in other pages) */}
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Purvsoft Technologies" />
        <meta name="language" content="English" />
        {/* ✅ Removed: revisit-after — deprecated, ignored by all major crawlers */}

        {/* Canonical */}
        <link rel="canonical" href="https://www.purvsoft.com/hire-resource" />
        {/* ✅ Removed: hreflang alternate — pointless with only one language version */}

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.purvsoft.com/hire-resource" />
        <meta property="og:title" content="Hire Dedicated Developers | Remote Development Team | Purvsoft" />
        <meta property="og:description" content="Scale your team with dedicated developers, designers, and digital marketers from Purvsoft Technologies. Flexible hiring models for startups and enterprises." />
        <meta property="og:image" content="https://www.purvsoft.com/og-hire-resource.jpg" />
        <meta property="og:image:alt" content="Hire Dedicated Developers - Purvsoft Technologies" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Purvsoft Technologies" />
        {/* ✅ Fixed: changed en_US to en_IN — company is based in India */}
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        {/* ✅ Removed: twitter:url — not a standard Twitter card tag */}
        {/* ✅ Added: twitter:site and twitter:creator (were missing) */}
        <meta name="twitter:site" content="@purvsoft" />
        <meta name="twitter:creator" content="@purvsoft" />
        <meta name="twitter:title" content="Hire Dedicated Developers | Purvsoft Technologies" />
        <meta name="twitter:description" content="Hire dedicated developers, designers, and digital marketers. Flexible engagement models. Scale your team quickly." />
        {/* ✅ Fixed: unified twitter image with OG image — no need for separate file */}
        <meta name="twitter:image" content="https://www.purvsoft.com/og-hire-resource.jpg" />
        <meta name="twitter:image:alt" content="Hire Dedicated Developers - Purvsoft Technologies" />

        {/* Verification */}
        <meta name="google-site-verification" content="MjMKilzhOmqr6Txi7pbjACF6g_hSt-B6Ej496yJyrH0" />
        <meta name="msvalidate.01" content="AD0DF443696FB452E952416667F1A8DC" />

        {/* Geo Tags */}
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Ahmedabad, Gujarat, India" />
        <meta name="geo.position" content="23.0225;72.5714" />
        <meta name="ICBM" content="23.0225, 72.5714" />

        {/* ✅ JSON-LD moved inside Helmet — was incorrectly placed in JSX body */}
        <script type="application/ld+json">{JSON.stringify(organizationStructuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqStructuredData)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="hs-hero" aria-label="Hire Dedicated Developers Hero Section">
        <div className="hs-wrapper">
          <div className="hs-hero-content" data-aos="fade-up">
            <h1 className="hs-hero-title">Hire Dedicated <span className="hs-highlight">Developers & Experts</span></h1>
            <p className="hs-hero-subtitle">Find the right talent for your project. Scale your team with pre-vetted professionals.</p>
            <div className="hs-hero-buttons">
             <button
                className="hs-btn-primary"
                onClick={scrollToForm}
                aria-label="Hire developers now"
              >
                Hire Now <ArrowRight size={18} />
              </button>
              <Link to="/portfolio" className="hs-btn-secondary" aria-label="View our portfolio">
                View Portfolio <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="hs-offer" aria-label="Services We Offer for Hiring">
        <div className="hs-wrapper">
          <div className="hs-section-header">
            <p className="hs-section-subtitle">Our Expertise</p>
            <h2 className="hs-section-title">What <span className="hs-highlight">We Offer</span></h2>
            <p className="hs-section-desc">Hire skilled professionals across various domains</p>
          </div>
          <div className="hs-offer-grid">
            {services.map((service, index) => (
              <div key={index} className="hs-offer-card" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="hs-offer-icon" aria-hidden="true">{service.icon}</div>
                <h3 className="hs-offer-title">{service.title}</h3>
                <p className="hs-offer-desc">{service.desc}</p>
                <Link to={service.link} className="hs-offer-link">
                  {service.linkText} <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="hs-tech-stack" aria-label="Technologies We Specialize In">
        <div className="hs-wrapper">
          <div className="hs-section-header">
            <p className="hs-section-subtitle">Technologies</p>
            <h2 className="hs-section-title">Our <span className="hs-highlight">Tech Stack</span></h2>
            <p className="hs-section-desc">Experts in modern technologies and frameworks</p>
          </div>
          <div className="hs-tech-grid">
            {techStack.map((tech, index) => (
              <Link key={index} to={tech.link} className="hs-tech-item" data-aos="zoom-in" data-aos-delay={index * 30}>
                <CheckCircle size={16} />
                <span>{tech.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Models */}
      <section className="hs-models" aria-label="Hiring Models">
        <div className="hs-wrapper">
          <div className="hs-section-header">
            <p className="hs-section-subtitle">Flexible Options</p>
            <h2 className="hs-section-title">Our <span className="hs-highlight">Hiring Models</span></h2>
            <p className="hs-section-desc">Choose the engagement model that works best for you</p>
          </div>
          <div className="hs-models-grid">
            {hiringModels.map((model, index) => (
              <div key={index} className="hs-model-card" data-aos="fade-up" data-aos-delay={index * 50}>
                <h3 className="hs-model-title">{model.title}</h3>
                <p className="hs-model-desc">{model.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="hs-why" aria-label="Why Choose Purvsoft Technologies">
        <div className="hs-wrapper">
          <div className="hs-section-header">
            <p className="hs-section-subtitle">Benefits</p>
            <h2 className="hs-section-title">Why <span className="hs-highlight">Choose Us</span></h2>
            <p className="hs-section-desc">What makes us the preferred choice for hiring</p>
          </div>
          <div className="hs-why-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="hs-why-item" data-aos="zoom-in" data-aos-delay={index * 50}>
                <div className="hs-why-icon" aria-hidden="true">{benefit.icon}</div>
                <span className="hs-why-text">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Internal Links — ALL paths fixed to match sitemap routes */}
      <section className="hs-internal-links" aria-label="Explore More Services">
        <div className="hs-wrapper">
          <div className="section-header">
            <h2>Explore Our <span className="gradient-text">Services</span></h2>
            <p>Discover how we can help your business grow</p>
          </div>
          <div className="internal-links-grid">
            <div className="links-column">
              <h3>Development Services</h3>
              <ul>
                {/* ✅ Fixed: all 7 links now have correct -development suffix */}
                <li><Link to="/services/reactjs-development">Hire ReactJS Developer</Link></li>
                <li><Link to="/services/nextjs-development">Hire NextJS Developer</Link></li>
                <li><Link to="/services/angular-development">Hire Angular Developer</Link></li>
                <li><Link to="/services/laravel-development">Hire Laravel Developer</Link></li>
                <li><Link to="/services/nodejs-development">Hire NodeJS Developer</Link></li>
                <li><Link to="/services/flutter-development">Hire Flutter Developer</Link></li>
                <li><Link to="/services/shopify-development">Hire Shopify Expert</Link></li>
              </ul>
            </div>
            <div className="links-column">
              <h3>Marketing Services</h3>
              <ul>
                <li><Link to="/services/seo">Hire SEO Expert</Link></li>
                <li><Link to="/services/google-ads">Hire Google Ads Specialist</Link></li>
                <li><Link to="/services/youtube-marketing">Hire YouTube Marketer</Link></li>
                <li><Link to="/services/meta-ads">Hire Meta Ads Expert</Link></li>
                <li><Link to="/services/content-management">Hire Content Manager</Link></li>
              </ul>
            </div>
            <div className="links-column">
              <h3>Company</h3>
              <ul>
                <li><Link to="/aboutus">About Us</Link></li>
                <li><Link to="/portfolio">Our Portfolio</Link></li>
                <li><Link to="/blog">Latest Blog</Link></li>
                <li><Link to="/career">Careers</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="hs-faq" aria-label="Frequently Asked Questions about Hiring">
        <div className="hs-wrapper">
          <div className="hs-section-header">
            <p className="hs-section-subtitle">FAQ</p>
            <h2 className="hs-section-title">Frequently Asked <span className="hs-highlight">Questions</span></h2>
            <p className="hs-section-desc">Get answers to common questions about hiring</p>
          </div>
          <div className="hs-faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="hs-faq-card" data-aos="fade-up" data-aos-delay={index * 50} itemScope itemType="https://schema.org/Question">
                <h3 className="hs-faq-question" itemProp="name">{faq.question}</h3>
                <div className="hs-faq-answer" itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                  <p itemProp="text">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Inquiry Form */}
      <div id="inquiry-form">
        <ServiceInquiryForm />
      </div>
    </div>
  );
};

export default HireSource;