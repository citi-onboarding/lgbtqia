import express from 'express';
import NewsController from '@controllers/NewsController';

const routes = express.Router();
const newsController = new NewsController();

routes.post('/news', newsController.create);
routes.get('/news', newsController.get);
routes.delete('/news/:id', newsController.delete);
routes.put('/news/:id', newsController.update);

export default routes;
