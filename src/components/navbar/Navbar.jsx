import "./navbar.scss";
import EmailIcon from "@material-ui/icons/Email";

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <section className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            MR SAM LAW
          </a>
          <div className="itemContainer">
            <EmailIcon className="icon" />
            <span>code@mrsamlaw.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
