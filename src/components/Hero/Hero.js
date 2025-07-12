import React from "react";
import "./Hero.css";
import heroImage from "../../assets/images/hero-image.png"; // Replace with your actual image path

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <h1>Welcome to Future</h1>
          <p>Empowering innovation, redefining possibilities — step into a world where ideas become reality, and technology drives transformation.
</p>
          <div className="hero-buttons">
            <button className="btn primary-btn">Get Started</button>
            <button className="btn secondary-btn">Learn More</button>
          </div>

          <div className="symbol-glyphs">
            <div className="glyph-tile">
              <span className="glyph">⚔</span>
            </div>
            <div className="glyph-tile">
              <span className="glyph">☯</span>
            </div>
            <div className="glyph-tile">
              <span className="glyph">⛓</span>
            </div>
            <div className="glyph-tile">
              <span className="glyph">☽</span>
            </div>
            <div className="glyph-tile">
              <span className="glyph">✦</span>
            </div>
          </div>


        </div>
        <div className="hero-right">
          <img src={heroImage} alt="Hero" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

