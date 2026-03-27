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

  return (
    <div className="contact-wrapper">
      <Helmet>
      <title>Contact Us | Purvsoft Technologies – Get in Touch</title>
      <meta name="description" content="Contact Purvsoft Technologies for web development, digital marketing, SEO, or any technology solutions. We'd love to hear from you and help grow your business." />
      <meta name="keywords" content="contact Purvsoft Technologies, hire digital agency, get in touch, web development inquiry, digital marketing contact" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href="https://www.purvsoft.com/contact" />
 
      <meta property="og:title" content="Contact Us | Purvsoft Technologies" />
      <meta property="og:description" content="Contact Purvsoft Technologies for web development, digital marketing, SEO, or any technology solutions." />
      <meta property="og:url" content="https://www.purvsoft.com/contact" />
      <meta property="og:image" content="https://www.purvsoft.com/og-image.jpg" />
 
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Contact Us | Purvsoft Technologies" />
      <meta name="twitter:description" content="Get in touch with Purvsoft Technologies for digital marketing and technology solutions." />
    </Helmet>
      {/* Banner Section */}
      <section className="contact-banner">
        <div className="container banner-flex">
          <div className="banner-text">
            <h1>
              Get In Touch <span className="blue-text">With Us</span>
            </h1>
            <p>
              Interested in our Web and Mobile app development services or need advice? <br />
              Then please get in touch and we'll be glad to help.
            </p>
          </div>
          <div className="banner-img">
            <img src={image} alt="Contact Illustration" />
          </div>
        </div>
      </section>

      {/* Info & Form Section */}
      <section className="contact-main">
        <div className="container main-grid">
          <div className="contact-info-cards">
            <div className="info-card">
              <div className="icon-circle">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h3>Office Location</h3>
                <p>{contactConfig.address}</p>
              </div>
            </div>

            <div className="info-card">
              <div className="icon-circle">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div>
                <h3>Call Us</h3>
                <p>{contactConfig.phone}</p>
              </div>
            </div>

            <div className="info-card">
              <div className="icon-circle">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h3>Email Us</h3>
                <p>{contactConfig.email}</p>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form ref={formRef} className="modern-form" onSubmit={sendEmail}>
              <div className="input-group full-width">
                <label>Full Name *</label>
                <input
                  type="text"
                   name="fullName"
                  placeholder="Full Name"
                  required
                />
              </div>

              <div className="input-group full-width">
                <label>E-Mail *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="E-Mail"
                  required
                />
              </div>

              <div className="input-group full-width">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                />
              </div>

              <div className="input-group full-width">
                <label>Project Requirement</label>
                <textarea
                  name="projectRequirement"
                  placeholder="Project Requirement"
                  rows="4"
                ></textarea>
              </div>

              {statusMessage && (
                <div className={`form-status-message ${statusType}`}>
                  {statusMessage}
                </div>
              )}

              <button type="submit" className="submit-btn" disabled={isSending}>
                {isSending ? "Sending..." : "Submit"}{" "}
                <i className="fas fa-arrow-right"></i>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="map-container">
          <div className="map-overlay">
            <div className="location-pin">
              <div className="pin-label">PurvSoft Technologies</div>
              <div className="pin-point"></div>
              <div className="pulse"></div>
            </div>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.0123456789!2d72.793!3d21.196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e6a00000001%3A0x0!2zMjHCsDExJzQ1LjYiTiA3MsKwNDcnMzQuOCJF!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="PurvSoft Location Map"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;