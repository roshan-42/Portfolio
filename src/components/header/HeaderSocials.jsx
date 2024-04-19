import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { AiFillDribbbleCircle } from "react-icons/ai";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/roshanacharya42/" target="_blank">
        <BsLinkedin color="white" />
      </a>
      <a href="https://github.com/roshan-42" target="_blank">
        <FaGithub color="white" />
      </a>
    </div>
  );
};

export default HeaderSocials;
