import React from "react";
import { Link as Scroll } from "react-scroll";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar_Container">
      <h1>My Portfolio</h1>
      <ul>
        <li>
          <Scroll to="Skills" smooth={true} duration={1000}>
            Skills
          </Scroll>
        </li>
        <li>
          <Scroll to="Projects" smooth={true} duration={1000}>
            Projects
          </Scroll>
        </li>
        <li>
          <Scroll to="Certificates" smooth={true} duration={1000}>
            Certificates
          </Scroll>
        </li>
        <li>
          <Scroll to="Aboutme" smooth={true} duration={1000}>
            About me
          </Scroll>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
