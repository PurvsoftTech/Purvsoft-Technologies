import React from 'react';
import "../css/AssistSection.css"; // We will update this file next

const AssistSection = () => {
  const steps = [
    {
      id: 1,
      icon: "fas fa-clipboard-list", // Using FontAwesome
      title: "Planning & Requirements",
      description: "During planning, we meet the client to understand goals, define scope, estimate costs, and prepare for the next steps, laying the project's foundation."
    },
    {
      id: 2,
      icon: "fas fa-laptop-code",
      title: "Design & Development",
      description: "In this phase, we design an engaging layout and develop a user-friendly site with databases, API integration, accessibility, and best practices for a seamless user experience."
    },
    {
      id: 3,
      icon: "fas fa-vial-circle-check",
      title: "Testing & Bug Fixing",
      description: "In our testing service, we ensure your website's excellence through rigorous testing, including unit tests, compatibility checks, security reinforcement, performance optimization, and user-friendliness validation."
    },
    {
      id: 4,
      icon: "fas fa-rocket",
      title: "Deployment & Launch",
      description: "Deployment is when your website goes live. We set up servers, configure domains, ensure security, perform final tests, monitor performance, and announce your website, making your digital project shine."
    },
    {
      id: 5,
      icon: "fas fa-cog",
      title: "Maintenance & Support",
      description: "Our comprehensive services drive website traffic strategically through SEO, social media, and optimization, ensuring effective engagement with your intended audience."
    }
  ];

  return (
    <section className="assist-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-wrap">
          <span className="section-badge">How We Work</span>
          <h2 className="section-title">
            How We Assist <span className="brand-gradient">your Business</span>
          </h2>
          <p className="section-desc">
            Our mission is clear: we're here to support your business in every way. Our IT solutions pave the road to success, boosting efficiency and ensuring your growth is unstoppable.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="assist-steps-grid">
          {steps.map((step) => (
            <div className="assist-card" key={step.id}>
              {/* Floating Ghost Number */}
              <div className="step-number-ghost">{step.id}</div>
              
              <div className="card-content">
                <i className={`${step.icon} card-icon`}></i>
                <h3 className="card-title">{step.title}</h3>
                <p className="card-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssistSection;