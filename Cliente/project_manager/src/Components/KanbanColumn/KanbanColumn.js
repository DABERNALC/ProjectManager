import React from 'react'
import AddTask from '../AddTask/AddTask';
import KanbanColumnStyle from "./KanbanColumnStyle.module.css";

const KanbanColumn = (props) => {

    return (
        <div className={KanbanColumnStyle.container}>
            <h1 className={KanbanColumnStyle.title}>{props.title}</h1>
            <div>
                {
                    props.title == "TO DO" ?
                        <p className={KanbanColumnStyle.add}>+ Añadir una tarjeta</p>
                        :
                        null
                }
                <AddTask></AddTask>
            </div>

        </div>
    )
}
export default KanbanColumn;