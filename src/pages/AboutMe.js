import React from "react";
import Image from "react-bootstrap/Image";
import "./Page.css";
const ProfilePic = require("../assets/profile_pic_resize.png");
const PurduePic = "https://2jsqmx3urpic3hm7hj2c4vvi-wpengine.netdna-ssl.com/files/purdue-logo.png"
const DiscoverPic = "https://nmgprod.s3.amazonaws.com/media/editorial/2019/06/17/discover.png"
function About() {
  return (
    <div className="Page">
      <h1>About Me</h1>
      {/* <Image src={ProfilePic} roundedCircle />
      <p>
        I am a junior at Purdue University,
        majoring in computer science and minoring in entrepreneurship My
        concentrations include systems, security, and databases.
      </p> */}
      {aboutMeSection(
        ProfilePic,
        "I am a junior at Purdue University, majoring in computer science and minoring in entrepreneurship. My concentrations include systems, security, and databases."
      )}
      {/* <p>
        This semester I am doing undergraduate research under Russell Shirley,
        working on building a system for streaming video over UDP, which will be
        used for benchmarking different adaptive streaming algorithms.
      </p> */}
      {aboutMeSection(PurduePic, " This semester I am doing undergraduate research under Russell Shirley, working on building a system for streaming video over UDP, which will be used for benchmarking different adaptive streaming algorithms.")}
      {/* <p>
        Last summer I interned Discover Financial Services, where I helped build
        backend systems that handeled highly sensitive data, as well as updating
        old API's to abide by modern security standards.
      </p> */}
      {aboutMeSection(DiscoverPic, "Last summer I interned Discover Financial Services, where I helped build backend systems that handeled highly sensitive data, as well as updating old API's to abide by modern security standards.")}
      

      <p className="aboutMeSectionDescription">
        For the future, I am look to work on low level systems and networks, and
        eventually return to school to complete a masters degree in Computer
        Science.
      </p>
    </div>
  );
}

function aboutMeSection(image, text) {
  return (
    <div className="aboutMeSection">
      <p className="aboutMeSectionDescription">
        <Image src={image} roundedCircle />
        <span>{text}</span>
      </p>
      <br/>
    </div>
  );
}

export default About;
