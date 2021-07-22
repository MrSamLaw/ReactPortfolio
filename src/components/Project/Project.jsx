import "./project.scss";

export default function Project(props) {
  return (
    <div className="projectCard">
      <img className="cardImage" src={props.img} />
      <div className="cardOverlay">
        <h5 className="cardTitle">{props.title}</h5>
        <p className=""></p>
      </div>
    </div>
  );
}
