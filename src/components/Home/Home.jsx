import "./home.scss";
import profilepic from "../../assets/SamLawProfile.jpg";
import Button from "../Button/Button";
import Project from "../Project/Project";
import { projectData } from "../../projectdata";
import PageTitle from "../PageTitle/PageTitle";

export default function Home({ currentPage, handlePageChange }) {
  return (
    <div className="sections">
      <section className="header" id="header">
        <div className="left">
          <div className="imgContainer">
            <img src={profilepic} alt="Sam Law Profile" />
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2>Hello, I Am</h2>
            <h1>SAM LAW</h1>
            <h3>Full Stack Developer</h3>
          </div>
          <Button
            buttonText="More about me"
            onClick={() => handlePageChange("About")}
          />
        </div>
      </section>

      <section className="portfolio">
        <PageTitle heading="Work" />
        {projectData
          .filter((item) => item.featured)
          .map((item) => (
            <Project
              img={item.screenshot}
              title={item.title}
              desc={item.description}
              github={item.repo}
              deployed={item.URL}
              fText={item.featuredText}
              key={item.key}
            />
          ))}
        <Button buttonText="More of my work" />
      </section>
    </div>
  );
}
