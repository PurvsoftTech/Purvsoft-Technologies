import React, { useState } from 'react';
import { User, Mail, Phone, FileText, ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './Form.css';

const FormWithImage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectRequirement: ''
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    if (!formData.fullName || !formData.email || !formData.phone) {
      setMessage('Please fill all required fields.');
      return;
    }

    setLoading(true);

    const templateParams = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      projectRequirement: formData.projectRequirement
    };

    try {
      const response = await emailjs.send(
        'service_c6u8125',
        'template_06fqcng',
        templateParams,
        'xuQfO7VIawpeLIxtS'
      );


      console.log('SUCCESS!', response.status, response.text);
      setMessage('Lead sent successfully!');

      setFormData({
        fullName: '',
        email: '',
        phone: '',
        projectRequirement: ''
      });
    } catch (error) {
      console.error('FAILED...', error);
      setMessage('Failed to send lead. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fwi-container">
      <div className="fwi-wrapper">
        <div className="fwi-form-side">
          <div className="fwi-form-content">
            <h2 className="fwi-title">Ready to get your solution developed?</h2>
            {message && <p className="fwi-message">{message}</p>}
            <form className="fwi-form" onSubmit={handleSubmit}>
              <div className="fwi-field">
                <label className="fwi-label">
                  Full Name <span className="fwi-required">*</span>
                </label>
                <div className="fwi-input-wrapper">
                  <User size={18} className="fwi-input-icon" />
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    className="fwi-input"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="fwi-field">
                <label className="fwi-label">
                  E-Mail <span className="fwi-required">*</span>
                </label>
                <div className="fwi-input-wrapper">
                  <Mail size={18} className="fwi-input-icon" />
                  <input
                    type="email"
                    name="email"
                    placeholder="E-Mail"
                    className="fwi-input"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="fwi-field">
                <label className="fwi-label">
                  Phone Number <span className="fwi-required">*</span>
                </label>
                <div className="fwi-input-wrapper">
                  <Phone size={18} className="fwi-input-icon" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="fwi-input"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="fwi-field">
                <label className="fwi-label">Project Requirement</label>
                <div className="fwi-input-wrapper">
                  <FileText size={18} className="fwi-input-icon" />
                  <input
                    type="text"
                    name="projectRequirement"
                    placeholder="Project Requirement"
                    className="fwi-input"
                    value={formData.projectRequirement}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button type="submit" className="fwi-submit-btn" disabled={loading}>
                {loading ? 'Sending...' : 'Submit'} <ArrowRight size={18} />
              </button>

              
            </form>
          </div>
        </div>

        <div className="fwi-image-side">
          <div className="fwi-image-container">
            <img
              src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-2298.jpg"
              alt="Contact Illustration"
              className="fwi-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormWithImage;