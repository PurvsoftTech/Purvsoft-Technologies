import React, { useState } from 'react';
import {
  Code,
  Zap,
  Box,
  RefreshCw,
  Smartphone,
  Globe,
  Users,
  Rocket,
  Shield,
  Cpu,
  GitBranch,
  Layers,
  Settings,
  Palette,
  Database,
  Cloud,
  CheckCircle,
  ArrowRight,
  Clock,
  TrendingUp,
  Award,
  Heart,
} from 'lucide-react';
import '../../css/ReactIntroduction.css';
import { Helmet } from 'react-helmet-async';
import Form from "../../config/Form";

const ReactIntroduction = () => {
  const [activeTab, setActiveTab] = useState('what');

  const features = [
    {
      icon: <Zap size={28} />,
      title: "Virtual DOM",
      desc: "React uses a virtual DOM to efficiently update and render components, providing superior performance."
    },
    {
      icon: <Box size={28} />,
      title: "Component-Based",
      desc: "Build encapsulated components that manage their own state, then compose them to make complex UIs."
    },
    {
      icon: <RefreshCw size={28} />,
      title: "JSX Syntax",
      desc: "Write HTML-like syntax directly in JavaScript, making code more readable and easier to write."
    },
    {
      icon: <Smartphone size={28} />,
      title: "React Native",
      desc: "Use React to build native mobile apps for iOS and Android with the same principles."
    },
    {
      icon: <Globe size={28} />,
      title: "SEO Friendly",
      desc: "React can be rendered on the server-side, improving SEO and initial load times."
    },
    {
      icon: <Users size={28} />,
      title: "Strong Community",
      desc: "Backed by Facebook and a huge community of developers, with extensive resources and support."
    }
  ];

  const concepts = [
    {
      title: "Components",
      desc: "The building blocks of any React application. Components can be functional or class-based.",
      example: `function Welcome() {
  return <h1>Hello, React!</h1>;
}`
    },
    {
      title: "Props",
      desc: "Short for properties, props are read-only data passed from parent to child components.",
      example: `function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}`
    },
    {
      title: "State",
      desc: "State is data that changes over time within a component. Use useState hook to manage it.",
      example: `const [count, setCount] = useState(0);`
    },
    {
      title: "Hooks",
      desc: "Functions that let you use state and other React features in functional components.",
      example: `useEffect(() => {
  document.title = \`Count: \${count}\`;
}, [count]);`
    },
    {
      title: "Lifecycle",
      desc: "Methods that are automatically called at different stages of a component's life.",
      example: `componentDidMount() {
  // Called after component renders
}`
    },
    {
      title: "Events",
      desc: "React events are named using camelCase and passed as functions.",
      example: `<button onClick={handleClick}>
  Click me
</button>`
    }
  ];

  const customization = [
    {
      icon: <Palette size={24} />,
      title: "Styling Options",
      desc: "Multiple ways to style React components including CSS modules, styled-components, and inline styles.",
      methods: ["CSS Modules", "Styled Components", "Tailwind CSS", "Sass/SCSS"]
    },
    {
      icon: <Settings size={24} />,
      title: "Configuration",
      desc: "Customize React behavior with configuration files and environment variables.",
      methods: ["Webpack Config", "Babel Setup", "Environment Variables", "Craco"]
    },
    {
      icon: <Layers size={24} />,
      title: "Component Libraries",
      desc: "Use pre-built component libraries to speed up development and maintain consistency.",
      methods: ["Material-UI", "Ant Design", "Chakra UI", "React Bootstrap"]
    },
    {
      icon: <Database size={24} />,
      title: "State Management",
      desc: "Choose from various state management solutions based on your application needs.",
      methods: ["Redux", "Context API", "Zustand", "Recoil"]
    },
    {
      icon: <GitBranch size={24} />,
      title: "Routing",
      desc: "Implement navigation and routing in your React applications.",
      methods: ["React Router", "Reach Router", "Next.js Router", "TanStack Router"]
    },
    {
      icon: <Cloud size={24} />,
      title: "API Integration",
      desc: "Connect your React app with backend services and APIs.",
      methods: ["React Query", "SWR", "GraphQL", "Axios"]
    }
  ];
  const scrollToForm = () => {
  document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
};

  const advantages = [
    {
      icon: <Rocket size={20} />,
      title: "Fast Learning Curve",
      desc: "Easy to learn if you know JavaScript basics."
    },
    {
      icon: <Shield size={20} />,
      title: "Reusable Components",
      desc: "Write once, use anywhere across your application."
    },
    {
      icon: <Cpu size={20} />,
      title: "Performance",
      desc: "Virtual DOM ensures optimal rendering performance."
    },
    {
      icon: <TrendingUp size={20} />,
      title: "Scalability",
      desc: "Perfect for both small and large-scale applications."
    },
    {
      icon: <Award size={20} />,
      title: "Industry Standard",
      desc: "Used by thousands of companies worldwide."
    },
    {
      icon: <Heart size={20} />,
      title: "Developer Experience",
      desc: "Great developer tools and debugging support."
    }
  ];

  const codeExamples = [
    {
      title: "Functional Component",
      code: `function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`
    },
    {
      title: "Class Component",
      code: `class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({
          count: this.state.count + 1
        })}>
          Increment
        </button>
      </div>
    );
  }
}`
    }
  ];

  // ✅ Fixed: added full address with addressCountry "IN", corrected mainEntityOfPage URL
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "ReactJS Development Services",
    "provider": {
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
    "description": "Professional ReactJS development services for building fast, scalable, and interactive web applications. Expert React developers for startups and enterprises.",
    "serviceType": ["ReactJS Web Development", "React Native Mobile Apps", "Custom React Components", "React Consulting"],
    "areaServed": "Worldwide",
    "audience": {
      "@type": "BusinessAudience"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "USD",
        "price": "Custom"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      // ✅ Fixed: was /services/reactjs — corrected to match sitemap & canonical URL
      "@id": "https://www.purvsoft.com/services/reactjs-development"
    }
  };

  // ✅ Fixed: breadcrumb last item URL → /reactjs-development
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
        "name": "Services",
        "item": "https://www.purvsoft.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "ReactJS Development",
        "item": "https://www.purvsoft.com/services/reactjs-development"
      }
    ]
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is ReactJS used for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ReactJS is used for building user interfaces, especially single-page applications (SPAs), mobile apps (via React Native), and complex web applications with dynamic content."
        }
      },
      {
        "@type": "Question",
        "name": "Is React easy to learn?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, React has a relatively easy learning curve if you have basic knowledge of JavaScript and HTML. Many developers can start building React applications within a few weeks."
        }
      },
      {
        "@type": "Question",
        "name": "What companies use React?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Major companies using React include Facebook, Instagram, Netflix, Airbnb, Uber, WhatsApp, Twitter, and thousands of other companies worldwide."
        }
      }
    ]
  };

  return (
    <main className="ri-container" role="main">
      <Helmet>
        {/* ✅ Removed: redundant <meta name="title"> */}
        <title>ReactJS Development Company | React Web & Mobile Apps | Purvsoft</title>
        <meta name="description" content="Purvsoft Technologies offers expert ReactJS development services. Build fast, scalable, and interactive web applications with React. Hire React developers for your next project." />

        {/* ✅ Cleaned: removed job listing keywords — irrelevant for a service page, hurts relevance */}
        <meta name="keywords" content="ReactJS development company, React development services, hire React developer India, React web development, React Native apps, ReactJS Ahmedabad, frontend development company, ReactJS company India, Purvsoft ReactJS, it company Ranip Ahmedabad" />

        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        {/* ✅ Added: googlebot directive (was missing) */}
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Purvsoft Technologies" />
        <meta name="language" content="English" />

        {/* ✅ Fixed: canonical URL was /services/reactjs — corrected to /services/reactjs-development */}
        <link rel="canonical" href="https://www.purvsoft.com/services/reactjs-development" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        {/* ✅ Fixed: OG URL was /services/reactjs */}
        <meta property="og:url" content="https://www.purvsoft.com/services/reactjs-development" />
        <meta property="og:title" content="ReactJS Development Services | Web & Mobile Apps | Purvsoft" />
        <meta property="og:description" content="Build fast, scalable, and interactive web applications with Purvsoft's ReactJS development services. Expert React developers for startups and enterprises." />
        <meta property="og:image" content="https://www.purvsoft.com/og-reactjs.jpg" />
        <meta property="og:image:alt" content="ReactJS Development Services - Web and Mobile Applications by Purvsoft" />
        {/* ✅ Added: missing OG image dimensions */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Purvsoft Technologies" />
        {/* ✅ Fixed: en_US → en_IN */}
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        {/* ✅ Removed: twitter:url — non-standard tag */}
        {/* ✅ Added: twitter:site and twitter:creator (were missing) */}
        <meta name="twitter:site" content="@purvsoft" />
        <meta name="twitter:creator" content="@purvsoft" />
        <meta name="twitter:title" content="ReactJS Development | Purvsoft Technologies" />
        <meta name="twitter:description" content="Expert ReactJS development services for web and mobile applications. Fast, scalable, and interactive UIs." />
        {/* ✅ Fixed: unified twitter image with OG image */}
        <meta name="twitter:image" content="https://www.purvsoft.com/og-reactjs.jpg" />
        <meta name="twitter:image:alt" content="ReactJS Development Services - Web and Mobile Applications by Purvsoft" />

        {/* Verification */}
        <meta name="google-site-verification" content="MjMKilzhOmqr6Txi7pbjACF6g_hSt-B6Ej496yJyrH0" />
        <meta name="msvalidate.01" content="AD0DF443696FB452E952416667F1A8DC" />

        {/* Geo Tags */}
        <meta name="geo.region" content="IN-GJ" />
        {/* ✅ Fixed: was just "Ahmedabad" */}
        <meta name="geo.placename" content="Ahmedabad, Gujarat, India" />
        <meta name="geo.position" content="23.0225;72.5714" />
        <meta name="ICBM" content="23.0225, 72.5714" />

        {/* ✅ JSON-LD moved inside Helmet — was incorrectly placed in JSX body */}
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqStructuredData)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="ri-hero" aria-label="ReactJS Development Hero Section">
        {/* ✅ Fixed: was using ri-container class again inside ri-container — changed to ri-wrapper */}
        <div className="ri-wrapper">
          <div className="ri-hero-grid">
            <div className="ri-hero-content" data-aos="fade-right">
              <div className="ri-badge">
                <Code size={14} aria-hidden="true" />
                <span>React.js Development</span>
              </div>
              <h1>
                Build Modern Web Apps with <span className="ri-brand-gradient">ReactJS</span>
              </h1>
              <p className="ri-hero-description">
                React lets you build user interfaces out of individual pieces called components.
                Create powerful, scalable web and mobile applications with the most popular frontend library.
              </p>
              <div className="ri-hero-stats">
                <div className="ri-hero-stat" data-aos="fade-up" data-aos-delay="0">
                  <span className="ri-stat-number">200K+</span>
                  <span className="ri-stat-label">GitHub Stars</span>
                </div>
                <div className="ri-hero-stat" data-aos="fade-up" data-aos-delay="50">
                  <span className="ri-stat-number">10M+</span>
                  <span className="ri-stat-label">Weekly Downloads</span>
                </div>
                <div className="ri-hero-stat" data-aos="fade-up" data-aos-delay="100">
                  <span className="ri-stat-number">1000+</span>
                  <span className="ri-stat-label">Contributors</span>
                </div>
              </div>
              <div className="ri-hero-buttons">
            
<button
  className="ri-btn-primary"
  onClick={scrollToForm}
  aria-label="Contact us for ReactJS development"
>
  Start Your React Project <ArrowRight size={18} />
</button>
              </div>
            </div>

            {/* ✅ Added aria-hidden — decorative animation */}
            <div className="ri-hero-visual" data-aos="fade-left" aria-hidden="true">
              <div className="ri-logo-animation">
                <div className="ri-logo-ring ri-ring1"></div>
                <div className="ri-logo-ring ri-ring2"></div>
                <div className="ri-logo-ring ri-ring3"></div>
                <div className="ri-logo-dot"></div>
              </div>
              <div className="ri-code-snippet">
                <div className="ri-snippet-header">
                  <span className="ri-dot ri-dot-red"></span>
                  <span className="ri-dot ri-dot-yellow"></span>
                  <span className="ri-dot ri-dot-green"></span>
                  <span className="ri-filename">App.js</span>
                </div>
                <div className="ri-snippet-content">
                  <div className="ri-line">
                    <span className="ri-keyword">function</span> <span className="ri-function">App</span>() {'{'}
                  </div>
                  <div className="ri-line ri-indent">
                    <span className="ri-keyword">return</span> (
                  </div>
                  <div className="ri-line ri-indent2">
                    {'<'}div <span className="ri-attr">className</span>=<span className="ri-string">"app"</span>{'>'}
                  </div>
                  <div className="ri-line ri-indent3">
                    {'<'}h1{'>'}Hello, React!{'<'}/h1{'>'}
                  </div>
                  <div className="ri-line ri-indent2">
                    {'<'}/div{'>'}
                  </div>
                  <div className="ri-line ri-indent">
                    );
                  </div>
                  <div className="ri-line">{'}'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation Tabs */}
      <section className="ri-nav-section" aria-label="ReactJS Learning Navigation">
        {/* ✅ Fixed: was using ri-container class again — changed to ri-wrapper */}
        <div className="ri-wrapper">
          <div className="ri-nav-tabs" role="tablist" aria-label="React topic tabs">
            <button
              className={`ri-nav-tab ${activeTab === 'what' ? 'ri-active' : ''}`}
              onClick={() => setActiveTab('what')}
              aria-pressed={activeTab === 'what'}
              aria-label="What is React section"
            >
              What is React?
            </button>
            <button
              className={`ri-nav-tab ${activeTab === 'why' ? 'ri-active' : ''}`}
              onClick={() => setActiveTab('why')}
              aria-pressed={activeTab === 'why'}
              aria-label="Why choose React section"
            >
              Why React?
            </button>
            <button
              className={`ri-nav-tab ${activeTab === 'how' ? 'ri-active' : ''}`}
              onClick={() => setActiveTab('how')}
              aria-pressed={activeTab === 'how'}
              aria-label="How React works section"
            >
              How it Works
            </button>
            <button
              className={`ri-nav-tab ${activeTab === 'customize' ? 'ri-active' : ''}`}
              onClick={() => setActiveTab('customize')}
              aria-pressed={activeTab === 'customize'}
              aria-label="React customization options"
            >
              Customization
            </button>
          </div>

          <div className="ri-tab-content">
            {activeTab === 'what' && (
              <div className="ri-what-content" data-aos="fade-up">
                <div className="section-header">
                  <p className="section-subtitle">Introduction</p>
                  <h2>What is <span className="brand-gradient">React?</span></h2>
                </div>
                <p className="ri-lead-text">
                  React is a JavaScript library for building user interfaces, developed by Facebook.
                  It's used for building single-page applications and mobile apps with reusable components.
                </p>
                <div className="ri-features-grid">
                  {features.map((feature, index) => (
                    <div key={index} className="ri-feature-card" data-aos="fade-up" data-aos-delay={index * 50}>
                      <div className="ri-feature-icon" aria-hidden="true">{feature.icon}</div>
                      <h3>{feature.title}</h3>
                      <p>{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'why' && (
              <div className="ri-why-content" data-aos="fade-up">
                <div className="section-header">
                  <p className="section-subtitle">Benefits</p>
                  <h2>Why Choose <span className="brand-gradient">React?</span></h2>
                  <p className="ri-section-subtitle">Discover the advantages that make React the top choice for modern web development</p>
                </div>
                <div className="ri-advantages-grid">
                  {advantages.map((adv, index) => (
                    <div key={index} className="ri-advantage-card" data-aos="fade-up" data-aos-delay={index * 50}>
                      <div className="ri-advantage-icon" aria-hidden="true">{adv.icon}</div>
                      <div>
                        <h3>{adv.title}</h3>
                        <p>{adv.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="ri-comparison-box" data-aos="fade-up">
                  <h3>React vs Other Frameworks</h3>
                  <div className="ri-comparison-table" role="table" aria-label="React vs Angular vs Vue comparison">
                    <div className="ri-comparison-row ri-header" role="row">
                      <span className="ri1" role="columnheader">Feature</span>
                      <span className="ri1" role="columnheader">React</span>
                      <span className="ri1" role="columnheader">Angular</span>
                      <span className="ri1" role="columnheader">Vue</span>
                    </div>
                    <div className="ri-comparison-row" role="row">
                      <span role="cell">Learning Curve</span>
                      <span role="cell"><CheckCircle size={16} className="ri-success" aria-hidden="true" /> Easy</span>
                      <span role="cell"><Clock size={16} className="ri-warning" aria-hidden="true" /> Steep</span>
                      <span role="cell"><CheckCircle size={16} className="ri-success" aria-hidden="true" /> Easy</span>
                    </div>
                    <div className="ri-comparison-row" role="row">
                      <span role="cell">Performance</span>
                      <span role="cell"><CheckCircle size={16} className="ri-success" aria-hidden="true" /> Excellent</span>
                      <span role="cell"><CheckCircle size={16} className="ri-success" aria-hidden="true" /> Good</span>
                      <span role="cell"><CheckCircle size={16} className="ri-success" aria-hidden="true" /> Excellent</span>
                    </div>
                    <div className="ri-comparison-row" role="row">
                      <span role="cell">Bundle Size</span>
                      <span role="cell"><CheckCircle size={16} className="ri-success" aria-hidden="true" /> Small</span>
                      <span role="cell"><Clock size={16} className="ri-warning" aria-hidden="true" /> Large</span>
                      <span role="cell"><CheckCircle size={16} className="ri-success" aria-hidden="true" /> Small</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'how' && (
              <div className="ri-how-content" data-aos="fade-up">
                <div className="section-header">
                  <p className="section-subtitle">Core Concepts</p>
                  <h2>How <span className="brand-gradient">React Works</span></h2>
                  <p className="ri-section-subtitle">Understanding the fundamental concepts of React development</p>
                </div>
                <div className="ri-concepts-grid">
                  {concepts.map((concept, index) => (
                    <div key={index} className="ri-concept-card" data-aos="fade-up" data-aos-delay={index * 50}>
                      <h3>{concept.title}</h3>
                      <p>{concept.desc}</p>
                      <pre className="ri-code-block" aria-label={`${concept.title} code example`}>
                        <code>{concept.example}</code>
                      </pre>
                    </div>
                  ))}
                </div>
                <div className="ri-examples-section">
                  <h3>Code Examples</h3>
                  <div className="ri-examples-grid">
                    {codeExamples.map((example, index) => (
                      <div key={index} className="ri-example-card" data-aos="fade-up" data-aos-delay={index * 50}>
                        <h4>{example.title}</h4>
                        <pre className="ri-code-block" aria-label={`${example.title} code example`}>
                          <code>{example.code}</code>
                        </pre>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'customize' && (
              <div className="ri-customize-content" data-aos="fade-up">
                <div className="section-header">
                  <p className="section-subtitle">Flexibility</p>
                  <h2>React <span className="brand-gradient">Customization</span></h2>
                  <p className="ri-section-subtitle">
                    React offers multiple ways to customize your application based on your project needs.
                  </p>
                </div>
                <div className="ri-customization-grid">
                  {customization.map((item, index) => (
                    <div key={index} className="ri-customization-card" data-aos="fade-up" data-aos-delay={index * 50}>
                      <div className="ri-customization-icon" aria-hidden="true">{item.icon}</div>
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                      <div className="ri-methods">
                        {item.methods.map((method, idx) => (
                          <span key={idx} className="ri-method-tag">{method}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ✅ Fixed: bare div → semantic section with aria-label */}
      <section id="form" aria-label="Contact Purvsoft for ReactJS Development">
        <Form />
      </section>
    </main>
  );
};

export default ReactIntroduction;