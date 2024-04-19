import React from "react";
import "./about.css";
import ME from "../../assets/mypic.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { motion, useScroll } from "framer-motion";

const About = () => {
  const { scrollYProgress } = useScroll();
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="container about__container"
      >
        {/*===============Image-section==========  */}

        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        {/* ================about content section============= */}
        <div className="about__content">
          <div className="about__cards">
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
              <small>1</small>
            </article>

            {/* Projects */}
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>3+ completed</small>
            </article>
          </div>
          <p>
            Hello, I'm Roshan Acharya, a dedicated and enthusiastic student
            studying CSIT at Amrit Science Campus. Originally from the
            picturesque district of Dang, Nepal, I now call Lainchaur,
            Kathmandu, my current home. The world of technology has always
            fascinated me, and I am thrilled to be pursuing my passion in
            Computer Science and Information Technology through the BSC.CSIT
            program. I look forward to embracing the challenges and
            opportunities that come my way as I strive to achieve my goals in
            this ever-evolving field.
          </p>
          <a
            href="#contact"
            className="bg-gray-900 px-5 py-2 rounded-xl text-white hover:bg-white hover:text-gray-900"
          >
            Let's Talk
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
// adding the comment for push in  main
//to delete later
//push
