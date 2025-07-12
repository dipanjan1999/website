import React from "react";
import "./Footer.css";
import logo from "../../assets/images/dglogo.png"; // ✅ Update the path to your actual logo file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p>&copy; {new Date().getFullYear()} Dipanjan Guchait. All rights reserved.</p>
        </div>

        <div className="footer-right">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/releases">Releases</a></li>
            <li><a href="/blogs">Blogs</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>

          <div className="footer-social">
            <a href="/"><i className="fab fa-facebook-f"></i></a>
            <a href="/"><i className="fab fa-instagram"></i></a>
            <a href="/"><i className="fab fa-x-twitter"></i></a>
            <a href="/"><i className="fab fa-linkedin-in"></i></a>
            <a href="/"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
