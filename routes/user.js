const express = require('express');
const router = express.Router();


router.postUser('/', (req, res, next) =>{
    
    (error, result, field) => {
        
        if (error) {return res.status(500).send({error: error})}
        const response = {
            mensagem: 'Usuário criado',
            usuarioCriado: {
                id_user: result.id_user,
                nome: req.body.nome,
                email: req.body.email,
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


router.getUser('/', (req, res, next) =>{
        
    (error, result, fields) => {

        if(error) return res.status(500).send({error: error})
            
            var response = {
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
                            descricao: 'Retorna todos usuários',
                            url: 'http://localhost:3000/user/' + id_user
                        }
                    }      
                })
                    
            }   
            return res.status(200).send(response);
    }
            
});

router.getIdUser('/id_user', (req,res, next)=>{
    
    (error, result, field) =>{
        
        if (error) {return res.status(500).send({error: error})}          
           
            if(result.length == 0){
                return res.status(404).send({
                mensagem: 'Usuário não encontrado',
                })
            }    
            var response = {
                user:{
                id_user: result[0].id_user,
                nome: result[0].nome,
                email: result[0].email,
                cpf: result[0].cpf,
                role: result[0].role,
                    request:{
                    tipo: 'GET',
                    descricao: 'Retorna detalhes de um usuário',
                    url: 'http://localhost:3000/user' + user.body.id_user            
                    }
                }
                
            }              
            return res.status(200).send(response);
    }
});


router.patchUser('/', (req, res, next)=>{
    
    (error, result, field) =>{
        
        if (error) {return res.status(500).send({error: error})}
        
        var response = {
            mensagem: 'Usuário atualizado',
            usuarioAtualizado: {
                id_user: user.id_user,
                nome: user.nome,
                email: user.email,
                cpf: user.cpf,
                role: user.role,
                request: {
                    tipo: 'PATCH',
                    descricao: 'Atualiza usuário',
                    url: 'http://localhost:3000/user' + req.body.id_user           
                }
            
            }

        }
        return res.status(202).send(response);
    }
});

router.deleteUser('/', (req, res, next)=>{
    
    (error, result, field) =>{
        
        if (error) {return res.status(500).send({error: error})}
        
            var response = {
                mensagem: 'Usuário removido',
                request: {
                tipo: 'POST',
                descricao: 'Cria um usuário novo',
                url: 'http://localhost:3000/user',
                    body: {
                    id_user: 'String',
                    nome: 'String',
                    email: 'String',
                    cpf: 'String',
                    role: 'String'
                    }

                }
        
            }
        return res.status(202).send(response);
    }
});

module.exports = router;