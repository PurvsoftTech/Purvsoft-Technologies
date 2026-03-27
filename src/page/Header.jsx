import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import image from '../image/Pursoft_Logo.png'
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);

  const servicesData = [
    {
      category: "IT Services",
      items: [
        { name: "Digital Marketing", path: "/services/digital-marketing" },
        { name: "SEO", path: "/services/seo" },
        { name: "Custom Software Development", path: "/services/custom-software-development" },
        { name: "Content Management", path: "/services/content-management" },
        { name: "Web Design & Development", path: "/services/website-development" },
        { name: "Mobile App Development", path: "/service/mobile-app-development" },
        { name: "eCommerce Development", path: "/services/e-commerce-development" },
        { name: "Youtube Marketing", path: "/services/youtube-marketing" },
        { name: "Meta Ads", path: "/services/meta-ads" },
        { name: "Google Ads", path: "/services/google-ads" },
        { name: "Our Challenges", path: "/services/our-challenges" },
      ]
    },
    {
      category: "Frontend Development",
      items: [
        { name: "ReactJS", path: "/services/reactjs" },
        { name: "NextJS", path: "/services/nextjs" },
        { name: "AngularJS", path: "/services/angular" },
      ]
    },
    {
      category: "CMS & eCommerce",
      items: [
        { name: "Shopify", path: "/services/shopify" }
      ]
    },
    {
      category: "Mobile App Development",
      items: [
        { name: "Flutter", path: "/services/flutter" }
      ]
    },
    {
      category: "Backend Development",
      items: [
        { name: "Laravel", path: "/services/Laravel" },
        { name: "NodeJS", path: "/services/nodejs" }
      ]
    }
  ];

  const companyData = {
    mainItems: [
      { name: "About", path: "/aboutus", icon: "fas fa-info-circle" },
      { name: "Portfolio", path: "/portfolio", icon: "fas fa-briefcase" }
    ]
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileCompanyOpen(false);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <Link to="/" className="logo-link">
              <img
                src={image}
                alt="PurvSoft Technologies"
                className="logo-image"
                width={110}
                style={{ borderRadius: "10px" }}
              />
            </Link>
          </div>

          <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <ul className="nav-links">
              {/* Home */}
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/aboutus"
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                  onClick={closeMobileMenu}
                >
                  About Us
                </NavLink>
              </li>
              

              {/* Company Desktop */}
              {/* <li
                className={`nav-item dropdown desktop-only ${companyDropdownOpen ? 'open' : ''}`}
                onMouseEnter={() => setCompanyDropdownOpen(true)}
                onMouseLeave={() => setCompanyDropdownOpen(false)}
              >
                <span className="dropdown-toggle">
                  Company <i className={`fas fa-chevron-${companyDropdownOpen ? 'up' : 'down'}`}></i>
                </span>
                <div className="dropdown-menu company-dropdown">
                  <div className="company-dropdown-content">
                    <div className="company-main-links">
                      {companyData.mainItems.map((item, index) => (
                        <NavLink
                          key={index}
                          to={item.path}
                          className="company-link"
                          onClick={closeMobileMenu}
                        >
                          <i className={item.icon}></i>
                          <div className="company-link-text">
                            <span className="link-title">{item.name}</span>
                          </div>
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              </li> */}

              {/* Company Mobile */}
              {/* <li className="nav-item mobile-only">
                <div className="mobile-dropdown">
                  <div
                    className="mobile-dropdown-toggle"
                    onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                  >
                    <span>Company</span>
                    <i className={`fas ${mobileCompanyOpen ? 'fa-minus' : 'fa-plus'}`}></i>
                  </div>
                  <div className={`mobile-dropdown-menu ${mobileCompanyOpen ? 'open' : ''}`}>
                    <div className="mobile-company-links">
                      {companyData.mainItems.map((item, index) => (
                        <NavLink
                          key={index}
                          to={item.path}
                          className="mobile-company-link"
                          onClick={closeMobileMenu}
                        >
                          <i className={item.icon}></i>
                          <span className="link-title">{item.name}</span>
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              </li> */}

              {/* Services Desktop */}
              <li
                className={`nav-item dropdown desktop-only ${servicesDropdownOpen ? 'open' : ''}`}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <span className="dropdown-toggle">
                  Services <i className={`fas fa-chevron-${servicesDropdownOpen ? 'up' : 'down'}`}></i>
                </span>
                <div className="dropdown-menu">
                  <div className="dropdown-grid">
                    {servicesData.map((category, index) => (
                      <div key={index} className="dropdown-category">
                        <h4>{category.category}</h4>
                        <ul>
                          {category.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <NavLink to={item.path} onClick={closeMobileMenu}>
                                {item.name}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </li>

              {/* Services Mobile */}
              <li className="nav-item mobile-only">
                <div className="mobile-dropdown">
                  <div
                    className="mobile-dropdown-toggle"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  >
                    <span>Services</span>
                    <i className={`fas ${mobileServicesOpen ? 'fa-minus' : 'fa-plus'}`}></i>
                  </div>
                  <div className={`mobile-dropdown-menu ${mobileServicesOpen ? 'open' : ''}`}>
                    {servicesData.map((category, index) => (
                      <div key={index} className="mobile-category">
                        <h4>{category.category}</h4>
                        <ul>
                          {category.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <NavLink to={item.path} onClick={closeMobileMenu}>
                                {item.name}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </li>
              

              <li className="nav-item">
                <NavLink
                  to="/hire-resource"
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                  onClick={closeMobileMenu}
                >
                  Hire Resource
                </NavLink>
              </li>
                
              <li className="nav-item">
                <NavLink
                  to="/portfolio"
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                  onClick={closeMobileMenu}
                >
                  Portfolio
                </NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink
                  to="/product"
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                  onClick={closeMobileMenu}
                >
                  Product
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/blog"
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                  onClick={closeMobileMenu}
                >
                  Blog
                </NavLink>
              </li>
              
              {/* Careers */}
              <li className="nav-item">
                <NavLink
                  to="/career"
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                  onClick={closeMobileMenu}
                >
                  Careers
                </NavLink>
              </li>

              {/* Contact */}
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                  onClick={closeMobileMenu}
                >
                  Contact Us
                </NavLink>
              </li>

              {/* Hire Source */}
              
            </ul>

            <NavLink to="/contact" className="nav-cta" onClick={closeMobileMenu}>
              Get Started
            </NavLink>
          </div>

          <div
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;