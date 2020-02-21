import React from "react";
import Table from "react-bootstrap/Table";

const status = {
  COMPLETED: "Completed",
  IN_PROGRESS: "In Progress"
};

function Course(courseId, title, status) {
  this.courseId = courseId;
  this.title = title;
  this.status = status;
}

function EvaluateStatus(course) {
  if (course.status == status.COMPLETED) {
    return "#33ff55";
  } else {
    return "#f5e617";
  }
}
let courses = [
  new Course("CS18200", "Discrete Math", status.COMPLETED),
  new Course("CS24000", "Programming in C", status.COMPLETED),
  new Course("CS25000", "Computer Architecture", status.COMPLETED),
  new Course("CS25100", "Data Structures and Algorithms", status.COMPLETED),
  new Course("CS25200", "Systems Programming", status.COMPLETED),
  new Course("CS34800", "Information Systems", status.COMPLETED),
  new Course("CS35400", "Operating Systems", status.COMPLETED),
  new Course(
    "CS38100",
    "Introduction to the Analysis of Algorithms",
    status.COMPLETED
  ),
  new Course("CS42200", "Computer Networks", status.COMPLETED),
  new Course(
    "CS35200",
    "Compilers: Principles and Practice",
    status.IN_PROGRESS
  ),
  new Course("CS35500", "Introduction to Cryptography", status.IN_PROGRESS)
];
let courses_list = courses.map(course => (
  <tr>
    <td>
      <b>{course.courseId}</b>
    </td>
    <td>{course.title}</td>
    <td>
      <span style={{ color: EvaluateStatus(course) }}>
        <b>{course.status.toUpperCase()}</b>
      </span>
    </td>
  </tr>
));

function Courses() {
  return (
    <div class="Courses">
      <Table responsive>
        <thead>
          <th>Course No.</th>
          <th>Course Title</th>
          <th>Status</th>
        </thead>
        <tbody>{courses_list}</tbody>
      </Table>

      {/* </Card> */}
    </div>
  );
}

export default Courses;
