import React, { useRef, useState } from 'react';
import "../../css/ContactPage.css";
import contactConfig from "../../config/Allsend";
import image from "../../image/Career.png";
import { Helmet } from 'react-helmet-async';
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    if (isSending) return;

    setIsSending(true);
    setStatusMessage("");
    setStatusType("");

    try {
      const result = await emailjs.sendForm(
        'service_c6u8125',
        'template_06fqcng',
        formRef.current,
        'xuQfO7VIawpeLIxtS'
      );

      if (result.text === "OK") {
        setStatusMessage("Your message has been sent successfully!");
        setStatusType("success");
        formRef.current.reset();
      } else {
        setStatusMessage("Something went wrong. Please try again.");
        setStatusType("error");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatusMessage("Failed to send message. Please try again later.");
      setStatusType("error");
    } finally {
      setIsSending(false);
    }
  };

  // JSON-LD Structured Data for Contact Page
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Purvsoft Technologies",
    "url": "https://www.purvsoft.com",
    "logo": "https://www.purvsoft.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": contactConfig.phone,
      "contactType": "customer service",
      "email": contactConfig.email,
      "availableLanguage": ["English", "Hindi"],
      "areaServed": "Worldwide"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": contactConfig.address,
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "postalCode": "380001",
      "addressCountry": "India"
    },
    "sameAs": [
      "https://www.facebook.com/purvsoft",
      "https://twitter.com/purvsoft",
      "https://www.linkedin.com/company/purvsoft-technologies",
      "https://www.instagram.com/purvsoft"
    ]
  };

  const localBusinessStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Purvsoft Technologies",
    "image": "https://www.purvsoft.com/logo.png",
    "telephone": contactConfig.phone,
    "email": contactConfig.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": contactConfig.address,
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "postalCode": "380001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.0225,
      "longitude": 72.5714
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "$$",
    "url": "https://www.purvsoft.com/contact"
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
        "name": "Contact Us",
        "item": "https://www.purvsoft.com/contact"
      }
    ]
  };

  const contactPageStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Purvsoft Technologies",
    "description": "Get in touch with Purvsoft Technologies for web development, digital marketing, SEO, and technology solutions.",
    "url": "https://www.purvsoft.com/contact",
    "mainEntity": {
      "@type": "ContactPoint",
      "telephone": contactConfig.phone,
      "email": contactConfig.email,
      "contactType": "customer support"
    }
  };

  return (
    <div className="contact-wrapper">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Contact Us | Purvsoft Technologies – Web Development & Digital Marketing Agency</title>
        <meta name="title" content="Contact Us | Purvsoft Technologies – Web Development & Digital Marketing Agency" />
        <meta name="description" content="Contact Purvsoft Technologies for expert web development, digital marketing, SEO services, and mobile app solutions. Get a free consultation and quote for your project today." />
       <meta 
          name="keywords" 
          content="contact Purvsoft Technologies, web development inquiry Ahmedabad, digital marketing agency contact, hire web developer India, SEO services contact, mobile app development quote"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Purvsoft Technologies" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.purvsoft.com/contact" />
        
        {/* Alternate language versions */}
        <link rel="alternate" href="https://www.purvsoft.com/contact" hrefLang="x-default" />
        
        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.purvsoft.com/contact" />
        <meta property="og:title" content="Contact Us | Purvsoft Technologies – Get a Free Consultation" />
        <meta property="og:description" content="Need web development, digital marketing, or SEO services? Contact Purvsoft Technologies today for a free consultation and quote." />
        <meta property="og:image" content="https://www.purvsoft.com/og-contact.jpg" />
        <meta property="og:image:alt" content="Contact Purvsoft Technologies - Web Development and Digital Marketing Agency" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Purvsoft Technologies" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.purvsoft.com/contact" />
        <meta name="twitter:title" content="Contact Us | Purvsoft Technologies" />
        <meta name="twitter:description" content="Get in touch with Purvsoft Technologies for web development, digital marketing, and SEO services." />
        <meta name="twitter:image" content="https://www.purvsoft.com/twitter-contact.jpg" />
        <meta name="twitter:image:alt" content="Purvsoft Technologies Contact Page" />
        
        {/* Verification tags - Google Search Console */}
        <meta name="google-site-verification" content="MjMKilzhOmqr6Txi7pbjACF6g_hSt-B6Ej496yJyrH0" />
        <meta name="msvalidate.01" content="AD0DF443696FB452E952416667F1A8DC" />
        
        {/* Geographic Meta Tags - Ahmedabad, Gujarat */}
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Ahmedabad" />
        <meta name="geo.position" content="23.0225;72.5714" />
        <meta name="ICBM" content="23.0225, 72.5714" />
        
        {/* Mobile Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        
        {/* Business Contact Meta Tags */}
        <meta name="business:contact_data:country_name" content="India" />
        <meta name="business:contact_data:locality" content="Ahmedabad" />
        <meta name="business:contact_data:region" content="Gujarat" />
        
        {/* Format Detection */}
        <meta name="format-detection" content="telephone=yes" />
      </Helmet>

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationStructuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessStructuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(contactPageStructuredData)}
      </script>

      {/* Banner Section */}
      <section className="contact-banner" aria-label="Contact Banner Section">
        <div className="container banner-flex">
          <div className="banner-text" data-aos="fade-right">
            <h1>
              Get In Touch <span className="blue-text">With Us</span>
            </h1>
          </div>
          <div className="banner-img" data-aos="fade-left">
            <img src={image} alt="Contact Purvsoft Technologies Ahmedabad for web development and digital marketing services" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Info & Form Section */}
      <section className="contact-main" aria-label="Contact Information and Form">
        <div className="container main-grid">
          <div className="contact-info-cards" data-aos="fade-right">
            <div className="info-card">
              <div className="icon-circle">
                <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
              </div>
              <div>
                <h3>Office Location</h3>
                <p>{contactConfig.address}</p>
                <a 
                  href="https://www.google.com/maps/place/Sv+Square,+New+Ranip,+Ahmedabad,+Gujarat+382470/@23.0893391,72.5644159,200m/data=!3m2!1e3!4b1!4m6!3m5!1s0x395e830a34fbb71f:0x30da2e1931a093f4!8m2!3d23.0892124!4d72.5649392!16s%2Fg%2F11qs976g3r?entry=ttu&g_ep=EgoyMDI2MDQxMi4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="direction-link"
                  aria-label="Get directions to our office"
                >
                  Get Directions <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>

            <div className="info-card">
              <div className="icon-circle">
                <i className="fas fa-phone-alt" aria-hidden="true"></i>
              </div>
              <div>
                <h3>Call Us</h3>
                <p>{contactConfig.phone}</p>
                <a 
                  href={`tel:${contactConfig.phone.replace(/\s/g, '')}`} 
                  className="call-link"
                  aria-label="Call us"
                >
                  Call Now <i className="fas fa-phone"></i>
                </a>
              </div>
            </div>

            <div className="info-card">
              <div className="icon-circle">
                <i className="fas fa-envelope" aria-hidden="true"></i>
              </div>
              <div>
                <h3>Email Us</h3>
                <p>{contactConfig.email}</p>
                <a 
                  href={`mailto:${contactConfig.email}`} 
                  className="email-link"
                  aria-label="Email us"
                >
                  Send Email <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>

            {/* Social Links */}
          </div>

          <div className="contact-form-container" data-aos="fade-left">
            <div className="form-header">
              <h2>Send Us a Message</h2>
              <p>Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>
            <form ref={formRef} className="modern-form" onSubmit={sendEmail}>
              <div className="input-group full-width">
                <label htmlFor="fullName">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your full name"
                  required
                  aria-required="true"
                />
              </div>

              <div className="input-group full-width">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                  aria-required="true"
                />
              </div>

              <div className="input-group full-width">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  pattern="[0-9]{10}"
                  placeholder="Enter your phone number"
                  required
                  aria-required="true"
                />
              </div>

              <div className="input-group full-width">
                <label htmlFor="projectRequirement">Project Requirement / Message</label>
                <textarea
                  id="projectRequirement"
                  name="projectRequirement"
                  placeholder="Tell us about your project, requirements, or any questions..."
                  rows="5"
                ></textarea>
              </div>

              {statusMessage && (
                <div className={`form-status-message ${statusType}`} role="alert">
                  {statusType === "success" ? "✅ " : "❌ "}{statusMessage}
                </div>
              )}

              <button type="submit" className="submit-btn" disabled={isSending} aria-label="Send message">
                {isSending ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Sending...
                  </>
                ) : (
                  <>
                    Send Message <i className="fas fa-arrow-right"></i>
                  </>
                )}
              </button>
              
              <p className="form-note">
                <i className="fas fa-lock"></i> Your information is safe with us. We'll never share your data.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section" aria-label="Our Office Location Map">
        <div className="map-container">
          <div className="map-overlay">
            <div className="location-pin">
              <div className="pin-label">PurvSoft Technologies</div>
              <div className="pin-point"></div>
              <div className="pulse"></div>
            </div>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3488.612835562931!2d72.56505960000001!3d23.0893391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e830a34fbb71f%3A0x30da2e1931a093f4!2sSv%20Square%2C%20New%20Ranip%2C%20Ahmedabad%2C%20Gujarat%20382470!5e1!3m2!1sen!2sin!4v1776241337456!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            title="Purvsoft Technologies Office Location Map - Ahmedabad, Gujarat"
            aria-label="Google Maps showing Purvsoft Technologies office location"
          ></iframe>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;