import { Router } from "express";
import userSignuoController from "../../controllers/app/signup";

const userRouter = Router();

userRouter.post("/usersignup", userSignuoController);

export default userRouter;