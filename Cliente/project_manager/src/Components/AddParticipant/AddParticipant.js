import React from 'react'
import GenericButton2 from '../GenericButton2/GenericButton2'
import AddParticipantStyle from "./AddParticipantStyle.module.css"
import {GiCancel} from "react-icons/gi"

export const AddParticipant = () => {
    return (
        <div className={AddParticipantStyle.grayContainer}>
            <div className={AddParticipantStyle.inputContainer}>
                <input type="text" placeholder="Introduzca el código del usuario..."></input>
            </div>
            <div className={AddParticipantStyle.buttonContainer}>
                <GenericButton2 text="Añadir"></GenericButton2>
                <GiCancel fontSize="x-large"></GiCancel>
            </div>
        </div>
    )
}

export default AddParticipant
