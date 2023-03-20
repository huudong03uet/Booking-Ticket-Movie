import express from 'express';
import configureViewEngine from './configs/viewEngine';
import initWebRoutes from './route/web.js';
import connection from './configs/connectDB.js';
import initAPIRoute from './route/api.js';

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

configureViewEngine(app);
//initWebRoutes(app);

initAPIRoute(app);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
