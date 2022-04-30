import { Router } from "express";
import { userTokenValidation } from "../users/middlewares/userTokenValidation";
import { createFavLists, deleteFavLists, getFavLists, getFavListsById } from "./controllers/favListControllers";
import { createFavListSchema, favListRequestValidation } from "./middlewares/favListRequestValidation";


const favListRouter: Router = Router();

favListRouter
    .route('/api/favs')
    .get(userTokenValidation, favListRequestValidation(createFavListSchema), getFavLists)
    .post(userTokenValidation, favListRequestValidation(createFavListSchema), createFavLists)

favListRouter
    .route('/api/favs/:id')
    .get(userTokenValidation, favListRequestValidation(createFavListSchema), getFavListsById)
    .delete(userTokenValidation, favListRequestValidation(createFavListSchema), deleteFavLists)

export default favListRouter;