import "./Section.scss";

import React from "react";

import SectionTitle from "./SectionTitle";
function generateLink(url) {
  return <a href={url}>link</a>;
}
const Projects = () => {
  return (
    <div className="Section" id="Projects">
      <SectionTitle title={"Projects"} icon_id={"fas fa-project-diagram"} />
      <h2>pyparcel</h2>
      <p>
        pyparcel is the simple and secure way to convert python objects to
        bytestrings. pyparcel extends the usage of struct and provides a simpler
        way to pack classes and built-in types. [
        {generateLink("https://github.com/najaco/pyparcel")}]
      </p>
      <h2>UDP Video Stream</h2>
      <p>
        Video streaming service that uses a server client model to stream video
        over UDP, with RDT elements when sending over frames with higher
        priority. [{generateLink("https://github.com/najaco/udp-video-stream")}]
      </p>
      <h2>Boarding Simulator</h2>
      <p>
        Multithreaded program to simulate the airbus boarding experience,
        testing different patterns of order to decrease wait time. [
        {generateLink("https://github.com/najaco/boarding-simulator")}]
      </p>
    </div>
  );
};

export default Projects;
