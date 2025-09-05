import React from "react";
import { Parallax } from "react-scroll-parallax";

interface Project {
  title: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Egg Timer",
    image:
      "https://img.icons8.com/?size=100&id=n5TBqndFVtYn&format=png&color=000000",
    link: "https://egg-timer.xelo.dev/",
  },
  // 🔮 Add more projects here later:
  // {
  //   title: "My Next Project",
  //   image: "link-to-image.png",
  //   link: "https://my-project-link.com",
  // },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects">
      <Parallax speed={5}>
        <h2>Check out My Projects!</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <p className="project-title">{project.title}</p>
            </a>
          ))}
        </div>
      </Parallax>
    </section>
  );
};

export default Projects;
