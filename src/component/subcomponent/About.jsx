import React from 'react';
import {
  Users,
  Star,
  Code,
  Smartphone,
  TrendingUp,
  Heart,
  Target,
  Zap,
  CheckCircle,
  ArrowRight,
  Linkedin,
  Github,
  Twitter,
  Facebook,
  Instagram,
  Briefcase,
  ThumbsUp,
} from 'lucide-react';
import '../../css/AboutUs.css';
import { Helmet} from 'react-helmet-async';
import Form from "../../config/Form"
const AboutUs = () => {
  const expertise = [
    {
      icon: <Code size={28} />,
      title: "Website Development",
      desc: "Custom websites that drive engagement and conversions with modern technologies."
    },
    {
      icon: <Briefcase size={28} />,
      title: "Custom Software Solutions",
      desc: "Tailored software solutions to streamline your business operations and boost productivity."
    },
    {
      icon: <Smartphone size={28} />,
      title: "Mobile App Development",
      desc: "Native and cross-platform mobile apps that deliver exceptional user experiences."
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Digital Marketing",
      desc: "Data-driven marketing strategies to grow your online presence and reach."
    }
  ];

  const teamMembers = [
    {
      name: "Ekta Solanki",
      role: "Officer",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Leading operations with 8+ years of experience in IT management.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Bhavesh Jadav",
      role: "Team Lead",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Technical expert with 10+ years in full-stack development.",
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Vansh Patel",
      role: "Developer",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Passionate developer specializing in React and mobile apps.",
      social: {
        linkedin: "#",
        github: "#"
      }
    }
  ];


  const values = [
    {
      icon: <Heart size={24} />,
      title: "Customer First",
      desc: "We prioritize our clients' needs and work tirelessly to exceed expectations."
    },
    {
      icon: <Zap size={24} />,
      title: "Innovation",
      desc: "We embrace cutting-edge technologies to deliver future-ready solutions."
    },
    {
      icon: <Target size={24} />,
      title: "Excellence",
      desc: "We strive for perfection in every line of code and every pixel of design."
    },
    {
      icon: <Users size={24} />,
      title: "Collaboration",
      desc: "We believe in the power of teamwork and open communication."
    }
  ];

  const testimonials = [
    {
      text: "Purvsoft Technologies delivered an exceptional website that exceeded our expectations. Their team is professional, responsive, and truly cares about their clients.",
      author: "Rajesh Mehta",
      position: "CEO, TechCorp India",
      rating: 5
    },
    {
      text: "The mobile app they developed for our business has transformed how we connect with customers. Highly recommended!",
      author: "Priya Shah",
      position: "Founder, StyleStore",
      rating: 5
    }
  ];

  return (
    <div className="au-container">
      <Helmet>
      <title>About Us | Purvsoft Technologies – Your Partner in Digital Marketing</title>
      <meta name="description" content="Learn about Purvsoft Technologies — our mission, vision, and the team behind our strategic design and technology solutions. We help businesses grow digitally." />
      <meta name="keywords" content="about Purvsoft Technologies, digital agency team, who we are, company mission, technology agency India" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href="https://www.purvsoft.com/aboutus" />
 
      <meta property="og:title" content="About Us | Purvsoft Technologies" />
      <meta property="og:description" content="Learn about Purvsoft Technologies — our mission, vision, and the team behind our strategic design and technology solutions." />
      <meta property="og:url" content="https://www.purvsoft.com/aboutus" />
      <meta property="og:image" content="https://www.purvsoft.com/og-image.jpg" />
 
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="About Us | Purvsoft Technologies" />
      <meta name="twitter:description" content="Learn about Purvsoft Technologies — our mission, vision, and the team behind our solutions." />
    </Helmet>
      {/* Hero Section */}
      <section className="au-hero">
        <div className="au-wrapper">
          <div className="au-hero-grid">
            <div className="au-hero-content">
              <div className="au-badge">
                <Users size={16} />
                <span>About Purvsoft Technologies</span>
              </div>
              <h1>
                Empowering Businesses with <br />
                <span className="au-gradient-text">Innovative IT & Digital Solutions</span>
              </h1>
              <p className="au-hero-description">
                At Purvsoft Technologies, we craft digital experiences that help businesses 
                grow smarter, faster, and stronger. We combine technical expertise with creative 
                innovation to deliver solutions that make a real impact.
              </p>
              
          
              
              <div className="au-hero-buttons">
                <a href="#form" className="au-btn-primary">
                  Contact Us <ArrowRight size={18} />
                </a>
              </div>
            </div>
            <div className="au-hero-visual">
              <div className="au-image-collage">
                <div className="au-collage-item au-item1">
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Team collaboration" />
                </div>
                <div className="au-collage-item au-item2">
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Meeting" />
                </div>
                <div className="au-collage-item au-item3">
                  <img src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Coding" />
                </div>
                <div className="au-collage-item au-item4">
                  <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Design" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Staff Banner */}
      <section className="au-staff-banner">
        <div className="au-wrapper">
          <div className="au-banner-content">
            <div className="au-banner-icon">
              <Star size={32} />
            </div>
            <div className="au-banner-text">
              <h2>Our Staff</h2>
              <p>Our team is friendly, talkative, and fully reliable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="au-team">
        <div className="au-wrapper">
          <div className="au-section-header">
            <h6 className="au-section-subtitle">Meet Our Team</h6>
            <h2 className="au-section-title">
              The People Behind <span className="au-gradient-text">Our Success</span>
            </h2>
            <p className="au-section-description">
              Dedicated professionals committed to delivering excellence in every project.
            </p>
          </div>

          <div className="au-team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="au-team-card">
                <div className="au-member-image">
                  <img src={member.image} alt={member.name} />
                  <div className="au-member-social">
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="au-social-link">
                        <Linkedin size={16} />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a href={member.social.twitter} className="au-social-link">
                        <Twitter size={16} />
                      </a>
                    )}
                    {member.social.github && (
                      <a href={member.social.github} className="au-social-link">
                        <Github size={16} />
                      </a>
                    )}
                  </div>
                </div>
                <div className="au-member-info">
                  <h3 className="au-member-name">{member.name}</h3>
                  <p className="au-member-role">{member.role}</p>
                  <p className="au-member-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="au-expertise">
        <div className="au-wrapper">
          <div className="au-section-header">
            <h6 className="au-section-subtitle">Our Expertise</h6>
            <h2 className="au-section-title">
              What We Do <span className="au-gradient-text">Best</span>
            </h2>
            <p className="au-section-description">
              Comprehensive IT and digital solutions tailored to your business needs.
            </p>
          </div>

          <div className="au-expertise-grid">
            {expertise.map((item, index) => (
              <div key={index} className="au-expertise-card">
                <div className="au-expertise-icon">{item.icon}</div>
                <h3 className="au-expertise-title">{item.title}</h3>
                <p className="au-expertise-description">{item.desc}</p>
                {/* <a href="#" className="au-expertise-link">
                  Learn More <ArrowRight size={16} />
                </a> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="au-values">
        <div className="au-wrapper">
          <div className="au-section-header">
            <h6 className="au-section-subtitle">Our Values</h6>
            <h2 className="au-section-title">
              What Drives <span className="au-gradient-text">Us Forward</span>
            </h2>
          </div>

          <div className="au-values-grid">
            {values.map((value, index) => (
              <div key={index} className="au-value-card">
                <div className="au-value-icon">{value.icon}</div>
                <h3 className="au-value-title">{value.title}</h3>
                <p className="au-value-description">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="au-testimonials">
        <div className="au-wrapper">
          <div className="au-section-header">
            <h6 className="au-section-subtitle">Testimonials</h6>
            <h2 className="au-section-title">
              What Our <span className="au-gradient-text">Clients Say</span>
            </h2>
          </div>

          <div className="au-testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="au-testimonial-card">
                <div className="au-quote-mark">"</div>
                <p className="au-testimonial-text">{testimonial.text}</p>
                <div className="au-testimonial-rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < testimonial.rating ? "#fbbf24" : "none"} color={i < testimonial.rating ? "#fbbf24" : "#cbd5e1"} />
                  ))}
                </div>
                <div className="au-testimonial-author">
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.position}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="au-why-choose">
        <div className="au-wrapper">
          <div className="au-why-grid">
            <div className="au-why-content">
              <h6 className="au-why-subtitle">Why Choose Us</h6>
              <h2 className="au-why-title">
                We're More Than Just <span className="au-gradient-text">Developers</span>
              </h2>
              <p className="au-why-description">
                We're your technology partners, committed to understanding your business 
                and delivering solutions that drive real results.
              </p>
              <ul className="au-why-list">
                <li>
                  <CheckCircle size={18} />
                  <span>10+ years of industry experience</span>
                </li>
                <li>
                  <CheckCircle size={18} />
                  <span>50+ successful projects delivered</span>
                </li>
                <li>
                  <CheckCircle size={18} />
                  <span>24/7 client support</span>
                </li>
                <li>
                  <CheckCircle size={18} />
                  <span>Agile development methodology</span>
                </li>
                <li>
                  <CheckCircle size={18} />
                  <span>100% client satisfaction</span>
                </li>
              </ul>
              <a href="#" className="au-btn-primary">
                Contact Us Today <ArrowRight size={18} />
              </a>
            </div>
            <div className="au-why-visual">
              <div className="au-stats-box">
                <div className="au-stats-box-header">
                  <ThumbsUp size={24} />
                  <span>Why Clients Love Us</span>
                </div>
                <div className="au-stats-box-content">
                  <div className="au-stat-row">
                    <span>Client Satisfaction</span>
                    <span className="au-stat-percent">98%</span>
                  </div>
                  <div className="au-progress-bar">
                    <div className="au-progress-fill" style={{ width: '98%' }}></div>
                  </div>
                  <div className="au-stat-row">
                    <span>Project Success Rate</span>
                    <span className="au-stat-percent">95%</span>
                  </div>
                  <div className="au-progress-bar">
                    <div className="au-progress-fill" style={{ width: '95%' }}></div>
                  </div>
                  <div className="au-stat-row">
                    <span>On-time Delivery</span>
                    <span className="au-stat-percent">97%</span>
                  </div>
                  <div className="au-progress-bar">
                    <div className="au-progress-fill" style={{ width: '97%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div id="form">
        <Form />
      </div>
    </div>
  );
};

export default AboutUs;