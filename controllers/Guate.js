const { response, request } = require('express');
const bcryptjs = require('bcryptjs');


const Usuario = require('../models/Guate');
const Guate = require('../models/Guate');




    const GuateGet = (req, res) => {

        
        Guate.find().then((data) => {
          res.json({
            ok: true,
            name: "Osmin Alexis Beltran Jimenez",
            data
            
          });
        })
      }

const GuatePost = async(req, res = response) => {
    
    const { nombre, codigo, monto,} = req.body;
    fecha = new Date;
    const Usuario= new Guate({ nombre, codigo, monto, fecha });

    const existe = await Guate.findOne({codigo});
    if(existe){
      return res.status(400).json({
        msg:'Codigo ya esta registrado',
        name: "Osmin Alexis Beltran Jimenez"
      });
    }
    
    // Guardar en BD
    await Usuario.save();

    res.json({
        name: "Osmin Alexis Beltran Jimenez",
        Usuario
       
    });
}


module.exports = {
    GuateGet,
    GuatePost
}