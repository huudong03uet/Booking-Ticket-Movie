import express from 'express';
import filmController from '../controller/filmController.js';
let router = express.Router();

const initAPIRoute = (app) => {
  
    router.get('/nowPlaying', filmController.getNowPlaying);// method GET => read data
    router.get('/filmComing', filmController.getUpComing);
    router.get('/filmPopular', filmController.getFilmPopular);
    router.get('/topRated', filmController.getTopRated);
    router.get('/trailer/:id', filmController.getTrailer);
    router.get('/schedule/:id', filmController.getSchedule);
    return app.use('/api/v1/', router);
}

export default initAPIRoute;