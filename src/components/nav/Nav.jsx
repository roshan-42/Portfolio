import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiSolidBook } from "react-icons/bi";
import { RiServiceFill } from "react-icons/ri";
import { AiFillMessage } from "react-icons/ai";

const Nav = () => {
  return (
    <nav>
      <a href="#" className="active">
        <AiOutlineHome />
      </a>
      <a href="#about">
        <AiOutlineUser />
      </a>
      <a href="#experience">
        <BiSolidBook />
      </a>
      <a href="#services">
        <RiServiceFill />
      </a>
      <a href="#contact">
        <AiFillMessage />
      </a>
      <p>
        <b>WEBSITE UNDER CONSTRUCTION</b>
      </p>
    </nav>
  );
};

export default Nav;
