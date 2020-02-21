import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Resume from "./assets/docs/resume_cohen.pdf";
import About from "./pages/AboutMe";
import Education from "./pages/Education";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="TopNavigationBar">
          <Navbar bg="primary" variant="dark" stickey="top">
            <Navbar.Brand href="/">Nathan Cohen</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">About Me</Nav.Link>
              <Nav.Link href="/education">Education</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
              <Nav.Link href={Resume}>Resume</Nav.Link>
            </Nav>
          </Navbar>
        </div>

        <Switch>
          <Route path="/" component={About} exact />
          <Route path="/education" component={Education} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
