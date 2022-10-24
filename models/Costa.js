const { Schema, model } = require('mongoose');

const CostaSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
   codigo: {
        type: String,
        required: [true, 'El codigo es obligatorio'],
        unique: true
    },
    pais: {
        type: String,
        required: [true, 'pais es obligatoria'],
    },
   
    fecha: {
        type:Date,
       
    }
   
});





module.exports = model( 'Costa', CostaSchema );
