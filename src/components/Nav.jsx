import React from "react";
import { HashLink } from "react-router-hash-link";

const Nav = () => {
  return (
    <nav>
      <HashLink smooth to="/#home">
        About
      </HashLink>

      <HashLink smooth to="/#services">
        Profile
      </HashLink>

      <HashLink smooth to="/#testimonial">
        Services
      </HashLink>
    </nav>
  );
};

export default Nav;
