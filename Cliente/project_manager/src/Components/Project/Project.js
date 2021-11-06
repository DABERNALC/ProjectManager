import React, { useEffect, useState } from "react";
import ProjectStyle from "./ProjectStyle.module.css";
import { GrConfigure } from "react-icons/gr";
import { Link } from "react-router-dom";
import ProjectZoomIn from "../ProjectZoomIn/ProjectZoomIn";
import ProjectProperties from "../ProjectProperties/ProjectProperties";

export const Project = (props) => {
  useEffect(() => {
    console.log(props);
  }, []);
  const [showDetails, setshowDetails] = useState(false);
  const [showProperties, setshowProperties] = useState(false);
  const deleteProject= ()=> 
  {
    
  }
  return (
    <div className={ProjectStyle.containerBlue}>
      <div className={ProjectStyle.container}>
        <Link to={`/app/projects/${props.projectId}`}>
          <h3>{props.ProjectName}</h3>
        </Link>
        <div>
          <h4>{props.TeamName}</h4>
          <li className={ProjectStyle.icon}>
            <GrConfigure onClick={() => setshowProperties(!showProperties)} />
          </li>
        </div>
      </div>
      {showDetails ? (
        <ProjectZoomIn
          setshowDetails={() => {
            setshowDetails(false);
          }}
          projectId={props.projectId}
          TeamName={props.TeamName}
        />
      ) : null}
      {showProperties ? <ProjectProperties projectId={props.projectId} setshowDetails={(show)=>{setshowDetails(show)}} showDetails={showDetails} /> : null}
    </div>
  );
};

export default Project;
