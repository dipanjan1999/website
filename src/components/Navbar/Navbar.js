import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/dglogo.png"; // ✅ Update path to your logo

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/"><img src={logo} alt="Logo" className="logo-image" /></Link>
      </div>

      <ul className={isMobile ? "nav-links nav-links-mobile active" : "nav-links"}>
        <li><Link to="/" onClick={() => setIsMobile(false)}>Home</Link></li>
        <li><Link to="/releases" onClick={() => setIsMobile(false)}>Releases</Link></li>
        <li><Link to="/blogs" onClick={() => setIsMobile(false)}>Blogs</Link></li>
        <li><Link to="/contact" onClick={() => setIsMobile(false)}>Contact</Link></li>
      </ul>

      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <>&#10005;</> : <>&#9776;</>}
      </button>
    </nav>
  );
};

export default Navbar;
