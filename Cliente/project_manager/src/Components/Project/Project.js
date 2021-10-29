import React from 'react'
import ProjectStyle from "./ProjectStyle.module.css"
import {GrConfigure} from "react-icons/gr"

export const Project = (props) => {
    return (
        <div className={ProjectStyle.containerBlue}>
            <div className={ProjectStyle.container}>
            <h3>{props.ProjectName}</h3>
            <div>
                <h4>{props.TeamName}</h4>
                <GrConfigure/>
            </div>
            </div>
        </div>
    )
}

export default Project