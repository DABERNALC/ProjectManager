/*
    path: api/teams
*/
import { Router } from "express";
import { check } from "express-validator";
import { validate } from "../../../middlewares/validate";
const ParticipantMapper = require("../mappers/ParticipantMapper");
const DbConnection = require("../../../components/DbConnection");
import { TeamsController } from "../TeamsController";
// import  Controlers

const router = Router();

// Crear nuevos usuarios
/* plantilla de un post:
objeto de routeo
  !    tipo de llamado 
  !      !      path para llamar 
  !      !       !
  v      v       v
router.post( '/new', //validaciones
 [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    validarCampos
], //controller );
*/
// router.get('/test', (req: any,res: any)=>{
//     const participantMapper = new ParticipantMapper();
//     const db = new DbConnection();
//     db.makeQuery("show tables").then((rows:any)=>{
//       console.log("response", rows)
//     });

//     var src = {
//         "name": "12345",
//         "idFirebase": "99999912345X",
//         "title": "Test Item",
//         "description": "Description of test item",
//         "length": 5,
//         "width": 2,
//         "height": 8,
//         "inventory": {
//           "onHandQty": 12
//         }
//       };
//     res.json({
//         status:"ok",
//         currentTeams: participantMapper.getDto(src)
//     });
// });
router.get(
  "/logIn",
  [
    check("participantId", "you should send the firebase id to login")
      .not()
      .isEmpty(),
    validate,
  ],
  (req: any, res: any) => {
    let teamsController = new TeamsController();
    teamsController.logIn(req, res);
  }
);
router.post(
  "/create",
  [
    check("teamName", "you should send the team name to create a team")
      .not()
      .isEmpty(),
    check("liderId", "you should send the lider id to create a team")
      .not()
      .isEmpty(),
    validate,
  ],
  (req: any, res: any) => {
    let teamsController = new TeamsController();
    teamsController.createTeam(req, res);
  }
);
router.get(
  "/getTeam",
  [
    check("TeamId", "you should send the id of the team you whant to get")
      .not()
      .isEmpty(),
    validate,
  ],
  (req: any, res: any) => {
    let teamsController = new TeamsController();
    teamsController.getTeam(req, res);
  }
);
router.post(
  "/createParticipant",
  [
    check(
      "id",
      "you should send the firebase id in order to create a participant"
    )
      .not()
      .isEmpty(),
    check(
      "correo",
      "you should send the participants email in order to create a participant"
    ).isEmail(),
    check(
      "nombre",
      "you should send the participants name in order to create a participant"
    )
      .not()
      .isEmpty(),
    check(
      "color",
      "you should send the participants color in order to create a participant"
    )
      .not()
      .isEmpty(),
    validate,
  ],
  (req: any, res: any) => {
    let teamsController = new TeamsController();
    teamsController.createParticipant(req, res);
  }
);

router.post(
  "/addParticipant",
  [
    check("teamId", "you should send the id of the team").not().isEmpty(),
    check(
      "participant",
      "you should send the participantId you are trying to add"
    )
      .not()
      .isEmpty(),
    validate,
  ],
  (req: any, res: any) => {
    let teamsController = new TeamsController();
    teamsController.addParticipantToTeam(req, res);
  }
);
export { router };
