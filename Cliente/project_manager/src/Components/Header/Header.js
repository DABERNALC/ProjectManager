import React from 'react'
import HeaderStyle from "./HeaderStyle.module.css";
import {MdOutlineNotificationsActive} from "react-icons/md"
import {BsPersonFill} from  "react-icons/bs"

const Header = () => {
    return (
        <div className={HeaderStyle.headerDiv}>
            <div className={HeaderStyle.userContainer}>
                <img className={HeaderStyle.Logo} src="https://i.ytimg.com/an/6e4DSZENXmj9JIKy1klERw/featured_channel.jpg?v=5f041405"></img>
                <h3>Gestor de proyectos</h3>
            </div>
            <div className={HeaderStyle.userContainer}>
                <MdOutlineNotificationsActive className="ListIcon"/>
                <h3>juan medina</h3>
                <BsPersonFill className="ListIcon"></BsPersonFill>
            </div>
        </div>
    )
}
export default Header;