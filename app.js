const express = require('express');
const app = express();

const rotaEmpresa = require('./routes/empresa');
const rotaUser = require('./routes/user');
const rotaPlanta = require('./routes/planta');

app.use('/empresa', rotaEmpresa);
app.use('/user', rotaUser);
app.use('/planta',rotaPlanta);


module.exports = app;