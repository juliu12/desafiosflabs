var express = require('express');
var app = express();
var bodyParser = require('body-parser');


var rotaEmpresa = require('./routes/empresa');
var rotaUser = require('./routes/user');
var rotaPlanta = require('./routes/planta');

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
    var erro = new Error('Rota não encontrada');
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