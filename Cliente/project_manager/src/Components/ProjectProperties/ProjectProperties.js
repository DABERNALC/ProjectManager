import React from "react";
import ProjectPropertiesStyle from "./ProjectPropertiesStyle.module.css";
import axiosApi from "../../Axios/api";
import swal from "sweetalert";

export const ProjectProperties = (props) => {
  const deleteProject = () => {
    const params = new URLSearchParams();
    params.append("projectId", props.projectId);
    swal({
      title: "Esta seguro que quiere eliminar este proyecto?",
      text: "Una vez borrado no podrás recuperarlo!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axiosApi
          .post(`/projects/delete`, params)
          .then((respose) => {
            console.log(respose.data);
            swal("el proyecto se elimino con exito!", {
              icon: "success",
            });
            
          })
          .catch((e) => {
            // console.log(Object.getOwnPropertyNames(e));
            swal({
              icon: "error",
              title: "Oops...",
              text: "No puedes eliminar un proyecto que tiene tareas!",
            });
            console.log(e.response);
          });
      } else {
        swal("No se elimino la tarea!");
      }
    });
  };
  return (
    <div className={ProjectPropertiesStyle.container}>
      <div onClick={() => props.setshowDetails(!props.showDetails)}>
        <p>Propiedades</p>
      </div>
      <div onClick={deleteProject}>
        <p>Eliminar Proyecto</p>
      </div>
    </div>
  );
};

export default ProjectProperties;
