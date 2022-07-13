import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import React from "react";
import { Helmet } from "react-helmet";

import About from "./components/AboutMe";
import Education from "./components/Education";
import Home from "./components/Home";
import Projects from "./components/Projects";

const TITLE = "Nathan Cohen";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>
        <Home />
        <h1 style={{"color":"red", "text-align": "center"}}>This website is not currently maintained or updated</h1>
        <About />
        <Education />
        <Projects />
      </div>
    );
  }
}

export default App;
