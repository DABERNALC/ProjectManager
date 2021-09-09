/*
    path: api/teams
*/
const { Router } = require('express');
const { check }  = require('express-validator');

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
router.get('/test',(req,res)=>{
    try {
        const requestParam = req.query.parametro.split(" ");
        res.json({
            status:"ok",
            mensaje:"hola niconi, soy una api qeu sirve jejes",
            SegundaPalabra:requestParam[1]
        });
        
    } catch (error) {
        res.status(500).send("compa su request tiene que ser de más de 1 palabra");
    }
    
});







module.exports = router;