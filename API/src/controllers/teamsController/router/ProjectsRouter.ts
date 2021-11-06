/*
    path: api/projects
*/
import { Router } from "express";
import { check }  from 'express-validator'
import {validate } from '../../../middlewares/validate'
import { ProjectsController } from "../ProjectsController";
const ParticipantMapper = require('../mappers/ParticipantMapper');
const DbConnection = require('../../../components/DbConnection');
import {TeamsController} from '../TeamsController'
// import  Controlers


const  ProjectsRouter = Router();

// Crear nuevos usuarios
/* plantilla de un post:
objeto de routeo
  !    tipo de llamado 
  !      !      path para llamar 
  !      !       !
  v      v       v
ProjectsRouter.post( '/new', //validaciones
 [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    validarCampos
], //controller );
*/


ProjectsRouter.post('/create',[
    check("Name","you should send the team name to create a project").not().isEmpty(),
    check("Description","you should send the description to create a project").not().isEmpty(),
    check("IdTeam","you should send the Id of the team that works on this project to create a project").not().isEmpty(),
    check("CustomerName","you should send the name of the customer that this  project belongs to create a project").not().isEmpty(),
    check("liderId","you should send the id of the lider that this  project belongs to create a project").not().isEmpty()
    ,validate
],(req: any,res: any)=>{
    let projectController = new ProjectsController();
    projectController.createProject(req,res);
});
ProjectsRouter.post('/updateProject',[
    check("projectId","you should send the id of the task that yopu whant to update").not().isEmpty(),
    check("Name","you should send the team name to create a project").not().isEmpty(),
    check("Description","you should send the description to create a project").not().isEmpty(),
    check("CustomerName","you should send the name of the customer that this  project belongs to create a project").not().isEmpty(),
    validate
],(req: any,res: any)=>{
    let projectController = new ProjectsController();
    projectController.updateProject(req,res);
    
});
ProjectsRouter.post('/delete',[
    check("projectId","you should send the id of the project that you whant to delete").not().isEmpty()
    
    ,validate
],(req: any,res: any)=>{
    let projectController = new ProjectsController();
    projectController.delete(req,res);
    //to do delete all subtask 
});
ProjectsRouter.post('/addTask',[
    check("date","you should send the task due-date to create a task").not().isEmpty(),
    check("Description","you should send the task description to create a task").not().isEmpty(),
    check("participantId","you should send the Id of the participant that works on this task").not().isEmpty(),
    check("relevance","you should send the relevance of the task").isBoolean(),
    check("priority","you should send the priority of the task").not().isEmpty(),
    check("proyectId","you should send the proyect id that this task belongs").not().isEmpty()
    ,validate
],(req: any,res: any)=>{
    let projectController = new ProjectsController();
    projectController.addTask(req,res);
    
});
ProjectsRouter.post('/updateTask',[
    check("taskId","you should send the id of the task that yopu whant to update").not().isEmpty(),
    check("date","you should send the task due-date to create a task").not().isEmpty(),
    check("Description","you should send the task description to create a task").not().isEmpty(),
    check("relevance","you should send the relevance of the task").isBoolean(),
    check("priority","you should send the priority of the task").not().isEmpty(),
    check("proyectId","you should send the proyect id that this task belongs").not().isEmpty()
    ,validate
],(req: any,res: any)=>{
    let projectController = new ProjectsController();
    projectController.updateTask(req,res);
    
});
ProjectsRouter.post('/deleteTask',[
    check("taskId","you should send the id of the task that yopu whant to delete").not().isEmpty()
    
    ,validate
],(req: any,res: any)=>{
    let projectController = new ProjectsController();
    projectController.deleteTask(req,res);
    //to do delete all subtask 
});

ProjectsRouter.post('/addSubtask',[
    check("taskId","you should send the id of the task will hold this subtask").not().isEmpty(),
    check("description","you should send the description of the subtask").not().isEmpty()
    ,validate
],(req: any,res: any)=>{
    let projectController = new ProjectsController();
    projectController.addSubtask(req,res);
});
ProjectsRouter.post('/updateSubTask',[
    check("subTaskId","you should send the id of the task will hold this subtask").not().isEmpty(),
    check("description","you should send the description of the subtask").not().isEmpty()
    ,validate
],(req: any,res: any)=>{
    let projectController = new ProjectsController();
    projectController.updateSubTask(req,res);
    
});

ProjectsRouter.post('/checkSubtask',[
    check("subTaskId","you should send the id of the subtask will check").not().isEmpty()
    
    ,validate
],(req: any,res: any)=>{
    let projectController = new ProjectsController();
    projectController.checkSubtask(req,res);
});
ProjectsRouter.post('/deleteSubtask',[
    check("subTaskId","you should send the id of the subtask will delete").not().isEmpty()
    
    ,validate
],(req: any,res: any)=>{
    let projectController = new ProjectsController();
    projectController.deleteSubtask(req,res);
});
ProjectsRouter.get('/getProject',[
    check("projectId","you should send the id of the project in order to see its details").not().isEmpty()
    
    ,validate
],(req: any,res: any)=>{
    let projectController = new ProjectsController();
    projectController.getProject(req,res);
});
ProjectsRouter.get('/getKanban',[
    check("projectId","you should send the id of the project in order to see its kanban").not().isEmpty()
    
    ,validate
],(req: any,res: any)=>{
    let projectController = new ProjectsController();
    projectController.getKanban(req,res);
});
ProjectsRouter.get('/getSubtasks',[
    check("projectId","you should send the id of the project in order to see its subtasks").not().isEmpty()
    
    ,validate
],(req: any,res: any)=>{
    let projectController = new ProjectsController();
    projectController.getSubtasks(req,res);
});

export {ProjectsRouter};