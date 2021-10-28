import React from 'react'
import AddTaskStyle from "./AddTaskStyle.module.css";
import { GiCancel } from "react-icons/gi"

const AddTask = (props) => {
    return (
        <div className={AddTaskStyle.container}>
            <p>Descripción</p>
            <form>
                <textarea className={AddTaskStyle.descInput}></textarea>
                <div className={AddTaskStyle.selectDiv}>
                    <select></select>
                    <select></select>
                </div>
                <div className={AddTaskStyle.dateAndCheck}>
                    <input type="date" className={AddTaskStyle.calendarStyle}></input>
                    <div className={AddTaskStyle.checkwithtext}>
                        <input type="checkbox" className={AddTaskStyle.checkStyle}></input>
                        <p>Relevante para cliente</p>
                    </div>
                </div>
                <div className={AddTaskStyle.buttonCancel}>
                <button className={AddTaskStyle.buttonStyle}>Aceptar</button>
                <GiCancel onClick={()=> props.setAddTask(false)}></GiCancel>
                </div>   
            </form>
        </div>
    )
}
export default AddTask;