/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Contact.css';
import { MdMailOutline } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io";
import { FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // eslint-disable-next-line no-unused-vars
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating form submission (logging form data)
    console.log('Form submitted with data:', formData);

    // Optionally, reset the form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <>
      <div className="contacts">
        <h2>CONTACT</h2>
        <h5>Let's Talk</h5>
        <p>Web Application, Websites, Portfolio Websites For Related Queries, Contact Below.</p>

        <div className="contact">
          <h3>Contact Information</h3>
          <p>Say something to start a live chat!</p>
          <ul>
            <li className="mail">
              <MdMailOutline />
              <h6>Kalaiselvamk2000@gmail.com</h6>
            </li>
            <li className="mail">
              <FiPhoneCall />
              <h6>8220462033</h6>
            </li>
            <li className="mail">
              <IoLocationOutline />
              <h6>Anna Nagar, Batlagundu, Dindigul.</h6>
            </li>
          </ul>

          <div className="social">
            <IoLogoLinkedin />
            <FiInstagram />
            <FaXTwitter />
            <FaWhatsapp />
          </div>
        </div>

        {/* <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
              />
            </div>
            <div className="form-group">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div> */}
      </div>
    </>
  );
};

export default Contact;
