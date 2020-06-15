const express = require('express');
const router = express.Router();

// Insere uma empresa
router.post('/', (req, res, next)=>{
    res.status(201).send({
        mensagem: 'Método POST para rota empresa'
    });
});

// Retorna dados de uma empresa
router.get('/:id', (req,res, next)=>{
    const id = req.params.id
    res.status(200).send({
        mensagem: 'Usando método GET para empresa específica',
        id: id
    });
});
//  Altera uma empresa
router.patch('/', (req, res, next)=>{
    res.status(201).send({
        mensagem:'Usando método PATCH para empresa'
    });
});
//  Deleta uma empresa
router.delete('/', (req, res, next)=>{
    res.status(201).send({
        mensagem:'Usando método DELETE para empresa'
    });
});

module.exports = router;