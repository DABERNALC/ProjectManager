import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import GenericButton1 from "../../Components/GenericButton1/GenericButton1";
import KanbanColumn from "../../Components/KanbanColumn/KanbanColumn";

import KanbanStyle from "./KanbanStyle.module.css";
import axiosApi from "../../Axios/api";
import Spinner from "../../Components/Spinner/Spinner";
import { connect } from "react-redux";
function Kanban(props) {
  const [projectData, setprojectData] = useState({
    doing: [],
    done: [],
    toDo: [],
    projectId: "",
  });
  const [loading, setloading] = useState(true);
  const [projectName, setprojectName] = useState("")
  const [teamName, setteamName] = useState("")
  const [teamId,setTeamId] = useState(""); 
  let { projectId } = useParams();
  const getTeam = () => {
    setloading(true)
    axiosApi
      .get(`/projects/getKanban?projectId=${projectId}`)
      .then((project) => {
        setloading(false);
        let proyectName = 
        props.projects.forEach(project => {
            if(project.proyectId == projectId)
            {
                setprojectName(project.proyectName)
                setteamName(project.teamName);
                setTeamId(project.teamId)
            }

        });
        setprojectData(project.data.data);
      })
      .catch((error)=>{
          console.log(error.error);
      });
  };

  
  useEffect(() => {
    getTeam();
  }, []);

  return (
    <div>
      <h1 className={KanbanStyle.title}>{projectName}</h1>
      <h3>{teamName}</h3>
      <div className={KanbanStyle.kanbanContainerCentered}>
        <div className={KanbanStyle.kanbanContainer}>
          <h1>Kanban</h1>
          {loading ? (
            <div className ={KanbanStyle.spinnerContainer}>
              <Spinner />
            </div>
          ) : (
            <div className={KanbanStyle.columnsContainers}>
              <KanbanColumn title="TO DO" tasks={projectData.toDo} teamId={teamId} refresh={()=>{getTeam()}}></KanbanColumn>
              <KanbanColumn title="DOING" tasks={projectData.doing} teamId={teamId}></KanbanColumn>
              <KanbanColumn title="DONE" tasks={projectData.done} teamId={teamId}></KanbanColumn>
            </div>
          )}
        </div>
      </div>
      <div className={KanbanStyle.buttonStyle}>
        <GenericButton1 nombre="Checklist >"></GenericButton1>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
    return {
        projects: state.UserInfo.proyects
    };
  };
export default connect(mapStateToProps) (Kanban);
