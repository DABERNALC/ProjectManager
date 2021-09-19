/*
    path: api/teams
*/
const { Router } = require('express');
const { check }  = require('express-validator');
const { validate } = require('../../../middlewares/validate');
const ParticipantMapper = require('../mappers/ParticipantMapper');
const DbConnection = require('../../../components/DbConnection');
const TeamsController = require('../TeamsController');
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
router.get('/test',async (req,res)=>{
    const participantMapper = new ParticipantMapper();
    const db = new DbConnection();
    db.makeQuery("show tables").then((rows)=>{
      console.log("response", rows)
    });
    
    var src = {
        "name": "12345",
        "idFirebase": "99999912345X",
        "title": "Test Item",
        "description": "Description of test item",
        "length": 5,
        "width": 2,
        "height": 8,
        "inventory": {
          "onHandQty": 12
        }
      };
    res.json({
        status:"ok",
        currentTeams: participantMapper.getDto(src)
    });
});

router.post('/create',[
    check("teamName","you should send the team name to create a team").not().isEmpty()
    ,validate
],(req,res)=>{
    let teamsController = new TeamsController();
    teamsController.createTeam(req,res);
});

module.exports = router;