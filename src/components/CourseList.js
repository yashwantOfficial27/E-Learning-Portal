import React, { useState, useEffect } from "react";
import useVideos from "../hooks/useVideos";
import Course from "./Course";
import youtube from "../apis/youtube";

const CourseList = ({ type }) => {
  //   const [videos, search] = useVideos(type);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const onSearchSubmit = async (term) => {
      console.log(type);
      const { data } = await youtube.get("/search", {
        params: {
          q: "data Structure",
        },
      });
      //   console.log("hello");
      //   //   setSelectedVideo(data.items[0]);
      //   setVideos(data.items);
    };
    onSearchSubmit(type);
    console.log(type);
  }, [videos]);

  //   console.log(videos);
  const renderedCourse = {};

  return (
    <div>
      <Course />
    </div>
  );
};

export default CourseList;
