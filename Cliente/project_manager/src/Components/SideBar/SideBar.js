import React from 'react'
import SideBarStyle from "./SideBarStyle.module.css"
const SideBar = () => {
    return (
        <div className={SideBarStyle.container}>
            <div className={SideBarStyle.leftMenu}>
                <hr></hr>
                <ul className={SideBarStyle.list}>
                    <li>Calendario</li>
                    <li>Equipos</li>
                    <li>Proyectos</li>
                </ul>
            </div>
        </div>
    )
}
export default SideBar;