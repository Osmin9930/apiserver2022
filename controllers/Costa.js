const { response, request } = require('express');
const bcryptjs = require('bcryptjs');


const Costa = require('../models/Costa');


const costGet = (req, res) => {
    Costa.find().then((data) => {
      res.json({
        ok: true,
        name: "Osmin Alexis Beltran Jimenez",
        data
        
      });
    })
  }


const costPost = async(req, res = response) => {
    
    const { nombre, codigo,pais} = req.body;
    fecha = new Date;
    const usuario = new Costa({ nombre, codigo, pais, fecha });

    const existe = await Costa.findOne({codigo});
    if(existe){
      return res.status(400).json({
        msg:'Codigo ya esta registrado',
        name: "Osmin Alexis Beltran Jimenez"
      });
    }
   
    // Guardar en BD
    await usuario.save();

    res.json({
        name: "Osmin Alexis Beltran Jimenez",
        usuario
    });
}


module.exports = {
    costGet,
    costPost
}