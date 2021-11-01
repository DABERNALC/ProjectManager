import ParticipanteDto from "../dtoObjects/ParticipanteDto";
import ProjectDetailDto from "../dtoObjects/ProjectDetailDto";
import TeamDetailDto from "../dtoObjects/TeamDetailDto";

var objectMapper = require("object-mapper");
export default class ProjectMapper {
  objectMapper: any;
  constructor() {
    this.objectMapper = objectMapper;
  }
  getDto(projectVo: any) {
    // console.log(teamsVo);
    
    const projectCleanVo = projectVo[0];
    let project = new ProjectDetailDto(projectCleanVo.IDProyecto,projectCleanVo.Nombre,projectCleanVo.Descripcion,projectCleanVo.NombreCliente,projectCleanVo.IDEquipo);
    return project;
  }
  delete_duplicated_In_Array(theArray:any[],properties:any[])
  {
    theArray = theArray.filter(
      (thing, index, self) =>
        index ===
        self.findIndex((t) => t[properties[0]] === thing[properties[0]] && t[properties[1]] === thing[properties[1]])
    );
    return theArray
  }
}
