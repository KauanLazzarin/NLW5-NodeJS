import {Router} from 'express';
import { SettingController } from './controllers/SettingController';
import { UsersController } from './controllers/UsersController';

const routes = Router();
const settingsController = new SettingController();
const usersController = new UsersController;

routes.post('/settings', settingsController.create);
routes.post('/users', usersController.create);

export {routes};