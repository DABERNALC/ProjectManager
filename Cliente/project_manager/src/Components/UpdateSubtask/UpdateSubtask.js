import React, { useEffect, useState } from "react";
import GenericButton1 from "../GenericButton1/GenericButton1";
import UpdateSubTaskStyle from "./UpdateSubtaskStyle.module.css";
import { GiCancel } from "react-icons/gi";
import axiosApi from "../../Axios/api";
import { useParams } from "react-router";
import swal from "sweetalert";

const UpdateSubtask = (props) => {
  const [subTaskText, setSubTaskText] = useState("update");
  const [subTaskTextError, setSubTaskTextError] = useState(false)
  
  useEffect(() => {
    setSubTaskText(props.subtask.description)
  }, [])
  const updateSubtask = () => {
    if (subTaskText.length > 0 && subTaskText.length < 50) {
      const params = new URLSearchParams();
      params.append("description", subTaskText);
      params.append("subTaskId", props.subtask.id);
      axiosApi
        .post("/projects/updateSubTask", params )
        .then((response) => {
          props.refresh();
          props.closeModal();
          swal(
            "Subtarea modificada correctamente",
            "Recuerda que los estados de la tarea dependen de la subtarea",
            'success'
          );
          setSubTaskText("");
        })
        .catch((error) => {
          console.log(error);
          swal({
            icon: 'error',
            title: "Error modificando subtarea",
            text: "N  o hemos podido crear la subtarea, intenta mas tarde...",
            footer: '<a href="">Why do I have this issue?</a>'
          })
        });
    }
    else {
      setSubTaskTextError(true)
    }
  }
  return (
    <div className={UpdateSubTaskStyle.container}>
      {
        subTaskTextError ?
          <p style={{ color: "red" }}>Debes escribir una descripción que sea menor a 50 caracteres</p> :
          null
      }
      <textarea className={UpdateSubTaskStyle.textareaStyle}
        value={subTaskText}
        onChange={(e) => {
          setSubTaskTextError(false);
          setSubTaskText(e.target.value);
        }}
      />
      <div className={UpdateSubTaskStyle.buttonCancel}>
        <div onClick={updateSubtask}>
          <button className={UpdateSubTaskStyle.buttonStyle}
            nombre="modificar"
          >modificar</button>
        </div>
        <div onClick={props.closeModal}>
          <GiCancel className={UpdateSubTaskStyle.icon} fontSize="x-large"></GiCancel>
        </div>
      </div>

    </div>

  );
};

export default UpdateSubtask;
