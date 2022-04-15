import Youch from "youch";
import { InternalServerError } from "./errors/InternalServerError";
import { Request, Response } from "express";
import { Log } from "../models/Log";

interface IRequest extends Request {
  log: Log;
}

interface IMessage extends Error {
  toRespond?: (protocol?: string) => {};
  statusCode?: number;
}

class ResponseController {
  response: Response;
  request: IRequest;
  message: IMessage;
  log: Log;

  constructor(response: Response, request: IRequest, message: IMessage) {
    this.response = response;
    this.request = request;
    this.message = message;
    this.log = request.log;
  }

  async toRespond() {
    try {
      if (this.message.toRespond) {
        this.response
          .status(this.message.statusCode)
          .json(this.message.toRespond(this.log.protocol));
        return;
      }

      const youch = new Youch(this.message, this.request);

      if (process.env.NODE_ENV === "development") {
        const htmlError = await youch.toHTML();

        this.response.status(500).send(htmlError);
      } else {
        const internalServerError = new InternalServerError();
        this.response
          .status(internalServerError.statusCode)
          .json(internalServerError.toRespond(this.log.protocol));
      }

      return;
    } catch (err) {
      const internalServerError = new InternalServerError();
      this.response
        .status(internalServerError.statusCode)
        .json(internalServerError.toRespond());
    }
  }
}

export { ResponseController };
