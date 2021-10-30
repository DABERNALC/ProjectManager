import React, { useState } from 'react'
import AddTask from '../AddTask/AddTask';
import Task from '../Task/Task';
import KanbanColumnStyle from "./KanbanColumnStyle.module.css";

const KanbanColumn = (props) => {
    const [addTask,setAddTask]=useState(false)

    return (
        <div className={KanbanColumnStyle.container}>
            <h1 className={KanbanColumnStyle.title}>{props.title}</h1>
                {
                    props.title == "TO DO" ?
                        addTask ?
                            <AddTask setAddTask = {setAddTask} teamId={props.teamId} refresh={props.refresh}></AddTask>
                        :
                            <p className={KanbanColumnStyle.add} onClick={()=>setAddTask(!addTask)}>+ Añadir una tarjeta</p>
                        :
                        null
                }
                {
                    props.tasks.map((theTask)=>
                        <Task desc={theTask.Descripcion}></Task>
                    )
                }
                
        </div>
    )
}
export default KanbanColumn;