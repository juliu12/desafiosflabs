const express = require('express');
const router = express.Router();


router.post('/', (req, res, next)=>{
    
    var empresa = {
        id_empresa: req.body.id_empresa,
        nome: req.body.nome,
        cnpj: req.body.cnpj,
        cep: req.body.cep,
        endereco: req.body.endereco,
        numero: req.body.numero,
        cidade: req.body.cidade,
        estado: req.body.estado,
        users : [req.body.users] ,
        empresas: [req.body.empresas]
    };
    res.status(201).send({
        mensagem: 'Empresa criada',
        empresaCriada: empresa
    })
});

router.get('/', (req,res, next)=>{
   
    res.status(200).send({
        mensagem: 'Rota GET empresa'
       
    });
});

router.patch('/', (req, res, next)=>{
    res.status(201).send({
        mensagem:'Rota PATCH empresa'
    });
});

router.delete('/', (req, res, next)=>{
    res.status(201).send({
        mensagem:'Rota DELETE empresa'
    });
});

module.exports = router;