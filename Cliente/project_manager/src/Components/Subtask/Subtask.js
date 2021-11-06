import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import UpdateSubtask from "../UpdateSubtask/UpdateSubtask";
import SubTaskStyle from "./SubTaskStyle.module.css";

const Subtask = (props) => {
  const [showUpdate, setshowUpdate] = useState(false);
  return (
    <div>
      {!showUpdate ? (
        <div className={SubTaskStyle.container}>
          <input
          className={SubTaskStyle.checkbox}
            type="checkbox"
            value=""
            checked={props.title != "Por hacer" ? true : false}
            onChange={() => props.checkSubtask(props.subtask.id)}
          />
          <label
            onClick={() => setshowUpdate(true)}
            for="cbox2"
            className={`${
               props.title != "Por hacer" ? SubTaskStyle.completed : null
             }`}
          >
            {props.subtask.description}
          </label>
          <div onClick={() => props.deleteSubtask(props.subtask.id)}>
            <AiFillDelete />
          </div>
        </div>
      ) : (
        <UpdateSubtask refresh = {props.refresh}closeModal={() => setshowUpdate(false)} subtask={props.subtask}/>
      )}
    </div>
  );
};

export default Subtask;
