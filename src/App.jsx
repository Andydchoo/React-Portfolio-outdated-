import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Resume from "./components/resume/Resume";
import { ThemeProvider } from "@mui/material";
import Footer from "./components/footer/Footer";
import { theme } from "./styles/styles";
import "./app.css";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Navbar />
        <div className="sections">
          <Intro />
          <Portfolio />
          <Resume />
        </div>
      </div>
    </ThemeProvider>
  );
}