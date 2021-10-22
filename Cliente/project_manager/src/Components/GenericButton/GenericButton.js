import React from 'react'
import GenericButtonStyle from "./GenericButtonStyle.module.css";

const GenericButton = () => {

    return (

        <div className={GenericButtonStyle.estiloBotonDiv}>
            <button className={GenericButtonStyle.estiloBoton}>Regístrate</button>
        </div>


    )

}
export default GenericButton;