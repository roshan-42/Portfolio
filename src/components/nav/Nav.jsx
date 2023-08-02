import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiSolidBook } from "react-icons/bi";
import { RiServiceFill } from "react-icons/ri";
import { AiFillMessage } from "react-icons/ai";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      {/* if the active nav = "#", then we want to give it the 'active' class : if not we will give it nothing, so there is going to be no class i.e ' ' */}
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      {/* OnClick about i want to change the state value. If it is about, then i want to give it the active class: If not then, it should have no class */}
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      {/* ======For experience========= */}
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiSolidBook />
      </a>
      {/* ==========For services=========== */}
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <RiServiceFill />
      </a>
      {/* =============For contact========== */}
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <AiFillMessage />
      </a>
      <p>
        <b>WEBSITE UNDER CONSTRUCTION</b>
      </p>
    </nav>
  );
};

export default Nav;
