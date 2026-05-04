import React from 'react';
import "../../css/CareersPage.css";
import career from "../../image/Career.png"
import { Helmet} from 'react-helmet-async';

const CareersPage = () => {
  // JSON-LD Structured Data for Careers Page
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Purvsoft Technologies",
    "url": "https://www.purvsoft.com",
    "logo": "https://www.purvsoft.com/logo.png",
    "sameAs": [
      "https://www.linkedin.com/company/purvsoft-technologies",
      "https://twitter.com/purvsoft",
      "https://www.facebook.com/purvsoft"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "addressCountry": "India"
    }
  };

  const hiringStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Careers at Purvsoft Technologies",
    "description": "Join Purvsoft Technologies for exciting career opportunities in web development, digital marketing, design, and more.",
    "publisher": {
      "@type": "Organization",
      "name": "Purvsoft Technologies"
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "JobPosting",
          "position": 1,
          "title": "Internship Opportunities",
          "description": "Perfect for students or fresh graduates eager to gain hands-on experience in real-world projects.",
          "employmentType": "INTERN",
          "hiringOrganization": {
            "@type": "Organization",
            "name": "Purvsoft Technologies"
          },
          "jobLocation": {
            "@type": "Place",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Ahmedabad",
              "addressRegion": "Gujarat",
              "addressCountry": "India"
            }
          },
          "url": "https://docs.google.com/forms/d/e/1FAIpQLSc5bDiRyaW1oK4ml4Ut5uhMGPi99PEioOWZbcxtjXPY--jOMg/viewform",
          "datePosted": "2024-01-01",
          "validThrough": "2026-12-31"
        },
        {
          "@type": "JobPosting",
          "position": 2,
          "title": "Full-time Development Roles",
          "description": "Join our dynamic team of developers solving complex problems using modern technologies and frameworks.",
          "employmentType": "FULL_TIME",
          "hiringOrganization": {
            "@type": "Organization",
            "name": "Purvsoft Technologies"
          },
          "jobLocation": {
            "@type": "Place",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Ahmedabad",
              "addressRegion": "Gujarat",
              "addressCountry": "India"
            }
          },
          "url": "https://docs.google.com/forms/d/e/1FAIpQLSd0C2CGxx9b2jA-fV47KbjvdyEw2Nn-i9RONptEllA0Jvhkwg/viewform",
          "datePosted": "2024-01-01",
          "validThrough": "2026-12-31"
        }
      ]
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
        "name": "Careers",
        "item": "https://www.purvsoft.com/career"
      }
    ]
  };

  return (
    <div className="careers-wrapper">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Careers at Purvsoft Technologies | Web Developer & Digital Marketing Jobs</title>
        <meta name="title" content="Careers at Purvsoft Technologies | Web Developer & Digital Marketing Jobs" />
        <meta name="description" content="Explore exciting career opportunities at Purvsoft Technologies. We're hiring web developers, digital marketers, UI/UX designers, and interns. Join our innovative team in Ahmedabad." />
        <meta name="keywords" content="Purvsoft Technologies careers, jobs at Purvsoft Technologies, digital marketing jobs, web developer jobs, UI UX designer jobs, internship opportunities, IT jobs Ahmedabad, software developer jobs, freshers jobs India, hiring 2024,IT jobs in Ahmedabad Gujarat,it jobs in ahmedabad salary,it company job vacancy in ahmedabad,it jobs in ahmedabad," />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Purvsoft Technologies" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.purvsoft.com/career" />
        
        {/* Alternate language versions */}
        <link rel="alternate" href="https://www.purvsoft.com/career" hrefLang="x-default" />
        
        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.purvsoft.com/career" />
        <meta property="og:title" content="Careers at Purvsoft Technologies | Join Our Growing Team" />
        <meta property="og:description" content="Explore exciting career opportunities at Purvsoft Technologies. We're hiring web developers, digital marketers, designers, and interns. Build your career with us." />
        <meta property="og:image" content="https://www.purvsoft.com/og-careers.jpg" />
        <meta property="og:image:alt" content="Purvsoft Technologies Careers - Join Our Team" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Purvsoft Technologies" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.purvsoft.com/career" />
        <meta name="twitter:title" content="Careers at Purvsoft Technologies | Join Our Team" />
        <meta name="twitter:description" content="We're hiring web developers, digital marketers, designers, and interns. Explore career opportunities at Purvsoft Technologies." />
        <meta name="twitter:image" content="https://www.purvsoft.com/twitter-careers.jpg" />
        <meta name="twitter:image:alt" content="Purvsoft Technologies Careers" />
        
        {/* Verification tags - Replace with your actual Search Console code */}
        <meta name="google-site-verification" content="MjMKilzhOmqr6Txi7pbjACF6g_hSt-B6Ej496yJyrH0" />
        <meta name="msvalidate.01" content="AD0DF443696FB452E952416667F1A8DC" />
        
        {/* Geographic Meta Tags - Ahmedabad, Gujarat */}
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Ahmedabad" />
        <meta name="geo.position" content="23.0225;72.5714" />
        <meta name="ICBM" content="23.0225, 72.5714" />
        
        {/* Mobile Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        
        {/* Job Search Meta Tags */}
        <meta name="job-marker" content="hiring" />
        <meta name="job-location" content="Ahmedabad, Gujarat, India" />
        <meta name="job-industry" content="Information Technology, Digital Marketing" />
      </Helmet>

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationStructuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(hiringStructuredData)}
      </script>

      {/* Hero Section */}
      <section className="careers-hero" aria-label="Careers Hero Section">
        <div className="container hero-flex">
          <div className="hero-content" data-aos="fade-right">
            <h1>Join <span className="blue-text">Our Team</span></h1>
            <p>
              Are you passionate, driven, and looking for an exciting career opportunity? 
              Join our dynamic team and help us shape the future of technology and digital marketing.
            </p>
            <p>
              Explore our current job openings and find a role that suits your skills and ambitions. 
              At Purvsoft Technologies, we value innovation, collaboration, and personal growth.
            </p>
            <button
              className="apply-now-btn"
              onClick={() => {
                const section = document.getElementById("open-positions");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              aria-label="View current job openings"
            >
              Explore Open Positions →
            </button>
          </div>
          <div className="hero-illustration" data-aos="fade-left">
            <img src={career} alt="Join Purvsoft Technologies Team - Career Opportunities" loading="eager" />
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="open-positions-light" aria-label="Current Job Openings">
        <div className="container">
          <div className="positions-header" data-aos="fade-up">
            <h2 className="section-subtitle">HOW WE WORK</h2>
            <h1 className="main-heading">Kickstart Your <span className="blue-text">Career with Us</span></h1>
            <p className="description-text">
              At <strong>Purvsoft Technologies</strong>, we're not just building software — we're building the future. 
              Whether you're an experienced developer or just starting out as an intern, we offer you a platform to learn, grow, and make real impact.
            </p>
            <h3 className="open-positions-title">Current Open Positions</h3>
          </div>

          <div className="positions-grid-light">
            {/* Internships Card */}
            <div className="pos-card-light purple-theme" data-aos="fade-up" data-aos-delay="0">
              <div className="icon-box">
                <i className="fas fa-user-graduate" aria-hidden="true"></i>
              </div>
              <h3>Internships</h3>
              <p>Perfect for students or fresh graduates eager to gain hands-on experience in real-world projects.</p>
              
              <p className="internship-roles"><strong>Roles:</strong> Web Development, Digital Marketing, UI/UX Design</p>
              
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc5bDiRyaW1oK4ml4Ut5uhMGPi99PEioOWZbcxtjXPY--jOMg/viewform"
                className="apply-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Apply for internship positions"
              >
                Apply For Internships <i className="fas fa-arrow-right" aria-hidden="true"></i>
              </a>

              <span className="bg-number" aria-hidden="true">1</span>
            </div>

            {/* Full-time Roles Card */}
            <div className="pos-card-light blue-theme" data-aos="fade-up" data-aos-delay="100">
              <div className="icon-box">
                <i className="fas fa-briefcase" aria-hidden="true"></i>
              </div>
              <h3>Full-time Roles</h3>
              <p>Join our dynamic team of developers solving complex problems using modern technologies and frameworks.</p>
              
              <p className="fulltime-roles"><strong>Roles:</strong> React Developer, Laravel Developer, SEO Specialist</p>
              
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSd0C2CGxx9b2jA-fV47KbjvdyEw2Nn-i9RONptEllA0Jvhkwg/viewform"
                className="apply-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Apply for full-time positions"
              >
                Apply For Full-time Job <i className="fas fa-arrow-right" aria-hidden="true"></i>
              </a>

              <span className="bg-number" aria-hidden="true">2</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;