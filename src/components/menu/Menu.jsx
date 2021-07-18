import "./menu.scss";
import Menuli from "../menuli/Menuli";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(!menuOpen)}>
          <a href="#header">Home</a>
        </li>
        <Menuli menuOpen={menuOpen} setMenuOpen={setMenuOpen}>
          <a href="#projects">Projects</a>
        </Menuli>
        <li onClick={() => setMenuOpen(!menuOpen)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
