const React = require('react');
const { useState } = require('react');
require('../styles/Contact.css');
const axios = require('axios');
const Footer = require("../components/Footer.js");


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
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <p className="form-login">Contact me</p>
            <div className="input-box">
              <input required placeholder="Enter your name" type="text" name="name" onChange={handleChange} />
            </div>
            <div className="input-box">
              <input required placeholder="Enter your Email" type="email" name="email" onChange={handleChange} />
            </div>
            <div className="input-box">
              <input required placeholder="Enter your Phone =-';/.,` number" type="number" name="number" onChange={handleChange} />
            </div>
            <div className="input-box">
              <input required placeholder="Enter your Message" type="text" name="text" onChange={handleChange} />
            </div>
            <button className="btn" type="submit" onClick={handleSubmit}>Send</button>
          </form>
        </div>
      </div>
);
};

export default ContactForm;
