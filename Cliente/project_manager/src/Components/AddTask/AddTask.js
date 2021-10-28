import React from 'react'
import AddTaskStyle from "./AddTaskStyle.module.css";
import {GiCancel} from  "react-icons/gi"

const AddTask = (props) => {
    return (
        <div className={AddTaskStyle.container}>
            <p>Descripción</p>
            <form>
                <textarea className={AddTaskStyle.descInput}></textarea>
                <select></select>
                <select></select>
                <input type="checkbox"></input>
                <button></button>
                <GiCancel></GiCancel>
            </form>
        </div>
    )
}
export default AddTask;