import { Link, animateScroll as scroll } from "react-scroll";
import { SiGithub, SiLinkedin, SiCodewars } from "react-icons/si";

import "./footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__scroll">
        <Link
          className="nav__logo"
          to="intro"
          spy={true}
          smooth={true}
          offset={-70}
          duration={400}
        >
          ^
        </Link>
      </div>
      <div className="footer__socials">
        <SiLinkedin
          className="icon"
          onClick={() =>
            window.open("https://www.linkedin.com/in/mrsamlaw/", "_blank")
          }
        />
        <SiGithub
          className="icon"
          onClick={() => window.open("https://github.com/MrSamLaw/", "_blank")}
        />
      </div>
      <p className="copyright">
        <sup>&copy; </sup>2021
        <span className="logo">SAM LAW</span>
      </p>
    </footer>
  );
};

export default Footer;
