import React from "react";

const Course = ({ video }) => {
  console.log(video.snippet);
  return (
    <div
      className="card m-2"
      style={{ width: "18rem", display: "inline-block" }}
    >
      {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
      <img
        alt={video.snippet.title}
        className="card-img-top"
        src={video.snippet.thumbnails.medium.url}
        style={{ height: "10rem" }}
      />
      <div className="card-body">
        <h5 className="card-title" style={{ fontSize: "15px" }}>
          {video.snippet.title.length > 30
            ? video.snippet.title.slice(0, 30) + "..."
            : video.snippet.title}
          {/* recommand for you */}
        </h5>
        <p className="card-text" style={{ fontSize: "13px" }}>
          {video.snippet.description.length > 70
            ? video.snippet.description.slice(0, 70) + "..."
            : video.snippet.description}
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};
export default Course;
