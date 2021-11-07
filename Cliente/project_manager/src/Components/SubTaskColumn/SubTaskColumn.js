import React, { useEffect, useState } from "react";
import SubTaskColumnStyle from "./SubTaskColumnStyle.module.css";
import { useParams } from "react-router-dom";
import AddSubtask from "../AddSubtask/AddSubtask";

import swal from "sweetalert";
import apiAxios from "../../Axios/api";
import UpdateSubtask from "../UpdateSubtask/UpdateSubtask";
import Subtask from "../Subtask/Subtask";

const SubTaskColumn = (props) => {
  let { taskId, projectId } = useParams();
  const [showAddTask, setshowAddTask] = useState(false);
  const [ShowUpdateModal, setShowUpdateModal] = useState(false);
  const deleteSubtask = (subtaskId) => {
    const params = new URLSearchParams();
    params.append("subTaskId", subtaskId);

    swal({
      title: "¿Está seguro que quiere eliminar esta subtarea?",
      text: "¡Una vez borrada no podrás recuperarla!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        apiAxios
          .post(`/projects/deleteSubtask`, params)
          .then((respose) => {
            props.refresh();
            swal("¡La subtarea ha sido eliminada!", {
              icon: "success",
            });
          })
          .catch((e) => {
            // console.log(Object.getOwnPropertyNames(e));
            console.log(e.response);
          });
      } else {
        swal("¡No se eliminó la subtask!");
      }
    });
  };
  return (
    <div className={SubTaskColumnStyle.container}>
      <div className={SubTaskColumnStyle.upperDiv}>
        <p className={SubTaskColumnStyle.title}>{props.title}</p>
      </div>
      <div className={SubTaskColumnStyle.whiteDiv}>
        {props.title == "Por hacer" ? (
          <p
            onClick={() => setshowAddTask(true)}
            className={`${
              showAddTask ? SubTaskColumnStyle.hideAddTask : null
            } ${SubTaskColumnStyle.add}`}
          >
            + Añadir subtarea
          </p>
        ) : null}
        {showAddTask ? (
          <AddSubtask
            refresh={props.refresh}
            closeModal={() => setshowAddTask(false)}
          />
        ) : null}

        {props.subtasks != undefined
          ? props.subtasks.map((subtask) => {
              if (subtask.idTask == taskId)
                return (
                  <div >
                    {
                      <>
                        <Subtask title={props.title} checkSubtask={(id)=>props.checkSubtask(id)} subtask={subtask}  deleteSubtask={(id)=>deleteSubtask(id)} refresh= {props.refresh} />
                      </>
                    }
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
