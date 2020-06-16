const express = require('express');
const router = express.Router();


router.post('/', (req, res, next)=>{
    
    var planta ={
        planta: req.body.planta
    };
    res.status(201).send({
        mensagem: 'Rota POST planta'
        
    });
});


router.delete('/', (req, res, next)=>{
    res.status(201).send({
        mensagem:'Rota DELETE planta'
    });
});

module.exports = router;