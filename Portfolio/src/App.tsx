import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./views/homepage/Banner";
import About from "./views/homepage/About";
import WhatIDo from "./views/whatIDo/WhatIDo";
import Skills from "./views/skills/Skills";
import Experience from "./views/experience/Experience";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <About />
      <WhatIDo />
      <Skills />
      <Experience />
    </div>
  );
}

export default App;
