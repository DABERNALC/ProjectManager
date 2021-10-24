import React from 'react'
import HeaderStyle from "./HeaderStyle.module.css";
import {MdOutlineNotificationsActive} from "react-icons/md"
import {BsPersonFill} from  "react-icons/bs"

const Header = () => {
    return (
        <div className={HeaderStyle.headerDiv}>
            <div>
                <img className={HeaderStyle.Logo} src="https://pbs.twimg.com/profile_images/1242209432395821056/4oXFs5fd.jpg"></img>
                <h1>Gestor de proyectos</h1>
            </div>
            <div>
                <MdOutlineNotificationsActive/>
                <h3>juan medina</h3>
                <BsPersonFill></BsPersonFill>
            </div>
        </div>
    )
}
export default Header;