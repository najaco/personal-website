import React from "react";
import "./Page.css";
import Courses from "./Courses"

function Education() {
  return (
    <div class="Page">
      <h1>
        Education
      </h1>
      <h2 class="inline">Purdue University</h2>
      <p class="inline">(West Lafayette, IN)</p>
      <p>Bachelor of Science: School of Computer Science</p>
      <p>Expected Graduation Date: May 2021</p>
      <p>
        Cumulative GPA: <b>3.76</b>{" "}
      </p>
      <br></br>
      <Courses />
    </div>
  );
}

export default Education;
