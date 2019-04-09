import cors from 'cors';
import debug from 'debug';
import express from 'express';
import bodyParser from 'body-parser';

import Router from './routes';
import config from './config';
import { countProbe, markProbe } from './utils/pm2';

/**
 * Instantiates debug module with "server" namespace
 */
const log = debug('app:server');

const app = express();

/**
 * Middlewares
 */
app.use(markProbe);
app.use(countProbe);
app.use(bodyParser.json());
app.use(cors());

/**
 * Applies your routes to /api/...
 */
app.use('/api', Router);

/**
 * Server init
 */
app.listen(config.PORT, () => log(`Server is listening on ${config.PORT}`));
