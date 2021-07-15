import "./app.scss";

import "@fontsource/roboto";

import Navbar from "./components//navbar/Navbar";
import Header from "./components/header/Header";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import { useState } from "react";
import Menu from "./components/menu/Menu";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Header />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
