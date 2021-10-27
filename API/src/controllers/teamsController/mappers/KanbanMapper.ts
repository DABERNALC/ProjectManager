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
    const dbConection = DbConnection.getInstance();
    const projectsComponent = new ProjectsComponent(dbConection);
    var toDoList: any[] = [];
    var doingList: any[] = [];
    var doneList: any[] = [];
    for (const task of kanbanVo) {
      await projectsComponent
        .getSubtarea(task.id)
        .then((subTasks: any) => {
          if (subTasks.length > 0) {
            let totalStateSum = 0;
            for (let subTask of subTasks) {
              totalStateSum += subTask.Estado;
            }
            if (totalStateSum == subTasks.length) {

              doneList.push(task);
            }
            if (totalStateSum > 0 && totalStateSum < subTasks.length) {
              doingList.push(task);
            }
          } else {
            toDoList.push(task);
            
          }
        })
        .catch(() => {});
    }

    const kanbanDto = new KanbanDto(projectId,toDoList,doingList,doneList); 

    return kanbanDto;
  }
}
