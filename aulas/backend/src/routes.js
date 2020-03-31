const express = require('express');

const OngControler = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

//login
routes.post('/session', SessionController.create);

//ongs (listagem e cadastro)
routes.get('/ongs', OngControler.index);
routes.post('/ongs', OngControler.create);

//Listagem de postagem filtrado por ong
routes.get('/profile', ProfileController.index);

//Casos (Listagem, Cadastro e Exclusão)
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id',IncidentController.delete);


module.exports = routes;


