import React from "react";
import CourseContainer from "./components/CourseContainer";
import Navbar from "./components/Navbar";

const courseCategory = ["Back-End", "Front-End"];

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <CourseContainer categeory={courseCategory} />
      </div>
    </div>
  );
}

export default App;
