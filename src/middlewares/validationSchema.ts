import { Response, NextFunction } from "express";
import { IRequest } from "../types/IRequest";
import { Schema } from "joi";
import { BodyContentError } from "../responses/errors/BodyContentError";
import { ResponseController } from "../responses/ResponseController";

const validationSchema = async (
  request: IRequest,
  response: Response,
  next: NextFunction,
  schema: Schema,
  data: any
) => {
  try {
    try {
      console.log(data)
      await schema.validateAsync(data);
      next();
    } catch (err) {
      throw new BodyContentError({
        tag: err.details[0].context.key,
        message: err.details[0].message,
        solution: "verificar arquivo enviado",
      });
    }
  } catch (err) {
    const handleError = new ResponseController(response, request, err);
    await handleError.toRespond();
  }
};

export { validationSchema };
