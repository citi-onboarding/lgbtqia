import express from 'express';
import UserController from '@controllers/UserController'
import PersonalityController from '@controllers/PersonalityController'

const routes = express.Router();
const userController = new UserController();
const personalityController = new PersonalityController();

routes.post('/user', userController.create);
routes.get('/user', userController.get);
routes.delete('/user/:id', userController.delete);
routes.put('/user/:id', userController.update);

routes.post('/personality', personalityController.create);
routes.get('/personality', personalityController.get);
routes.delete('/personality/:id', personalityController.delete);
routes.put('/personality/:id', personalityController.update);


export default routes;