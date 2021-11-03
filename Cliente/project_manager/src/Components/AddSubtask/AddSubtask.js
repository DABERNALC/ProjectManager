import React, { useState } from "react";
import GenericButton1 from "../GenericButton1/GenericButton1";
import { GiCancel } from "react-icons/gi";
import axiosApi from "../../Axios/api";
import { useParams } from "react-router";
import swal from "sweetalert";

const AddSubtask = (props) => {
  const [subTaskText, setSubTaskText] = useState("");
  const [subTaskTextError, setSubTaskTextError] = useState(false)
  const {taskId}=useParams();
  const createsubtask=()=>
  {
      if(subTaskText.length > 0 && subTaskText.length <50)
      {
        const params = new URLSearchParams();
        params.append("description", subTaskText);
        params.append("taskId", taskId);
        axiosApi
        .post("/projects/addSubtask", params)
        .then((response) => {
            props.refresh();
            swal(
                "sub tarea agregada correctamente",
                "recuerda que los estados de la tarea dependen de la subtarea"
              );
          alert("subtarea agregada")
        })
        .catch((error) => {
            swal({
                icon: 'error',
                title: "Error agregando subtarea",
                text: "no hemos podido crear la subtarea, intenta mas tarde",
                footer: '<a href="">Why do I have this issue?</a>'
              })
        });
      }
      else
      {
          setSubTaskTextError(true)
      }
  }
  return (
    <div>
        {
            subTaskTextError ?
            <p style={{color:"red"}}>debes escribir una descripción de la subtarea menor a 50 caracteres</p>:
            null
        }
      <textarea 
      value={subTaskText}
      onChange={(e) => {
        setSubTaskTextError(false);
        setSubTaskText(e.target.value);
      }}
      />
      <div onClick={createsubtask}>
      <GenericButton1
        nombre="añadir"
      />
      </div>
      <div onClick={props.closeModal}>
      <GiCancel fontSize="x-large"></GiCancel>
      </div>
    </div>
  );
};

export default AddSubtask;
