const { Router } = require('express');
const { check } = require('express-validator');
const { esRoleValido, existe, existeUsuarioPorId } = require('../helpers/db-validators');



const { costGet,
        costPost,
        } = require('../controllers/Costa');

const router = Router();


router.get('/', costGet );



router.post('/', [check('codigo','El codigo no es valido')],[check('pais','El pais no es valido')],costPost );





module.exports = router;