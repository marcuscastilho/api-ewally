import { Router } from "express";
import { createUserControler } from "../useCases/CreateUser";
import { registerLog } from "../middlewares/registerLog";

const userRouter = Router();

userRouter.post("/users", registerLog, (request, response) => {
  return createUserControler.handle(request, response);
});

export { userRouter };
