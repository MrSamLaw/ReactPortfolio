import "./app.scss";

import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Contact from "./components/contact/Contact";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Header />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
