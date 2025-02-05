import React from 'react';
import './Skill.css';
import { FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { SiRedux } from "react-icons/si";
import { BsFiletypeHtml } from "react-icons/bs";
import { BsFiletypeCss } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";

const Skill = () => {
  return (
    <div className='skills'>
    <h2>EXPERTISE</h2>
        <div className='skill'>

        <p><FaReact /></p>
        <p><IoLogoJavascript /></p>
        <p><SiRedux /></p>
        <p><BsFiletypeHtml /></p>
        <p><BsFiletypeCss /></p>
        <p><FaGithub /></p>
        <p><FaNode /></p>
        <p><SiMongodb /></p>

        </div>

    </div>
  )
}

export default Skill