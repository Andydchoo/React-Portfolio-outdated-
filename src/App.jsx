import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
import { ThemeProvider } from "@mui/material";
import Footer from "./components/footer/Footer";
import { theme } from "./styles/styles";

//Added start to responsive design with "theme"
//So far have changes in Intro and Navbar for sizes
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app" style={{height: '100vh', maxHeight: '100%'}}>
        <Navbar />
        <div 
          className="sections" 
          style={{
            width: '100%',
            height: 'calc(100vh - 65px)',
            maxHeight: '100%',
            position: 'relative',
            top: '65px',
            scrollBehavior: 'smooth',
            scrollbarWidth: 'none',
        }}>
          <Intro />
          <Portfolio />
          <Resume />
          <Contact />
        </div>
      </div>
    </ThemeProvider>
  );
}