import React from "react";
import CourseList from "./CourseList";
import useVideos from "../hooks/useVideos";

const CourseContainer = ({ categeory }) => {
  //   const [videos, search] = useVideos("Data Stucture");

  const renderedList = categeory.map((cat) => {
    return <CourseList type={cat} />;
  });
  return (
    <div>
      <h1 className=""> Recommand for you</h1>
      {/* <CourseList /> */}
      {renderedList}
    </div>
  );
};
export default CourseContainer;
