import { DbConnection } from "../../../components/DbConnection";
import ProjectsComponent from "../../../components/ProjectComponent/ProjectsComponent";
import KanbanDto from "../dtoObjects/KanbanDto";
import ParticipanteLoginDto from "../dtoObjects/participantLogInDto";
import SubtasksDto from "../dtoObjects/SubtasksDto";
import TeamDto from "../dtoObjects/TeamDto";

var objectMapper = require("object-mapper");
export default class SubtasksMapper {
  objectMapper: any;
  constructor() {
    this.objectMapper = objectMapper;
  }
  
  async getDto(subtasksVo: any) {
    var toDoList: any[] = [];
    var doneList: any[] = [];
    var tasks: any[] = [];
    var idProject = subtasksVo[0].IDProyecto;
    console.log(subtasksVo);
    
    for(const subtasks of  subtasksVo)
    {
      tasks.push({idTask: subtasks.idTask, 
        description: subtasks.taskDescription,
        Inconveninients: subtasks.Inconvenientes,
        IDParticipante:subtasks.IDParticipante
      })
      if(subtasks.Estado == 1)
      {
        doneList.push({
          idTask: subtasks.idTask,
          id: subtasks.ID,
          description: subtasks.Descripcion,
        });
      }
      if(subtasks.Estado == 0)
      {
        toDoList.push({
          idTask: subtasks.idTask,
          id: subtasks.ID,
          description: subtasks.Descripcion,
        });
      }
    }
    tasks  = this.delete_duplicated_In_Array(tasks,["idTask", "description"]);
    doneList  = this.delete_duplicated_In_Array(doneList,["id", "description"]);
    toDoList  = this.delete_duplicated_In_Array(toDoList,["id", "description"]);
    const subtasks = new SubtasksDto(idProject,tasks,toDoList,doneList);
    
    return subtasks;
  }
  delete_duplicated_In_Array(theArray:any[],properties:any[])
  {
    theArray = theArray.filter(
      (thing, index, self) =>
        index ===
        self.findIndex((t) => t[properties[0]] === thing[properties[0]] && t[properties[1]] === thing[properties[1]] && t[properties[1]] != null)
    );
    return theArray
  }
}

