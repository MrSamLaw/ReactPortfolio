import "./portfolio.scss";
import Project from "../Project/Project";
import { projectData } from "../../projectdata";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <div className="container">
        {projectData.map((item) => (
          <Project
            img={item.screenshot}
            title={item.title}
            desc={item.description}
            tech={item.tech}
            key={item.key}
          />
        ))}
      </div>
    </div>
  );
}
