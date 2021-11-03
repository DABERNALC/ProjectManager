import React, { useEffect, useState } from "react";
import SubTaskColumnStyle from "./SubTaskColumnStyle.module.css";
import { useParams } from "react-router-dom";
import AddSubtask from "../AddSubtask/AddSubtask";

const SubTaskColumn = (props) => {
  let { taskId, projectId } = useParams();
  const [showAddTask, setshowAddTask] = useState(false);
  return (
    <div className={SubTaskColumnStyle.container}>
      <div className={SubTaskColumnStyle.upperDiv}>
        <p className={SubTaskColumnStyle.title}>{props.title}</p>
      </div>
      <div className={SubTaskColumnStyle.whiteDiv}>
        {props.title == "Por hacer" ? (
          <p  onClick={()=> setshowAddTask(true)} className={`${showAddTask ? SubTaskColumnStyle.hideAddTask:null} ${SubTaskColumnStyle.add}`}>+ Añadir subtarea</p>
        ) : null}
        {showAddTask ? <AddSubtask refresh={props.refresh} /> : null}

        {props.subtasks != undefined
          ? props.subtasks.map((subtask) => {
              if (subtask.idTask == taskId)
                return (
                  <div>
                    <input
                      type="checkbox"
                      value=""
                      checked={props.title != "Por hacer" ? true : false}
                      onChange={() => props.checkSubtask(subtask.id)}
                    />
                    <label
                      for="cbox2"
                      className={`${
                        props.title != "Por hacer"
                          ? SubTaskColumnStyle.completed
                          : null
                      }`}
                    >
                      {subtask.description}
                    </label>
                  </div>
                );
              else return null;
            })
          : null}
      </div>
    </div>
  );
};
export default SubTaskColumn;
