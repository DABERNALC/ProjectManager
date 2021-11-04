import React, { useState } from 'react'
import { connect } from 'react-redux';
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
                            props.currentUser == props.liderId && props.liderId != ""?
                            <p className={KanbanColumnStyle.add} onClick={()=>setAddTask(!addTask)}>+ Añadir una tarjeta</p>:
                            null
                        :
                        null
                }
                {
                    props.tasks.map((theTask)=>
                        <Task desc={theTask.Descripcion} color={theTask.Color} priority={theTask.prioridad}> </Task>
                    )
                }
                
        </div>
    )
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        currentUser: state.UserInfo.id
    };
  };
export default connect(mapStateToProps) (KanbanColumn);