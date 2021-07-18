import "./header.scss";
import profilepic from "../../assets/SamLawProfile.jpg";

export default function Header() {
  return (
    <section className="header" id="header">
      <div className="left">
        <div className="imgContainer">
          <img src={profilepic} alt="Sam Law Profile" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello, I Am</h2>
          <h1>Sam Law</h1>
          <h3>Full Stack Developer</h3>
        </div>
      </div>
    </section>
  );
}
