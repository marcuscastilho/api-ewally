import { Response, NextFunction } from "express";
import { IRequest } from '../types/IRequest'
import { Schema } from "joi";
import { ContentDocumentError } from "../responses/errors/ContentDocumentError";
import { ResponseController } from "../responses/ResponseController";

const validationSchema = async (
  request: IRequest,
  response: Response,
  next: NextFunction,
  schema: Schema
) => {
  try {
    try {
      await schema.validateAsync(request);
      next();
    } catch (err) {
      throw new ContentDocumentError({
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
