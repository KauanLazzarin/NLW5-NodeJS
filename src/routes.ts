import {Router} from 'express';
import { MessageController } from './controllers/MessageController';
import { SettingController } from './controllers/SettingController';
import { UsersController } from './controllers/UsersController';

const routes = Router();
const settingsController = new SettingController;
const usersController = new UsersController;
const messagesController = new MessageController;

routes.post('/settings', settingsController.create);
routes.post('/users', usersController.create);
routes.post('/message', messagesController.create);

export {routes};