import React from "react";
import "./about.css";
import ME from "../../assets/mypic.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5> <h2>About Me</h2>
      <div className="container about__container">
        {/*===============Image-section==========  */}
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        {/* ================about content section============= */}
        <div className="about__content">
          <div className="about__cards"></div>
          {/* Experience */}
          <article className="about__card">
            <FaAward className="about__icon" />
            <h5>Experience</h5>
            <small>1+ years working</small>
          </article>
          {/* Users */}
          <article className="about__card">
            <FiUsers className="about__icon" />
            <h5>Clients</h5>
            <small>300+ Worldwide</small>
          </article>
          {/* Projects */}
          <article className="about__card">
            <VscFolderLibrary className="about__icon" />
            <h5>Projects</h5>
            <small>10+ completed</small>
          </article>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          pariatur rerum, repellat eligendi ratione temporibus saepe ab corporis
          dolores cumque iste libero eius hic obcaecati eos et in quis eaque!
        </p>
        <a href="#contact" className="btn btn-primary"></a>
      </div>
    </section>
  );
};

export default About;
