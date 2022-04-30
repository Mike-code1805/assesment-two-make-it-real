import { Router } from "express";
import { userRequestValidation } from "../shared/validators/bodyRequestValidators";
import { createUser, getUsers, editUser, deleteUser, getUsersById, loginUser } from "./controllers";
import { userValidation } from "./middlewares/requestValidation";
import {  singInUserSchema, signUpUserSchema } from "./middlewares/userRequestValidation";

const router: Router = Router();

router.get('/users', getUsers);

router.get('/users/:id', getUsersById);

router.post('/users', userValidation, createUser);

// router.put('/users/:id', editUser);

router.delete('/users/:id', deleteUser);
router.post('/auth/local/login', userRequestValidation(singInUserSchema), loginUser)
router.route('/singup').post(userRequestValidation(signUpUserSchema), createUser)

export default router;