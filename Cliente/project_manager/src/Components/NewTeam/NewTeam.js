import React from 'react'
import NewTeamStyle from "./NewTeamStyle.module.css"
import AddParticipant from '../../Components/AddParticipant/AddParticipant'
import {BsFolder} from "react-icons/bs"

export const NewTeam = () => {
    return (
        <div className={NewTeamStyle.grayContainer}>
            <div className={NewTeamStyle.container}>
                <div className={NewTeamStyle.blueContainer}>
                    <BsFolder fontSize="x-large" color="white"/>
                    <h2>Nuevo Equipo</h2>
                </div>
                <h2>Nombre</h2>
                <input type="text" className={NewTeam.nameInput}></input>
                <h2>Participantes</h2>
                <AddParticipant></AddParticipant>
            </div>
        </div>
    )
}
export default NewTeam