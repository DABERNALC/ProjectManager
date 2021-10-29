import React from 'react'
import SubTaskColumnStyle from "./SubTaskColumnStyle.module.css"

const SubTaskColumn = () => {
    return (
        <div className={SubTaskColumnStyle.container}>
            <div className={SubTaskColumnStyle.upperDiv}>
                <p className={SubTaskColumnStyle.title}>Por hacer</p>
            </div>
            <div className={SubTaskColumnStyle.whiteDiv}>
                <p className={SubTaskColumnStyle.add}>+ Añadir subtarea</p>
            </div>
        </div>
    )
}
export default SubTaskColumn;