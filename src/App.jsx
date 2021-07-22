import "./app.scss";

import { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contacts";

export default function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderSection = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Blog") {
      return <Portfolio />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <main className="app">
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      <div className="sections">
        {renderSection()}
        {/* <Header />
        <Projects />
        <Contact /> */}
      </div>
      {/* <Footer /> */}
    </main>
  );
}
