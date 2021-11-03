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
                    {
                        props.priority ===2 ?
                        <BsExclamationLg className={TaskStyle.exclamationIcon}></BsExclamationLg>
                        :
                        null
                    }
                   
                </div>
            </div>
    )
}
export default Task;