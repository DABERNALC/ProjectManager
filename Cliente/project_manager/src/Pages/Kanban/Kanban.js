import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import GenericButton1 from "../../Components/GenericButton1/GenericButton1";
import KanbanColumn from "../../Components/KanbanColumn/KanbanColumn";

import KanbanStyle from "./KanbanStyle.module.css";
import axiosApi from "../../Axios/api";
import Spinner from "../../Components/Spinner/Spinner";
function Kanban() {
  const [projectData, setprojectData] = useState({
    doing: [],
    done: [],
    toDo: [],
    projectId: "",
  });
  const [loading, setloading] = useState(true);
  let { projectId } = useParams();
  const getTeam = () => {
    axiosApi
      .get(`/projects/getKanban?projectId=${projectId}`)
      .then((project) => {
        setloading(false);
        console.log("data",project.data.data);
        setprojectData(project.data.data);
      })
      .catch((error)=>{
          console.log(error);
      });
  };

  
  useEffect(() => {
    getTeam();
  }, []);

  return (
    <div>
      <h1 className={KanbanStyle.title}>Asistente Virtual</h1>
      <h3>WPT Team</h3>
      <div className={KanbanStyle.kanbanContainerCentered}>
        <div className={KanbanStyle.kanbanContainer}>
          <h1>Kanban</h1>
          {loading ? (
            <div className ={KanbanStyle.spinnerContainer}>
              <Spinner />
            </div>
          ) : (
            <div className={KanbanStyle.columnsContainers}>
              <KanbanColumn title="TO DO" tasks={projectData.toDo}></KanbanColumn>
              <KanbanColumn title="DOING" tasks={projectData.doing}></KanbanColumn>
              <KanbanColumn title="DONE" tasks={projectData.done}></KanbanColumn>
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

export default Kanban;
