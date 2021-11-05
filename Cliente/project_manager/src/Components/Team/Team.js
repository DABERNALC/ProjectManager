import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import TeamStyle from "./TeamStyle.module.css";
import { FaTrashAlt } from "react-icons/fa";
import TeamZoomIn from "../TeamZoomIn/TeamZoonIn";

export const Team = (props) => {
  const [showTeamDetail, setshowTeamDetail] = useState(false);
  return (
    <>
      <div
        className={TeamStyle.container}
        onClick={() => {
          setshowTeamDetail(true);
        }}
      >
        <div className={TeamStyle.personContainer}>
          {props.TeamMembers.map((TeamMembers, index) => (
            <FaUserAlt
            className={TeamStyle.pIcon}
              color={TeamMembers.Color}
              key={index}
            ></FaUserAlt>
          ))}
        </div>
        <div className={TeamStyle.nameContainer}>
          <h3>{props.name}</h3>
          <div onClick={(e)=> e.stopPropagation()}>
            <FaTrashAlt size="25px"></FaTrashAlt>
          </div>
        </div>
      </div>
      {showTeamDetail ? <TeamZoomIn teamId={props.idTeam} setshowTeamDetail={()=> setshowTeamDetail(false)} /> : null}
    </>
  );
};

export default Team;
