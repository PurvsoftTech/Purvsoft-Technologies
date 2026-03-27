import React, { useState } from 'react';
import {
  Code,
  Zap,
  Box,
  RefreshCw,
  Globe,
  Users,
  Star,
  Rocket,
  Shield,
  Cpu,
  Terminal,
  BookOpen,
  CheckCircle,
  ArrowRight,
  Clock,
  Award,
  Heart,
  Github,
  Twitter,
  Youtube,
  FileText,
} from 'lucide-react';
import '../../css/AngularIntroduction.css';
import { Helmet} from 'react-helmet-async';
import Form from "../../config/Form";

const AngularIntroduction = () => {
  const [activeTab, setActiveTab] = useState('what');

  const features = [
    {
      icon: <Zap size={28} />,
      title: "Component-Based Architecture",
      desc: "Build applications with reusable components that encapsulate HTML, CSS, and TypeScript."
    },
    {
      icon: <Box size={28} />,
      title: "Two-Way Data Binding",
      desc: "Automatic synchronization between model and view with minimal code."
    },
    {
      icon: <RefreshCw size={28} />,
      title: "Dependency Injection",
      desc: "Built-in DI system makes services and dependencies easy to manage and test."
    },
    {
      icon: <Shield size={28} />,
      title: "TypeScript by Default",
      desc: "Full TypeScript support for better tooling, type safety, and maintainability."
    },
    {
      icon: <Globe size={28} />,
      title: "RxJS Integration",
      desc: "Powerful reactive programming with built-in RxJS for handling async operations."
    },
    {
      icon: <Users size={28} />,
      title: "Enterprise Ready",
      desc: "Used by Google and thousands of enterprises for large-scale applications."
    }
  ];

  const concepts = [
    {
      title: "Components",
      desc: "The building blocks of Angular applications with template, styles, and logic.",
      example: `@Component({
  selector: 'app-hello',
  template: '<h1>Hello {{name}}!</h1>'
})
export class HelloComponent {
  name = 'Angular';
}`
    },
    {
      title: "Modules",
      desc: "NgModules organize the application into cohesive blocks of functionality.",
      example: `@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }`
    },
    {
      title: "Services",
      desc: "Share data and logic across components using injectable services.",
      example: `@Injectable({
  providedIn: 'root'
})
export class DataService {
  getData() {
    return http.get('/api/data');
  }
}`
    },
    {
      title: "Routing",
      desc: "Navigate between different views and components.",
      example: `const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];`
    },
    {
      title: "Directives",
      desc: "Add behavior to DOM elements with structural and attribute directives.",
      example: `<div *ngIf="isVisible">
  This is visible
</div>
<div [ngClass]="{'active': isActive}">
  Dynamic classes
</div>`
    },
    {
      title: "Pipes",
      desc: "Transform data in templates for display.",
      example: `<p>{{ birthday | date:'fullDate' }}</p>
<p>{{ price | currency:'USD' }}</p>
<p>{{ text | uppercase }}</p>`
    }
  ];

  const advantages = [
    {
      icon: <Rocket size={20} />,
      title: "Full-Featured Framework",
      desc: "Everything you need built-in: routing, forms, HTTP client, and more."
    },
    {
      icon: <Shield size={20} />,
      title: "TypeScript Support",
      desc: "First-class TypeScript integration for better code quality."
    },
    {
      icon: <Cpu size={20} />,
      title: "Performance",
      desc: "Change detection, lazy loading, and AOT compilation for speed."
    },
    {
      icon: <Globe size={20} />,
      title: "Scalability",
      desc: "Perfect for large enterprise applications with complex requirements."
    },
    {
      icon: <Award size={20} />,
      title: "Google Backed",
      desc: "Developed and maintained by Google with long-term support."
    },
    {
      icon: <Heart size={20} />,
      title: "Strong Community",
      desc: "Extensive documentation, tutorials, and third-party libraries."
    }
  ];

  const comparisons = [
    {
      feature: "Learning Curve",
      angular: "Steep",
      react: "Moderate",
      vue: "Easy",
      angularIcon: <Clock size={16} />,
      reactIcon: <CheckCircle size={16} />,
      vueIcon: <CheckCircle size={16} />
    },
    {
      feature: "Language",
      angular: "TypeScript",
      react: "JavaScript/TS",
      vue: "JavaScript",
      angularIcon: <CheckCircle size={16} />,
      reactIcon: <CheckCircle size={16} />,
      vueIcon: <CheckCircle size={16} />
    },
    {
      feature: "Data Binding",
      angular: "Two-way",
      react: "One-way",
      vue: "Two-way",
      angularIcon: <CheckCircle size={16} />,
      reactIcon: <Clock size={16} />,
      vueIcon: <CheckCircle size={16} />
    },
    {
      feature: "Dependency Injection",
      angular: "Built-in",
      react: "External",
      vue: "External",
      angularIcon: <CheckCircle size={16} />,
      reactIcon: <Clock size={16} />,
      vueIcon: <Clock size={16} />
    },
    {
      feature: "Learning Resources",
      angular: "Excellent",
      react: "Excellent",
      vue: "Good",
      angularIcon: <CheckCircle size={16} />,
      reactIcon: <CheckCircle size={16} />,
      vueIcon: <CheckCircle size={16} />
    }
  ];

  const gettingStarted = [
    {
      step: "1",
      title: "Install Node.js",
      desc: "Download and install Node.js from nodejs.org"
    },
    {
      step: "2",
      title: "Install Angular CLI",
      desc: "Run 'npm install -g @angular/cli' to install globally"
    },
    {
      step: "3",
      title: "Create New Project",
      desc: "Run 'ng new my-app' to create a new Angular project"
    },
    {
      step: "4",
      title: "Navigate to Project",
      desc: "Run 'cd my-app' to enter your project directory"
    },
    {
      step: "5",
      title: "Start Development",
      desc: "Run 'ng serve' to start the development server"
    },
    {
      step: "6",
      title: "Open Browser",
      desc: "Visit 'http://localhost:4200' to see your app"
    }
  ];

  const resources = [
    { name: "Official Docs", icon: <BookOpen size={16} />, url: "#" },
    { name: "GitHub", icon: <Github size={16} />, url: "#" },
    { name: "Angular Blog", icon: <FileText size={16} />, url: "#" },
    { name: "YouTube", icon: <Youtube size={16} />, url: "#" }
  ];

  return (
    <div className="ai-container">
      <Helmet>
      <title>Angular Development Services | Purvsoft Technologies</title>
      <meta name="description" content="Purvsoft Technologies delivers robust Angular web applications for enterprises and startups. Scalable, maintainable, and high-performance Angular development services." />
      <meta name="keywords" content="Angular development, AngularJS, Angular web app, hire Angular developer, enterprise web development India" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href="https://www.purvsoft.com/services/angular" />
 
      <meta property="og:title" content="Angular Development Services | Purvsoft Technologies" />
      <meta property="og:description" content="Robust and scalable Angular web applications for enterprises and startups." />
      <meta property="og:url" content="https://www.purvsoft.com/services/angular" />
      <meta property="og:image" content="https://www.purvsoft.com/og-image.jpg" />
 
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Angular Development | Purvsoft Technologies" />
      <meta name="twitter:description" content="High-performance Angular development services by Purvsoft Technologies." />
    </Helmet>
      {/* Hero Section */}
      <section className="ai-hero">
        <div className="ai-wrapper">
          <div className="ai-hero-grid">
            <div className="ai-hero-content">
              <div className="ai-badge">
                <Code size={14} />
                <span>Angular Introduction</span>
              </div>
              <h1>
                The Complete Framework for <br />
                <span className="ai-gradient-text">Modern Web Apps</span>
              </h1>
              <p className="ai-hero-description">
                Angular is a platform and framework for building single-page client applications 
                using HTML and TypeScript. It combines declarative templates, dependency injection, 
                and powerful tooling to create scalable enterprise applications.
              </p>
              <div className="ai-hero-stats">
                <div className="ai-stat-item">
                  <span className="ai-stat-number">90K+</span>
                  <span className="ai-stat-label">GitHub Stars</span>
                </div>
                <div className="ai-stat-item">
                  <span className="ai-stat-number">2M+</span>
                  <span className="ai-stat-label">Weekly Downloads</span>
                </div>
                <div className="ai-stat-item">
                  <span className="ai-stat-number">1000+</span>
                  <span className="ai-stat-label">Contributors</span>
                </div>
              </div>
              <div className="ai-hero-buttons">
                <a href="#form" className="ai-btn-primary">
                  Contact Us <ArrowRight size={18} />
                </a>
              </div>
            </div>
            <div className="ai-hero-visual">
              <div className="ai-code-block">
                <div className="ai-code-header">
                  <span className="ai-dot ai-dot-red"></span>
                  <span className="ai-dot ai-dot-yellow"></span>
                  <span className="ai-dot ai-dot-green"></span>
                  <span className="ai-filename">app.component.ts</span>
                </div>
                <div className="ai-code-content">
                  <div className="ai-code-line">
                    <span className="ai-keyword">import</span> {'{'} Component {'}'} <span className="ai-keyword">from</span> <span className="ai-string">'@angular/core'</span>;
                  </div>
                  <div className="ai-code-line"></div>
                  <div className="ai-code-line">
                    <span className="ai-decorator">@Component</span>({'{'}
                  </div>
                  <div className="ai-code-line ai-indent">
                    <span className="ai-property">selector</span>: <span className="ai-string">'app-root'</span>,
                  </div>
                  <div className="ai-code-line ai-indent">
                    <span className="ai-property">template</span>: <span className="ai-string">'&lt;h1&gt;Hello Angular!&lt;/h1&gt;'</span>,
                  </div>
                  <div className="ai-code-line ai-indent">
                    <span className="ai-property">styleUrls</span>: [<span className="ai-string">'./app.component.css'</span>]
                  </div>
                  <div className="ai-code-line">
                    {'})'}
                  </div>
                  <div className="ai-code-line"></div>
                  <div className="ai-code-line">
                    <span className="ai-keyword">export class</span> <span className="ai-class">AppComponent</span> {'{'}
                  </div>
                  <div className="ai-code-line ai-indent">
                    <span className="ai-property">title</span> = <span className="ai-string">'angular-app'</span>;
                  </div>
                  <div className="ai-code-line">{'}'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="ai-nav-section">
        <div className="ai-wrapper">
          <div className="ai-nav-tabs">
            <button 
              className={`ai-nav-tab ${activeTab === 'what' ? 'ai-active' : ''}`}
              onClick={() => setActiveTab('what')}
            >
              What is Angular?
            </button>
            <button 
              className={`ai-nav-tab ${activeTab === 'why' ? 'ai-active' : ''}`}
              onClick={() => setActiveTab('why')}
            >
              Why Angular?
            </button>
            <button 
              className={`ai-nav-tab ${activeTab === 'concepts' ? 'ai-active' : ''}`}
              onClick={() => setActiveTab('concepts')}
            >
              Core Concepts
            </button>
            <button 
              className={`ai-nav-tab ${activeTab === 'compare' ? 'ai-active' : ''}`}
              onClick={() => setActiveTab('compare')}
            >
              Comparison
            </button>
          </div>

          <div className="ai-tab-content">
            {activeTab === 'what' && (
              <div className="ai-what-content">
                <h2>What is Angular?</h2>
                <p className="ai-lead-text">
                  Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google. 
                  It's a complete rewrite from the same team that built AngularJS.
                </p>
                <div className="ai-features-grid">
                  {features.map((feature, index) => (
                    <div key={index} className="ai-feature-card">
                      <div className="ai-feature-icon">{feature.icon}</div>
                      <h3>{feature.title}</h3>
                      <p>{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'why' && (
              <div className="ai-why-content">
                <h2>Why Choose Angular?</h2>
                <div className="ai-advantages-grid">
                  {advantages.map((adv, index) => (
                    <div key={index} className="ai-advantage-card">
                      <div className="ai-advantage-icon">{adv.icon}</div>
                      <div>
                        <h3>{adv.title}</h3>
                        <p>{adv.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'concepts' && (
              <div className="ai-concepts-content">
                <h2>Core Angular Concepts</h2>
                <div className="ai-concepts-grid">
                  {concepts.map((concept, index) => (
                    <div key={index} className="ai-concept-card">
                      <h3>{concept.title}</h3>
                      <p>{concept.desc}</p>
                      <pre className="ai-code-block">
                        <code>{concept.example}</code>
                      </pre>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'compare' && (
              <div className="ai-compare-content">
                <h2>Angular vs React vs Vue</h2>
                <div className="ai-comparison-table">
                  <div className="ai-comparison-row ai-header">
                    <span>Feature</span>
                    <span>Angular</span>
                    <span>React</span>
                    <span>Vue</span>
                  </div>
                  {comparisons.map((item, index) => (
                    <div key={index} className="ai-comparison-row">
                      <span>{item.feature}</span>
                      <span className="ai-comparison-item">
                        {item.angularIcon}
                        {item.angular}
                      </span>
                      <span className="ai-comparison-item">
                        {item.reactIcon}
                        {item.react}
                      </span>
                      <span className="ai-comparison-item">
                        {item.vueIcon}
                        {item.vue}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="ai-getting-started">
        <div className="ai-wrapper">
          <div className="ai-section-header">
            <h6 className="ai-section-subtitle">Getting Started</h6>
            <h2 className="ai-section-title">
              Start Building with <span className="ai-gradient-text">Angular Today</span>
            </h2>
            <p className="ai-section-description">
              Follow these simple steps to create your first Angular application.
            </p>
          </div>

          <div className="ai-steps-grid">
            {gettingStarted.map((step, index) => (
              <div key={index} className="ai-step-card">
                <div className="ai-step-number">{step.step}</div>
                <Terminal size={24} className="ai-step-icon" />
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="ai-resources">
        <div className="ai-wrapper">
          <div className="ai-resources-content">
            <h2>Learn More About Angular</h2>
            <p>Explore official documentation and community resources</p>
            <div className="ai-resources-grid">
              {resources.map((resource, index) => (
                <a key={index} href={resource.url} className="ai-resource-link">
                  {resource.icon}
                  <span>{resource.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div id="form">
        <Form />
      </div>
    </div>
  );
};

export default AngularIntroduction;