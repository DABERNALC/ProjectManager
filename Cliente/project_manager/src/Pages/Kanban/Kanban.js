import React from 'react'
import GenericButton1 from '../../Components/GenericButton1/GenericButton1';
import KanbanColumn from '../../Components/KanbanColumn/KanbanColumn';

import KanbanStyle from './KanbanStyle.module.css'

function Kanban() {
    return (

        <div>
            <h1 className={KanbanStyle.title}>Asistente Virtual</h1>
            <h3>WPT Team</h3>
            <div className={KanbanStyle.kanbanContainerCentered}>
                <div className={KanbanStyle.kanbanContainer}>
                    <h1>Kanban</h1>
                    <div className={KanbanStyle.columnsContainers}>
                        <KanbanColumn title="TO DO"></KanbanColumn>
                        <KanbanColumn title="DOING"></KanbanColumn>
                        <KanbanColumn title="DONE"></KanbanColumn>
                    </div>

                </div>
            </div>
            <div className={KanbanStyle.buttonStyle}>
                <GenericButton1 nombre="Checklist >"></GenericButton1>
            </div>
        </div>
    );
}

export default Kanban;