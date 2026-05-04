import React, { useState } from "react";

const TechStackSection = () => {
  const [activeTab, setActiveTab] = useState("All");

  const techData = {
    All:[
      { name: "ReactJS", icon: "fab fa-react" },
      { name: "NextJS", icon: "fas fa-code" },
       { name: "NodeJS", icon: "fab fa-node-js" },
      { name: "Laravel", icon: "fab fa-laravel" },
      { name: "Shopify", icon: "fab fa-shopify" },
       { name: "MySQL", icon: "fas fa-database" },
      { name: "MongoDB", icon: "fas fa-leaf" },
       { name: "AWS", icon: "fab fa-aws" },
      { name: "Docker", icon: "fab fa-docker" },
       { name: "Flutter", icon: "fas fa-mobile-alt" },
       { name: "AI Automation", icon: "fas fa-robot" }

    ],
    Frontend: [
      { name: "ReactJS", icon: "fab fa-react" },
      { name: "NextJS", icon: "fas fa-code" },
    ],
    Backend: [
      { name: "NodeJS", icon: "fab fa-node-js" },
      { name: "Laravel", icon: "fab fa-laravel" },
    ],
    CMS: [
      { name: "Shopify", icon: "fab fa-shopify" },
    ],
    Database: [
      { name: "MySQL", icon: "fas fa-database" },
      { name: "MongoDB", icon: "fas fa-leaf" },
    ],
    "Cloud & DevOps": [
      { name: "AWS", icon: "fab fa-aws" },
      { name: "Docker", icon: "fab fa-docker" },
    ],
    "Mobile App": [
      { name: "Flutter", icon: "fas fa-mobile-alt" }
    ],
    "AI & Automation": [
      { name: "AI Automation", icon: "fas fa-robot" },
    ]
  };

  const tabs = Object.keys(techData);

  return (
    <section className="techstack-section">
      <div className="techstack-parallax-bg"></div>

      <div className="techstack-container">
        <div className="techstack-header">
          <span className="techstack-badge">TECHNOLOGY INDEX</span>
          <h2 className="techstack-title">The Goal of Trusting Workshops</h2>
          <p className="techstack-description">
            Your tech stack empowers us to create robust, high-performance digital
            solutions tailored to your unique needs.
          </p>
        </div>

        <div className="techstack-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`techstack-tab-button ${
                activeTab === tab ? "active" : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="techstack-grid">
          {techData[activeTab].map((tech, index) => (
            <div className="techstack-item" key={index}>
              <span className="techstack-name">{tech.name}</span>
              <i className={tech.icon}></i>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
