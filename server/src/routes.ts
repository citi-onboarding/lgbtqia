import express from 'express';
import UserController from '@controllers/UserController'
import NewsController from '@controllers/NewsController';

const routes = express.Router();
const userController = new UserController();
const newsController = new NewsController();

routes.post('/user', userController.create);
routes.get('/user', userController.get);
routes.delete('/user/:id', userController.delete);
routes.put('/user/:id', userController.update);

routes.post('/news', newsController.create);
routes.get('/news', newsController.get);
routes.delete('/news/:id', newsController.delete);
routes.put('/news/:id', newsController.update);

export default routes;