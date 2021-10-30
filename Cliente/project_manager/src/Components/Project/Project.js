import React, { useEffect } from "react";
import ProjectStyle from "./ProjectStyle.module.css";
import { GrConfigure } from "react-icons/gr";
import { Link } from "react-router-dom";

export const Project = (props) => {
    useEffect(() => {
        console.log(props)
    }, [])
  return (
    <Link to={`/app/projects:${props.projectId}`}>
      <div className={ProjectStyle.containerBlue}>
        <div className={ProjectStyle.container}>
          <h3>{props.ProjectName}</h3>
          <div>
            <h4>{props.TeamName}</h4>
            <GrConfigure />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Project;
