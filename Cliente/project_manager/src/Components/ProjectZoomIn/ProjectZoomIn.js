import React from 'react'
import ProjectZoomInStyle from "./ProjectZoomInStyle.module.css"
import GenericButton2 from '../GenericButton2/GenericButton2'
import {BsFolder} from "react-icons/bs"
import {BsFillPeopleFill} from "react-icons/bs"


export const ProjectZoomIn = (props) => {
    return (
        <div className={ProjectZoomInStyle.Back}>
            <div className={ProjectZoomInStyle.container}>
                <div className={ProjectZoomInStyle.containerBlue}>
                    <BsFolder className={ProjectZoomInStyle.icons}/>
                    <h2>Proyecto</h2>
                </div>
                <div className={ProjectZoomInStyle.textContainer}>
                    <h3>Nombre</h3>
                    <p>{props.NombreProjecto}</p>
                    <h3>Descripcion</h3>
                    <p>{props.DescripcionProjecto}</p>
                </div>

                <div className={ProjectZoomInStyle.containerBlue}>
                    <h2>Cliente</h2>
                </div>
                <div className={ProjectZoomInStyle.textContainer}>
                    <h3>Nombre</h3>
                    <p>{props.NombreCliente}</p>
                </div>

                <div className={ProjectZoomInStyle.containerBlue}>
                    <BsFillPeopleFill className={ProjectZoomInStyle.icons}/>
                    <h2>Equipo</h2>
                </div>
                <div className={ProjectZoomInStyle.textContainer}>
                    <h3>Nombre</h3>
                    <p>{props.NombreEquipo}</p>
                </div>

                <div className={ProjectZoomInStyle.buttonContainer}>
                    <GenericButton2 text="Editar"></GenericButton2>
                    <GenericButton2 text="Aceptar"></GenericButton2>
                </div>

            </div>
        </div>
    )
}

export default ProjectZoomIn