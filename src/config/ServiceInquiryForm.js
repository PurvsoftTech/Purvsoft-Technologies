import React, { useState, useRef } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  Briefcase, 
  MessageSquare, 
  Send,
  ChevronDown,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import './ServiceInquiryForm.css';
import contactConfig from "./Allsend";

const ServiceInquiryForm = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const services = [
    { value: "", label: "Select a service", disabled: true },
    { value: "reactjs", label: "React.js Development" },
    { value: "nodejs", label: "Node.js Development" },
    { value: "nextjs", label: "Next.js Development" },
    { value: "angular", label: "Angular Development" },
    { value: "laravel", label: "Laravel Development" },
    { value: "shopify", label: "Shopify Development" },
    { value: "flutter", label: "Flutter App Development" },
    { value: "web-development", label: "Web Development" },
    { value: "mobile-app", label: "Mobile App Development" },
    { value: "ecommerce", label: "E-commerce Development" },
    { value: "digital-marketing", label: "Digital Marketing" },
    { value: "seo", label: "SEO Services" },
    { value: "google-ads", label: "Google Ads" },
    { value: "meta-ads", label: "Meta Ads (Facebook/Instagram)" },
    { value: "youtube-ads", label: "YouTube Ads" },
    { value: "content-marketing", label: "Content Marketing" },
    { value: "custom-software", label: "Custom Software Development" },
    { value: "ai-automation", label: "AI & Automation" }
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us about your project';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError('');
    
    // Prepare template parameters
    const templateParams = {
       fullName: formData.fullName,   // ✅ FIX
       email: formData.email, 
      phone: formData.phone || 'Not provided',
      service: services.find(s => s.value === formData.service)?.label || formData.service,
      message: formData.message,
      to_email: contactConfig.email,
      reply_to: formData.email
    };

    try {
      // Replace with your actual EmailJS credentials
      const result = await emailjs.send(
        'service_c6u8125',
        'template_h18a66v',
        templateParams,
        'xuQfO7VIawpeLIxtS'    
      );
      
      if (result.text === 'OK') {
        setSubmitSuccess(true);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitError('Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const serviceLabel = formData.service ? services.find(s => s.value === formData.service)?.label : 'your services';
    const message = `Hi! I'm interested in ${serviceLabel}. My name is ${formData.fullName || 'there'}. Please contact me.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${contactConfig.phone}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="sif-container">
      <div className="sif-wrapper">
        <div className="sif-form-side">
          <div className="sif-header">
            <h2 className="sif-title">Get Your Project Started</h2>
            <p className="sif-subtitle">Tell us about your needs and we'll get back to you within 24 hours</p>
          </div>

          {submitSuccess && (
            <div className="sif-success-message">
              <CheckCircle size={20} />
              <span>Thank you! Your inquiry has been sent. We'll contact you shortly.</span>
            </div>
          )}

          {submitError && (
            <div className="sif-error-message">
              <AlertCircle size={20} />
              <span>{submitError}</span>
            </div>
          )}

          <form ref={formRef} className="sif-form" onSubmit={handleSubmit}>
            {/* Full Name Field */}
            <div className="sif-field">
              <label className="sif-label">
                Full Name <span className="sif-required">*</span>
              </label>
              <div className={`sif-input-wrapper ${errors.fullName ? 'error' : ''}`}>
                <User size={18} className="sif-input-icon" />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="sif-input"
                />
              </div>
              {errors.fullName && <span className="sif-error">{errors.fullName}</span>}
            </div>

            {/* Email Field */}
            <div className="sif-field">
              <label className="sif-label">
                Email Address <span className="sif-required">*</span>
              </label>
              <div className={`sif-input-wrapper ${errors.email ? 'error' : ''}`}>
                <Mail size={18} className="sif-input-icon" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="sif-input"
                />
              </div>
              {errors.email && <span className="sif-error">{errors.email}</span>}
            </div>

            {/* Phone Number Field */}
            <div className="sif-field">
              <label className="sif-label">Phone Number</label>
              <div className="sif-input-wrapper">
                <Phone size={18} className="sif-input-icon" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 99999 99999"
                  className="sif-input"
                />
              </div>
            </div>

            {/* Service Interested In Dropdown */}
            <div className="sif-field">
              <label className="sif-label">
                Service Interested In <span className="sif-required">*</span>
              </label>
              <div className={`sif-select-wrapper ${errors.service ? 'error' : ''}`}>
                <Briefcase size={18} className="sif-select-icon" />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="sif-select"
                >
                  {services.map((service, index) => (
                    <option 
                      key={index} 
                      value={service.value} 
                      disabled={service.disabled}
                    >
                      {service.label}
                    </option>
                  ))}
                </select>
                <ChevronDown size={16} className="sif-select-arrow" />
              </div>
              {errors.service && <span className="sif-error">{errors.service}</span>}
            </div>

            {/* WhatsApp Button */}
            <button
              type="button"
              className="sif-whatsapp-btn"
              onClick={handleWhatsApp}
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="sif-whatsapp-icon" />
              Chat on WhatsApp
            </button>

            {/* Message Field */}
            <div className="sif-field">
              <label className="sif-label">
                Your Message <span className="sif-required">*</span>
              </label>
              <div className={`sif-textarea-wrapper ${errors.message ? 'error' : ''}`}>
                <MessageSquare size={18} className="sif-textarea-icon" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project — what do you need, timeline, budget..."
                  rows="5"
                  className="sif-textarea"
                />
              </div>
              {errors.message && <span className="sif-error">{errors.message}</span>}
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="sif-submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="sif-loader"></span>
              ) : (
                <>
                  <Send size={18} />
                  Send Inquiry
                </>
              )}
            </button>
          </form>
        </div>

        <div className="sif-info-side">
          <div className="sif-info-card">
            <h3>Why Choose Us?</h3>
            <ul className="sif-info-list">
                <li>
                    <CheckCircle size={18} />
                    <span>Pre-vetted skilled developers ready to join your team instantly</span>
                </li>
                <li>
                    <CheckCircle size={18} />
                    <span>Flexible hiring models – hourly, part-time, or full-time</span>
                </li>
                <li>
                    <CheckCircle size={18} />
                    <span>Fast onboarding with zero recruitment hassle</span>
                </li>
                <li>
                    <CheckCircle size={18} />
                    <span>Direct communication with dedicated resources</span>
                </li>
                <li>
                    <CheckCircle size={18} />
                    <span>Cost-effective solutions without compromising quality</span>
                </li>
                <li>
                    <CheckCircle size={18} />
                    <span>Daily/weekly progress updates and transparent workflow</span>
                </li>
                <li>
                    <CheckCircle size={18} />
                    <span>Easy scaling – add or remove resources anytime</span>
                </li>
                <li>
                    <CheckCircle size={18} />
                    <span>Ongoing support and long-term partnership approach</span>
                </li>
            </ul>
            <div className="sif-contact-info">
              <h4>Or reach us directly</h4>
              <p><Mail size={16} /> {contactConfig.email}</p>
              <p><Phone size={16} />{contactConfig.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceInquiryForm;