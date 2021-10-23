import React from 'react'
import GenericButton1 from '../GenericButton1/GenericButton1';
import GenericButton2 from '../GenericButton2/GenericButton2';
import NoProjectsStyle from "./NoProjectsStyle.module.css";

const NoProjects = () => {

    return (
        <div className={NoProjectsStyle.container}>
            <div className={NoProjectsStyle.grayContainer}>
                <img src="https://cdn-icons-png.flaticon.com/512/1087/1087815.png"></img>
            </div>
            <p>¡Crea un proyecto y agrégale un equipo!</p>
            <div className={NoProjectsStyle.buttonDiv}>
                <GenericButton2 text="Agregar proyecto"></GenericButton2>
            </div>
        </div>
    )
}
export default NoProjects;