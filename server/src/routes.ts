import express from 'express';
import PersonalityController from '@controllers/PersonalityController'

const routes = express.Router();
const personalityController = new PersonalityController();

routes.post('/personality', personalityController.create);
routes.get('/personality', personalityController.get);
routes.delete('/personality/:id', personalityController.delete);
routes.put('/personality/:id', personalityController.update);


export default routes;