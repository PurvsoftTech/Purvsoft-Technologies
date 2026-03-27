import React from 'react';
import { NavLink } from 'react-router-dom';
import "../../css/CareersPage.css";
import career from "../../image/Career.png"
import { Helmet} from 'react-helmet-async';

const CareersPage = () => {
  return (
    <div className="careers-wrapper">
      <Helmet>
      <title>Careers | Purvsoft Technologies – Join Our Growing Team</title>
      <meta name="description" content="Explore exciting career opportunities at Purvsoft Technologies. We're hiring web developers, digital marketers, designers, and more. Join a passionate team building the future." />
      <meta name="keywords" content="Purvsoft Technologies careers, jobs at Purvsoft Technologies, digital marketing jobs, web developer jobs, hiring, IT jobs India" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href="https://www.purvsoft.com/career" />
 
      <meta property="og:title" content="Careers | Purvsoft Technologies – Join Our Growing Team" />
      <meta property="og:description" content="Explore exciting career opportunities at Purvsoft Technologies." />
      <meta property="og:url" content="https://www.purvsoft.com/career" />
      <meta property="og:image" content="https://www.purvsoft.com/og-image.jpg" />
 
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Careers | Purvsoft Technologies" />
      <meta name="twitter:description" content="Join our growing team at Purvsoft Technologies." />
    </Helmet>
      {/* Hero Section - Inspired by image_c8d414.jpg */}
      <section className="careers-hero">
        <div className="container hero-flex">
          <div className="hero-content">
            <h1>Join <span className="blue-text">Our Team</span></h1>
            <p>
              Are you passionate, driven, and looking for an exciting career opportunity? 
              Join our dynamic team and help us shape the future.
            </p>
            <p>
              Explore our current job openings and find a role that suits your skills and ambitions. 
              At our company, we value innovation, collaboration, and personal growth.
            </p>
            <button className="apply-now-btn">Apply today and become a part of our success story.</button>
          </div>
          <div className="hero-illustration">
            <img src={career } alt="Join Team" />
          </div>
        </div>
      </section>

      {/* Open Positions Section - Inspired by image_c8d35e.png */}
      {/* Open Positions Section - Light Version */}
        <section className="open-positions-light">
        <div className="container">
            <div className="positions-header">
            <h2 className="section-subtitle">HOW WE WORK</h2>
            <h1 className="main-heading">Kickstart Your <span className="blue-text">Career with Us</span></h1>
            <p className="description-text">
                At <strong>Purvsoft Technologies</strong>, we’re not just building software — we’re building the future. 
                Whether you're an experienced developer or just starting out as an intern, we offer you a platform to learn, grow, and make real impact.
            </p>
            <h3 className="open-positions-title">Open Positions</h3>
            </div>

            <div className="positions-grid-light">
            {/* Internships Card - Soft Purple Theme */}
            <div className="pos-card-light purple-theme">
              <div className="icon-box"><i className="fas fa-user-graduate"></i></div>
              <h3>Internships</h3>
              <p>Perfect for students or fresh graduates eager to gain hands-on experience in real-world projects.</p>
              
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc5bDiRyaW1oK4ml4Ut5uhMGPi99PEioOWZbcxtjXPY--jOMg/viewform"
                className="apply-link"
              >
                Apply For Internships <i className="fas fa-arrow-right"></i>
              </a>

              <span className="bg-number">1</span>
            </div>

            {/* Full-time Roles Card - Soft Blue Theme */}
            <div className="pos-card-light blue-theme">
                <div className="icon-box"><i className="fas fa-briefcase"></i></div>
                <h3>Full-time Roles</h3>
                <p>Join our dynamic team of developers solving complex problems using modern technologies and frameworks.</p>
                
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSd0C2CGxx9b2jA-fV47KbjvdyEw2Nn-i9RONptEllA0Jvhkwg/viewform"
                  className="apply-link"
                >
                  Apply For Full-time Job <i className="fas fa-arrow-right"></i>
                </a>

                <span className="bg-number">2</span>
              </div>
            </div>
        </div>
        </section>

      {/* Process Section - Inspired by image_d4ace6.jpg */}
      {/* <section className="hiring-process">
        <div className="container">
          <h2 className="section-title">How We Hire</h2>
          <div className="process-steps">
            <div className="step-item">
              <div className="step-num">1</div>
              <h4>Application Review</h4>
            </div>
            <div className="step-item">
              <div className="step-num">2</div>
              <h4>Technical Interview</h4>
            </div>
            <div className="step-item">
              <div className="step-num">3</div>
              <h4>HR Round</h4>
            </div>
            <div className="step-item">
              <div className="step-num">4</div>
              <h4>Onboarding</h4>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default CareersPage;