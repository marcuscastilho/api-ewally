import { Request } from "express";
import { Log } from "../../models/Log";
import { CreateLogUseCase } from "./CreateLogUseCase";

class CreateLogController {
  constructor(private createLogUseCase: CreateLogUseCase) {}

  async handle(request: Request): Promise<Log> {
    const { protocol, url, method, params, headers, query, body } = request;

    const log = await this.createLogUseCase.execute({
      protocol,
      url,
      method,
      params,
      headers,
      query,
      body,
    });

    return log;
  }
}

export { CreateLogController };
