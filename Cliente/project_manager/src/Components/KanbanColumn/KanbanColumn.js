import React from 'react'
import KanbanColumnStyle from "./KanbanColumnStyle.module.css";

const KanbanColumn = (props) => {

    return (
        <div className={KanbanColumnStyle.container}>
            <h1 className={KanbanColumnStyle.title}>{props.title}</h1>
            <div>
                <p className={KanbanColumnStyle.add}>+ Añadir una tarjeta</p>
            </div>

        </div>
    )
}
export default KanbanColumn;