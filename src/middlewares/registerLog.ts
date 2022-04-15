import { Response, NextFunction } from "express";
import { IRequest } from '../types/IRequest'
import { createLogControler } from "../useCases/CreateLog";

import { ResponseController } from "../responses/ResponseController";



const registerLog = async (
  request: IRequest,
  response: Response,
  next: NextFunction
) => {
  try {
    const log = await createLogControler.handle(request);
    request.log = log;
    next();
  } catch (err) {
    const handleError = new ResponseController(response, request, err);
    await handleError.toRespond();
  }
};

export { registerLog };
