const express = require('express');
const router = express.Router();

// Insere um usuario
router.post('/', (req, res, next)=>{
    res.status(201).send({
        mensagem: 'Método POST para rota usuário'
    });
});

// Retorna dados de um usuario
router.get('/:id', (req,res, next)=>{
    const id = req.params.id
    res.status(200).send({
        mensagem: 'Usando método GET para usuario',
        id: id
    });
});
//  Altera um usuario
router.patch('/', (req, res, next)=>{
    res.status(201).send({
        mensagem:'Usando método PATCH para usuario'
    });
});
//  Deleta um usuario
router.delete('/', (req, res, next)=>{
    res.status(201).send({
        mensagem:'Usando método DELETE para usuario'
    });
});

module.exports = router;