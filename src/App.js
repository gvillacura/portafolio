import { Fragment } from "react";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import About from "./components/about-me/About";
import Abilities from "./components/abilities/Abilities";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <Fragment>
      <Header />
      <Banner />
      <About />
      <Abilities />
      <Projects />
      <Contact />
    </Fragment>
  );
}

export default App;
