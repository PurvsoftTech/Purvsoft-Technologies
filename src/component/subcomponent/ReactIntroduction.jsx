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
  
  BookOpen,
  
  CheckCircle,
  ArrowRight,
  Clock,
  TrendingUp,
  Award,
  Heart,
  Github,
  Twitter,
  Youtube
} from 'lucide-react';
import '../../css/ReactIntroduction.css';
import { Helmet} from 'react-helmet-async';
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
      methods: ["Axios", "React Query", "SWR", "GraphQL"]
    }
  ];

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

  const resources = [
    { name: "Official Docs", icon: <BookOpen size={16} />, url: "#" },
    { name: "GitHub", icon: <Github size={16} />, url: "#" },
    { name: "Twitter", icon: <Twitter size={16} />, url: "#" },
    { name: "YouTube", icon: <Youtube size={16} />, url: "#" }
  ];

  return (
    <div className="ri-container">
      <Helmet>
      <title>ReactJS Development Services | Purvsoft Technologies</title>
      <meta name="description" content="Build fast, scalable, and interactive web applications with Purvsoft Technologies's ReactJS development services. Expert React developers for startups and enterprises." />
      <meta name="keywords" content="ReactJS development, React developer, React web app, hire React developer, ReactJS company India" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href="https://www.purvsoft.com/services/reactjs" />
 
      <meta property="og:title" content="ReactJS Development Services | Purvsoft Technologies" />
      <meta property="og:description" content="Fast, scalable ReactJS web applications by expert developers at Purvsoft Technologies." />
      <meta property="og:url" content="https://www.purvsoft.com/services/reactjs" />
      <meta property="og:image" content="https://www.purvsoft.com/og-image.jpg" />
 
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ReactJS Development | Purvsoft Technologies" />
      <meta name="twitter:description" content="Expert ReactJS development services by Purvsoft Technologies." />
    </Helmet>
      {/* Hero Section */}
      <section className="ri-hero">
        <div className="ri-container">
          <div className="ri-hero-grid">
            <div className="ri-hero-content">
              <div className="ri-badge">
                <Code size={14} />
                <span>React.js Introduction</span>
              </div>
              <h1>
                Learn <span className="ri-gradient-text">React</span> - <br />
                The Library for Web and Native User Interfaces
              </h1>
              <p className="ri-hero-description">
                React lets you build user interfaces out of individual pieces called components. 
                Create your own components, then combine them to create powerful applications.
              </p>
              <div className="ri-hero-stats">
                <div className="ri-hero-stat">
                  <span className="ri-stat-number">200K+</span>
                  <span className="ri-stat-label">GitHub Stars</span>
                </div>
                <div className="ri-hero-stat">
                  <span className="ri-stat-number">10M+</span>
                  <span className="ri-stat-label">Weekly Downloads</span>
                </div>
                <div className="ri-hero-stat">
                  <span className="ri-stat-number">1000+</span>
                  <span className="ri-stat-label">Contributors</span>
                </div>
              </div>
              <div className="ri-hero-buttons">
                <a href="#form" className="ri-btn-primary">
                  Contact Us<ArrowRight size={18} />
                </a>
              </div>
            </div>
            <div className="ri-hero-visual">
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

      {/* Quick Navigation */}
      <section className="ri-nav-section">
        <div className="ri-container">
          <div className="ri-nav-tabs">
            <button 
              className={`ri-nav-tab ${activeTab === 'what' ? 'ri-active' : ''}`}
              onClick={() => setActiveTab('what')}
            >
              What is React?
            </button>
            <button 
              className={`ri-nav-tab ${activeTab === 'why' ? 'ri-active' : ''}`}
              onClick={() => setActiveTab('why')}
            >
              Why React?
            </button>
            <button 
              className={`ri-nav-tab ${activeTab === 'how' ? 'ri-active' : ''}`}
              onClick={() => setActiveTab('how')}
            >
              How it Works
            </button>
            <button 
              className={`ri-nav-tab ${activeTab === 'customize' ? 'ri-active' : ''}`}
              onClick={() => setActiveTab('customize')}
            >
              Customization
            </button>
          </div>

          <div className="ri-tab-content">
            {activeTab === 'what' && (
              <div className="ri-what-content">
                <h2>What is React?</h2>
                <p className="ri-lead-text">
                  React is a JavaScript library for building user interfaces, developed by Facebook. 
                  It's used for building single-page applications and mobile apps.
                </p>
                <div className="ri-features-grid">
                  {features.map((feature, index) => (
                    <div key={index} className="ri-feature-card">
                      <div className="ri-feature-icon">{feature.icon}</div>
                      <h3>{feature.title}</h3>
                      <p>{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'why' && (
              <div className="ri-why-content">
                <h2>Why Choose React?</h2>
                <div className="ri-advantages-grid">
                  {advantages.map((adv, index) => (
                    <div key={index} className="ri-advantage-card">
                      <div className="ri-advantage-icon">{adv.icon}</div>
                      <div>
                        <h3>{adv.title}</h3>
                        <p>{adv.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="ri-comparison-box">
                  <h3>React vs Other Frameworks</h3>
                  <div className="ri-comparison-table">
                    <div className="ri-comparison-row ri-header">
                      <span  className="ri1">Feature</span>
                      <span className="ri1">React</span>
                      <span className="ri1">Angular</span>
                      <span className="ri1">Vue</span>
                    </div>
                    <div className="ri-comparison-row">
                      <span>Learning Curve</span>
                      <span><CheckCircle size={16} className="ri-success" /> Easy</span>
                      <span><Clock size={16} className="ri-warning" /> Steep</span>
                      <span><CheckCircle size={16} className="ri-success" /> Easy</span>
                    </div>
                    <div className="ri-comparison-row">
                      <span>Performance</span>
                      <span><CheckCircle size={16} className="ri-success" /> Excellent</span>
                      <span><CheckCircle size={16} className="ri-success" /> Good</span>
                      <span><CheckCircle size={16} className="ri-success" /> Excellent</span>
                    </div>
                    <div className="ri-comparison-row">
                      <span>Bundle Size</span>
                      <span><CheckCircle size={16} className="ri-success" /> Small</span>
                      <span><Clock size={16} className="ri-warning" /> Large</span>
                      <span><CheckCircle size={16} className="ri-success" /> Small</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'how' && (
              <div className="ri-how-content">
                <h2>How React Works</h2>
                <div className="ri-concepts-grid">
                  {concepts.map((concept, index) => (
                    <div key={index} className="ri-concept-card">
                      <h3>{concept.title}</h3>
                      <p>{concept.desc}</p>
                      <pre className="ri-code-block">
                        <code>{concept.example}</code>
                      </pre>
                    </div>
                  ))}
                </div>
                <div className="ri-examples-section">
                  <h3>Code Examples</h3>
                  <div className="ri-examples-grid">
                    {codeExamples.map((example, index) => (
                      <div key={index} className="ri-example-card">
                        <h4>{example.title}</h4>
                        <pre className="ri-code-block">
                          <code>{example.code}</code>
                        </pre>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'customize' && (
              <div className="ri-customize-content">
                <h2>React Customization</h2>
                <p className="ri-lead-text">
                  React offers multiple ways to customize your application based on your needs.
                </p>
                <div className="ri-customization-grid">
                  {customization.map((item, index) => (
                    <div key={index} className="ri-customization-card">
                      <div className="ri-customization-icon">{item.icon}</div>
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

      {/* Getting Started Section */}

      {/* Resources Section */}
      {/* CTA Section */}
      <div id="form">
  <Form />
</div>
    </div>
  );
};

export default ReactIntroduction;