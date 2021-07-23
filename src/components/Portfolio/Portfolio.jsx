import "./portfolio.scss";
import Project from "../Project/Project";
import { projectData } from "../../projectdata";
import PageTitle from "../PageTitle/PageTitle";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <PageTitle heading="Portfolio" />
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
