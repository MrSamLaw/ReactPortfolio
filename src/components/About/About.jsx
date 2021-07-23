import PageTitle from "../PageTitle/PageTitle";
import "./about.scss";

export default function About() {
  return (
    <div className="about">
      <PageTitle heading="About Me" />
      <h3>Brand Statement</h3>
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

      <h3>Skills</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Node.JS</li>
      </ul>
    </div>
  );
}
