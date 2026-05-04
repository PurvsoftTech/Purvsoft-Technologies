import React from 'react';
import { Link } from 'react-router-dom';
import image from '../image/Pursoft_Logo.png';
import contactConfig from "../config/Allsend";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">

          {/* Company Info */}
          <div className="footer-col">
            <Link to="/">
              <img
                src={image}
                alt="PurvSoft Technologies"
                className="logo-image"
                width={130}
                style={{ borderRadius: "10px" }}
              />
            </Link>
            <p className="footer-description">
              8+ years of web and mobile app expertise with 400+ projects delivered.
              Our skilled team transforms your ideas into digital success.
              Your trusted development partner.
            </p>
          </div>

          {/* Our Services */}
          <div className="footer-col">
            <h4>Our Services</h4>
            <ul className="footer-links">
              <li><Link to="/services/digital-marketing">Digital Marketing</Link></li>
              <li><Link to="/services/seo">SEO</Link></li>
              <li><Link to="/services/custom-software-development">Custom Software Development</Link></li>
              <li><Link to="/services/content-management">Content Management</Link></li>
              <li><Link to="/services/website-development">Web Design &amp; Development</Link></li>
              <li><Link to="/services/mobile-app-development">Mobile App Development</Link></li>
              <li><Link to="/services/e-commerce-development">eCommerce Development</Link></li>
              <li><Link to="/services/youtube-marketing">Youtube Ads</Link></li>
              <li><Link to="/services/meta-ads">Meta Ads</Link></li>
              <li><Link to="/services/google-ads">Google Ads</Link></li>
              <li><Link to="/services/our-challenges">Our Challenges</Link></li>
              <li><Link to="/services/ai-automation">AI Automation</Link></li>
            </ul>
          </div>

          {/* Hire Resource */}
          <div className="footer-col">
            <h4>Hire Resource</h4>
            <ul className="footer-links">
              <li><Link to="/hire-resource">React Developer</Link></li>
              <li><Link to="/hire-resource">Laravel Developer</Link></li>
              <li><Link to="/hire-resource">Node.js Developer</Link></li>
              <li><Link to="/hire-resource">Flutter Developer</Link></li>
              <li><Link to="/hire-resource">UI/UX Designer</Link></li>
              <li><Link to="/hire-resource">SEO Expert</Link></li>
              <li><Link to="/hire-resource">Digital Marketing Expert</Link></li>
              <li><Link to="/hire-resource">AI &amp; Automation</Link></li>
            </ul>
          </div>

          {/* Important Links */}
          <div className="footer-col">
            <h4>Important Links</h4>
            <ul className="footer-links">
              <li><Link to="/aboutus">About</Link></li>
              <li><Link to="/hire-resource">Hire Resource</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/product">Product</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/career">Career</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="footer-col">
            <h4>Get in Touch</h4>
            <div className="contact-info">
              <p><i className="fas fa-phone"></i> {contactConfig.phone}</p>
              <p><i className="fas fa-envelope"></i> {contactConfig.email}</p>
              <p><i className="fas fa-map-marker-alt"></i> {contactConfig.address}</p>
            </div>

            <div className="social-links">
              <a
                href="https://www.linkedin.com/company/purvsoft-tech/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://www.instagram.com/purv_soft/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            &copy; 2026{" "}
            <a
              href="https://www.purvsoft.com/"
              rel="noopener noreferrer"
            >
              Purvsoft Technologies
            </a>
            . All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;