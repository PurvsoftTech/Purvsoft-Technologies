import React from 'react';
import "../css/Home.css"
import Latested from './Latested';
import TestimonialSection from './TestimonialSection';
import TechStackSection from './TechStackSection'
import AssistSection from './AssistSection';
import Form from '../config/Form'
import FAQSection from './FAQSection';

import { Helmet} from 'react-helmet-async';
import { Navigate, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate=useNavigate()
  return (
    <main className="home">
      <Helmet>
      <title>Purvsoft Technologies | Strategic Design & Digital Marketing Agency</title>
      <meta name="description" content="Purvsoft Technologies is a leading digital marketing and technology agency offering web development, SEO, social media marketing, mobile app development, and custom software solutions." />
      <meta name="keywords" content="digital marketing agency, web development, SEO services, mobile app development, custom software, Purvsoft Technologies" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="author" content="Purvsoft Technologies" />
      <link rel="canonical" href="https://www.purvsoft.com/" />
 
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Purvsoft Technologies | Strategic Design & Digital Marketing Agency" />
      <meta property="og:description" content="Purvsoft Technologies is a leading digital marketing and technology agency offering web development, SEO, social media marketing, mobile app development, and custom software solutions." />
      <meta property="og:url" content="https://www.purvsoft.com/" />
      <meta property="og:site_name" content="Purvsoft Technologies" />
      <meta property="og:image" content="https://www.purvsoft.com/og-image.jpg" />
 
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Purvsoft Technologies | Strategic Design & Digital Marketing Agency" />
      <meta name="twitter:description" content="Purvsoft Technologies is a leading digital marketing and technology agency." />
      <meta name="twitter:image" content="https://www.purvsoft.com/og-image.jpg" />
    </Helmet>

      {/* Hero Section with New Content */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            {/* New Agency Badge */}
            <div className="agency-badge">
              <span className="badge-text">Strategic Design and Technology Agency</span>
            </div>
            
            {/* Updated Company Name */}
            <h1 className="hero-title">
              <span className="company-name">PurvSoft</span>
            </h1>
            
            {/* Original Content */}
            <h2 className="hero-subtitle">
              {/* <span className="highlight">Code, Create, Innovate:</span><br /> */}
              Your Partner in<br />
              Digital-Marketing<br/>
              Web & Mobile App<br />
              Excellence
            </h2>
            
            <p className="hero-description">
              We are your one-stop solution for all your web/mobile related IT requirements.
              Share your ideas with us, and we will transform them into reality!
            </p>
            
            <button className="cta-button" onClick={() => navigate("/contact")}>
              Contact Us <i className="fas fa-arrow-right"></i>
            </button>
          </div>
          
          <div className="hero-image">
            <div className="tech-illustration">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="code-snippet">
                <pre>{`<PurvSoft />
{innovation}
</excellence>`}</pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TECHNOLOGY INDEX SECTION WITH PARALLAX ===== */}
      <TechStackSection/>

      {/* Contact Form Section */}
      <AssistSection/>


     <TestimonialSection/>
      <Latested/>
      
      <FAQSection/>
      <Form/>
    </main>
  );
};

export default Home;