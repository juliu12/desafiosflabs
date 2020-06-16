const express = require('express');
const router = express.Router();


router.post('/', (req, res, next)=>{
    
    var user = {
        id_user: req.body.id_user,
        nome: req.body.nome,
        email: req.body.email,
        cpf: req.body.cpf,
        role: req.body.role
    }; 
    res.status(201).send({
        mensagem: 'Usuário ${nome} criado'
    });
});

router.get('/', (req,res, next)=>{
    
    res.status(200).send({
        mensagem: 'Usuário ${id_user} selecionado',
        
    });
});

router.patch('/', (req, res, next)=>{
    res.status(201).send({
        mensagem:'Usuário ${id_user} modificado'
    });
});

router.delete('/', (req, res, next)=>{
    res.status(201).send({
        mensagem:'Usuário ${id_user} deletado'
    });
});

module.exports = router;