import { Request } from "express";
import { CreateLogUseCase } from "./CreateLogUseCase";

class CreateLogController {
  constructor(private createLogUseCase: CreateLogUseCase) {}

  async handle(request: Request): Promise<void> {
    const { protocol, url, method, params, headers, query, body } = request;

    try {
      await this.createLogUseCase.execute({
        protocol,
        url,
        method,
        params,
        headers,
        query,
        body,
      });
    } catch (err) {
      return err
    }
  }
}

export { CreateLogController };
