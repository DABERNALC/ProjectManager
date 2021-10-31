import React from 'react'
import GenericButton2 from '../GenericButton2/GenericButton2'
import InconvenientStyle from "./InconvenientStyle.module.css"

export const Inconvenient = () => {
    return (
        <div className={InconvenientStyle.container}>
            <div className={InconvenientStyle.blueContainer}>
                <h2>¿Algun inconveniente?</h2>
            </div>
            <div className={InconvenientStyle.grayContainer}>
                <input type="text" placeholder="Hácelo saber al lider"/>
                <GenericButton2 text="Enviar" className={InconvenientStyle.gButton}></GenericButton2>
            </div>
        </div>
    )
}
export default Inconvenient