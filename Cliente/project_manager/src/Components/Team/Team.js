import React from 'react'
import {BsPersonFill} from  "react-icons/bs"
import TeamStyle from "./TeamStyle.module.css"
import {FaTrashAlt} from "react-icons/fa"

export const Team = (props) => {
    return (
        <div className={TeamStyle.container}>
            <div className={TeamStyle.personContainer}>
                {props.TeamMembers.map((TeamMembers)=>(
                    <BsPersonFill color={TeamMembers.Color} size="60px"></BsPersonFill>
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
