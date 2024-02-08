import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./views/banner/Banner";
import About from "./views/about/About";
import WhatIDo from "./views/whatIDo/WhatIDo";
import Skills from "./views/skills/Skills";
import Experience from "./views/experience/Experience";
import Projects from "./views/projects/Projects";
import Footer from "./views/footer/Footer";
import Certification from "./views/certification/Certification";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      {/* <WhatIDo /> */}
      <Projects />
      <Skills />
      <Certification />
      <Experience />
      <Footer />
    </>
  );
}

export default App;
