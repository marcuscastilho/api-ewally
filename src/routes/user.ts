import { Router } from "express";
import { IRequest } from "../types/IRequest";
import { createUserControler } from "../useCases/CreateUser";
import { registerLog } from "../middlewares/registerLog";
import { validationSchema } from "../middlewares/validationSchema";
import { UserSchema } from "../schemas/user";
import { ResponseController } from "../responses/ResponseController";
import { UserCreated } from "../responses/success/UserCreated";

const userRoutes = Router();

userRoutes.post(
  "/users",
  registerLog,
  (request: IRequest, response, next) =>
    validationSchema(request, response, next, UserSchema),
  async (request: IRequest, response) => {
    try {
      await createUserControler.handle(request, response);
      const userCreated = new UserCreated()
      const handleSuccess = new ResponseController(response, request, userCreated);
      return await handleSuccess.toRespond();
    } catch (err) {
      const handleError = new ResponseController(response, request, err);
      await handleError.toRespond();
    }
  }
);

export { userRoutes };
