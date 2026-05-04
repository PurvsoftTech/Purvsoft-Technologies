import React, { useState } from 'react';
import {
  ExternalLink,
  CheckCircle
} from 'lucide-react';
import '../../css/Portfolio.css';
import { Helmet } from 'react-helmet-async';
import jp from "../../image/Screenshot 2026-03-31 130722.png"
import sunway from "../../image/Screenshot 2026-03-31 135256.png"
import cleanpro from "../../image/Screenshot 2026-03-31 140000.png"
import studentfees from "../../image/Screenshot 2026-03-31 140343.png"
import buzzpost from "../../image/WhatsApp Image 2026-03-31 at 17.29.31.jpeg"
import attadance from "../../image/WhatsApp Image 2026-03-31 at 18.57.02.jpeg"

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "JP Home Service",
      category: "website",
      type: "House Maid & Home Services Platform",
      image: jp,
      // ✅ Canonical public URL for schema (local imports can't be used in JSON-LD)
      schemaImage: "https://www.purvsoft.com/portfolio/jp-home-service.jpg",
      description: "A reliable home services platform providing professional house maid, cooking, and babysitting services with easy booking and trusted staff.",
      technologies: ["React.js", "Laravel"],
      features: [
        "House maid services",
        "Cook services",
        "Babysitting services",
        "Easy booking system",
        "Responsive design"
      ],
      link: "https://jphomeservice.in/"
    },
    {
      id: 2,
      title: "Housekeeping Management System",
      category: "website",
      type: "Service & Payroll Management Platform",
      image: sunway,
      schemaImage: "https://www.purvsoft.com/portfolio/sunway-solution.jpg",
      description: "A comprehensive housekeeping management system that handles staff management, payroll processing, and housekeeping material tracking with an easy-to-use interface.",
      technologies: ["React.js", "Laravel"],
      features: [
        "Housekeeping staff management",
        "Payroll management system",
        "Material tracking system",
        "Attendance & record management",
        "Responsive dashboard"
      ],
      link: "https://sunwaysolution.in/",
    },
    {
      id: 3,
      title: "CleanPro Service Management",
      category: "software",
      type: "Service & Contract Management System",
      image: cleanpro,
      schemaImage: "https://www.purvsoft.com/portfolio/cleanpro.jpg",
      description: "A complete service management platform for handling workers, clients, contracts, and payments in housekeeping services with an organized dashboard.",
      technologies: ["React.js", "Laravel"],
      features: [
        "Worker management system",
        "Client management",
        "Contract handling",
        "Payment tracking system",
        "Dashboard overview"
      ],
      link: "https://cleanpro.purvsoft.com/"
    },
    {
      id: 4,
      title: "Student Management Dashboard",
      category: "software",
      type: "Education Management System",
      image: studentfees,
      schemaImage: "https://www.purvsoft.com/portfolio/student-management.jpg",
      description: "A complete student management system to handle student records, fee management, mobile notifications, and admin dashboard operations efficiently.",
      technologies: ["Laravel", "React.js"],
      features: [
        "Student record management",
        "Fee management system",
        "Mobile notifications",
        "Admin dashboard",
        "Real-time updates"
      ],
      link: "#"
    },
    {
      id: 9,
      title: "BuzzPost App",
      category: "mobile",
      type: "Content & Offer Platform",
      image: buzzpost,
      schemaImage: "https://www.purvsoft.com/portfolio/buzzpost-app.jpg",
      description: "A mobile application that provides latest offers, wallpapers, festival creatives, and hiring posts for users with an easy browsing experience.",
      technologies: ["Flutter", "Laravel", "MySQL", "Firebase"],
      features: [
        "Latest offers updates",
        "Wallpaper & festival creatives",
        "Hiring/job posts",
        "User-friendly interface",
        "Real-time content updates"
      ],
      link: "https://play.google.com/store/apps/details?id=com.buzz_posts.buzz_posts"
    },
    {
      id: 5,
      title: "Employee Attendance & HR Management",
      category: "mobile",
      type: "HR & Workforce Management System",
      image: attadance,
      schemaImage: "https://www.purvsoft.com/portfolio/employee-attendance.jpg",
      description: "A comprehensive employee management system to track attendance, leaves, holidays, tasks, and working hours with check-in and check-out functionality.",
      technologies: ["Laravel", "React.js"],
      features: [
        "Employee attendance tracking",
        "Check-in & check-out system",
        "Leave management",
        "Holiday management",
        "Task tracking system",
        "Working day tracking"
      ],
      link: "#"
    },
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'website', label: 'Websites' },
    { id: 'software', label: 'Web App' },
    { id: 'mobile', label: 'Mobile Apps' }
  ];
  const slugify = (text) =>
  text
    ?.toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  // ✅ Fixed: addressCountry changed from "India" to ISO code "IN"
  // ✅ Fixed: project.image replaced with project.schemaImage (local imports = invalid URLs in JSON-LD)
  const structuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Purvsoft Technologies Portfolio - Web Development & Mobile App Projects",
  "description": "Explore our portfolio of successful web development, mobile app development, and software projects delivered to clients worldwide.",
  "url": "https://www.purvsoft.com/portfolio",
  "author": {
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
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": projects.map((project, index) => ({
      "@type": "CreativeWork",
      "position": index + 1,
      "name": project.title,
      "description": project.description,
      "url": project.link !== "#"
        ? project.link
        : `https://www.purvsoft.com/portfolio/${slugify(project.title)}`,
      "image": project.schemaImage,
      "category": project.category,
      "keywords": project.technologies.join(", ")
    }))
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
        "name": "Portfolio",
        "item": "https://www.purvsoft.com/portfolio"
      }
    ]
  };

  // ✅ Fixed: addressCountry "India" → "IN"
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Purvsoft Technologies",
    "url": "https://www.purvsoft.com",
    "logo": "https://www.purvsoft.com/logo.png",
    "sameAs": [
      "https://www.facebook.com/purvsoft",
      "https://twitter.com/purvsoft",
      "https://www.linkedin.com/company/purvsoft-technologies"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sv Square, 333, Near GST Road, New Ranip",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "postalCode": "382470",
      "addressCountry": "IN"
    }
  };

  return (
    <div className="pf-container">
      <Helmet>
        {/* ✅ Removed: redundant <meta name="title"> */}
        <title>Portfolio | Web Development & Mobile App Projects | Purvsoft Technologies</title>
        <meta name="description" content="Explore Purvsoft Technologies's portfolio of successful web development, mobile app development, and software projects. See how we've helped businesses achieve digital success with innovative solutions." />

        {/* ✅ Fixed: removed trailing comma from keywords */}
        <meta name="keywords" content="Purvsoft Technologies portfolio, web development projects, mobile app portfolio, software development projects, Laravel projects, React projects, Flutter apps, digital marketing case studies, client projects India, best web development portfolio, React developer portfolio" />

        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        {/* ✅ Added: googlebot directive (was missing) */}
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Purvsoft Technologies" />
        <meta name="language" content="English" />
        {/* ✅ Removed: revisit-after — deprecated, ignored by Google */}

        {/* Canonical */}
        <link rel="canonical" href="https://www.purvsoft.com/portfolio" />
        {/* ✅ Removed: hreflang alternate — pointless with only one language version */}

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.purvsoft.com/portfolio" />
        <meta property="og:title" content="Portfolio | Web Development & Mobile App Projects | Purvsoft" />
        <meta property="og:description" content="Explore our portfolio of successful web development, mobile app development, and software projects delivered to clients worldwide." />
        <meta property="og:image" content="https://www.purvsoft.com/og-portfolio.jpg" />
        <meta property="og:image:alt" content="Purvsoft Technologies Portfolio - Web and Mobile Development Projects" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Purvsoft Technologies" />
        {/* ✅ Fixed: en_US → en_IN */}
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        {/* ✅ Removed: twitter:url — not a standard Twitter card tag */}
        {/* ✅ Added: twitter:site and twitter:creator (were missing) */}
        <meta name="twitter:site" content="@purvsoft" />
        <meta name="twitter:creator" content="@purvsoft" />
        <meta name="twitter:title" content="Portfolio | Purvsoft Technologies - Our Work & Projects" />
        <meta name="twitter:description" content="See our portfolio of web development, mobile apps, and software projects. Real solutions for real businesses." />
        {/* ✅ Fixed: unified twitter image with OG image */}
        <meta name="twitter:image" content="https://www.purvsoft.com/og-portfolio.jpg" />
        <meta name="twitter:image:alt" content="Purvsoft Technologies Portfolio - Web and Mobile Development Projects" />

        {/* Verification */}
        <meta name="google-site-verification" content="MjMKilzhOmqr6Txi7pbjACF6g_hSt-B6Ej496yJyrH0" />
        <meta name="msvalidate.01" content="AD0DF443696FB452E952416667F1A8DC" />

        {/* Geo Tags */}
        <meta name="geo.region" content="IN-GJ" />
        {/* ✅ Fixed: geo.placename was just "Ahmedabad", now consistent with other pages */}
        <meta name="geo.placename" content="Ahmedabad, Gujarat, India" />
        <meta name="geo.position" content="23.0225;72.5714" />
        <meta name="ICBM" content="23.0225, 72.5714" />

        {/* ✅ JSON-LD moved inside Helmet — was incorrectly placed in JSX body */}
        <script type="application/ld+json">{JSON.stringify(organizationStructuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbData)}</script>
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="pf-hero" aria-label="Portfolio Hero Section">
        <div className="pf-wrapper">
          <div className="pf-hero-content" data-aos="fade-up">
            <p className="pf-hero-subtitle">Our Portfolio</p>
            <h1 className="pf-hero-title">
              Our Work <span className="pf-highlight">Speaks for Itself</span>
            </h1>
            <p className="pf-hero-description">
              "From innovative designs to impactful campaigns, we turn ideas into digital success stories."
            </p>
            <p className="pf-hero-text">
              At Purvsoft Technologies, we don't just offer services — we create experiences that make a lasting impact.
              Our portfolio reflects our dedication to delivering high-quality, result-driven solutions for businesses worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pf-filter-section" aria-label="Portfolio Filter Section">
        <div className="pf-wrapper">
          <div className="pf-filter-container">
            {filters.map((f) => (
              <button
                key={f.id}
                className={`pf-filter-btn ${filter === f.id ? 'active' : ''}`}
                onClick={() => setFilter(f.id)}
                aria-label={`Filter projects by ${f.label}`}
                aria-pressed={filter === f.id}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pf-projects" aria-label="Our Projects Portfolio">
        <div className="pf-wrapper">
          <div className="pf-projects-grid">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="pf-project-card"
                data-aos="fade-up"
                data-aos-delay={(index % 6) * 50}
                itemScope
                itemType="https://schema.org/CreativeWork"
              >
                <div className="pf-project-image">
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.type} by Purvsoft Technologies`}
                    loading="lazy"
                    itemProp="image"
                  />
                  <div className="pf-project-links">
                    {project.link !== "#" && (
                      <a
                        href={project.link}
                        className="pf-project-link"
                        title={`View ${project.title} live project`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} live project`}
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
                <div className="pf-project-content">
                  <div className="pf-project-type" itemProp="category">{project.type}</div>
                  <h3 className="pf-project-title" itemProp="name">{project.title}</h3>
                  <p className="pf-project-description" itemProp="description">{project.description}</p>

                  <div className="pf-project-tech">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="pf-tech-tag">{tech}</span>
                    ))}
                  </div>

                  <div className="pf-project-features">
                    {project.features.map((feature, i) => (
                      <div key={i} className="pf-feature-item">
                        <CheckCircle size={14} aria-hidden="true" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="pf-no-results">
              <p>No projects found in this category. Please try another filter.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;