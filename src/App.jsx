import "./app.scss";

import { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Resume from "./components/Resume/Resume";
import ContactFormik from "./components/Contact/ContactFormik";
import Footer from "./components/Footer/Footer";

export default function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderSection = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <ContactFormik />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <main className="app">
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      <div className="sections">{renderSection()}</div>
      <Footer />
    </main>
  );
}
