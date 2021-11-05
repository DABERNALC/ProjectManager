import React from 'react'
import Teams from '../../Pages/Teams/Teams';
import GenericButton1 from '../GenericButton1/GenericButton1';
import GenericButton2 from '../GenericButton2/GenericButton2';
import NoTeamsStyle from "./NoTeamsStyle.module.css";
import imagen from './images/teams.png'
const NoTeams = (props) => {

    return (
        <div className={NoTeamsStyle.container}>
            <div className={NoTeamsStyle.grayContainer}>
                <img src={imagen}></img>

            </div>
            <p>¡Crea equipo!</p>
            <div className={NoTeamsStyle.buttonDiv} onClick={()=> props.setshowModal()}>
                <GenericButton2 text="Agregar Equipo"></GenericButton2>
            </div>
        </div>
    )
}
export default NoTeams;