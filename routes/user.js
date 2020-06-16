const express = require('express');
const router = express.Router();


router.post('/', (req, res, next) =>{
    if(error){return res.status(500).send({error: error})}
        (error, result, field) =>{
            conn.release();
            if (error) {return res.status(500).send({error: error})}
            const response = {
                mensagem: 'Usuário criado',
                usuarioCriado: {
                    id_user: result.id_user,
                    nome: req.body.nome,
                    email: req.body.emai,
                    cpf: req.body.cpf,
                    role: req.body.role,
                    request: {
                        tipo: 'POST',
                        descricao: 'Cria um usuário',
                        url: 'http://localhost:300/user'
                    }
                }
           
            }
            return res.status(200).send(response);
        }
});


router.get('/', (req, res, next) =>{
        (error, result, fields) =>{
            if(error){
                return res.status(500).send({error: error})
                const response = {
                    quantidade: result.length,
                    users: result.map(user =>{
                          return{
                            id_user: user.id_user,
                            nome: user.nome,
                            email: user.email,
                            cpf: user.cpf,
                            role: user.role,
                            request: {
                                tipo: 'GET',
                                descricao: 'Retorna um usuário',
                                url: 'http://localhost:3000/user/' + user.id_user
                            }
                          }      
                    })
                    
                }   
            }
            return res.status(200).send(response);
        }
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