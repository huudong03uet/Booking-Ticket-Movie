import express from 'express';
import ControllerUser from '../controller/ControllerUser.js';
let router = express.Router();

const router_User = (app) => {
    router.post('/login', ControllerUser.UserLogin);
    return app.use('/api/user/', router)
}

export default router_User;