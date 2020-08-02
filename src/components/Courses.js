import React from 'react';


const status = {
  COMPLETED: 'Completed',
  IN_PROGRESS: 'In Progress'
};

function Course(courseId, title, status) {
  this.courseId = courseId;
  this.title = title;
  this.status = status;
}

let courses = [
  new Course('CS18200', 'Discrete Math', status.COMPLETED),
  new Course('CS24000', 'Programming in C', status.COMPLETED),
  new Course('CS25000', 'Computer Architecture', status.COMPLETED),
  new Course('CS25100', 'Data Structures and Algorithms', status.COMPLETED),
  new Course('CS25200', 'Systems Programming', status.COMPLETED),
  new Course('CS34800', 'Information Systems', status.COMPLETED),
  new Course('CS35400', 'Operating Systems', status.COMPLETED),
  new Course(
      'CS38100', 'Introduction to the Analysis of Algorithms',
      status.COMPLETED),
  new Course('CS42200', 'Computer Networks', status.COMPLETED),
  new Course('CS35200', 'Compilers: Principles and Practice', status.COMPLETED),
  new Course('CS35500', 'Introduction to Cryptography', status.COMPLETED)
];
let courses_list = courses.map(course => (
    <li>{course.title}</li>
));

function Courses() {
  return (
    <div className="Courses">
    <h3>Courses:</h3>
      <ul id='courses_list'>{courses_list}</ul>
    </div>
  );
}

export default Courses;
