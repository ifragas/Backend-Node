const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors(
//o código abaixo refere-se ao endereço permitido pelo cors
// no caso onde o front está hospedado.
/*
    {
        origin : 'http://meuapp.com.br',
    }
*/   
));
app.use(express.json());
app.use(routes);

app.listen('3333');
