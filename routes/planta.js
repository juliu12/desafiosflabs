const express = require('express');
const router = express.Router();


router.post('/', (req, res, next)=>{
    
    var planta ={
        planta: req.body.planta
    };
    res.status(201).send({
        mensagem: 'Planta ${id_empresa} criada'
    });
});


router.delete('/', (req, res, next)=>{
    res.status(201).send({
        mensagem:'Planta ${planta} removida'
    });
});

module.exports = router;