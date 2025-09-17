import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Md Mainuddin | All Rights Reserved</p>

        <div className="social-links">
          <a href="https://github.com/yourname" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/md-mainuddin-99967b2b4/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://x.com/MdMainu78180277" target="_blank" rel="noreferrer">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
