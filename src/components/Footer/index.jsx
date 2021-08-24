import { Link } from "react-scroll";
import { SiGithub, SiLinkedin, SiCodewars } from "react-icons/si";

import "./footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="nav__right">
        <SiGithub
          className="icon"
          onClick={() => window.open("https://github.com/MrSamLaw/", "_blank")}
        />
        <SiLinkedin
          className="icon"
          onClick={() =>
            window.open("https://www.linkedin.com/in/mrsamlaw/", "_blank")
          }
        />
      </div>
      <p className="copyright">&copy; Copyright 2021</p>
      <p className="copyright">
        <Link
          className="nav__logo"
          to="intro"
          spy={true}
          smooth={true}
          offset={-70}
          duration={400}
        >
          SAM LAW
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
