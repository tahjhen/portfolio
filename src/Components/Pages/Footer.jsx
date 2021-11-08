import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <span id="link">My Links</span>
      <div className="icons">
        <a
          href="https://github.com/tahjhen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i id="github" class="fab fa-github"></i>
        </a>
        <a
          href="https://www.freecodecamp.org/tahj_henery"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i id="codecamp" class="fab fa-free-code-camp"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/tahj-h-633370208/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i id="linkedin" class="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
