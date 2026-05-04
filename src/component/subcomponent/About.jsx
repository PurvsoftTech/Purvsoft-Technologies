import React from 'react';
import {
  Users, Star, Code, Smartphone, TrendingUp, Heart,
  Target, Zap, CheckCircle, ArrowRight, Briefcase, ThumbsUp,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import '../../css/AboutUs.css';
import { Helmet } from 'react-helmet-async';
import Form from "../../config/Form";

const AboutUs = () => {
  const expertise = [
    {
      icon: <Code size={28} />,
      title: "Website Development",
      desc: "Custom websites that drive engagement and conversions with modern technologies.",
      link: "/services/website-development",
      linkText: "Explore Web Development"
    },
    {
      icon: <Briefcase size={28} />,
      title: "Custom Software Solutions",
      desc: "Tailored software solutions to streamline your business operations and boost productivity.",
      link: "/services/custom-software-development",
      linkText: "Explore Software Solutions"
    },
    {
      icon: <Smartphone size={28} />,
      title: "Mobile App Development",
      desc: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
      link: "/services/mobile-app-development",
      linkText: "Explore Mobile Apps"
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Digital Marketing",
      desc: "Data-driven marketing strategies to grow your online presence and reach.",
      link: "/services/digital-marketing",
      linkText: "Explore Digital Marketing"
    }
  ];

  const teamMembers = [
    {
      name: "Ekta Solanki",
      role: "Operations Officer",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Leading operations with 8+ years of experience in IT management.",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Bhavesh Jadav",
      role: "Laravel Developer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Technical expert with 10+ years in full-stack development.",
      social: { linkedin: "#", github: "#" }
    },
    {
      name: "Vansh Patel",
      role: "Front-End Developer",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Passionate developer specializing in React and mobile apps.",
      social: { linkedin: "#", github: "#" }
    }
  ];

  const values = [
    { icon: <Heart size={24} />, title: "Customer First", desc: "We prioritize our clients' needs and work tirelessly to exceed expectations." },
    { icon: <Zap size={24} />, title: "Innovation", desc: "We embrace cutting-edge technologies to deliver future-ready solutions." },
    { icon: <Target size={24} />, title: "Excellence", desc: "We strive for perfection in every line of code and every pixel of design." },
    { icon: <Users size={24} />, title: "Collaboration", desc: "We believe in the power of teamwork and open communication." }
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

  // ✅ AboutPage Schema
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Purvsoft Technologies",
    "url": "https://www.purvsoft.com/aboutus",
    "description": "Learn about Purvsoft Technologies — our mission, vision, expert team, and the IT & digital marketing solutions we deliver across India.",
    "publisher": {
      "@type": "Organization",
      "name": "Purvsoft Technologies",
      "url": "https://www.purvsoft.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.purvsoft.com/logo.png"
      }
    }
  };

  // ✅ Team Schema
  const teamSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Purvsoft Technologies",
    "url": "https://www.purvsoft.com/",
    "member": [
      {
        "@type": "Person",
        "name": "Ekta Solanki",
        "jobTitle": "Operations Officer",
        "worksFor": { "@type": "Organization", "name": "Purvsoft Technologies" }
      },
      {
        "@type": "Person",
        "name": "Bhavesh Jadav",
        "jobTitle": "Team Lead & Full-Stack Developer",
        "worksFor": { "@type": "Organization", "name": "Purvsoft Technologies" }
      },
      {
        "@type": "Person",
        "name": "Vansh Patel",
        "jobTitle": "React & Mobile App Developer",
        "worksFor": { "@type": "Organization", "name": "Purvsoft Technologies" }
      }
    ]
  };

  // ✅ Review Schema
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Purvsoft Technologies",
    "url": "https://www.purvsoft.com/",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "2",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": testimonials.map(t => ({
      "@type": "Review",
      "reviewBody": t.text,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": t.rating,
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": t.author
      }
    }))
  };

  return (
    <div className="au-container">
      <Helmet>
        <title>About Purvsoft Technologies | Top IT & Digital Marketing Agency in Ahmedabad, Gujarat</title>
        <meta
          name="description"
          content="IT company in Ahmedabad with 10+ years of expertise. Purvsoft offers web development, mobile apps, SEO, and digital marketing. Join our 500+ happy clients!."
        />

        {/* ✅ Fixed: removed trailing comma, cleaned up keyword list */}
        <meta
          name="keywords"
          content="IT company in Ahmedabad, web development company Ahmedabad, digital marketing agency Ahmedabad, mobile app development Gujarat, SEO company Ahmedabad, software development Ahmedabad, best IT company Gujarat, web design company Ahmedabad,web development gujarat, ecommerce development Ahmedabad, ReactJS development India, Laravel development company,website designing company in ahmedabad"
        />

        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        {/* ✅ Added: googlebot directive (was missing, present in Home.jsx) */}
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Purvsoft Technologies" />

        {/* ✅ Added: geo tags (were missing, present in Home.jsx) */}
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Ahmedabad, Gujarat, India" />

        <link rel="canonical" href="https://www.purvsoft.com/aboutus" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Purvsoft Technologies | Top IT & Digital Marketing Agency in Ahmedabad" />
        <meta property="og:description" content="Meet the expert team at Purvsoft Technologies — a leading web development, mobile app, SEO & digital marketing company based in Ahmedabad, Gujarat, India." />
        <meta property="og:url" content="https://www.purvsoft.com/aboutus" />
        <meta property="og:site_name" content="Purvsoft Technologies" />
        <meta property="og:image" content="https://www.purvsoft.com/og-about.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Purvsoft Technologies — IT and digital marketing experts in Ahmedabad, India" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@purvsoft" />
        <meta name="twitter:creator" content="@purvsoft" />
        <meta name="twitter:title" content="About Purvsoft Technologies | IT & Digital Marketing Agency Ahmedabad" />
        <meta name="twitter:description" content="Purvsoft Technologies — expert web development, mobile apps, SEO & digital marketing team in Ahmedabad, Gujarat." />
        <meta name="twitter:image" content="https://www.purvsoft.com/og-about.jpg" />
        {/* ✅ Added: twitter:image:alt (was missing) */}
        <meta name="twitter:image:alt" content="Purvsoft Technologies — IT and digital marketing experts in Ahmedabad, India" />

        {/* Verification */}
        <meta name="google-site-verification" content="MjMKilzhOmqr6Txi7pbjACF6g_hSt-B6Ej496yJyrH0" />
        <meta name="msvalidate.01" content="AD0DF443696FB452E952416667F1A8DC" />

        {/* Schema */}
        <script type="application/ld+json">{JSON.stringify(aboutPageSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(teamSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(reviewSchema)}</script>
      </Helmet>

      {/* ✅ Hero Section */}
      <section className="au-hero" aria-label="About Purvsoft Technologies">
        <div className="au-wrapper">
          <div className="au-hero-grid">
            <div className="au-hero-content">
              <p className="au-badge" aria-label="Page category">
                <Users size={16} aria-hidden="true" />
                <span>About Purvsoft Technologies</span>
              </p>

              <h1>
                Empowering Businesses with <span className="au-brand-gradient">Innovative IT &amp; Digital Marketing Solutions</span>
              </h1>

              <p className="au-hero-description">
                At <strong>Purvsoft Technologies</strong>, we craft digital experiences that help businesses
                grow smarter, faster, and stronger. We combine technical expertise with creative
                innovation to deliver solutions that make a real impact.
              </p>

              <div className="au-hero-buttons">
                <a href="#form" className="au-btn-primary" aria-label="Contact Purvsoft Technologies">
                  Contact Us <ArrowRight size={18} aria-hidden="true" />
                </a>
                <Link to="/portfolio" className="au-btn-secondary">
                  View Our Work <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* ✅ Fixed: moved aria-hidden to wrapper div only, kept meaningful alt text on images */}
            <div className="au-hero-visual">
              <div className="au-image-collage" role="presentation">
                <div className="au-collage-item au-item1">
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Purvsoft team collaborating on a project" loading="lazy" width="400" height="300" />
                </div>
                <div className="au-collage-item au-item2">
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Team meeting at Purvsoft Technologies" loading="lazy" width="400" height="300" />
                </div>
                <div className="au-collage-item au-item3">
                  <img src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Developer writing code at Purvsoft" loading="lazy" width="400" height="300" />
                </div>
                <div className="au-collage-item au-item4">
                  <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="UI/UX design work at Purvsoft Technologies" loading="lazy" width="400" height="300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Staff Banner */}
      <section className="au-staff-banner" aria-label="Our Team Overview">
        <div className="au-wrapper">
          <div className="au-banner-content">
            <div className="au-banner-icon" aria-hidden="true">
              <Star size={32} />
            </div>
            <div className="au-banner-text">
              <h2>Our Staff</h2>
              <p>Our team is friendly, communicative, and fully reliable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Team Section */}
      <section className="au-team" aria-label="Meet the Purvsoft Team">
        <div className="au-wrapper">
          <div className="au-section-header">
            <p className="au-section-subtitle">Meet Our Team</p>
            <h2 className="au-section-title">
              The People Behind <span className="au-brand-gradient">Our Success</span>
            </h2>
            <p className="au-section-description">
              Dedicated professionals committed to delivering excellence in every project.
              {/* ✅ Fixed: was linking to /hire-resource but text said "careers" — now correctly links to /career */}
              <Link to="/career" className="inline-link"> Want to join our team? Check careers →</Link>
            </p>
          </div>

          <div className="au-team-grid">
            {teamMembers.map((member, index) => (
              <article key={index} className="au-team-card" aria-label={`Team member: ${member.name}`}>
                <div className="au-member-image">
                  <img
                    src={member.image}
                    alt={`${member.name} — ${member.role} at Purvsoft Technologies`}
                    loading="lazy"
                    width="400"
                    height="400"
                  />
                </div>
                <div className="au-member-info">
                  <h3 className="au-member-name">{member.name}</h3>
                  <p className="au-member-role">{member.role}</p>
                  <p className="au-member-bio">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Expertise Section */}
      <section className="au-expertise" aria-label="Our Areas of Expertise">
        <div className="au-wrapper">
          <div className="au-section-header">
            <p className="au-section-subtitle">Our Expertise</p>
            <h2 className="au-section-title">
              What We Do <span className="au-brand-gradient">Best</span>
            </h2>
            <p className="au-section-description">
              Comprehensive IT and digital solutions tailored to your business needs.
            </p>
          </div>

          <div className="au-expertise-grid">
            {expertise.map((item, index) => (
              <div key={index} className="au-expertise-card">
                <div className="au-expertise-icon" aria-hidden="true">{item.icon}</div>
                <h3 className="au-expertise-title">{item.title}</h3>
                <p className="au-expertise-description">{item.desc}</p>
                <Link to={item.link} className="au-expertise-link">
                  {item.linkText} <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Values Section */}
      <section className="au-values" aria-label="Our Core Values">
        <div className="au-wrapper">
          <div className="au-section-header">
            <p className="au-section-subtitle">Our Values</p>
            <h2 className="au-section-title">
              What Drives <span className="au-brand-gradient">Us Forward</span>
            </h2>
          </div>

          <div className="au-values-grid">
            {values.map((value, index) => (
              <div key={index} className="au-value-card">
                <div className="au-value-icon" aria-hidden="true">{value.icon}</div>
                <h3 className="au-value-title">{value.title}</h3>
                <p className="au-value-description">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Testimonials Section */}
      <section className="au-testimonials" aria-label="Client Testimonials">
        <div className="au-wrapper">
          <div className="au-section-header">
            <p className="au-section-subtitle">Testimonials</p>
            <h2 className="au-section-title">
              What Our <span className="au-brand-gradient">Clients Say</span>
            </h2>
            <p className="au-section-description">
              Read more <Link to="/portfolio" className="inline-link">success stories on our portfolio page →</Link>
            </p>
          </div>

          <div className="au-testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <blockquote key={index} className="au-testimonial-card" aria-label={`Review by ${testimonial.author}`}>
                <div className="au-quote-mark" aria-hidden="true">"</div>
                <p className="au-testimonial-text">{testimonial.text}</p>
                <div className="au-testimonial-rating" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill={i < testimonial.rating ? "#fbbf24" : "none"}
                      color={i < testimonial.rating ? "#fbbf24" : "#cbd5e1"}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <footer className="au-testimonial-author">
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.position}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Why Choose Us */}
      <section className="au-why-choose" aria-label="Why Choose Purvsoft Technologies">
        <div className="au-wrapper">
          <div className="au-why-grid">
            <div className="au-why-content">
              <p className="au-why-subtitle">Why Choose Us</p>
              <h2 className="au-why-title">
                We're More Than Just <span className="au-brand-gradient">Developers</span>
              </h2>
              <p className="au-why-description">
                We're your technology partners, committed to understanding your business
                and delivering solutions that drive real results. Whether you need
                <Link to="/services/website-development" className="inline-link"> web development</Link>,
                <Link to="/services/mobile-app-development" className="inline-link"> mobile apps</Link>, or
                <Link to="/services/digital-marketing" className="inline-link"> digital marketing</Link>,
                we've got you covered.
              </p>
              <ul className="au-why-list" aria-label="Key reasons to choose Purvsoft Technologies">
                <li><CheckCircle size={18} aria-hidden="true" /><span>10+ years of industry experience</span></li>
                <li><CheckCircle size={18} aria-hidden="true" /><span>100+ successful projects delivered</span></li>
                <li><CheckCircle size={18} aria-hidden="true" /><span>24/7 client support</span></li>
                <li><CheckCircle size={18} aria-hidden="true" /><span>Agile development methodology</span></li>
                <li><CheckCircle size={18} aria-hidden="true" /><span>100% client satisfaction guaranteed</span></li>
              </ul>
              <a href="#form" className="au-btn-primary" aria-label="Contact Purvsoft Technologies today">
                Contact Us Today <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>

            <div className="au-why-visual">
              <div className="au-stats-box" aria-label="Client satisfaction statistics">
                <div className="au-stats-box-header">
                  <ThumbsUp size={24} aria-hidden="true" />
                  <span>Why Clients Love Us</span>
                </div>
                <div className="au-stats-box-content">
                  {[
                    { label: "Client Satisfaction", value: 98 },
                    { label: "Project Success Rate", value: 95 },
                    { label: "On-time Delivery", value: 97 }
                  ].map((stat, i) => (
                    <React.Fragment key={i}>
                      <div className="au-stat-row">
                        <span>{stat.label}</span>
                        <span className="au-stat-percent">{stat.value}%</span>
                      </div>
                      <div
                        className="au-progress-bar"
                        role="progressbar"
                        aria-valuenow={stat.value}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${stat.label}: ${stat.value}%`}
                      >
                        <div className="au-progress-fill" style={{ width: `${stat.value}%` }}></div>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Internal Links — ALL paths fixed to match sitemap routes */}
      <section className="au-internal-links" aria-label="Explore More Services">
        <div className="au-wrapper">
          <div className="section-header">
            <h2>Explore Our <span className="gradient-text">Services</span></h2>
            <p>Discover how we can help your business grow</p>
          </div>
          <div className="internal-links-grid">
            <div className="links-column">
              <h3>Development Services</h3>
              <ul>
                {/* ✅ Fixed: all 7 links now have correct -development suffix */}
                <li><Link to="/services/reactjs-development">ReactJS Development</Link></li>
                <li><Link to="/services/nextjs-development">NextJS Development</Link></li>
                <li><Link to="/services/angular-development">Angular Development</Link></li>
                <li><Link to="/services/laravel-development">Laravel Development</Link></li>
                <li><Link to="/services/nodejs-development">NodeJS Development</Link></li>
                <li><Link to="/services/flutter-development">Flutter App Development</Link></li>
                <li><Link to="/services/shopify-development">Shopify Development</Link></li>
              </ul>
            </div>
            <div className="links-column">
              <h3>Marketing Services</h3>
              <ul>
                <li><Link to="/services/seo">SEO Optimization</Link></li>
                <li><Link to="/services/google-ads">Google Ads Management</Link></li>
                <li><Link to="/services/youtube-marketing">YouTube Marketing</Link></li>
                <li><Link to="/services/meta-ads">Meta Ads (Facebook/Instagram)</Link></li>
                <li><Link to="/services/content-management">Content Management</Link></li>
              </ul>
            </div>
            <div className="links-column">
              <h3>Company</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/portfolio">Our Portfolio</Link></li>
                <li><Link to="/blog">Latest Blog</Link></li>
                <li><Link to="/career">Careers</Link></li>
                <li><Link to="/hire-resource">Hire Resource</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Contact Form */}
      <section id="form" aria-label="Contact Purvsoft Technologies">
        <Form />
      </section>
    </div>
  );
};

export default AboutUs;