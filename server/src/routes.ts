import express from 'express';
import PersonalityController from '@controllers/PersonalityController'

const routes = express.Router();
const personalityController = new PersonalityController();

routes.post('/personality', personalityController.create);
routes.get('/personality', personalityController.get);
routes.delete('/personality/:id', personalityController.delete);
routes.put('/personality/:id', personalityController.update);

import NewsController from '@controllers/NewsController';
import ProjectsController from '@controllers/ProjectsController'

const routes = express.Router();
const newsController = new NewsController();
const projectsController = new ProjectsController();

//News
routes.post('/news', newsController.create);
routes.get('/news', newsController.get);
routes.delete('/news/:id', newsController.delete);
routes.put('/news/:id', newsController.update);

//Projects
routes.post('/projects', projectsController.create);
routes.get('/projects', projectsController.get);
routes.delete('/projects/:id', projectsController.delete);
routes.put('/projects/:id', projectsController.update);

export default routes; 