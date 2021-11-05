import React, { useState } from "react";
import GenericButton2 from "../../Components/GenericButton2/GenericButton2";
import NewProjectStyle from "./NewProject.module.css";
import { AiFillFolderOpen } from "react-icons/ai";
import { connect } from "react-redux";
import axiosApi from "../../Axios/api";
import swal from "sweetalert";
import * as actionCreators from "../../Store/Actions/UserInfo";

export const NewProject = (props) => {
  const [projectName, setprojectName] = useState("");
  const [nameError, setnameError] = useState(false);
  const [description, setdescription] = useState("");
  const [descriptionError, setdescriptionError] = useState(false);
  const [idTeam, setidTeam] = useState(-1);
  const [idTeamError, setidTeamError] = useState(false);
  const [customerName, setcustomerName] = useState("");
  const [customerNameError, setcustomerNameError] = useState(false);

  const createProject = () => {
    if (checkParameters()) {
      const params = new URLSearchParams();
      params.append("Name", projectName);
      params.append("Description", description);
      params.append("IdTeam", idTeam);
      params.append("CustomerName", customerName);
      params.append("liderId", props.liderId);
      axiosApi
        .post("/projects/create", params)
        .then((response) => {
          console.log(response.data)
          swal(
            "proyecto creado correctamente",
            "ahora puedes acceder a su kanban"
          );
          props.refreshUserData({ participantId: props.liderId });
        })
        .catch((error) => {
          swal({
            icon: 'error',
            title: "Error creando proyecto",
            text: "Intente mas tarde",
            footer: '<a href="">Why do I have this issue?</a>'
          })
        });
    }
  };
  const checkParameters = () => {
    let isOk = true;
    if (!(projectName.length >= 1 && projectName.length < 30)) {
      setnameError(true);
      isOk = false;
    }
    if (!(description.length >= 1 && description.length < 50)) {
      setdescriptionError(true);
      isOk = false;
    }
    if (!(idTeam.length >= 1)) {
      setidTeamError(true);
      isOk = false;
    }
    if (!(customerName.length >= 1 && customerName.length < 30)) {
      setcustomerNameError(true);
      isOk = false;
    }
    if (idTeam == -1) {
      setidTeamError(true);
      isOk = false;
    }
    return isOk;
  };

  return (
    <div className={NewProjectStyle.container} onClick={props.setshowModal}>
      <div
        className={NewProjectStyle.miniContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={NewProjectStyle.nContainer}>
          <div className={NewProjectStyle.iconDiv}>
          <AiFillFolderOpen className={NewProjectStyle.upperIcon}/>
          </div>
          <h3 className={NewProjectStyle.title1}>Nuevo Proyecto</h3>
        </div>
        <h3 className={NewProjectStyle.titles}>Nombre</h3>
        {nameError ? (
          <p style={{ color: "red" }}>
            debes poner un nombre menor a 30 caracteres{" "}
          </p>
        ) : null}
        <input
          className={` ${NewProjectStyle.inputStle}  ${nameError ? NewProjectStyle.notValid : null}`}
          type="text"
          value={projectName}
          onChange={(e) => {
            setnameError(false);
            setprojectName(e.target.value);
          }}
        ></input>
        <h3 className={NewProjectStyle.titles} >Descripción</h3>
        {descriptionError ? (
          <p style={{ color: "red" }}>
            debes poner una Descripcion menor a 50 caracteres{" "}
          </p>
        ) : null}
        <textarea
          className={` ${NewProjectStyle.descInput}  ${
            descriptionError ? NewProjectStyle.notValid : null
          }`}
          value={description}
          onChange={(e) => {
            setdescriptionError(false);
            setdescription(e.target.value);
          }}
        ></textarea>
        <h3 className={NewProjectStyle.titles} >Cliente</h3>
        {customerNameError ? (
          <p style={{ color: "red" }}>
            debes poner un nombre menor a 30 caracteres{" "}
          </p>
        ) : null}
        <input
          className={`  ${NewProjectStyle.inputStle}  ${
            customerNameError ? NewProjectStyle.notValid : null
          }`}
          type="text"
          value={customerName}
          onChange={(e) => {
            setcustomerNameError(false);
            setcustomerName(e.target.value);
          }}
        ></input>
        <h3 className={NewProjectStyle.titles} >Equipo</h3>
        <select
          value={idTeam}
          className={` ${NewProjectStyle.inputStyle}   ${idTeamError ? NewProjectStyle.notValid : null}`}
          onChange={(e) => {
            setidTeamError(false);
            setidTeam(e.target.value);
          }}
        >
          <option hidden selected value="-1">
            Seleccione equipo
          </option>
          {props.teams.map((theTeam) => (
            <option value={theTeam.idTeam}>{theTeam.name}</option>
          ))}
        </select>
        <div className={NewProjectStyle.buttonDiv} onClick={createProject}>
          <GenericButton2 text="crear proyecto" />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  
  return {
    teams: state.UserInfo.teams,
    liderId: state.UserInfo.id,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    refreshUserData: (payload) =>
      dispatch(actionCreators.refreshUserData(payload)),
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(NewProject);
