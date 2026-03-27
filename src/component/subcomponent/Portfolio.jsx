import React, { useState } from 'react';
import {
  ExternalLink,
  Github,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import '../../css/Portfolio.css';
import { Helmet} from 'react-helmet-async';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    // Website & App Development Projects
    {
      id: 1,
      title: "E-commerce Store",
      category: "website",
      type: "E-commerce Platform",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "High-performance online shopping platform with secure checkout, inventory management, and real-time analytics.",
      technologies: ["React.js", "Laravel", "MySQL", "Stripe"],
      features: [
        "Secure payment gateway",
        "Inventory management",
        "Real-time analytics",
        "Mobile responsive"
      ],
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Corporate Website",
      category: "website",
      type: "Business Website",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Professional, SEO-friendly corporate site with integrated lead generation tools and content management.",
      technologies: ["React.js", "Laravel", "Tailwind CSS"],
      features: [
        "Lead generation forms",
        "SEO optimized",
        "Blog integration",
        "Analytics dashboard"
      ],
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Portfolio Website",
      category: "website",
      type: "Personal Branding",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Unique, modern portfolio design for creative professionals to showcase their work.",
      technologies: ["React.js", "Framer Motion", "SCSS"],
      features: [
        "Project showcase",
        "Contact form",
        "Blog section",
        "Social integration"
      ],
      link: "#",
      github: "#"
    },
    
    // Custom Software Solutions
    {
      id: 4,
      title: "Logistics CRM",
      category: "software",
      type: "Custom CRM",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Custom CRM for logistics company to track shipments, manage customer interactions, and automate workflows.",
      technologies: ["Laravel", "Vue.js", "PostgreSQL", "Redis"],
      features: [
        "Shipment tracking",
        "Customer management",
        "Automated invoicing",
        "Real-time updates"
      ],
      link: "#",
      github: "#"
    },
    {
      id: 5,
      title: "Inventory Management System",
      category: "software",
      type: "Warehouse Solution",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Comprehensive inventory and warehouse management system with barcode scanning and stock alerts.",
      technologies: ["Laravel", "React.js", "MongoDB", "Node.js"],
      features: [
        "Barcode scanning",
        "Stock alerts",
        "Multi-warehouse",
        "Report generation"
      ],
      link: "#",
      github: "#"
    },
    {
      id: 6,
      title: "Automated Invoicing System",
      category: "software",
      type: "Finance Tool",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Automated invoicing and payment system for service-based businesses with recurring billing.",
      technologies: ["Laravel", "React.js", "MySQL", "PayPal API"],
      features: [
        "Recurring invoices",
        "Payment tracking",
        "Client portal",
        "Financial reports"
      ],
      link: "#",
      github: "#"
    },
    {
      id: 9,
      title: "Educational App",
      category: "mobile",
      type: "E-Learning",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Interactive learning platform with lessons, quizzes, and progress tracking for students.",
      technologies: ["Flutter", "Laravel", "MySQL", "Firebase"],
      features: [
        "Interactive lessons",
        "Quiz system",
        "Progress tracking",
        "Certificates"
      ],
      link: "#",
      github: "#"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'website', label: 'Websites' },
    { id: 'software', label: 'Software' },
    { id: 'mobile', label: 'Mobile Apps' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);


  return (
    <div className="pf-container">
      <Helmet>
      <title>Portfolio | Purvsoft Technologies – Our Work & Projects</title>
      <meta name="description" content="Explore Purvsoft Technologies's portfolio of web development, mobile apps, SEO, and digital marketing projects. See how we've helped businesses achieve digital success." />
      <meta name="keywords" content="Purvsoft Technologies portfolio, web development projects, digital marketing case studies, mobile app portfolio, our work" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href="https://www.purvsoft.com/portfolio" />
 
      <meta property="og:title" content="Portfolio | Purvsoft Technologies – Our Work & Projects" />
      <meta property="og:description" content="Explore Purvsoft Technologies's portfolio of web development, mobile apps, SEO, and digital marketing projects." />
      <meta property="og:url" content="https://www.purvsoft.com/portfolio" />
      <meta property="og:image" content="https://www.purvsoft.com/og-image.jpg" />
 
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Portfolio | Purvsoft Technologies" />
      <meta name="twitter:description" content="See our work — web, apps, SEO, and marketing projects." />
    </Helmet>
      {/* Hero Section */}
      <section className="pf-hero">
        <div className="pf-wrapper">
          <div className="pf-hero-content">
            <h6 className="pf-hero-subtitle">Portfolio</h6>
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
      <section className="pf-filter-section">
        <div className="pf-wrapper">
          <div className="pf-filter-container">
            {filters.map((f) => (
              <button
                key={f.id}
                className={`pf-filter-btn ${filter === f.id ? 'active' : ''}`}
                onClick={() => setFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pf-projects">
        <div className="pf-wrapper">
          <div className="pf-projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="pf-project-card">
                <div className="pf-project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="pf-project-links">
                    <a href={project.link} className="pf-project-link" title="View Live">
                      <ExternalLink size={16} />
                    </a>
                    <a href={project.github} className="pf-project-link" title="View Code">
                      <Github size={16} />
                    </a>
                  </div>
                </div>
                <div className="pf-project-content">
                  <div className="pf-project-type">{project.type}</div>
                  <h3 className="pf-project-title">{project.title}</h3>
                  <p className="pf-project-description">{project.description}</p>
                  
                  <div className="pf-project-tech">
                    {/* {project.technologies.map((tech, i) => (
                      <span key={i} className="pf-tech-tag">{tech}</span>
                    ))} */}
                  </div>
                  
                  <div className="pf-project-features">
                    {project.features.map((feature, i) => (
                      <div key={i} className="pf-feature-item">
                        <CheckCircle size={14} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* <a href="#" className="pf-project-details">
                    View Details <ArrowRight size={14} />
                  </a> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      {/* <section className="pf-tech-section">
        <div className="pf-wrapper">
          <div className="pf-tech-header">
            <h2 className="pf-tech-title">Technologies We Use</h2>
            <p className="pf-tech-subtitle">Modern tools for modern solutions</p>
          </div>
          
          <div className="pf-tech-grid">
            <div className="pf-tech-category">
              <h3>Frontend</h3>
              <div className="pf-tech-items">
                <span className="pf-tech-badge">React.js</span>
                <span className="pf-tech-badge">Vue.js</span>
                <span className="pf-tech-badge">Tailwind CSS</span>
                <span className="pf-tech-badge">SCSS</span>
              </div>
            </div>
            
            <div className="pf-tech-category">
              <h3>Backend</h3>
              <div className="pf-tech-items">
                <span className="pf-tech-badge">Laravel</span>
                <span className="pf-tech-badge">Node.js</span>
                <span className="pf-tech-badge">PHP</span>
                <span className="pf-tech-badge">Python</span>
              </div>
            </div>
            
            <div className="pf-tech-category">
              <h3>Mobile</h3>
              <div className="pf-tech-items">
                <span className="pf-tech-badge">Flutter</span>
                <span className="pf-tech-badge">React Native</span>
                <span className="pf-tech-badge">iOS</span>
                <span className="pf-tech-badge">Android</span>
              </div>
            </div>
            
            <div className="pf-tech-category">
              <h3>Database & APIs</h3>
              <div className="pf-tech-items">
                <span className="pf-tech-badge">MySQL</span>
                <span className="pf-tech-badge">PostgreSQL</span>
                <span className="pf-tech-badge">MongoDB</span>
                <span className="pf-tech-badge">GraphQL</span>
                <span className="pf-tech-badge">REST API</span>
                <span className="pf-tech-badge">Firebase</span>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
    </div>
  );
};

export default Portfolio;