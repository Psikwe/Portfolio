import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./views/banner/Banner";
import About from "./views/about/About";
import { HelmetProvider } from "react-helmet-async";
import Skills from "./views/skills/Skills";
import Experience from "./views/experience/Experience";
import Projects from "./views/projects/Projects";
import Footer from "./views/footer/Footer";
import Certification from "./views/certification/Certification";

function App() {
  const helmetContext = {};
  return (
    <>
      <HelmetProvider context={helmetContext}>
        <Navbar />
        <Banner />
        <About />
        <Projects />
        <Skills />
        <Certification />
        <Experience />
        <Footer />
      </HelmetProvider>
    </>
  );
}

export default App;
