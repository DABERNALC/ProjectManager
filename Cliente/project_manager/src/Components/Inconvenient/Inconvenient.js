import React from 'react'
import GenericButton2 from '../GenericButton2/GenericButton2'
import InconvenientStyle from "./InconvenientStyle.module.css"

export const Inconvenient = () => {
    return (
        <div className={InconvenientStyle.container}>
            <div className={InconvenientStyle.blueContainer}>
                <h2>¿Algún inconveniente?</h2>
            </div>
            <div className={InconvenientStyle.grayContainer}>
                <textarea type="text" placeholder="Escríbele al líder" />
                <div className={InconvenientStyle.buttonDiv}>
                    <GenericButton2 text="Enviar" className={InconvenientStyle.gButton}></GenericButton2>
                </div>
            </div>
        </div>
    )
}
export default Inconvenient