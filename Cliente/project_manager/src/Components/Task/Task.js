import React, { useState } from "react";
import TaskStyle from "./TaskStyle.module.css";
import { BsExclamationLg } from "react-icons/bs";
import AlertModal from "../AlertModal/AlertModal";
import AddTask from "../AddTask/AddTask";
import { FaTrashAlt } from "react-icons/fa";

const Task = (props) => {
  const [showEdit, setshowEdit] = useState(false);
  return (
    <div
      className={TaskStyle.colorDiv}
      style={{ backgroundColor: `${props.color}` }}
    >
      {showEdit ? (
        <>
          <AddTask
            setAddTask={() => setshowEdit(false)}
            description={props.desc}
            priority={props.priority}
            date={props.date}
            id={props.id}
            refresh={props.refresh}
          />
          <div onClick={() => alert("eliminado compa")}>
            <FaTrashAlt size="25px"></FaTrashAlt>
          </div>
        </>
      ) : (
        <div className={TaskStyle.whiteDiv} onClick={() => setshowEdit(true)}>
          <div className={TaskStyle.taskTextDiv}>
            <p className={TaskStyle.taskTex}>{props.desc}</p>
          </div>
          {props.priority === 2 ? (
            <BsExclamationLg
              className={TaskStyle.exclamationIcon}
            ></BsExclamationLg>
          ) : null}
        </div>
      )}
    </div>
  );
};
export default Task;
