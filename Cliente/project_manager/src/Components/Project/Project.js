import React, { useEffect, useState } from "react";
import ProjectStyle from "./ProjectStyle.module.css";
import { GrConfigure } from "react-icons/gr";
import { Link } from "react-router-dom";
import ProjectZoomIn from "../ProjectZoomIn/ProjectZoomIn";

export const Project = (props) => {
  useEffect(() => {
    console.log(props);
  }, []);
  const [showDetails, setshowDetails] = useState(false);
  return (
    <div className={ProjectStyle.containerBlue}>
      <div className={ProjectStyle.container}>
        <Link to={`/app/projects/${props.projectId}`}>
          <h3>{props.ProjectName}</h3>
        </Link>
        <div>
          <h4>{props.TeamName}</h4>
          <li className={ProjectStyle.icon}><GrConfigure onClick={() => setshowDetails(!showDetails)} /></li>
        </div>
      </div>
      {showDetails ? (
        <ProjectZoomIn
          setshowDetails={() => {
            setshowDetails(false);
          }}
          projectId={props.projectId}
        />
      ) : null}
    </div>
  );
};

export default Project;
