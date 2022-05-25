import express from 'express';
import UserController from '@controllers/UserController'
import PersonalidadeController from '@controllers/PersonalidadeController'

const routes = express.Router();
const userController = new UserController();
const personalidadeController = new PersonalidadeController();

routes.post('/user', userController.create);
routes.get('/user', userController.get);
routes.delete('/user/:id', userController.delete);
routes.put('/user/:id', userController.update);

routes.post('/personalidade', personalidadeController.create);
routes.get('/personalidade', personalidadeController.get);
routes.delete('/personalidade/:id', personalidadeController.delete);
routes.put('/personalidade/:id', personalidadeController.update);


export default routes;