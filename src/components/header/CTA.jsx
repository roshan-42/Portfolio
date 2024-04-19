import React from "react";
import CV from "../../assets/cv.pdf";
import "./header.css";

const CTA = () => {
  return (
    <div className="cta">
      <a
        href={CV}
        download
        className="bg-gray-900 px-5 py-3 rounded-xl flex items-center text-white hover:bg-white hover:text-black"
      >
        Download CV
      </a>

      <a
        href="#contact"
        className="bg-gray-900 px-5 rounded-xl flex items-center text-white hover:bg-white hover:text-black"
      >
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
//cv changed
