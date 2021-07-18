import { useState } from "react";
import ProjectList from "../projectList/ProjectList";
import "./projects.scss";

export default function Projects() {
  const [selected, setSelected] = useState("featured");
  const list = [
    { id: "featured", title: "Featured" },
    { id: "web", title: "Web App" },
  ];

  return (
    <section className="projects" id="projects">
      <h1>Projects</h1>
      <ul>
        {list.map((item) => (
          <ProjectList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        <div className="projectItem">
          <img src="" alt="Image" />
          <h3>ANZAC Travel App</h3>
        </div>
        <div className="projectItem">
          <img src="" alt="Image" />
          <h3>ANZAC Travel App</h3>
        </div>
      </div>
      <div className="container">
        <div className="portfolioItem">
          <img src="" alt="Image" />
          <h3>ANZAC Travel App</h3>
        </div>
        <div className="portfolioItem">
          <img src="" alt="Image" />
          <h3>ANZAC Travel App</h3>
        </div>
        <div className="portfolioItem">
          <img src="" alt="Image" />
          <h3>ANZAC Travel App</h3>
        </div>
        <div className="portfolioItem">
          <img src="" alt="Image" />
          <h3>ANZAC Travel App</h3>
        </div>
        <div className="portfolioItem">
          <img src="" alt="Image" />
          <h3>ANZAC Travel App</h3>
        </div>
        <div className="portfolioItem">
          <img src="" alt="Image" />
          <h3>ANZAC Travel App</h3>
        </div>
      </div>
    </section>
  );
}
