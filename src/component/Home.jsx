import React from 'react';
import "../css/Home.css"
import Latested from './Latested';
import TestimonialSection from './TestimonialSection';
import TechStackSection from './TechStackSection'
import AssistSection from './AssistSection';
import Form from '../config/Form'
import FAQSection from './FAQSection';
import { Helmet } from 'react-helmet-async';
import { useNavigate, Link } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Purvsoft Technologies",
    "url": "https://www.purvsoft.com/",
    "logo": "https://www.purvsoft.com/logo.png",
    "description": "Purvsoft Technologies is a leading digital marketing and technology agency offering web development, SEO, social media marketing, mobile app development, and custom software solutions.",
    "foundingDate": "2020",
    "telephone": "+919408670766",
    "email": "contact@purvsoft.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sv Square, 333, Near GST Road, New Ranip",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "postalCode": "382470",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "url": "https://www.purvsoft.com/contact"
    },
    "sameAs": [
      "https://www.linkedin.com/company/purvsoft",
      "https://twitter.com/purvsoft",
      "https://www.facebook.com/purvsoft"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Purvsoft Technologies",
    "url": "https://www.purvsoft.com/"
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Digital Marketing & Web Development",
    "provider": {
      "@type": "Organization",
      "name": "Purvsoft Technologies",
      "url": "https://www.purvsoft.com/"
    },
    "areaServed": [
      { "@type": "City", "name": "Ahmedabad" },
      { "@type": "State", "name": "Gujarat" },
      { "@type": "Country", "name": "India" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Our Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile App Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO Services" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Marketing" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Software Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI & Automation" } }
      ]
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Purvsoft Technologies",
    "image": "https://www.purvsoft.com/logo.png",
    "telephone": "+919408670766",
    "email": "contact@purvsoft.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sv Square, 333, Near GST Road, New Ranip",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "postalCode": "382470",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.0893,
      "longitude": 72.5649
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "url": "https://www.purvsoft.com/",
    "priceRange": "$$"
  };


  return (
    <main className="home" role="main">
      <Helmet>
        <title>Purvsoft Technologies | Web Development & Digital Marketing Agency in India</title>
        <meta
          name="description"
          content="Purvsoft Technologies — India's trusted digital marketing & technology agency. We offer web development, mobile app development, SEO, social media marketing, and custom software solutions. Get started today!"
        />

        <meta
          name="keywords"
          content="digital marketing agency India, web development company, SEO services India, mobile app development, custom software solutions, Purvsoft Technologies, hire web developer, ReactJS development, Laravel development, Flutter apps"
        />

        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Purvsoft Technologies" />

        <link rel="canonical" href="https://www.purvsoft.com/" />

        <meta name="language" content="English" />
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Ahmedabad, Gujarat, India" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Purvsoft Technologies | Web Development & Digital Marketing Agency" />
        <meta property="og:description" content="India's trusted agency for web development, mobile apps, SEO, and digital marketing. We turn your ideas into reality!" />
        <meta property="og:url" content="https://www.purvsoft.com/" />
        <meta property="og:site_name" content="Purvsoft Technologies" />
        <meta property="og:image" content="https://www.purvsoft.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Purvsoft Technologies - Digital Marketing and Web Development Agency" />
        <meta property="og:locale" content="en_IN" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@purvsoft" />
        <meta name="twitter:creator" content="@purvsoft" />
        <meta name="twitter:title" content="Purvsoft Technologies | Web Development & Digital Marketing Agency" />
        <meta name="twitter:description" content="India's trusted agency for web development, mobile apps, SEO, and digital marketing." />
        <meta name="twitter:image" content="https://www.purvsoft.com/og-image.jpg" />
        <meta name="twitter:image:alt" content="Purvsoft Technologies - Digital Marketing and Web Development Agency" />

        <meta name="google-site-verification" content="MjMKilzhOmqr6Txi7pbjACF6g_hSt-B6Ej496yJyrH0" />
        <meta name="msvalidate.01" content="AD0DF443696FB452E952416667F1A8DC" />

        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>

      <section className="hero-section" aria-label="Purvsoft Technologies - Hero">
        <div className="hero-container">
          <div className="hero-content">

            <p className="agency-badge" aria-label="Agency type">
              <span className="badge-text">Strategic Design and Technology Agency</span>
            </p>

            <h1 className="hero-title">
              Purvsoft Technologies —<span className="brand-gradient"> Web Development & Digital Marketing Agency</span>
            </h1>

            <h2 className="hero-subtitle">
              Your Partner in<br />
              Digital Marketing,<br />
              Web &amp; Mobile App<br />
              Excellence
            </h2>

            <p className="hero-description">
              We are your one-stop solution for all your web and mobile IT requirements.
              From custom web development to SEO, mobile apps, and digital marketing —
              share your ideas with us, and we will transform them into reality!
            </p>

            <button
              className="cta-button"
              onClick={() => navigate("/contact")}
              aria-label="Contact Purvsoft Technologies"
            >
              Contact Us <i className="fas fa-arrow-right" aria-hidden="true"></i>
            </button>
          </div>

          <div className="hero-image" aria-hidden="true">
            <div className="tech-illustration" role="presentation">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="code-snippet">
                <pre aria-hidden="true">{`<PurvSoft />
{innovation}
</excellence>`}</pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-overview" aria-label="Our Core Services">
        <div className="container">
          <div className="section-header">
            <h2>What <span className="brand-gradient">We Do</span></h2>
            <p>Explore our comprehensive range of digital solutions</p>
          </div>
          <div className="services-links-grid">
            <Link to="/services/website-development" className="service-link-card">
              <i className="fas fa-code"></i>
              <h3>Web Development</h3>
              <p>React, Laravel, Node.js, Next.js</p>
            </Link>
            <Link to="/services/mobile-app-development" className="service-link-card">
              <i className="fas fa-mobile-alt"></i>
              <h3>Mobile App Development</h3>
              <p>Flutter</p>
            </Link>
            <Link to="/services/digital-marketing" className="service-link-card">
              <i className="fas fa-chart-line"></i>
              <h3>Digital Marketing</h3>
              <p>SEO, Social Media, Content Marketing</p>
            </Link>
            <Link to="/services/seo" className="service-link-card">
              <i className="fas fa-search"></i>
              <h3>SEO Services</h3>
              <p>On-page, Off-page, Technical SEO</p>
            </Link>
            <Link to="/services/e-commerce-development" className="service-link-card">
              <i className="fas fa-shopping-cart"></i>
              <h3>E-commerce Development</h3>
              <p>Shopify</p>
            </Link>
            <Link to="/services/ai-automation" className="service-link-card">
              <i className="fas fa-robot"></i>
              <h3>AI & Automation</h3>
              <p>n8n, OpenAI, Claude, Workflows</p>
            </Link>
          </div>
        </div>
      </section>

      <section aria-label="Technologies We Work With">
        <TechStackSection />
      </section>

      <section aria-label="How We Can Help You">
        <AssistSection />
      </section>

      <section aria-label="Client Testimonials">
        <TestimonialSection />
      </section>

      <section aria-label="Latest Work & Projects">
        <Latested />
      </section>

      <section className="internal-links-section" aria-label="Explore More Services">
        <div className="container">
          <div className="section-header">
            <h2>Explore Our <span className="brand-gradient">Expertise</span></h2>
            <p>Discover how we can help your business grow</p>
          </div>
          <div className="internal-links-grid">
            <div className="links-column">
              <h3>Development Services</h3>
              <ul>
                <li><Link to="/services/reactjs-development">ReactJS Development</Link></li>
                <li><Link to="/services/nextjs-development">NextJS Development</Link></li>
                <li><Link to="/services/angular-development">Angular Development</Link></li>
                <li><Link to="/services/laravel-development">Laravel Development</Link></li>
                <li><Link to="/services/nodejs-development">NodeJS Development</Link></li>
                <li><Link to="/services/flutter-development">Flutter App Development</Link></li>
                <li><Link to="/services/shopify-development">Shopify Development</Link></li>
              </ul>
            </div>
            <div className="links-column">
              <h3>Marketing Services</h3>
              <ul>
                <li><Link to="/services/seo">SEO Optimization</Link></li>
                <li><Link to="/services/google-ads">Google Ads Management</Link></li>
                <li><Link to="/services/youtube-marketing">YouTube Marketing</Link></li>
                <li><Link to="/services/meta-ads">Meta Ads (Facebook/Instagram)</Link></li>
                <li><Link to="/services/content-management">Content Management</Link></li>
              </ul>
            </div>
            <div className="links-column">
              <h3>Company</h3>
              <ul>
                <li><Link to="/aboutus">About Us</Link></li>
                <li><Link to="/portfolio">Our Portfolio</Link></li>
                <li><Link to="/blog">Latest Blog</Link></li>
                <li><Link to="/career">Careers</Link></li>
                <li><Link to="/hire-resource">Hire Resource</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Frequently Asked Questions">
        <FAQSection />
      </section>

      <section aria-label="Contact Us">
        <Form />
      </section>
    </main>
  );
};

export default Home;