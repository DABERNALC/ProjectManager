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
          <h3 className={ProjectStyle.projectStyle}>{props.ProjectName}</h3>
        </Link>
        <div>
          <h4 className={ProjectStyle.teamStyle}>{props.TeamName}</h4>
          <div className={ProjectStyle.icon}>
            <GrConfigure className={ProjectStyle.iconStyle} onClick={() => setshowProperties(!showProperties)} />
          </div>
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
