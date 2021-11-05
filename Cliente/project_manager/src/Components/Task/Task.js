import React, { useState } from "react";
import TaskStyle from "./TaskStyle.module.css";
import { BsExclamationLg } from "react-icons/bs";
import AlertModal from "../AlertModal/AlertModal";
import AddTask from "../AddTask/AddTask";
import { FaTrashAlt } from "react-icons/fa";
import axiosApi from "../../Axios/api";
import swal from "sweetalert";

const Task = (props) => {
  const [showEdit, setshowEdit] = useState(false);

  const deleteTask = () =>
  {
    const params = new URLSearchParams();
    params.append("taskId", props.id);
    swal({
      title: "Esta seguro que quiere eliminar esta tarea?",
      text: "Una vez borrado no podrás recuperarlo!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        axiosApi
      .post(`/projects/deleteTask`,params)
      .then((respose) => {
          console.log(respose.data);
        swal("la tarea se elimino con exito!", {
            icon: "success",
          });
          props.refresh();
        
        
      })
      .catch((e) => {
        // console.log(Object.getOwnPropertyNames(e));
        console.log(e.response);
      });
        
      } else {
        swal("No se elimino la tarea!");
      }
    });
    
  }

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
          <div onClick={ deleteTask}>
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
