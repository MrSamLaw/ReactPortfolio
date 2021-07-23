import PageTitle from "../PageTitle/PageTitle";
import "./about.scss";

export default function About() {
  return (
    <div className="about">
      <PageTitle heading="About Me" />

      <p>
        Full-Stack developer who embraces the line between the creative and the
        technical. Earned a Full Stack Web Development Certificate from the
        University of Sydney’s Coding Boot Camp with a passion for React,
        MongoDB & responsive web development.
      </p>
      <p>
        Having a great eye for detail and problem solving skills, I am always
        learning whatever I can to help the world live with a better internet
        full of great code, that enhances user experience through great designs
        and implementation.
      </p>

      <div className="skills">
        <h2>Skills & Experience</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Node.JS</li>
          <li>Express</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>jQuery</li>
          <li>React</li>
          <li>Git</li>
        </ul>
      </div>
    </div>
  );
}
