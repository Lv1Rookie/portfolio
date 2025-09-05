import React, { useState, useEffect } from "react";
import { Link, Events, scrollSpy } from "react-scroll";

const Navbar: React.FC = () => {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    // Register scroll events
    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", () => {});

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link
            to="hero"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            onSetActive={() => setActive("hero")}
            className={active === "hero" ? "active" : ""}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            onSetActive={() => setActive("about")}
            className={active === "about" ? "active" : ""}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="work"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            onSetActive={() => setActive("work")}
            className={active === "work" ? "active" : ""}
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            onSetActive={() => setActive("projects")}
            className={active === "projects" ? "active" : ""}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="education"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            onSetActive={() => setActive("education")}
            className={active === "education" ? "active" : ""}
          >
            Education
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            onSetActive={() => setActive("contact")}
            className={active === "contact" ? "active" : ""}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
