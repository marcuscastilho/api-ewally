import { Router } from "express";
import { IRequest } from "../types/IRequest";
import { createUserControler } from "../useCases/CreateUser";
import { registerLog } from "../middlewares/registerLog";
import { validationSchema } from "../middlewares/validationSchema";
import { UserSchema } from "../schemas/user";
import { ResponseController } from "../responses/ResponseController";

const userRoutes = Router();

userRoutes.post(
  "/users",
  registerLog,
  (request: IRequest, response, next) =>
    validationSchema(request, response, next, UserSchema),
  async (request: IRequest, response) => {
    try {
      return createUserControler.handle(request, response);
    } catch (err) {
      const handleError = new ResponseController(response, request, err);
      await handleError.toRespond();
    }
  }
);

export { userRoutes };
