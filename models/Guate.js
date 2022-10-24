
const { Schema, model } = require('mongoose');

const GuateSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
   codigo: {
        type: String,
        required: [true, 'El codigo es obligatorio'],
        unique: true
    },
    monto: {
        type: String,
        required: [true, 'monto es obligatoria'],
    },
   
    fecha: {
        type:Date,
       
    }
   
});





module.exports = model( 'Guate', GuateSchema );
