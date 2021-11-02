import React, { useEffect, useState } from "react";
import TeamZoomInStyle from "./TeamZoomInStyle.module.css";
import AddParticipant from "../../Components/AddParticipant/AddParticipant";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFolder } from "react-icons/bs";
import GenericButton2 from "../GenericButton2/GenericButton2";
import { RiFilePaperLine } from "react-icons/ri";
import apiAxios from "../../Axios/api";
export const TeamZoomIn = (props) => {
  useEffect(() => {
    getTeam();
  }, []);
  const [name, setname] = useState("");
  const [participants, setparticipants] = useState([]);
  const [projects, setprojects] = useState([]);
  const getTeam = () => {
    const params = new URLSearchParams();
    apiAxios
      .get(`/teams/getTeam?TeamId=${props.teamId}`)
      .then((respose) => {
          setname(respose.data.team.name)
        setprojects(respose.data.team.proyects);
        setparticipants(respose.data.team.Participants);
        console.log("equipo: ", respose.data);
      })
      .catch((e) => {
        // console.log(Object.getOwnPropertyNames(e));
        console.log(e.response);
      });
  };
  return (
    <div
      className={TeamZoomInStyle.grayContainer}
      onClick={props.setshowTeamDetail}
    >
      <div
        className={TeamZoomInStyle.container}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={TeamZoomInStyle.blueContainer}>
          <BsFillPeopleFill fontSize="x-large" color="white" />
          <h2>{name}</h2>
          <FaRegEdit fontSize="x-large" color="white"></FaRegEdit>
        </div>
        {participants.map((participant, index) => (
          <div className={TeamZoomInStyle.personContainer}>
            <BsFillPersonFill
              fontSize="xx-large"
              color={participant.color}
            ></BsFillPersonFill>
            <h3>{participant.name}</h3>
          </div>
        ))}
        <AddParticipant></AddParticipant>
        <div className={TeamZoomInStyle.blueContainer}>
          <BsFolder fontSize="x-large" color="white" />
          <h2>Proyectos</h2>
        </div>
        {projects.map((project, index) => (
          <div className={TeamZoomInStyle.personContainer} key={index}>
            <RiFilePaperLine
              fontSize="xx-large"
              color="black"
            ></RiFilePaperLine>
            <h3>{project.name}</h3>
          </div>
        ))}
        <div  onClick={props.setshowTeamDetail} className={TeamZoomInStyle.gButton}>
            <GenericButton2
          text="Aceptar"
          
        ></GenericButton2>
        </div>
        
      </div>
    </div>
  );
};
export default TeamZoomIn;
