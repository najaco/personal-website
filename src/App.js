import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import React from "react";
import { Helmet } from "react-helmet";

import About from "./pages/AboutMe";
import Education from "./pages/Education";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

const TITLE = "Nathan Cohen";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>
        <Home />
        <About />
        <Education />
        <Projects />
      </div>
    );
  }
}

export default App;
