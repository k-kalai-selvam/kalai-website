/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Header.css";
import { IoLogoLinkedin } from "react-icons/io";
import { FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import arjun from "../asscets/arjun.png";

const Header = () => {
  const handleResumeClick = () => {
    window.open("file:///D:/Arjun/Resume/kalai-Resume.pdf", "_blank");
  };

  return (
    <div>
      <div className="headers">
        <h2>K</h2>
        <div className="header">
          <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </div>
      </div>

      <div className="kalai">
        {/* <h2 className="hi">Hello I'm</h2> */}
        <h2>KALAI SELVAM</h2>
        {/* <h5>A Web Developer</h5> */}


    <div className="img-container">
    <img className="img" src={arjun} width={250} />
        </div>
    </div>

    <div className="info">
      <div className="info-sub">
        <p>Hi, I'm Kalai selvam, a passionate Front-End Developer with hands-on experience in
        creating responsive and user-friendly web interfaces. </p>
        </div>

     
      
    </div>

    <div className="clicks">
    <button className="click">
        Get In Touch
      </button>
      </div>

      <div className="exp">
        <div className="ex">
          <ul>
            <li><p>1+</p> Experience</li>
            <li>|</li>
            <li><p>3+</p> Projects</li>
          </ul>

         

        </div>
              </div>

      <div className="logo">
        <IoLogoLinkedin />
        <FiInstagram />
        <FaXTwitter />
        <FaWhatsapp />
      </div>

    </div>
  );
};

export default Header;
