import { Request, Response, NextFunction } from "express";
import { Schema } from 'joi'

const validationSchema = async (request: Request, response: Response, next: NextFunction, schema: Schema) => {
  try {
    await schema.validateAsync(request);
    next();
  } catch (err) {
    return err;
  }
};

export { validationSchema };
