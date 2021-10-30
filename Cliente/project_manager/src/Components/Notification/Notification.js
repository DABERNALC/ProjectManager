import React from 'react'
import NotificationStyle from "./NotificationStyle.module.css"
import {MdNotificationsOff} from "react-icons/md"

export const Notification = (props) => {
    return (
        <div className={NotificationStyle.container}>
            <div className={NotificationStyle.grayDiv}></div>
            <div className={NotificationStyle.textContainer}>
                {
                    props.notifications.length>0?
                        props.notifications.map(  noti => (<p>{noti}</p>))
                    :
                        <div className={NotificationStyle.noNoti}>
                            <MdNotificationsOff className={NotificationStyle.noNotiLogo}/>
                            <p>¡No hay notificaciones!</p>
                        </div>
                }
            </div>
        </div>
    )
}
export default Notification;
