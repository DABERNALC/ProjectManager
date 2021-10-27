import React from 'react'
import GenericButton1 from '../GenericButton1/GenericButton1';
import GenericButton2 from '../GenericButton2/GenericButton2';
import NoTeamsStyle from "./NoTeamsStyle.module.css";

const NoTeams = () => {

    return (
        <div className={NoTeamsStyle.container}>
            <div className={NoTeamsStyle.grayContainer}>
                <img src="https://freepikpsd.com/file/2019/10/equipo-de-trabajo-png-Transparent-Images-300x274.png"></img>
            </div>
            <p>¡Crea equipo!</p>
            <div className={NoTeamsStyle.buttonDiv}>
                <GenericButton2 text="Agregar Equipo"></GenericButton2>
            </div>
        </div>
    )
}
export default NoTeams;