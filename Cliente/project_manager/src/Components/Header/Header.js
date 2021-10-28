import React from 'react'
import HeaderStyle from "./HeaderStyle.module.css";
import {MdOutlineNotificationsActive} from "react-icons/md"
import {FaUserAlt} from  "react-icons/fa"
import imagen from './images/PatoLogo.png'

const Header = () => {
    return (
        <div className={HeaderStyle.headerDiv}>
            <div className={HeaderStyle.userContainer}>
                <img className={HeaderStyle.logo} src={imagen}></img>
                <h1 className={HeaderStyle.logoName}>Gestor de proyectos</h1>
            </div>
            <div className={HeaderStyle.userContainer}>
                <MdOutlineNotificationsActive className="ListIcon"/>
                <h1 className={HeaderStyle.userName}>juan medina</h1>
                <FaUserAlt className="ListIcon"></FaUserAlt>
            </div>
        </div>
    )
}
export default Header;