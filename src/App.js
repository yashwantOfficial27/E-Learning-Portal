import React from "react";
import CourseContainer from "./components/CourseContainer";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import {Routes, Route} from 'react-router-dom';
import Link from './components/Link';
import Contact from './components/Contact';
import MainHeader from './components/MainHeader';

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
      {/* <Navbar /> */}
      {/* <Routes>
  <Route path="/" element={<Dashboard />}>
    <Route
      path="messages"
      element={<DashboardMessages />}
    />
    <Route path="tasks" element={<DashboardTasks />} />
  </Route>
  <Route path="about" element={<AboutPage />} />
</Routes> */}
      {/* <div className="container">
        <CourseContainer categeory={courseCategory} /> 
        {renderedCourseContainer}
      </div> */}


      <Routes>
        <Route path="/" element={<MainHeader />}>
       
          <Route path="about" element={<About />} />
          <Route path="Link" element={<Link />} />
          <Route path="contact" element={<Contact />} />
          <Route index element={renderedCourseContainer} />
          </Route>
      </Routes>     
      <Footer />
    </div>
  );
}

export default App;
