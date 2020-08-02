import React from "react";
import "./Home.scss";

function Home() {
  return (
    <div className="Home">
      <h1>Nathan Cohen</h1>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"
      ></link>
      <div class="social-buttons">
        <a href="https://www.linkedin.com/in/nathancohen99/" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="https://twitter.com/nathancohen99" target="_blank" rel="noopener noreferrer" >
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://github.com/najaco" target="_blank" rel="noopener noreferrer" >
          <i class="fab fa-github"></i>
        </a>
        <a href="mailto:ncohen4299@gmail.com" target="_blank" rel="noopener noreferrer" >
        <i class="far fa-envelope"></i>
        </a>
      </div>
    </div>
  );
}

export default Home;
