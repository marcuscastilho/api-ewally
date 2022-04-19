import { Response, NextFunction } from "express";
import { IRequest } from "../types/IRequest";
import { Schema } from "joi";
import { ContentError } from "../responses/errors/ContentError";
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
      await schema.validateAsync(data);
      next();
    } catch (err) {
      throw new ContentError({
        tag: 'codigo do boleto',
        message: "O código do boleto informado não é válido",
        solution: "Verificar se o código do boleto foi digitado corretamente",
      });
    }
  } catch (err) {
    const handleError = new ResponseController(response, request, err);
    await handleError.toRespond();
  }
};

export { validationSchema };
