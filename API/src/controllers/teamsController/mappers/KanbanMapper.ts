import { DbConnection } from "../../../components/DbConnection";
import ProjectsComponent from "../../../components/ProjectComponent/ProjectsComponent";
import KanbanDto from "../dtoObjects/KanbanDto";
import ParticipanteLoginDto from "../dtoObjects/participantLogInDto";
import TeamDto from "../dtoObjects/TeamDto";

var objectMapper = require("object-mapper");
export default class KanbanMapper {
  objectMapper: any;
  constructor() {
    this.objectMapper = objectMapper;
  }
  
  async getDto(kanbanVo: any, projectId: any) {
    
    // console.log("kanban",kanbanVo);
    
    const dbConection = DbConnection.getInstance();
    const projectsComponent = new ProjectsComponent(dbConection);
    let liderId = "";
    var toDoList: any[] = [];
    var doingList: any[] = [];
    var doneList: any[] = [];
    if(kanbanVo.length > 0){
      
      liderId = kanbanVo[0].liderId
    }else
    {
      await projectsComponent
      .getLider(projectId)
      .then((response: any) => {
        
        liderId = (response[0].IDParticipante);
      })
      .catch(() => {});
    }
    for (const task of kanbanVo) {
      
      await projectsComponent
        .getSubtarea(task.id)
        .then((subTasks: any) => {
          // console.log(task);
          
          // console.log("subtask",subTasks.length);
          
          if (subTasks.length > 0) {
            let totalStateSum = 0;
            for (let subTask of subTasks) {
              
              
              totalStateSum += subTask.Estado;
            }
            // console.log("task",totalStateSum);
            if (totalStateSum == subTasks.length) {

              doneList.push(task);
            }
            if (totalStateSum > 0 && totalStateSum < subTasks.length) {
              doingList.push(task);
            }else
            {
              toDoList.push(task);
            }
          } else {
            // console.log(task);
            toDoList.push(task);
            
          }
        })
        .catch(() => {});
    }

    const kanbanDto = new KanbanDto(liderId,projectId,toDoList,doingList,doneList); 

    return kanbanDto;
  }
}
