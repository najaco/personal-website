import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Resume from "./assets/docs/resume_cohen.pdf";
import About from "./pages/AboutMe";
import Education from "./pages/Education";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { Helmet } from 'react-helmet'
const TITLE = "Nathan Cohen"
function toRoute(route) {
    return process.env.PUBLIC_URL + "#" + route
}

function App() {
  return (
    <div className="App">
    <Helmet>
        <title>{TITLE}</title>
    </Helmet>
      {/* <HashRouter>
        <div className="TopNavigationBar">
          <Navbar bg="light" variant="light" stickey="top">
            <Navbar.Brand href={toRoute("/")}>Nathan Cohen</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href={toRoute("/about-me")}>About Me</Nav.Link>
              <Nav.Link href={toRoute("/education")}>Education</Nav.Link>
              {/* <Nav.Link href={toRoute("/projects")}>Projects</Nav.Link> */}
              {/* <Nav.Link href={Resume}>Résumé</Nav.Link>
            </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about-me" component={About} exact />
          <Route path="/education" component={Education} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </HashRouter> */}
      <Home/>
      <About/>
      <Education/>
      <Projects/>
    </div>
  );
}

export default App;
