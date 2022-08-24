import React from "react";
import CourseContainer from "./components/CourseContainer";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const courseCategory = [
  { id: 0, value: "Back-End" },
  { id: 1, value: "Front-End" },
];

const renderedCourseContainer = courseCategory.map((cat) => {
  return <CourseContainer key={cat.id} categeory={cat.value} />;
});

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        {/* <CourseContainer categeory={courseCategory} /> */}
        {renderedCourseContainer}
      </div>
      <Footer />
    </div>
  );
}

export default App;
