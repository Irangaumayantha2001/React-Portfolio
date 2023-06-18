/** @format */

import React from "react";
import About from "../components/first_section_about/About";
import AboutSec from "../components/about_section/About";
import Projects from "../components/projects_section/Projects";
import Skills from "../components/skills_section/Skills";
import Contact from "../components/contact_section/Contact";
//import Footer from "../components/Footer/Footer";

const Home_page = () => {
  return (
    <>
      <About />
      <AboutSec />
      <Skills />
      <Projects />
      <Contact />
      {/*<Footer/> */}
    </>
  );
};

export default Home_page;
