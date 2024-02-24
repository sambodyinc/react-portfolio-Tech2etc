import { NavLink } from "react-router-dom";
import "./work.css";
import React from "react";


const Work = (props) => {
  return (
    <div className="project-card">
      <img
        src={props.imgsrc}
        alt="Dynamic"
      />
      <h2 className="project-title">{props.title}</h2>
      <div className="project-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <NavLink to={props.view} className="btn">
          View
          </NavLink>
          <NavLink to={props.source} className="btn">
          Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Work;
