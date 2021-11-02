import React from 'react'
import GenericButton2Style from "./GenericButton2Style.module.css";

const GenericButton2 = (props) => {
    return (
        <div>
            <button className={GenericButton2Style.estiloBoton} onClick={()=>props.action} >{props.text}</button>
        </div>
    )
}
export default GenericButton2;