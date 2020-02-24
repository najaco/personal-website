import React from "react";
import Image from "react-bootstrap/Image";
import ProfPic from "../assets/profile_pic_resize.png";
import LinkedIn from "../assets/icons/linkedin.svg";
import "./Home.css";

function Home() {
  return (
    <div class="Home">
      <h1>Nathan Cohen</h1>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"
      ></link>
      <div class="social-buttons">
        <a href="https://www.linkedin.com/in/nathancohen99/" target="_blank">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="https://twitter.com/nathancohen99" target="_blank">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://github.com/nathancohen4299" target="_blank">
          <i class="fab fa-github"></i>
        </a>
      </div>
    </div>
  );
}

export default Home;
