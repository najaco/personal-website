import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Resume from "./assets/docs/resume_cohen.pdf";
import About from "./pages/AboutMe";
import Education from "./pages/Education";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="TopNavigationBar">
          <Navbar bg="light" variant="light" stickey="top">
            <Navbar.Brand href={process.env.PUBLIC_URL + "/"}>
              Nathan Cohen
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href={process.env.PUBLIC_URL + "/about-me"}>
                  About Me
                </Nav.Link>
                <Nav.Link href={process.env.PUBLIC_URL + "/education"}>
                  Education
                </Nav.Link>
                <Nav.Link href={process.env.PUBLIC_URL + "/projects"}>
                  Projects
                </Nav.Link>
                <Nav.Link href={Resume}>Resume</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>

        <Switch>
          <Route path={process.env.PUBLIC_URL + "/"} component={Home} exact />
          <Route
            path={process.env.PUBLIC_URL + "/about-me"}
            component={About}
            exact
          />
          <Route
            path={process.env.PUBLIC_URL + "/education"}
            component={Education}
          />
          <Route
            path={process.env.PUBLIC_URL + "/projects"}
            component={Projects}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
