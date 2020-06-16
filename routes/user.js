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
        mensagem: 'Rota POST usuário',
        usuarioCriado: user
    });
});

router.get('/', (req,res, next)=>{
    
    res.status(200).send({
        mensagem: 'Rota GET usuário',
        
    });
});

router.patch('/', (req, res, next)=>{
    res.status(201).send({
        mensagem:'Rota PATCH usuário'
    });
});

router.delete('/', (req, res, next)=>{
    res.status(201).send({
        mensagem:'Rota DELETE usuário'
    });
});

module.exports = router;