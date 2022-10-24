const Role = require('../models/role');
const Usuario = require('../models/Guate');
const Guate = require('../models/Guate');
const Costa = require('../models/Costa');

const esRoleValido = async(rol = '') => {

    const existeRol = await Role.findOne({ rol });
    if ( !existeRol ) {
        throw new Error(`El rol ${ rol } no está registrado en la BD`);
    }
}


const existeUsuarioPorId = async( id ) => {

    // Verificar si el correo existe
    const existeUsuario = await Usuario.findById(id);
    if ( !existeUsuario ) {
        throw new Error(`El id no existe ${ id }`);
    }
}

const existed = async( id ) => {

    // Verificar si el correo existe
    const existed = await Guate.findById(id);
    if ( !existed) {
        throw new Error(`El id no existe ${ id }`);
    }
}
const existe= async( id ) => {

    // Verificar si el correo existe
    const existe= await Costa.findById(id);
    if ( !existe ) {
        throw new Error(`El id no existe ${ id }`);
    }
}


module.exports = {
    esRoleValido,
    existe,
    existeUsuarioPorId
}

