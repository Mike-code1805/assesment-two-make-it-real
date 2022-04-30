import express, { Application, ErrorRequestHandler, NextFunction, Request, Response }  from "express";
import userRoutes from './users/userRoutes';

import router from "./favLists/favListRouters";


const app: Application = express();

app.use(express.json());

app.use(userRoutes);
app.use(router);

app.use(function(err:any, req:Request, res:Response, next:NextFunction) {
    res
    .status(err.statusCode ? err.statusCode : 500)
    .send({ message: err.message, type: err.errorType });
});

export default app;