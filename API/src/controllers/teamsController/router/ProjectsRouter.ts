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
    check("CustomerName","you should send the name of the customer that this  project belongs to create a project").not().isEmpty()
    ,validate
],(req: any,res: any)=>{
    let teamsController = new ProjectsController();
    teamsController.createProject(req,res);
});
export {ProjectsRouter};