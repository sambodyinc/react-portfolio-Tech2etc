import './work.css';
import Work from "./work";
import ProjectCardData from "./jobsData";

import React from "react";

const Jobs = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Completed</h1>
      <div className="project-container">
        {ProjectCardData.map((val, ind) => {
            return (
                <Work 
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    source={val.source}
                />
            )
        })}
      </div>
    </div>
  );
};

export default Jobs;