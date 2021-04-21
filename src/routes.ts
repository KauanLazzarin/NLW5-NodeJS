import {Router} from 'express';
import { SettingController } from './controllers/SettingController';

const routes = Router();
const settingsController = new SettingController();

routes.post('/settings', settingsController.create);

export {routes};