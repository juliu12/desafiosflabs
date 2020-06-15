const express = require('express');
const router = express.Router();

// Insere uma planta
router.post('/', (req, res, next)=>{
    res.status(201).send({
        mensagem: 'Método POST para rota planta'
    });
});

//  Deleta uma planta
router.delete('/', (req, res, next)=>{
    res.status(201).send({
        mensagem:'Usando método DELETE para planta'
    });
});

module.exports = router;