import "./footer.scss";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Icon, InlineIcon } from "@iconify/react";
import codewarsIcon from "@iconify-icons/simple-icons/codewars";

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="container">
        <div className="itemContainer">
          <GitHubIcon
            className="icon"
            onClick={() =>
              window.open("https://github.com/MrSamLaw/", "_blank")
            }
          />
        </div>
        <div className="itemContainer">
          <LinkedInIcon
            className="icon"
            onClick={() =>
              window.open("https://www.linkedin.com/in/mrsamlaw/", "_blank")
            }
          />
        </div>
        <div className="itemContainer">
          <Icon
            icon={codewarsIcon}
            className="icon"
            onClick={() =>
              window.open("https://www.codewars.com/users/MrSamLaw", "_blank")
            }
          />
        </div>
      </div>
    </div>
  );
}
