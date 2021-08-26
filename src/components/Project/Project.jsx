import "./project.scss";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkIcon from "@material-ui/icons/Link";

export default function Project(props) {
  return (
    <div>
      <div
        className="projectCard"
        style={{ backgroundImage: `url(${props.img})` }}
      >
        <div className="info">
          <div className="cardHeader">
            <h3>{props.title}</h3>
          </div>
          <div className="desc">
            <p className="text">{props.desc}</p>
          </div>
          <div className="links">
            <ul>
              <li className="itemContainer">
                <GitHubIcon
                  className="icon"
                  onClick={() => window.open(`${props.github}`, "_blank")}
                />
              </li>
              <li className="itemContainer">
                <LinkIcon
                  className="icon"
                  onClick={() => window.open(`${props.deployed}`, "_blank")}
                />
              </li>
            </ul>
          </div>
          <div className="blur_back"></div>
        </div>
        if({props.featured}) <div>{props.fText}</div>
      </div>
    </div>
  );
}
