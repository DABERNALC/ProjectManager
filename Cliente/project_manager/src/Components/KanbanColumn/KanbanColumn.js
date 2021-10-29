import React, { useState } from 'react'
import AddTask from '../AddTask/AddTask';
import Task from '../Task/Task';
import KanbanColumnStyle from "./KanbanColumnStyle.module.css";

const KanbanColumn = (props) => {
    const [addTask,setAddTask]=useState(false)

    return (
        <div className={KanbanColumnStyle.container}>
            <h1 className={KanbanColumnStyle.title}>{props.title}</h1>
            <div>
                {
                    props.title == "TO DO" ?
                        addTask ?
                            <AddTask setAddTask = {setAddTask}></AddTask>
                        :
                            <p className={KanbanColumnStyle.add} onClick={()=>setAddTask(!addTask)}>+ Añadir una tarjeta</p>
                        :
                        null
                }
                <Task desc="Codificiar inicio de sesión"></Task>
                <Task desc="Investigar motores de bases de datos para que todo esté muy bueno, bonito y barato"></Task>
            </div>
        </div>
    )
}
export default KanbanColumn;