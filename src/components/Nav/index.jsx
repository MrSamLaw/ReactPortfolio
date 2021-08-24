import { Link } from "react-scroll";
import { SiGithub, SiLinkedin, SiCodewars } from "react-icons/si";
import "./nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__left">
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
      </div>
      <div className="nav__right">
        <Link
          activeClass="active"
          className="link"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={400}
        >
          About
        </Link>
        <Link
          activeClass="active"
          className="link"
          to="work"
          spy={true}
          smooth={true}
          offset={0}
          duration={400}
        >
          Works
        </Link>
        <Link
          activeClass="active"
          className="link"
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={400}
        >
          Contact
        </Link>
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
    </nav>
  );
};

export default Nav;
