import express from 'express';
import * as controllers from '../controllers/samples';

const Router = express.Router();

/**
 * This describes the router for this particular resource.
 * Ex: Below would be an example endpoint for this resource.
 * GET /api/samples/2344
 */
Router.get('/', controllers.doSomeExpensiveWork);
Router.get('/flood', controllers.destroyMemory);

export default Router;
