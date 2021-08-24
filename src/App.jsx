import "./global.scss";
import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="container">
      <Nav />
      <div className="sections">
        <Header />
        <About />
        <Work />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
