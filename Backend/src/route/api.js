import express from 'express';
import APIController from '../controller/APIController.js';
let router = express.Router();

const initAPIRoute = (app) => {
  
    router.get('/users', APIController.getAllUsers);// method GET => read data
    router.post('/create-user', APIController.createNewUser);
    router.put('/update-user', APIController.updateUser);
    router.delete('/delete-user/:id', APIController.deleteUser);

    return app.use('/api/v1/', router);
}

export default initAPIRoute;