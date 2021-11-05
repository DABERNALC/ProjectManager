import React, { useEffect, useState } from "react";
import SubTaskColumnStyle from "./SubTaskColumnStyle.module.css";
import { useParams } from "react-router-dom";
import AddSubtask from "../AddSubtask/AddSubtask";
import { AiFillDelete } from 'react-icons/ai';
import swal from "sweetalert";
import apiAxios from "../../Axios/api";

const SubTaskColumn = (props) => {
  let { taskId, projectId } = useParams();
  const [showAddTask, setshowAddTask] = useState(false);
  const deleteSubtask = (subtaskId)=>
  {
    const params = new URLSearchParams();
    params.append("subTaskId", subtaskId);
    

    swal({
      title: "Esta seguro que quiere eliminar esta subtarea",
      text: "Una vez borrado no podrás recuperarlo!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        apiAxios
      .post(`/projects/deleteSubtask`,params)
      .then((respose) => {
        swal("la subtarea ha sido eliminada!", {
          icon: "success",
        });
        props.refresh()
      })
      .catch((e) => {
        // console.log(Object.getOwnPropertyNames(e));
        console.log(e.response);
      });
        
      } else {
        swal("No se elimino la subtask!");
      }
    });
  }
  return (
    <div className={SubTaskColumnStyle.container}>
      <div className={SubTaskColumnStyle.upperDiv}>
        <p className={SubTaskColumnStyle.title}>{props.title}</p>
      </div>
      <div className={SubTaskColumnStyle.whiteDiv}>
        {props.title == "Por hacer" ? (
          <p  onClick={()=> setshowAddTask(true)} className={`${showAddTask ? SubTaskColumnStyle.hideAddTask:null} ${SubTaskColumnStyle.add}`}>+ Añadir subtarea</p>
        ) : null}
        {showAddTask ? <AddSubtask refresh={props.refresh} closeModal={()=>setshowAddTask(false)} /> : null}

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
                    <div onClick={()=>deleteSubtask(subtask.id)} >
                      <AiFillDelete />
                    </div>
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
