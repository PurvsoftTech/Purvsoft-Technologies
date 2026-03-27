import React from 'react';
import image from '../image/Pursoft_Logo.png';
import contactConfig from "../config/Allsend";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-col">
            <img
              src={image}
              alt="PurvSoft Technologies"
              className="logo-image"
              width={130}
              style={{ borderRadius: "10px" }}
            />
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
              <li><a href="/services/digital-marketing">Digital Marketing</a></li>
              <li><a href="/services/seo">SEO</a></li>
              <li><a href="/services/custom-software-development">Custom Software Development</a></li>
              <li><a href="/services/content-management">Content Management</a></li>
              <li><a href="/services/website-development">Web Design & Development</a></li>
              <li><a href="/service/mobile-app-development">Mobile App Development</a></li>
              <li><a href="/services/e-commerce-development">eCommerce Development</a></li>
              <li><a href="/services/youtube-marketing">Youtube Ads</a></li>
              <li><a href="/services/meta-ads">Meta Ads</a></li>
              <li><a href="/services/google-ads">Google Ads</a></li>
              <li><a href="/services/our-challenges">Our Challenges</a></li>
            </ul>
          </div>

          {/* Hire Resource */}
          <div className="footer-col">
            <h4>Hire Resource</h4>
            <ul className="footer-links">
              <li><a href="/hire-resource">React Developer</a></li>
              <li><a href="/hire-resource">Laravel Developer</a></li>
              <li><a href="/hire-resource">Node.js Developer</a></li>
              <li><a href="/hire-resource">Flutter Developer</a></li>
              <li><a href="/hire-resource">UI/UX Designer</a></li>
              <li><a href="/hire-resource">SEO Expert</a></li>
              <li><a href="/hire-resource">Digital Marketing Expert</a></li>
            </ul>
          </div>

          {/* Important Links */}
          <div className="footer-col">
            <h4>Important Links</h4>
            <ul className="footer-links">
              <li><a href="/aboutus">About</a></li>
              <li><a href="/hire-resource">Hire Resource</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/product">Product</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/career">Career</a></li>
              <li><a href="/contact">Contact Us</a></li>
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
              <a href="https://www.linkedin.com/company/purvsoft-tech/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/purv_soft/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Purvsoft Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;