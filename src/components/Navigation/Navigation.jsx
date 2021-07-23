import "./navigation.scss";

export default function Navigation({ currentPage, handlePageChange }) {
  return (
    <section className="navbar">
      <div className="wrapper">
        <div className="left">
          <ul className="nav nav-tabs">
            <li
              className={currentPage === "Home" ? "logo active" : "logo"}
              onClick={() => handlePageChange("Home")}
            >
              SAM LAW
            </li>
          </ul>
        </div>
        <div className="right">
          <ul>
            <li
              className={
                currentPage === "About" ? "nav-link active" : "nav-link"
              }
              onClick={() => handlePageChange("About")}
            >
              About Me
            </li>
            <li
              onClick={() => handlePageChange("Portfolio")}
              className={
                currentPage === "Portfolio" ? "nav-link active" : "nav-link"
              }
            >
              Portfolio
            </li>
            {/* <li
              onClick={() => handlePageChange("Resume")}
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </li> */}
            <li
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
