import ProjectsComponent from "../../components/ProjectComponent/projectsComponent";
import { DbConnection } from "../../components/DbConnection";
import KanbanMapper from "./mappers/KanbanMapper";
import projectMapper from "./mappers/ProjectMapper";
import ProjectMapper from "./mappers/ProjectMapper";
import SubtasksMapper from "./mappers/SubtasksMapper";

export class ProjectsController {
  updateProject(req: any, res: any) {
    const projectId = req.body.projectId;

    const dbConection = DbConnection.getInstance();
    const projectComponent = new ProjectsComponent(dbConection);

    //manage api response
    projectComponent
      .updateProject(req)
      .then((status) => {
        res.json({
          ok: true,
          message: `i updated the project with id: ${projectId} `,
        });
      })
      .catch((error) => {
        res.json({
          ok: false,
          message: error,
        });
      });
  }
  delete(req: any, res: any) {
    const projectId = req.body.projectId;

    const dbConection = DbConnection.getInstance();
    const projectComponent = new ProjectsComponent(dbConection);

    //manage api response
    projectComponent
      .delete(req)
      .then((status) => {
        res.json({
          ok: true,
          message: `i deleted the project with id: ${projectId} `,
        });
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }

  addTask(req: any, res: any) {
    const description = req.body.Description;

    const dbConection = DbConnection.getInstance();
    const projectComponent = new ProjectsComponent(dbConection);
    const mensaje ="se te ha agregado una tarea";
    const participant = req.body.participantId;
    //manage api response
    projectComponent
      .addTask(req)
      .then((status) => {
        this.createNotification(mensaje, participant)
          .then(() => {
            res.json({
              ok: true,
              message: `i created the task: ${description} `,
            });
          })
          .catch((error) => {
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
    const projectComponent = new ProjectsComponent(dbConection);

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
    const projectComponent = new ProjectsComponent(dbConection);

    //manage api response
    projectComponent
      .deleteTask(req)
      .then((status) => {
        res.json({
          ok: true,
          message: `i deleted the task with id: ${taskId} `,
        });
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }
  addSubtask(req: any, res: any) {
    const taskId = req.body.taskId;

    const dbConection = DbConnection.getInstance();
    const projectComponent = new ProjectsComponent(dbConection);

    //manage api response
    projectComponent
      .addSubtask(req)
      .then((status) => {
        res.json({
          ok: true,
          message: `i added a subtask to the task with id: ${taskId} `,
        });
      })
      .catch((error) => {
        res.json({
          ok: false,
          message: error,
        });
      });
  }
  updateSubTask(req: any, res: any) {
    const subTaskId = req.body.subTaskId;

    const dbConection = DbConnection.getInstance();
    const projectComponent = new ProjectsComponent(dbConection);

    //manage api response
    projectComponent
      .updateSubtask(req)
      .then((status) => {
        res.json({
          ok: true,
          message: `i updated the subtask with id: ${subTaskId} `,
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
    const projectComponent = new ProjectsComponent(dbConection);

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
  getProject(req: any, res: any) {
    const id = req.query.projectId;

    const dbConection = DbConnection.getInstance();
    const projectComponent = new ProjectsComponent(dbConection);
    const projectMapper = new ProjectMapper();
    //manage api response
    projectComponent
      .getProject(req)
      .then((response) => {
        res.json({
          ok: true,
          message: `here is the project with id: ${id} `,
          data: projectMapper.getDto(response),
        });
      })
      .catch((error) => {
        res.json({
          ok: false,
          message: error,
        });
      });
  }
  checkSubtask(req: any, res: any) {
    const id = req.body.subTaskId;

    const dbConection = DbConnection.getInstance();
    const projectComponent = new ProjectsComponent(dbConection);

    //manage api response
    projectComponent
      .checkTask(req)
      .then((status) => {
        res.json({
          ok: true,
          message: `i checked the task with id: ${id} `,
        });
      })
      .catch((error) => {
        res.json({
          ok: false,
          message: error,
        });
      });
  }
  deleteSubtask(req: any, res: any) {
    const id = req.body.subTaskId;

    const dbConection = DbConnection.getInstance();
    const projectComponent = new ProjectsComponent(dbConection);

    //manage api response
    projectComponent
      .deleteSubTask(req)
      .then((status) => {
        res.json({
          ok: true,
          message: `i deleted the subtask with id: ${id} `,
        });
      })
      .catch((error) => {
        res.json({
          ok: false,
          message: error,
        });
      });
  }
  async getKanban(req: any, res: any) {
    const id = req.query.projectId;

    const dbConection = DbConnection.getInstance();
    const projectComponent = new ProjectsComponent(dbConection);
    const kanbanMapper = new KanbanMapper();
    //manage api response
    projectComponent
      .getKanban(req)
      .then(async (response) => {
        res.json({
          ok: true,
          message: `here is the kanban for the project with id: ${id} `,
          data: await kanbanMapper.getDto(response, id),
        });
      })
      .catch((error) => {
        res.json({
          ok: false,
          message: error,
        });
      });
  }
  async getSubtasks(req: any, res: any) {
    const id = req.query.projectId;

    const dbConection = DbConnection.getInstance();
    const projectComponent = new ProjectsComponent(dbConection);
    const subtasksMapper = new SubtasksMapper();
    // manage api response
    projectComponent
      .getSubTask(req)
      .then(async (response) => {
        res.json({
          ok: true,
          message: `here is the subtasks for the project with id: ${id} `,
          data: await subtasksMapper.getDto(response),
        });
      })
      .catch((error) => {
        res.json({
          ok: false,
          message: error,
        });
      });
  }

  createNotification(message: string, participant: string) {
    const dbConection = DbConnection.getInstance();
    const sqlStatement = `INSERT INTO notificacion (Descripcion,IDParticipante,Estado)VALUES ("${message}",${participant},0);	`;
    return new Promise<string>((resolve, reject) => {
      dbConection
        .makeQuery(sqlStatement)
        .then((response) => {
          resolve("ok");
        })
        .catch((error) => {
          reject(error.sqlMessage);
        });
    });
  }
}
