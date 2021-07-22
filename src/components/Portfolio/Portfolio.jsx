import "./portfolio.scss";
import Project from "../Project/Project";

const projects = [
  {
    img: "/assets/SamLawProfile.jpg",
    title: "Test Title",
  },
];

export default function Portfolio() {
  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      {projects.map((item) => (
        <Project img={item.img} title={item.title} key={item.key} />
      ))}
    </div>
  );
}
