import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import '../css/FAQSection.css';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services does Purvsoft offer?",
      answer: "We specialize in website development, custom software solutions, mobile app development, digital marketing (Google Ads, Meta Ads), and performance marketing."
    },
    {
      question: "What industries do you work with?",
      answer: "We work across healthcare, education, real estate, retail, maid & domestic services, e-commerce, and startups."
    },
    {
      question: "How is Purvsoft different from other agencies?",
      answer: "Purvsoft focuses on performance marketing and ROI. We combine AI-driven tech, creative designs, and data-driven campaigns."
    },
    {
      question: "Can you help with both website development and marketing?",
      answer: "Yes! We provide end-to-end solutions from building your website/app to running ads and generating leads."
    },
    {
      question: "How do you measure success in digital marketing?",
      answer: "We focus on KPIs like leads, conversions, sales, and ROI, using advanced analytics and reporting tools."
    },
    {
      question: "Do you provide customized software for businesses?",
      answer: "Absolutely. We build tailor-made software to solve specific business challenges."
    },
    {
      question: "Timeline for website or app development?",
      answer: "Depends on project complexity: 2–4 weeks for basic website, 2–3 months for custom mobile apps."
    },
    {
      question: "Budget for Google/Meta Ads?",
      answer: "Budgets vary by industry and goals. We help set realistic budgets."
    },
    {
      question: "Ongoing support after project completion?",
      answer: "Yes. We provide maintenance, campaign optimization, and tech support."
    },
    {
      question: "How to get started?",
      answer: "Reach out via contact form, email, or call. We'll suggest best solutions and a tailored plan."
    }
  ];

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="faq-container">
      <div className="faq-wrapper">
        <div className="faq-header">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">Everything you need to know about our services</p>
        </div>

        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div 
                className={`faq-question ${openIndex === index ? 'open' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <span className="faq-question-text">{faq.question}</span>
                <span className="faq-icon">
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </div>
              
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="faq-footer">
          <p>Still have questions? <a href="/contact">Contact us</a></p>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;