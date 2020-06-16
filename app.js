const express = require('express');
const app = express();
const bodyParser = require('body-parser');


const rotaEmpresa = require('./routes/empresa');
const rotaUser = require('./routes/user');
const rotaPlanta = require('./routes/planta');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) =>{
    if(req.method === 'OPTIONS'){
        res.header('POST,GET, PATCH, DELETE');
        return res.status(200).send({});
    }
});


app.use('/empresa', rotaEmpresa);
app.use('/user', rotaUser);
app.use('/planta',rotaPlanta);

app.use((req,res, next)=>{
    const erro = new Error('Rota não encontrada');
    erro.status = 404;
    next(erro);
});

app.use((error,req, res, next)=>{
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    });
});


module.exports = app;