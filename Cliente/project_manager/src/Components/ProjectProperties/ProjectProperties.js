import React from 'react'
import ProjectPropertiesStyle from "./ProjectPropertiesStyle.module.css"

export const ProjectProperties = (props) => {
    return (
        <div className={ProjectPropertiesStyle.container}>
            <div onClick= {()=>props.setshowDetails(!props.showDetails)}>
                <p>Propiedades</p>
            </div>
            <div>
                <p>Eliminar Proyecto</p>
            </div>
        </div>
    )
}

export default ProjectProperties
