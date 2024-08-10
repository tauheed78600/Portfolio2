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
    <div className="container">
      <div className="page-container">
        <div className="content-wrap">
          <div className="contact-container">
            <div className="contact-card">
              <h2>Contact me</h2>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-2">
                    <label htmlFor="name" className="fs-3 text-light">Name:</label>
                  </div>
                  <div className="col-10 inputCon pb-5">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder='Enter Your Name'
                      className="input-boxs  mt-1 p-2"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-2">
                    <label htmlFor="name" className="fs-3 text-light">Email:</label>
                  </div>
                  <div className="col-10 inputCon pb-5">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder='Enter Your Email'
                      className="input-boxs mt-1 p-2"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-2">
                    <label htmlFor="name" className="fs-3 text-light">Phone:</label>
                  </div>
                  <div className="col-10 inputCon pb-5">
                    <input
                      type="tel"
                      id="phone"
                      placeholder='Enter Your Phone'
                      name="phone"
                      className="input-boxs mt-1 p-2"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-2">
                    <label htmlFor="name" className="fs-3 text-light">Message</label>
                  </div>
                  <div className="col-10 inputCon pb-5">
                    <textarea
                      id="message"
                      name="message"
                      className="input-box form-control-lg p-2 fs-6"
                      value={formData.message}
                      placeholder='Type Your Message Here'
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                </div>
                <button type="submit" className="submit-button m-5 mt-2 mb-4 pb-2 pt-2 ">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

{/*
<div className="input-group">
                              <label htmlFor="name">Name</label>
                              <input
                                  type="text"
                                  id="name"
                                  name="name"
                                  className="input-box"
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
                                  className="input-box"
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
                                  className="input-box"
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
                                  className="input-box"
                                  value={formData.message}
                                  onChange={handleChange}
                                  required
                              ></textarea>
                          </div>
                          */}
