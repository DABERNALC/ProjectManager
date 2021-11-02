import React from 'react'
import TaskStyle from "./TaskStyle.module.css"
import {BsExclamationLg} from "react-icons/bs"
const Task = (props) => {
    return (
            <div className={TaskStyle.colorDiv} style ={{backgroundColor:`${props.color}`}}>
                <div className={TaskStyle.whiteDiv}>
                    <div className={TaskStyle.taskTextDiv}>
                        <p className={TaskStyle.taskTex}>{props.desc}</p>
                    </div>
                    <BsExclamationLg className={TaskStyle.exclamationIcon}></BsExclamationLg>
                </div>
            </div>
    )
}
export default Task;