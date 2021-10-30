import React from 'react'
import AlertModalStyle from "./AlertModalStyle.module.css"
import GenericButton2 from '../GenericButton2/GenericButton2'

export const AlertModal = (props) => {
    return (
        <div className={AlertModalStyle.Back}>
            <div className={AlertModalStyle.container}>
                <div className={AlertModalStyle.containerBlue}>
                <h2>¡Atención!</h2>
                </div>
                    <h3>{props.Text}</h3>
                    <div className={AlertModalStyle.containerButton}>
                        <GenericButton2 text="Aceptar"></GenericButton2>
                        <GenericButton2 text="Cancelar"></GenericButton2>
                    </div>
            </div>
        </div>
    )
}

export default AlertModal