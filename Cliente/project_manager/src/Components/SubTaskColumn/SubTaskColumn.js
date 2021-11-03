import React, { useEffect } from "react";
import SubTaskColumnStyle from "./SubTaskColumnStyle.module.css";
import { useParams } from "react-router-dom";

const SubTaskColumn = (props) => {
  let { taskId, projectId } = useParams();

  return (
    <div className={SubTaskColumnStyle.container}>
      <div className={SubTaskColumnStyle.upperDiv}>
        <p className={SubTaskColumnStyle.title}>{props.title}</p>
      </div>
      <div className={SubTaskColumnStyle.whiteDiv}>
        {props.title == "Por hacer" ? (
          <p className={SubTaskColumnStyle.add}>+ Añadir subtarea</p>
        ) : null}
        {props.subtasks != undefined
          ? props.subtasks.map((subtask) => {
              if(subtask.idTask == taskId)
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
              ) 
              else return null
            })
          : null}
      </div>
    </div>
  );
};
export default SubTaskColumn;
