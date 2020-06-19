var express = require('express');
var router = express.Router();


router.postEmpresa('/', (req, res, next)=>{
        
        (error, result, field) =>{
            
            if (error) {return res.status(500).send({error: error})} 

            var response = {
                mensagem: 'Empresa criada',
                empresaCriada: {
                    id_empresa: result.id_empresa,
                    nome: req.body.nome,
                    cnpj: req.body.cnpj,
                    cep: req.body.cep,
                    endereco: req.body.endereco,
                    numero: req.body.numero,
                    cidade: req.body.cidade,
                    estado: req.body.estado,
                    users : [req.body.users],
                    empresas: [req.body.empresas],
                    request: {
                        tipo: 'POST',
                        descricao: 'Cria uma nova empresa',
                        url: 'http://localhost:3000/empresa'            
                    }
                
                }

            }
            return res.status(200).send(response);
        }
});

router.getEmpresa('/', (req, res, next)=>{
    
     (error, result, field) =>{
                  
        if (error) {return res.status(500).send({error: error})} 
            
            var response = {
                quantidade: result.length,
                empresa: result.map(emp =>{
                        return{
                            id_empresa: emp.id_empresa,
                            nome: emp.nome,
                            cnpj: emp.cnpj,
                            cep: emp.body.cep,
                            endereco: emp.endereco,
                            numero: emp.numero,
                            cidade: emp.body.cidade,
                            estado: emp.estado,
                            users : [emp.users],
                            empresas: [emp.empresas],
                            request:{
                                tipo: 'GET',
                                descricao: 'Retorna todas as empresas',
                                url:'http://localhost:3000/empresa' 
                            }
                        }
                })  
            }              
            return res.status(200).send(response);
        }   
});

router.getIdEmpresa('/id_empresa', (req,res, next)=>{
    
    (error, result, field) =>{
                  
        if (error) {return res.status(500).send({error: error})} 
            
        if(result.length == 0){
            return res.status(404).send({
                mensagem: 'Empresa não encontrada',
            })
        }    
            var response = {
               empresa:{
                id_empresa: result[0].id_empresa,
                nome: result[0].nome,
                cnpj: result[0].cnpj,
                cep: result[0].cep,
                endereco: result[0].endereco,
                numero: result[0].numero,
                cidade: result[0].cidade,
                estado: result[0].estado,
                users : [result[0].users],
                empresas: [result[0].empresas],
                    request: {
                    tipo: 'GET',
                    descricao: 'Retorna detalhes de uma empresa',
                    url: 'http://localhost:3000/empresa' + id_empresa           
                    }
                }
                
            }              
            return res.status(200).send(response);
        }
});

router.patchEmpresa('/', (req, res, next)=>{
   
    
    (error, result, field) =>{
        
        if (error) {return res.status(500).send({error: error})}
        
        var response = {
            mensagem: 'Empresa atualizada',
            empresaAtualizada: {
                id_empresa: req.body.id_empresa,
                nome: req.body.nome,
                cnpj: req.body.cnpj,
                cep: req.body.cep,
                endereco: req.body.endereco,
                numero: req.body.numero,
                cidade: req.body.cidade,
                estado: req.body.estado,
                users : [req.body.users],
                empresas: [req.body.empresas],
                request: {
                    tipo: 'PATCH',
                    descricao: 'Atualiza empresa',
                    url: 'http://localhost:3000/empresa' + req.body.id_empresa           
                }
            
            }

        }
        return res.status(202).send(response);
    }
});

router.deleteEmpresa('/', (req, res, next)=>{
    (error, result, field) =>{
            
        if (error) {return res.status(500).send({error: error})} 

        var response = {
            mensagem: 'Empresa removida',
            empresaRemovida: {
                request: {
                    tipo: 'DELETE',
                    descricao: 'Deleta uma empresa',
                    url: 'http://localhost:3000/empresa',
                    body: {
                        id_empresa: 'String',
                        nome: 'String',
                        cnpj: 'String',
                        cep: 'String',
                        endereco: 'String',
                        numero: 'String',
                        cidade: 'String',
                        estado: 'String',
                        users : [req.body.users],
                        empresas: [req.body.empresas],
                    }

                }
            
            }

        }
        return res.status(202).send(response);
    }
});

module.exports = router;