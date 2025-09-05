import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollToTopButton from "./components/ScrollToTopButton";
import "./styles.css";

const App: React.FC = () => {
  return (
    <ParallaxProvider>
      <Navbar />
      <div>
        <Hero />
        <About />
        <Work />
        <Projects />
        <Education />
        <Contact />
      </div>
      <ScrollToTopButton />
    </ParallaxProvider>
  );
};

export default App;
