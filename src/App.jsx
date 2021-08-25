import "./global.scss";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import About from "./components/About";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="container">
      <Nav />
      <Intro />
      <About />
      <Works />
      <Contact />
      <Footer />
    </main>
  );
}
