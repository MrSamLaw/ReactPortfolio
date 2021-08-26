import "./footer.scss";

import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Icon } from "@iconify/react";
import codewarsIcon from "@iconify-icons/simple-icons/codewars";

export default function Footer() {
  return (
    <section className="footer">
      <div className="container">
        <div className="left">
          <div className="itemContainer">
            <PhoneIcon className="icon" />
            <span>+61411614529</span>
          </div>
          <div className="itemContainer">
            <EmailIcon className="icon" />
            <span>code@mrsamlaw.com</span>
          </div>
        </div>
        <div className="right">
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
    </section>
  );
}
