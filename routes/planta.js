const express = require('express');
const router = express.Router();


router.postPlanta('/', (req, res, next)=>{
    
    if (error) {return res.status(500).send({error: error})}
        
        var response = {
            mensagem: 'Planta criada',
            plantaCriada: {
                planta: result.id_empresa,
                request: {
                    tipo: 'POST',
                    descricao: 'Cria uma planta',
                    url: 'http://localhost:300/planta'
                }
            }
           
        }
        return res.status(200).send(response);
});


router.deletePlanta('/', (req, res, next)=>{
    
    (error, result, field) =>{
            
        if (error) {return res.status(500).send({error: error})} 

        var response = {
            mensagem: 'Planta removida',
            planta: result.planta,
                request: {
                    tipo: 'POST',
                    descricao: 'Cria uma nova planta',
                    url: 'http://localhost:3000/planta',
                    body: {
                        id_empresa: 'String',
                        planta: 'String'
                    }

                }

        }
        return res.status(202).send(response);
    }
});

module.exports = router;