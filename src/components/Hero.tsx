import React from "react";
import { Parallax } from "react-scroll-parallax";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero">
      {/* Title */}
      <Parallax translateY={[-20, 20]}>
        <h1 className="hero-title">Hi, I’m Athena Castro 👩🏻‍💻</h1>
      </Parallax>

      {/* First subtitle */}
      <Parallax translateY={[-5, 5]}>
        <p className="hero-subtitle">
          Frontend Developer | Designer | 2D Animator
        </p>
      </Parallax>
    </section>
  );
};

export default Hero;
