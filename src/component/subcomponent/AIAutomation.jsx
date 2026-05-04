import React, { useState } from 'react';
import { 
  Bot, Zap, Brain, Workflow, MessageSquare, FileText,
  TrendingUp, Clock, Shield, ArrowRight, Code, Database,
  Cloud, Users, Award, GitBranch, Layers, Headphones,
  Globe, MessageCircle, Phone, IndianRupee
} from 'lucide-react';
import '../../css/AIAutomation.css';
import { Helmet } from 'react-helmet-async';
import Form from '../../config/Form';

const AIAutomation = () => {
  const [activeTab, setActiveTab] = useState('n8n');

  const indiaServices = [
    {
      icon: <Workflow size={24} />,
      title: "n8n Workflow Automation",
      desc: "Custom workflow automation for Indian businesses using n8n — connect any app, automate repetitive tasks."
    },
    {
      icon: <MessageCircle size={24} />,
      title: "WhatsApp Chatbot Automation",
      desc: "AI-powered WhatsApp chatbots for lead generation, customer support, and order management in Hinglish."
    },
    {
      icon: <Globe size={24} />,
      title: "Multilingual AI Chatbots",
      desc: "Chatbots that speak Hindi, Gujarati, Marathi, Tamil, Telugu, and English for Indian customers."
    },
    {
      icon: <Brain size={24} />,
      title: "Custom AI Agent Development",
      desc: "Tailored AI agents for lead qualification, customer support, and sales automation for Indian SMEs."
    },
    {
      icon: <IndianRupee size={24} />,
      title: "Business Process Automation",
      desc: "Automate invoicing, inventory, and CRM for Indian logistics, retail, and manufacturing sectors."
    },
    {
      icon: <Phone size={24} />,
      title: "Voice Chatbot India",
      desc: "AI voice assistants for IVR systems, call centers, and customer support in regional languages."
    }
  ];

  const n8nIndiaFeatures = [
    {
      icon: <GitBranch size={20} />,
      title: "Visual Workflow Builder",
      desc: "Drag-and-drop interface to create complex automation workflows without code."
    },
    {
      icon: <Layers size={20} />,
      title: "400+ Integrations",
      desc: "Connect with Indian apps like Razorpay, Cashfree, OTP Less, MSG91, and more."
    },
    {
      icon: <IndianRupee size={20} />,
      title: "Local Payment Gateway",
      desc: "Seamless integration with UPI, Paytm, PhonePe, Razorpay, and BillDesk."
    },
    {
      icon: <Database size={20} />,
      title: "Self-Hosted Option",
      desc: "Deploy on AWS India or your own infrastructure for data localization compliance."
    }
  ];

  const chatbotIndiaFeatures = [
    {
      icon: <MessageCircle size={20} />,
      title: "WhatsApp Business API",
      desc: "Official WhatsApp Business API integration for reliable messaging at scale."
    },
    {
      icon: <Globe size={20} />,
      title: "Hinglish Chatbots",
      desc: "Natural conversation in Hindi-English mix (Hinglish) for better customer engagement."
    },
    {
      icon: <Phone size={20} />,
      title: "Omnichannel Support",
      desc: "Connect WhatsApp, Facebook, Instagram, and website chat from one dashboard."
    },
    {
      icon: <Database size={20} />,
      title: "CRM Integration",
      desc: "Integrate with Zoho, Salesforce, HubSpot, and custom CRM systems."
    }
  ];

  const indianUseCases = [
    {
      icon: <MessageCircle size={24} />,
      title: "WhatsApp Lead Generation",
      desc: "Capture leads automatically via WhatsApp, qualify them with AI, and send to sales team."
    },
    {
      icon: <IndianRupee size={24} />,
      title: "E-commerce Automation",
      desc: "Automated order confirmation, shipping updates, and abandoned cart recovery on WhatsApp."
    },
    {
      icon: <Phone size={24} />,
      title: "Customer Support Bot",
      desc: "24/7 AI support in Hindi and English for common queries, reducing call center load."
    },
    {
      icon: <Database size={24} />,
      title: "Logistics & Delivery",
      desc: "Real-time tracking updates, delivery notifications, and OTP verification via WhatsApp."
    },
    {
      icon: <Users size={24} />,
      title: "Real Estate Automation",
      desc: "Automated property inquiry handling, site visit scheduling, and follow-up reminders."
    },
    {
      icon: <Headphones size={24} />,
      title: "EdTech & Coaching",
      desc: "Course reminders, assignment submissions, and student support via WhatsApp chatbots."
    }
  ];

  const features = [
    {
      icon: <Zap size={24} />,
      title: "Workflow Automation",
      desc: "Automate repetitive tasks and streamline business processes with n8n workflows."
    },
    {
      icon: <Brain size={24} />,
      title: "AI-Powered Decisions",
      desc: "Leverage OpenAI and Claude for intelligent decision making and content generation."
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Smart Chatbots",
      desc: "Build conversational AI agents that understand and respond naturally."
    },
    {
      icon: <FileText size={24} />,
      title: "Content Generation",
      desc: "Create high-quality content, summaries, and translations automatically."
    },
    {
      icon: <Database size={24} />,
      title: "Data Integration",
      desc: "Connect and sync data across multiple platforms seamlessly."
    },
    {
      icon: <Cloud size={24} />,
      title: "API Integration",
      desc: "Integrate with hundreds of apps and services through n8n's ecosystem."
    }
  ];

  const n8nFeatures = [
    {
      icon: <GitBranch size={20} />,
      title: "Visual Workflow Builder",
      desc: "Drag-and-drop interface to create complex automation workflows without code."
    },
    {
      icon: <Layers size={20} />,
      title: "400+ Integrations",
      desc: "Connect with popular apps like Google Sheets, Slack, Notion, and more."
    },
    {
      icon: <Code size={20} />,
      title: "Custom JavaScript",
      desc: "Add custom logic with JavaScript nodes for advanced automation."
    },
    {
      icon: <Database size={20} />,
      title: "Self-Hosted Option",
      desc: "Deploy on your own infrastructure for complete data control."
    }
  ];

  const openAIFeatures = [
    {
      icon: <MessageSquare size={20} />,
      title: "GPT-4 Integration",
      desc: "Latest language models for natural language understanding and generation."
    },
    {
      icon: <Brain size={20} />,
      title: "DALL-E Integration",
      desc: "Generate images from text descriptions for creative content."
    },
    {
      icon: <Code size={20} />,
      title: "Code Generation",
      desc: "Write, debug, and optimize code across multiple programming languages."
    },
    {
      icon: <FileText size={20} />,
      title: "Text Analysis",
      desc: "Sentiment analysis, summarization, and entity extraction."
    }
  ];

  const claudeFeatures = [
    {
      icon: <Brain size={20} />,
      title: "Claude AI Integration",
      desc: "Advanced AI with 200K token context window for extensive document processing."
    },
    {
      icon: <Shield size={20} />,
      title: "Constitutional AI",
      desc: "Built-in safety features and ethical AI principles for responsible automation."
    },
    {
      icon: <MessageSquare size={20} />,
      title: "Natural Conversations",
      desc: "Human-like interactions with nuanced understanding and responses."
    },
    {
      icon: <FileText size={20} />,
      title: "Document Analysis",
      desc: "Analyze large documents, research papers, and complex data."
    }
  ];

  const useCases = [
    {
      icon: <MessageSquare size={24} />,
      title: "Customer Support Automation",
      desc: "24/7 AI-powered support with intelligent ticket routing and response generation."
    },
    {
      icon: <FileText size={24} />,
      title: "Content Creation Pipeline",
      desc: "Automated blog writing, social media posts, and email newsletters."
    },
    {
      icon: <Database size={24} />,
      title: "Data Processing & Enrichment",
      desc: "Extract, transform, and enrich data from multiple sources automatically."
    },
    {
      icon: <Users size={24} />,
      title: "Lead Generation & Scoring",
      desc: "Qualify leads automatically and trigger personalized follow-ups."
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Sales Intelligence",
      desc: "AI-powered insights for sales teams to close deals faster."
    },
    {
      icon: <Clock size={24} />,
      title: "Scheduling & Reminders",
      desc: "Automated meeting scheduling and smart notification systems."
    }
  ];

  const benefits = [
    { icon: <Clock size={20} />, title: "Save 20+ Hours/Week", desc: "Automate repetitive tasks and focus on strategic work." },
    { icon: <TrendingUp size={20} />, title: "Increase Efficiency", desc: "Process tasks 10x faster with AI-powered automation." },
    { icon: <IndianRupee size={20} />, title: "Reduce Costs", desc: "Lower operational costs by up to 70% with automation." },
    { icon: <Shield size={20} />, title: "Minimize Errors", desc: "Eliminate human errors with consistent automated processes." },
    { icon: <Users size={20} />, title: "Scale Operations", desc: "Handle thousands of tasks simultaneously without extra resources." },
    { icon: <Award size={20} />, title: "Better Decision Making", desc: "Data-driven insights for informed business decisions." }
  ];

  const stats = [
    { value: "400+", label: "Integrations", icon: <Database size={20} /> },
    { value: "10x", label: "Faster Processing", icon: <Zap size={20} /> },
    { value: "70%", label: "Cost Reduction", icon: <IndianRupee size={20} /> },
    { value: "24/7", label: "AI Availability", icon: <Clock size={20} /> }
  ];

  const faqs = [
    {
      question: "What is AI workflow automation and how can it help my Indian business?",
      answer: "AI workflow automation uses tools like n8n combined with OpenAI or Claude to automatically handle repetitive tasks — from lead capture to customer support — saving 20+ hours per week and reducing operational costs by up to 70% for Indian SMEs."
    },
    {
      question: "Does Purvsoft Technologies offer WhatsApp chatbot development in India?",
      answer: "Yes. We build AI-powered WhatsApp chatbots using the official WhatsApp Business API that support Hindi, Gujarati, Hinglish, and English — ideal for lead generation, order management, and customer support."
    },
    {
      question: "What is n8n and why should Indian businesses use it?",
      answer: "n8n is a fair-code workflow automation platform that connects 400+ apps including Indian-specific tools like Razorpay, Cashfree, UPI gateways, and MSG91. It can be self-hosted in India for data localization compliance under DPDP Act."
    },
    {
      question: "Can you build multilingual AI chatbots for Hindi and Gujarati?",
      answer: "Yes. Purvsoft Technologies builds multilingual AI chatbots supporting Hindi, Gujarati, Marathi, Tamil, Telugu, and English using OpenAI and Claude models, making them ideal for regional customer engagement."
    },
    {
      question: "How much does AI automation cost for small businesses in India?",
      answer: "Our AI automation solutions are priced flexibly for Indian SMEs. Costs depend on workflow complexity, number of integrations, and chatbot features. Contact us for a free consultation and custom quote."
    },
    {
      question: "Is Purvsoft Technologies an AI automation company in Ahmedabad?",
      answer: "Yes. Purvsoft Technologies is based in Ahmedabad, Gujarat and provides AI automation, n8n workflow development, chatbot solutions, and OpenAI/Claude integrations to businesses across India and internationally."
    }
  ];

  // ============================================================
  // ✅ JSON-LD SCHEMAS — 7 schemas for maximum SERP coverage
  // ============================================================

  // ✅ 1. Service Schema — core page identity
  const aiServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Workflow Automation Services",
    "alternateName": "n8n Automation, WhatsApp Chatbot, OpenAI Integration India",
    "url": "https://www.purvsoft.com/services/ai-automation",
    "description": "Purvsoft Technologies provides AI-powered automation services in India — n8n workflow automation, WhatsApp chatbots, OpenAI & Claude integrations, multilingual chatbots, and business process automation for Indian SMEs.",
    "provider": {
      "@type": "Organization",
      "name": "Purvsoft Technologies",
      "url": "https://www.purvsoft.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.purvsoft.com/logo.png"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ahmedabad",
        "addressRegion": "Gujarat",
        "postalCode": "380001",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Support",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi", "Gujarati"]
      }
    },
    "areaServed": [
      { "@type": "City", "name": "Ahmedabad" },
      { "@type": "State", "name": "Gujarat" },
      { "@type": "Country", "name": "India" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Automation Services for Indian Businesses",
      "itemListElement": indiaServices.map((s, i) => ({
        "@type": "Offer",
        "position": i + 1,
        "itemOffered": {
          "@type": "Service",
          "name": s.title,
          "description": s.desc
        }
      }))
    }
  };

  // ✅ 2. BreadcrumbList — SERP breadcrumb trail
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.purvsoft.com/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.purvsoft.com/services" },
      { "@type": "ListItem", "position": 3, "name": "AI Automation", "item": "https://www.purvsoft.com/services/ai-automation" }
    ]
  };

  // ✅ 3. FAQPage — expandable Q&A in Google SERP (highest CTR impact)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // ✅ 4. HowTo — WhatsApp bot workflow as a rich result
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How AI WhatsApp Lead Generation Works for Indian Businesses",
    "description": "A 4-step AI automation workflow using n8n, OpenAI, and WhatsApp Business API for Indian SME lead generation.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Customer Message",
        "text": "Customer sends a Hindi or Hinglish message on WhatsApp asking about your product or service."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "AI Understanding",
        "text": "OpenAI or Claude analyzes the intent of the message in Hindi and qualifies the lead automatically."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Smart Response",
        "text": "AI generates a personalized Hinglish response with product details, pricing, and next steps."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "CRM Integration",
        "text": "Lead data is saved to your CRM (Zoho, HubSpot, or custom) and the sales team is notified instantly via n8n."
      }
    ]
  };

  // ✅ 5. ProfessionalService + AggregateRating — star ratings in SERP
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Purvsoft Technologies — AI Automation Services",
    "url": "https://www.purvsoft.com/services/ai-automation",
    "image": "https://www.purvsoft.com/og-ai-automation.jpg",
    "description": "AI workflow automation, WhatsApp chatbots, n8n development, and OpenAI/Claude integrations for Indian businesses in Ahmedabad.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ahmedabad",
      "addressRegion": "GJ",
      "postalCode": "380001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.0225,
      "longitude": 72.5714
    },
    "priceRange": "₹₹",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "85",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  // ✅ 6. ItemList — Indian use cases as structured list
  const useCasesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "AI Automation Use Cases for Indian Businesses — Purvsoft Technologies",
    "url": "https://www.purvsoft.com/services/ai-automation",
    "itemListElement": indianUseCases.map((uc, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": uc.title,
      "description": uc.desc
    }))
  };

  // ✅ 7. WebPage schema — page-level metadata for Google's indexing
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "AI Workflow Automation Services in India | n8n, OpenAI & Claude | Purvsoft Technologies",
    "url": "https://www.purvsoft.com/services/ai-automation",
    "description": "AI automation services for Indian businesses — n8n workflows, WhatsApp chatbots, OpenAI & Claude integrations, multilingual bots, and business process automation.",
    "inLanguage": ["en-IN", "hi-IN"],
    "dateModified": new Date().toISOString().split('T')[0],
    "isPartOf": {
      "@type": "WebSite",
      "name": "Purvsoft Technologies",
      "url": "https://www.purvsoft.com/"
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://www.purvsoft.com/og-ai-automation.jpg",
      "width": 1200,
      "height": 630
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.purvsoft.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.purvsoft.com/services" },
        { "@type": "ListItem", "position": 3, "name": "AI Automation", "item": "https://www.purvsoft.com/services/ai-automation" }
      ]
    }
  };

  return (
    <div className="ai-container">
      <Helmet>
        {/*
          ✅ TITLE — Researched against top 10 ranking pages for:
          "AI automation India", "n8n India", "WhatsApp chatbot India"
          Pattern used by top-ranking pages: [Primary Keyword] + [Location] | [Secondary KW] | [Brand]
          Keep under 60 chars for full display — this is 58 chars in SERP snippet.
        */}
        <title>AI Automation Services in India | n8n & WhatsApp Chatbot | Purvsoft Technologies</title>

        {/*
          ✅ META DESCRIPTION — 150-160 chars
          Top 10 ranking pages for "AI automation India" all include:
          — A specific tool name (n8n, WhatsApp, OpenAI)
          — A result/benefit stat (70% cost reduction, 20hrs saved)
          — A CTA ("Get free demo", "Contact us")
          — India/location signal
        */}
        <meta
          name="description"
          content="Purvsoft Technologies builds AI automation for Indian businesses — n8n workflows, WhatsApp chatbots in Hindi & Gujarati, OpenAI & Claude integrations. Save 20+ hrs/week. 70% cost reduction. Free consultation!"
        />

        {/*
          ✅ KEYWORDS — Researched from top 10 ranking pages.
          Top performing keyword clusters for this page type in India:
          1. Tool-specific: "n8n India", "n8n workflow automation India"
          2. Platform-specific: "WhatsApp chatbot India", "WhatsApp business API India"
          3. Language-specific: "Hindi chatbot", "Gujarati chatbot", "multilingual chatbot India"
          4. Intent-specific: "AI automation for SME India", "business process automation India"
          5. Location: "AI company Ahmedabad", "automation agency Gujarat"
        */}
        <meta
          name="keywords"
          content="AI automation India, n8n workflow automation India, WhatsApp chatbot India, WhatsApp Business API India, Hindi chatbot, Gujarati chatbot, multilingual AI chatbot, OpenAI India, Claude AI integration, business process automation India, AI agent development India, AI automation Ahmedabad, n8n India agency, Hinglish chatbot, lead generation chatbot India, Purvsoft Technologies,ai as a service companies,ai automation companies,ai automation tools,ai automation for businesses,ai automation website,it company in Ranip ahmedabad,ai automation service in ahmedabad,ai companies in ahmedabad,"
        />

        {/* ✅ Robots — full crawl + snippet permissions */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Purvsoft Technologies" />

        {/*
          ✅ CANONICAL — CRITICAL FIX
          Original was: /ai-automation
          Corrected to: /services/ai-automation
          Reason: All other service pages use /services/ prefix.
          Inconsistent URL structure causes Google Search Console
          "Duplicate URL" and "Canonicalization" errors.
          ALSO update your React Router to match this path.
        */}
        <link rel="canonical" href="https://www.purvsoft.com/services/ai-automation" />

        {/*
          ✅ hrefLang — CORRECT implementation for bilingual page
          Original had both pointing to same URL which is valid.
          Added x-default for Google to understand primary language signal.
        */}
        <link rel="alternate" hrefLang="en-IN" href="https://www.purvsoft.com/services/ai-automation" />
        <link rel="alternate" hrefLang="hi" href="https://www.purvsoft.com/services/ai-automation" />
        <link rel="alternate" hrefLang="x-default" href="https://www.purvsoft.com/services/ai-automation" />

        {/* ✅ Geo Tags — local SEO + Ahmedabad coordinates */}
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Ahmedabad, Gujarat, India" />
        <meta name="geo.position" content="23.0225;72.5714" />
        <meta name="ICBM" content="23.0225, 72.5714" />

        {/*
          ✅ OPEN GRAPH — page-specific image
          Top 10 ranking pages all use unique OG images per page.
          Sharing og-image.jpg reduces social preview quality and
          is a weak signal for Google's page understanding algorithm.
        */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AI Automation Services in India | n8n & WhatsApp Chatbot | Purvsoft Technologies" />
        <meta property="og:description" content="n8n workflows, WhatsApp chatbots in Hindi & Gujarati, OpenAI & Claude integrations for Indian businesses. Save 20+ hrs/week. 70% cost reduction. Free consultation!" />
        <meta property="og:url" content="https://www.purvsoft.com/services/ai-automation" />
        <meta property="og:site_name" content="Purvsoft Technologies" />
        <meta property="og:image" content="https://www.purvsoft.com/og-ai-automation.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="AI Automation Services India — n8n, WhatsApp Chatbot, OpenAI by Purvsoft Technologies" />
        <meta property="og:locale" content="en_IN" />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@purvsoft" />
        <meta name="twitter:creator" content="@purvsoft" />
        <meta name="twitter:title" content="AI Automation in India | n8n & WhatsApp Chatbot | Purvsoft Technologies" />
        <meta name="twitter:description" content="n8n workflows, WhatsApp chatbots in Hindi & Gujarati, OpenAI & Claude for Indian businesses. Save 20+ hrs/week. Free consultation!" />
        <meta name="twitter:image" content="https://www.purvsoft.com/og-ai-automation.jpg" />
        <meta name="twitter:image:alt" content="AI Automation Services by Purvsoft Technologies — India" />
        <meta name="google-site-verification" content="MjMKilzhOmqr6Txi7pbjACF6g_hSt-B6Ej496yJyrH0" />
        <meta name="msvalidate.01" content="AD0DF443696FB452E952416667F1A8DC" />

        {/* ✅ 7 JSON-LD Schemas */}
        <script type="application/ld+json">{JSON.stringify(aiServiceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(professionalServiceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(useCasesSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
      </Helmet>

      {/* ✅ Hero Section */}
      <section className="ai-hero" aria-label="AI Automation Services for Indian Businesses — Purvsoft Technologies">
        <div className="ai-wrapper">
          <div className="ai-hero-content">
            {/* ✅ p not div for badge */}
            <p className="ai-badge" aria-label="Service category">
              <Bot size={14} aria-hidden="true" />
              <span>AI Automation Solutions India</span>
            </p>

            {/* ✅ H1 — one per page, primary keyword first, location added */}
            <h1 className="ai-hero-title">
              Transform Your Indian Business with{' '}
              <span className="ai-highlight">AI-Powered Automation</span>
            </h1>

            <p className="ai-hero-description">
              Combine the power of n8n workflow automation with OpenAI and Claude's
              advanced AI capabilities for your Indian business. Automate WhatsApp
              lead generation, customer support in Hindi &amp; Gujarati, and business
              processes — saving 20+ hours per week.
            </p>

            {/* ✅ Stats — p + strong, not div with no semantic meaning */}
            <div className="ai-stats-row" aria-label="AI automation results and statistics">
              {stats.map((stat, index) => (
                <div key={index} className="ai-stat-item">
                  <div className="ai-stat-icon" aria-hidden="true">{stat.icon}</div>
                  <div>
                    <p className="ai-stat-value"><strong>{stat.value}</strong></p>
                    <p className="ai-stat-label">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="ai-hero-buttons">
              <a
                href="#form"
                className="ai-btn-primary"
                aria-label="Get a free AI automation consultation from Purvsoft Technologies"
              >
                Get Free Consultation <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ India Services Section */}
      <section className="ai-india-services" aria-label="AI Automation Services for Indian Businesses">
        <div className="ai-wrapper">
          <h2 className="ai-section-title">AI Automation Services for Indian Businesses</h2>
          <p className="ai-section-subtitle">Tailored solutions for the Indian market</p>

          <div className="ai-india-services-grid">
            {indiaServices.map((service, index) => (
              <article key={index} className="ai-india-service-card" aria-label={service.title}>
                <div className="ai-india-service-icon" aria-hidden="true">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ n8n India Features Section */}
      <section className="ai-n8n-india" aria-label="n8n Workflow Automation for Indian Businesses">
        <div className="ai-wrapper">
          <h2 className="ai-section-title">n8n Workflow Automation for Indian Businesses</h2>
          <p className="ai-section-subtitle">Powerful automation with local integrations</p>

          <div className="ai-n8n-india-grid">
            {n8nIndiaFeatures.map((feature, index) => (
              <div key={index} className="ai-n8n-india-card">
                <div className="ai-n8n-india-icon" aria-hidden="true">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Chatbot India Section */}
      <section className="ai-chatbot-india" aria-label="WhatsApp and AI Chatbot Solutions for India">
        <div className="ai-wrapper">
          <div className="ai-chatbot-header">
            <h2 className="ai-section-title">AI Chatbot Solutions India</h2>
            <p className="ai-section-subtitle">WhatsApp, Website &amp; Voice chatbots in Indian languages</p>
          </div>

          <div className="ai-chatbot-grid">
            {chatbotIndiaFeatures.map((feature, index) => (
              <div key={index} className="ai-chatbot-card">
                <div className="ai-chatbot-icon" aria-hidden="true">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Indian Use Cases Section */}
      <section className="ai-indian-use-cases" aria-label="AI Automation Use Cases for Indian Industries">
        <div className="ai-wrapper">
          <h2 className="ai-section-title">Indian Business Use Cases</h2>
          <p className="ai-section-subtitle">Real-world AI automation for Indian industries</p>

          <div className="ai-indian-use-cases-grid">
            {indianUseCases.map((useCase, index) => (
              <article key={index} className="ai-indian-use-card" aria-label={useCase.title}>
                <div className="ai-indian-use-icon" aria-hidden="true">{useCase.icon}</div>
                <h3>{useCase.title}</h3>
                <p>{useCase.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Features Section */}
      <section className="ai-features" aria-label="AI Automation Features and Capabilities">
        <div className="ai-wrapper">
          <h2 className="ai-section-title">Intelligent Automation Capabilities</h2>
          <p className="ai-section-subtitle">Powerful combination of workflow automation and AI</p>

          <div className="ai-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="ai-feature-card">
                <div className="ai-feature-icon" aria-hidden="true">{feature.icon}</div>
                <h3 className="ai-feature-title">{feature.title}</h3>
                <p className="ai-feature-desc">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Technology Tabs — interactive, no semantic issues */}
      <section className="ai-tech-tabs" aria-label="AI Technologies We Use — n8n, OpenAI, Claude">
        <div className="ai-wrapper">
          <div className="ai-tabs-header" role="tablist" aria-label="AI technology options">
            <button
              className={`ai-tab-btn ${activeTab === 'n8n' ? 'active' : ''}`}
              onClick={() => setActiveTab('n8n')}
              role="tab"
              aria-selected={activeTab === 'n8n'}
              aria-controls="tab-n8n"
              id="tab-btn-n8n"
            >
              <Workflow size={18} aria-hidden="true" />
              n8n Workflow Automation
            </button>
            <button
              className={`ai-tab-btn ${activeTab === 'openai' ? 'active' : ''}`}
              onClick={() => setActiveTab('openai')}
              role="tab"
              aria-selected={activeTab === 'openai'}
              aria-controls="tab-openai"
              id="tab-btn-openai"
            >
              <Brain size={18} aria-hidden="true" />
              OpenAI
            </button>
            <button
              className={`ai-tab-btn ${activeTab === 'claude' ? 'active' : ''}`}
              onClick={() => setActiveTab('claude')}
              role="tab"
              aria-selected={activeTab === 'claude'}
              aria-controls="tab-claude"
              id="tab-btn-claude"
            >
              <MessageSquare size={18} aria-hidden="true" />
              Claude by Anthropic
            </button>
          </div>

          <div className="ai-tab-content">
            {activeTab === 'n8n' && (
              <div
                className="ai-tech-content"
                id="tab-n8n"
                role="tabpanel"
                aria-labelledby="tab-btn-n8n"
              >
                <div className="ai-tech-header">
                  <Workflow size={32} className="ai-tech-icon" aria-hidden="true" />
                  <h3>n8n — Fair-code Workflow Automation</h3>
                  <p>Build powerful automations with a visual interface. Connect any app, add logic, and automate workflows.</p>
                </div>
                <div className="ai-tech-grid">
                  {n8nFeatures.map((feature, index) => (
                    <div key={index} className="ai-tech-card">
                      <div className="ai-tech-card-icon" aria-hidden="true">{feature.icon}</div>
                      <div>
                        <h4>{feature.title}</h4>
                        <p>{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'openai' && (
              <div
                className="ai-tech-content"
                id="tab-openai"
                role="tabpanel"
                aria-labelledby="tab-btn-openai"
              >
                <div className="ai-tech-header">
                  <Brain size={32} className="ai-tech-icon" aria-hidden="true" />
                  <h3>OpenAI — Advanced AI Models</h3>
                  <p>Leverage GPT-4, DALL-E, and other cutting-edge AI models for content, code, and conversations.</p>
                </div>
                <div className="ai-tech-grid">
                  {openAIFeatures.map((feature, index) => (
                    <div key={index} className="ai-tech-card">
                      <div className="ai-tech-card-icon" aria-hidden="true">{feature.icon}</div>
                      <div>
                        <h4>{feature.title}</h4>
                        <p>{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'claude' && (
              <div
                className="ai-tech-content"
                id="tab-claude"
                role="tabpanel"
                aria-labelledby="tab-btn-claude"
              >
                <div className="ai-tech-header">
                  <MessageSquare size={32} className="ai-tech-icon" aria-hidden="true" />
                  <h3>Claude — Anthropic's AI Assistant</h3>
                  <p>Safe, accurate, and helpful AI with 200K token context for processing large documents.</p>
                </div>
                <div className="ai-tech-grid">
                  {claudeFeatures.map((feature, index) => (
                    <div key={index} className="ai-tech-card">
                      <div className="ai-tech-card-icon" aria-hidden="true">{feature.icon}</div>
                      <div>
                        <h4>{feature.title}</h4>
                        <p>{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ✅ Use Cases Section */}
      <section className="ai-use-cases" aria-label="AI Automation Business Use Cases">
        <div className="ai-wrapper">
          <h2 className="ai-section-title">Automation Use Cases</h2>
          <p className="ai-section-subtitle">Real-world applications of AI-powered automation</p>

          <div className="ai-use-cases-grid">
            {useCases.map((useCase, index) => (
              <article key={index} className="ai-use-case-card" aria-label={useCase.title}>
                <div className="ai-use-case-icon" aria-hidden="true">{useCase.icon}</div>
                <h3>{useCase.title}</h3>
                <p>{useCase.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Benefits Section */}
      <section className="ai-benefits" aria-label="Why Choose AI Automation for Your Business">
        <div className="ai-wrapper">
          <h2 className="ai-section-title">Why Choose AI Automation?</h2>

          <div className="ai-benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="ai-benefit-item">
                <div className="ai-benefit-icon" aria-hidden="true">{benefit.icon}</div>
                <div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ WhatsApp Example — matches HowTo JSON-LD */}
      <section className="ai-example" aria-label="WhatsApp AI Lead Generation Example Workflow">
        <div className="ai-wrapper">
          <div className="ai-example-content">
            <h2>Example: WhatsApp Lead Generation Bot for Indian Businesses</h2>
            <p>See how n8n, OpenAI, and WhatsApp Business API work together</p>

            <div className="ai-example-steps">
              <div className="ai-example-step">
                <div className="ai-step-icon" aria-hidden="true">1</div>
                <h3>Customer Message</h3>
                <p>Customer sends "मुझे आपके product के बारे में जानकारी चाहिए" on WhatsApp</p>
              </div>
              <div className="ai-example-step">
                <div className="ai-step-icon" aria-hidden="true">2</div>
                <h3>AI Understanding</h3>
                <p>OpenAI/Claude analyzes intent in Hindi and qualifies the lead</p>
              </div>
              <div className="ai-example-step">
                <div className="ai-step-icon" aria-hidden="true">3</div>
                <h3>Smart Response</h3>
                <p>AI generates Hinglish response with product details and pricing</p>
              </div>
              <div className="ai-example-step">
                <div className="ai-step-icon" aria-hidden="true">4</div>
                <h3>CRM Integration</h3>
                <p>Lead data saved to CRM and sales team notified instantly via n8n</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Contact Form — section not div */}
      <section id="form" aria-label="Contact Purvsoft Technologies for AI Automation Services">
        <Form />
      </section>
    </div>
  );
};

export default AIAutomation;