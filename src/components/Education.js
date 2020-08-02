import React from "react";
import Courses from "./Courses";
import "./Section.scss";
import SectionTitle from "./SectionTitle";

function Education() {
  return (
    <div className="Section" id="Education">
      <SectionTitle title={"Education"} icon_id={"fas fa-graduation-cap"} />
      <h2 class="inline">Purdue University</h2>
      <span class="inline" id="location">
        (West Lafayette, IN)
      </span>
      <p>
        Bachelor of Science: <b>School of Computer Science</b>
      </p>
      <p>
        Expected Graduation Date: <b>May 2021</b>
      </p>
      <p>
        Cumulative GPA: <b>3.79</b>{" "}
      </p>
      <br></br>
      <p>
        <Courses />
      </p>
    </div>
  );
}

export default Education;
