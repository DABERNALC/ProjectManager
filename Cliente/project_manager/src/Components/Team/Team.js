import React from 'react'
import {FaUserAlt} from  "react-icons/fa"
import TeamStyle from "./TeamStyle.module.css"
import {FaTrashAlt} from "react-icons/fa"

export const Team = (props) => {
    return (
        <div className={TeamStyle.container}>
            <div className={TeamStyle.personContainer}>
                {props.TeamMembers.map((TeamMembers)=>(
                    <FaUserAlt color={TeamMembers.Color} size="45px"></FaUserAlt>
                ))}
            </div>
            <div className={TeamStyle.nameContainer}>
                <h3>{props.name}</h3>
                <FaTrashAlt size="25px"></FaTrashAlt>
            </div>
        </div>
    )
}

export default Team
