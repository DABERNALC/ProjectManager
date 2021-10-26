import ProjectsControllerSingleton from "../../components/ProjectComponent/projectsComponent";
import { DbConnection } from "../../components/DbConnection";

export class ProjectsController {
  
 
  addTask(req: any, res: any) {
    const description = req.body.Description;

    const dbConection = DbConnection.getInstance();
    const projectComponent = new ProjectsControllerSingleton(dbConection);
    const mensaje = "se te ha agregado una tarea verifica tus responsabilidades";
    const participant  = req.body.participantId;
    //manage api response
    projectComponent
      .addTask(req)
      .then((status) => {
        this.createNotification(mensaje,participant).then(()=>{
          res.json({
            ok: true,
            message: `i created the task: ${description} `,
          });
        }).catch((error)=>{
          res.json({
            ok: false,
            message: error,
          });
        });
        
      })
      .catch((error) => {
        res.json({
          ok: false,
          message: error,
        });
      });
  }
  updateTask(req: any, res: any) {
    const taskId = req.body.taskId;

    const dbConection = DbConnection.getInstance();
    const projectComponent = new ProjectsControllerSingleton(dbConection);

    //manage api response
    projectComponent
      .updateTask(req)
      .then((status) => {
        res.json({
          ok: true,
          message: `i updated the task  with id: ${taskId} `,
        });
      })
      .catch((error) => {
        res.json({
          ok: false,
          message: error,
        });
      });
  }
  deleteTask(req: any, res: any) {
    const taskId = req.body.taskId;

    const dbConection = DbConnection.getInstance();
    const projectComponent = new ProjectsControllerSingleton(dbConection);

    //manage api response
    projectComponent
      .deleteTask(req)
      .then((status) => {
        res.json({
          ok: true,
          message: `i deleted the project with id: ${taskId} `,
        });
      })
      .catch((error) => {
        res.json({
          ok: false,
          message: error,
        });
      });
  } 

  createProject(req: any, res: any) {
    const name = req.body.Name;

    const dbConection = DbConnection.getInstance();
    const projectComponent = new ProjectsControllerSingleton(dbConection);

    //manage api response
    projectComponent
      .createProject(req)
      .then((status) => {
        res.json({
          ok: true,
          message: `i created a project named: ${name} `,
        });
      })
      .catch((error) => {
        res.json({
          ok: false,
          message: error,
        });
      });
  }
  createNotification(message:string,participant:string) {
    const dbConection = DbConnection.getInstance();
    const sqlStatement = `INSERT INTO notificacion (Descripcion,IDParticipante,Estado)VALUES ("${message}",${participant},0);	`;
    return new Promise<string>((resolve, reject) => {
      dbConection
        .makeQuery(sqlStatement)
        .then((response) => {
          console.log(response);
          resolve("ok");
        })
        .catch((error) => {
          reject(error.sqlMessage);
        });
    });
  }
}
