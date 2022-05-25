import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Resume from "./components/resume/Resume";
// import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "./app.css";

export default function App() {
  return (
      <div className="app">
        <Navbar />
        <div className="sections">
          <Intro />
          <Portfolio />
          <Resume />
          <Footer />
        </div>
      </div>
  );
}