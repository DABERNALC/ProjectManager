import React from "react";
import SubTaskColumnStyle from "./SubTaskColumnStyle.module.css";

const SubTaskColumn = (props) => {
  return (
    <div className={SubTaskColumnStyle.container}>
      <div className={SubTaskColumnStyle.upperDiv}>
        <p className={SubTaskColumnStyle.title}>{props.title}</p>
      </div>
      <div className={SubTaskColumnStyle.whiteDiv}>
        {props.title == "Por hacer" ? (
          <p className={SubTaskColumnStyle.add}>+ Añadir subtarea</p>
        ) : null}
        {
        props.subtasks != undefined ?
        props.subtasks.map((subtask) => (
          <div>
            <input type="checkbox" value=""/>
            <label for="cbox2">{subtask.description}</label>
            
          </div>
        )):null
        }
      </div>
    </div>
  );
};
export default SubTaskColumn;
