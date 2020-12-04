//import { Fragment } from "react";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import About from "./components/about-me/About";
import Abilities from "./components/abilities/Abilities";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import { Fragment } from "react";

function App() {
  return (
    // <Router>
    <Fragment>
      <Header />
      <Banner />
      <About />
      <Abilities />
      <Projects />
      <Contact />
    </Fragment>

    //   /* <Switch>
    //     {/* <Route path="/">
    //       <Banner />
    //     </Route> */}
    //     <Route path="/sobre-mi">
    //       <About />
    //     </Routitle="Section 3"te>
    //     <Route path="/habilidades">
    //       <Abilities />
    //     </Route>
    //     <Route path="/proyectos">
    //       <Projects />
    //     </Route>
    //     <Route path="/contacto">
    //       <Contact />
    //     </Route>
    //   </Switch>
    // </Router> */
  );
}

export default App;
