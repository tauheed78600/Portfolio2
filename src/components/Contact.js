import React, { useState } from 'react';
import '../styles/Contact.css';
import axios from 'axios';
import Footer from "../components/Footer.js"

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post("http://localhost:8080/v1/m/submit", formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        // Handle success
        console.log('Form submitted successfully:', response.data);
      })
      .catch(error => {
        // Handle error
        console.error('Error submitting form:', error);
      });
    };
  

    return (
      <div className="page-container">
          <div className="content-wrap">
              <div className="contact-container">
                  <div className="contact-card">
                      <h2>Contact me</h2>
                      <form onSubmit={handleSubmit}>
                          <div className="input-group">
                              <label htmlFor="name">Name</label>
                              <input
                                  type="text"
                                  id="name"
                                  name="name"
                                  value={formData.name}
                                  onChange={handleChange}
                                  required
                              />
                          </div>
                          <div className="input-group">
                              <label htmlFor="email">Email</label>
                              <input
                                  type="email"
                                  id="email"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                  required
                              />
                          </div>
                          <div className="input-group">
                              <label htmlFor="phone">Phone</label>
                              <input
                                  type="tel"
                                  id="phone"
                                  name="phone"
                                  value={formData.phone}
                                  onChange={handleChange}
                                  required
                              />
                          </div>
                          <div className="input-group">
                              <label htmlFor="message">Message</label>
                              <textarea
                                  id="message"
                                  name="message"
                                  value={formData.message}
                                  onChange={handleChange}
                                  required
                              ></textarea>
                          </div>
                          <button type="submit" className="submit-button">Send</button>
                      </form>
                  </div>
              </div>
          </div>
          <Footer />
      </div>
  );
};

export default ContactForm;
