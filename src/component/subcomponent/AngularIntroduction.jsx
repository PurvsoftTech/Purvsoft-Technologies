import React, { useState } from 'react';
import {
  Code,
  Zap,
  Box,
  RefreshCw,
  Globe,
  Users,
  Rocket,
  Shield,
  Cpu,
  Terminal,
  
  CheckCircle,
  ArrowRight,
  Clock,
  Award,
  Heart,
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

  // JSON-LD Structured Data for Angular Services
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Angular Development Services in Ahmedabad",
    "url": "https://www.purvsoft.com/services/angular",
    "provider": {
      "@type": "Organization",
      "name": "Purvsoft Technologies",
      "url": "https://www.purvsoft.com",
      "logo": "https://www.purvsoft.com/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ahmedabad",
        "addressRegion": "Gujarat",
        "addressCountry": "India"
      }
    },
    "description": "Professional Angular development services in Ahmedabad, India. Build scalable, maintainable, and high-performance web applications with Angular framework for enterprises and startups.",
    "serviceType": [
      "Angular Web Development",
      "Angular Migration Services",
      "Enterprise Angular Solutions",
      "Custom Angular Applications",
      "Angular Consulting"
    ],
    "areaServed": "Ahmedabad, Gujarat, India",
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
      "@id": "https://www.purvsoft.com/services/angular"
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
        "name": "Services",
        "item": "https://www.purvsoft.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Angular Development",
        "item": "https://www.purvsoft.com/services/angular"
      }
    ]
  };

  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Purvsoft Technologies",
    "url": "https://www.purvsoft.com",
    "logo": "https://www.purvsoft.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "addressCountry": "India"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["English", "Hindi"]
    }
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Angular used for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Angular is used for building single-page applications (SPAs), enterprise web applications, progressive web apps (PWAs), and complex dynamic websites."
        }
      },
      {
        "@type": "Question",
        "name": "Is Angular good for large applications?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Angular is specifically designed for large-scale enterprise applications with features like dependency injection, modules, and TypeScript support."
        }
      },
      {
        "@type": "Question",
        "name": "How much does Angular development cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Angular development cost depends on project complexity, features, and timeline. Contact us for a custom quote based on your requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Is there an Angular development company in Ahmedabad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Purvsoft Technologies is a leading Angular development company in Ahmedabad, Gujarat, offering enterprise Angular solutions and hiring Angular developers."
        }
      }
    ]
  };

  return (
    <div className="ai-container">
      <Helmet>
        {/* Primary Meta Tags - Optimized for Top Keywords */}
        <title>Angular Development Company in Ahmedabad | Hire Angular Developer | Purvsoft</title>
        <meta name="title" content="Angular Development Company in Ahmedabad | Hire Angular Developer | Purvsoft" />
        <meta name="description" content="Purvsoft Technologies is a leading Angular development company in Ahmedabad, Gujarat. Hire expert Angular developers for scalable web applications, migration, and custom enterprise solutions." />
        <meta name="keywords" content="Angular development company in Ahmedabad, best angular development company in ahmedabad, angular developer company in ahmedabad, angular development company in india, angular developer ahmedabad, angular company ahmedabad, top angular development company in ahmedabad, Angular development services, Angular web application development, hire Angular developer, AngularJS development company, enterprise Angular solutions, Angular migration services, custom Angular applications, Angular UI development, Angular consulting services, Angular performance optimization" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Purvsoft Technologies" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Canonical URL - Critical for fixing duplicate issues */}
        <link rel="canonical" href="https://www.purvsoft.com/services/angular" />
        
        {/* Alternate language versions */}
        <link rel="alternate" href="https://www.purvsoft.com/services/angular" hrefLang="x-default" />
        
        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.purvsoft.com/services/angular" />
        <meta property="og:title" content="Angular Development Company in Ahmedabad | Enterprise Web Apps | Purvsoft" />
        <meta property="og:description" content="Professional Angular development services in Ahmedabad, Gujarat. Scalable, maintainable, and high-performance web applications. Hire expert Angular developers for your enterprise projects." />
        <meta property="og:image" content="https://www.purvsoft.com/og-angular-development.jpg" />
        <meta property="og:image:alt" content="Angular Development Services - Enterprise Web Applications in Ahmedabad" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Purvsoft Technologies" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.purvsoft.com/services/angular" />
        <meta name="twitter:title" content="Angular Development Company in Ahmedabad | Purvsoft" />
        <meta name="twitter:description" content="Expert Angular development for enterprise web applications in Ahmedabad. Scalable, maintainable, and high-performance solutions." />
        <meta name="twitter:image" content="https://www.purvsoft.com/twitter-angular-development.jpg" />
        <meta name="twitter:image:alt" content="Angular Development Services" />
        
        {/* Verification tags */}
        <meta name="google-site-verification" content="MjMKilzhOmqr6Txi7pbjACF6g_hSt-B6Ej496yJyrH0" />
        <meta name="msvalidate.01" content="AD0DF443696FB452E952416667F1A8DC" />
        
        {/* Geographic Meta Tags - Ahmedabad, Gujarat (FIXED) */}
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Ahmedabad, Gujarat, India" />
        <meta name="geo.position" content="23.0225;72.5714" />
        <meta name="ICBM" content="23.0225, 72.5714" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="copyright" content="Purvsoft Technologies" />
        <meta name="business:contact_data:country_name" content="India" />
        <meta name="business:contact_data:locality" content="Ahmedabad" />
        
        {/* Mobile Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#2563eb" />
        
        {/* Prevent noindex issues */}
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationStructuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqStructuredData)}
      </script>

      {/* Hero Section */}
      <section className="ai-hero" aria-label="Angular Development Services Hero Section">
        <div className="ai-wrapper">
          <div className="ai-hero-grid">
            <div className="ai-hero-content" data-aos="fade-right">
              <div className="ai-badge">
                <Code size={14} />
                <span>Angular Development Company in Ahmedabad</span>
              </div>
              <h1>
                Professional <span className="ai-brand-gradient">Angular Development</span> Services in Ahmedabad
              </h1>
              <p className="ai-hero-description">
                Purvsoft Technologies delivers robust, scalable, and maintainable Angular web applications in Ahmedabad, Gujarat. 
                As a leading Angular development company, we help enterprises build high-performance single-page 
                applications with TypeScript, RxJS, and modern Angular features.
              </p>
              <div className="ai-hero-stats">
                <div className="ai-stat-item" data-aos="fade-up" data-aos-delay="0">
                  <span className="ai-stat-number">90K+</span>
                  <span className="ai-stat-label">GitHub Stars</span>
                </div>
                <div className="ai-stat-item" data-aos="fade-up" data-aos-delay="50">
                  <span className="ai-stat-number">2M+</span>
                  <span className="ai-stat-label">Weekly Downloads</span>
                </div>
                <div className="ai-stat-item" data-aos="fade-up" data-aos-delay="100">
                  <span className="ai-stat-number">100+</span>
                  <span className="ai-stat-label">Projects Delivered</span>
                </div>
              </div>
              <div className="ai-hero-buttons">
              <button
                className="ai-btn-primary"
                onClick={() => {
                  const section = document.getElementById("form");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                aria-label="Contact us for Angular development"
              >
                Hire Angular Developer in Ahmedabad <ArrowRight size={18} />
              </button>
            </div>
            </div>
            <div className="ai-hero-visual" data-aos="fade-left">
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
      <section className="ai-nav-section" aria-label="Angular Learning Navigation">
        <div className="ai-wrapper">
          <div className="ai-nav-tabs">
            <button 
              className={`ai-nav-tab ${activeTab === 'what' ? 'ai-active' : ''}`}
              onClick={() => setActiveTab('what')}
              aria-pressed={activeTab === 'what'}
            >
              What is Angular?
            </button>
            <button 
              className={`ai-nav-tab ${activeTab === 'why' ? 'ai-active' : ''}`}
              onClick={() => setActiveTab('why')}
              aria-pressed={activeTab === 'why'}
            >
              Why Angular?
            </button>
            <button 
              className={`ai-nav-tab ${activeTab === 'concepts' ? 'ai-active' : ''}`}
              onClick={() => setActiveTab('concepts')}
              aria-pressed={activeTab === 'concepts'}
            >
              Core Concepts
            </button>
            <button 
              className={`ai-nav-tab ${activeTab === 'compare' ? 'ai-active' : ''}`}
              onClick={() => setActiveTab('compare')}
              aria-pressed={activeTab === 'compare'}
            >
              Framework Comparison
            </button>
          </div>

          <div className="ai-tab-content">
            {activeTab === 'what' && (
              <div className="ai-what-content" data-aos="fade-up">
                <div className="section-header">
                  <p className="section-subtitle">Introduction</p>
                  <h2>What is <span className="brand-gradient">Angular?</span></h2>
                </div>
                <p className="ai-lead-text">
                  Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google. 
                  It's a complete rewrite from the same team that built AngularJS, designed specifically for building 
                  large-scale enterprise applications with maintainability and performance in mind.
                </p>
                <div className="ai-features-grid">
                  {features.map((feature, index) => (
                    <div key={index} className="ai-feature-card" data-aos="fade-up" data-aos-delay={index * 50}>
                      <div className="ai-feature-icon" aria-hidden="true">{feature.icon}</div>
                      <h3>{feature.title}</h3>
                      <p>{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'why' && (
              <div className="ai-why-content" data-aos="fade-up">
                <div className="section-header">
                  <p className="section-subtitle">Benefits</p>
                  <h2>Why Choose <span className="brand-gradient">Angular?</span></h2>
                  <p className="ai-section-subtitle">Discover why leading enterprises choose Angular for their web applications</p>
                </div>
                <div className="ai-advantages-grid">
                  {advantages.map((adv, index) => (
                    <div key={index} className="ai-advantage-card" data-aos="fade-up" data-aos-delay={index * 50}>
                      <div className="ai-advantage-icon" aria-hidden="true">{adv.icon}</div>
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
              <div className="ai-concepts-content" data-aos="fade-up">
                <div className="section-header">
                  <p className="section-subtitle">Fundamentals</p>
                  <h2>Core <span className="brand-gradient">Angular Concepts</span></h2>
                  <p className="ai-section-subtitle">Understanding the building blocks of Angular applications</p>
                </div>
                <div className="ai-concepts-grid">
                  {concepts.map((concept, index) => (
                    <div key={index} className="ai-concept-card" data-aos="fade-up" data-aos-delay={index * 50}>
                      <h3>{concept.title}</h3>
                      <p>{concept.desc}</p>
                      <pre className="ai-code-block" aria-label={`${concept.title} code example`}>
                        <code>{concept.example}</code>
                      </pre>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'compare' && (
              <div className="ai-compare-content" data-aos="fade-up">
                <div className="section-header">
                  <p className="section-subtitle">Analysis</p>
                  <h2>Angular vs React <span className="brand-gradient">vs Vue</span></h2>
                  <p className="ai-section-subtitle">Compare the most popular JavaScript frameworks</p>
                </div>
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
      <section className="ai-getting-started" aria-label="Getting Started with Angular">
        <div className="ai-wrapper">
          <div className="ai-section-header">
            <p className="ai-section-subtitle">Quick Start Guide</p>
            <h2 className="ai-section-title">
              Start Building with <span className="ai-brand-gradient">Angular Today</span>
            </h2>
            <p className="ai-section-description">
              Follow these simple steps to create your first Angular application and begin your development journey.
            </p>
          </div>

          <div className="ai-steps-grid">
            {gettingStarted.map((step, index) => (
              <div key={index} className="ai-step-card" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="ai-step-number">{step.step}</div>
                <Terminal size={24} className="ai-step-icon" aria-hidden="true" />
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
     
      {/* CTA Section */}
      <div id="form">
        <Form />
      </div>
    </div>
  );
};

export default AngularIntroduction;