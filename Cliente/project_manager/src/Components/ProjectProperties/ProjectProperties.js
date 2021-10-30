import React from 'react'
import ProjectPropertiesStyle from "./ProjectPropertiesStyle.module.css"

export const ProjectProperties = () => {
    return (
        <div className={ProjectPropertiesStyle.container}>
            <div>
                <p>Propiedades</p>
            </div>
            <div>
                <p>Eliminar Proyecto</p>
            </div>
        </div>
    )
}

export default ProjectProperties
