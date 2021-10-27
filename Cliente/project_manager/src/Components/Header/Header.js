import React from 'react'
import HeaderStyle from "./HeaderStyle.module.css";
import {MdOutlineNotificationsActive} from "react-icons/md"
import {BsPersonFill} from  "react-icons/bs"

const Header = () => {
    return (
        <div className={HeaderStyle.headerDiv}>
            <div>
                <img className={HeaderStyle.Logo} src="https://cdn140.picsart.com/290106207032211.png?type=webp&to=min&r=640"></img>
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