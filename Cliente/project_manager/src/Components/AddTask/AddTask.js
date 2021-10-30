import React, { useEffect } from 'react'
import AddTaskStyle from "./AddTaskStyle.module.css";
import { GiCancel } from "react-icons/gi"
import { connect } from 'react-redux';
import { useParams } from 'react-router';

const  AddTask = (props) => {
    const teamId = useParams();
    useEffect(() => {
        alert(props.teams)
    }, [props])
    return (
        <div className={AddTaskStyle.container}>
            <p>Descripción</p>
            <form>
                <textarea className={AddTaskStyle.descInput}></textarea>
                <div className={AddTaskStyle.selectDiv}>
                    <select>
                        
                    </select>
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
                    <GiCancel onClick={() => props.setAddTask(false)} className={AddTaskStyle.icon}></GiCancel>
                </div>
            </form>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        teams: state.UserInfo.teams
    };
  };
export default connect(mapStateToProps)(AddTask);