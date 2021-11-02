import React, { useState } from "react";
import NewTeamStyle from "./NewTeamStyle.module.css";
import AddParticipant from "../../Components/AddParticipant/AddParticipant";
import { BsFolder } from "react-icons/bs";
import GenericButton1 from "../GenericButton2/GenericButton2";
import apiAxios from "../../Axios/api";
import { connect } from "react-redux";
import swal from 'sweetalert'
import * as actionCreators from "../../Store/Actions/UserInfo";
export const NewTeam = (props) => {
  const [teamName, setteamName] = useState("");
  const [teamNameError, setteamNameError] = useState(false);

  const createTeam = () => {
    if (checkParameters()) {
      const params = new URLSearchParams();
      params.append("teamName", teamName);
      params.append("liderId",props.liderId);
      apiAxios.post("/teams/create",params).then((respose)=>{
        swal("equipo creado correctamente", "ahora puedes añadir participantes a este equipo" )
        props.refreshUserData({participantId:props.liderId})
        props.setshowModal();
      }).catch((e)=>{
        // console.log(Object.getOwnPropertyNames(e));
        console.log(e.response);
      });
    }
  };
  const checkParameters = () => {
    let isOk = true;
    if (!(teamName.length >= 1 && teamName.length < 30)) {
      setteamNameError(true);
      isOk = false;
    }
    return isOk;
  };
  return (
    <div
      className={NewTeamStyle.grayContainer}
      onClick={() => props.setshowModal()}
    >
      <div
        className={NewTeamStyle.container}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={NewTeamStyle.blueContainer}>
          <BsFolder fontSize="x-large" color="white" />
          <h2>Nuevo Equipo</h2>
        </div>
        <p>
          Los equipos ayudan a organizar personas dentro de un mismo projecto,
          comencemos por darle un nombre
        </p>
        <h2>Nombre</h2>
        {teamNameError ? (
          <p style={{ color: "red" }}>
            el nombre del equipo no puede estar vacio, ni ser mayor a 30
            caracteres
          </p>
        ) : null}
        <input
          type="text"
          className={`${NewTeamStyle.nameInput}   ${
            teamNameError ? NewTeamStyle.notValid : null
          }`}
          value={teamName}
          onChange={(e) => {
            setteamNameError(false);
            setteamName(e.target.value);
          }}
        />

        <div onClick={() => createTeam()}>
          <GenericButton1 text="Crear equipo" />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    liderId: state.UserInfo.id,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    refreshUserData:(payload) => dispatch(actionCreators.refreshUserData(payload))
  };
};
export default connect(mapStateToProps,mapDispatchToProps) (NewTeam);
