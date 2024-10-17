import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Introduction from "./Components/Introduction";
import Technologies from "./Components/Technologies";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Formation from "./Components/Formation";
import BackToTop from "./Components/BackToTop";
import ProjectPage from "./Components/ProjectPage";
import ScrollToTop from "./Components/ScrollToTop"; // Import du nouveau composant

const MainPage = () => (
  <div className="container mx-auto px-8">
    <Navbar />
    <section id="introduction">
      <Introduction />
    </section>
    <section id="about">
      <About />
    </section>
    <section id="techno">
      <Technologies />
    </section>
    <section id="experience">
      <Experience />
    </section>
    <section id="formation">
      <Formation />
    </section>
    <section id="projects">
      <Projects />
    </section>
    <section id="contact">
      <Contact />
    </section>
    <BackToTop />
  </div>
);

const App = () => (
  <Router basename="/oc-portfolio">
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-orange-500">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(253,118,0,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <ScrollToTop /> {/* Ajoute ce composant ici */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/project/:id" element={<ProjectPage />} />
      </Routes>
    </div>
  </Router>
);

export default App;