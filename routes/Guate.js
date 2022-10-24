
const { Router } = require('express');
const { check } = require('express-validator');


const { validarCampos } = require('../middlewares/validar-campos');
const { esRoleValido, emailExiste, existeUsuarioPorId } = require('../helpers/db-validators');

const { GuateGet,
        usuariosPut,
        GuatePost,
        usuariosDelete,
        usuariosPatch } = require('../controllers/Guate');

const router = Router();


router.get('/', GuateGet );



router.post('/', [check('monto','El monto no es valido')],GuatePost );





module.exports = router;