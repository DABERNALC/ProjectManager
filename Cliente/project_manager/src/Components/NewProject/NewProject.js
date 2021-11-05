import React from 'react'
import GenericButton2 from '../../Components/GenericButton2/GenericButton2';
import NewProjectStyle from './NewProjectStyle.module.css'
import {AiFillFolderOpen} from "react-icons/ai"

export const NewProject = () => {
    return (
        <div className={NewProjectStyle.container}>
            <div className={NewProjectStyle.miniContainer}>
                <div className={NewProjectStyle.nContainer}>
                    <AiFillFolderOpen/>
                    <h3>Nuevo Proyecto</h3>
                </div>
                <h3>Nombre:</h3>
                <input type="text"></input>
                <h3>Descripcion</h3>
                <input type="text"></input>
                <h3>Cliente:</h3>
                <input type="text"></input>
                <h3>Equipo:</h3>
                <input type="text"></input>
                <GenericButton2></GenericButton2>
            </div>
        </div>
    )
}
export default NewProject;