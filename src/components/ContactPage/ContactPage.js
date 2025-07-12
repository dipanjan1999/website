import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);

    // Optional: Add actual backend call here

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000); // Hide success after 3s
  };

  return (
    <section className="contact-page">
      <div className="contact-container fade-in">
        
        <div className="contact-illustration">
          <img
            src="https://media.istockphoto.com/id/815166664/photo/closeup-view-of-female-hands-touching-smartphone-white-blank-screen-horizontal-blurred.jpg?s=612x612&w=0&k=20&c=TOGuL3_GlxgWzi-EPP4Yvhmh5keFWcLZn0WvY0egV0M="
            alt="Contact Illustration"
          />
        </div>

        <div className="contact-form-section">
          <h2>Get in Touch</h2>
          <p>We’d love to hear from you. Fill out the form below and we’ll respond soon.</p>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
              title="Enter a valid email address"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button className="btn primary-btn" type="submit">Send Message</button>

            {submitted && (
              <div className="success-message fade-in-fast">
                ✅ Message sent successfully!
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
