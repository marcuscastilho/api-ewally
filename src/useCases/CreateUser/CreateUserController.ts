import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<void> {
    const { name, email, password } = request.body;

    await this.createUserUseCase.execute({
      name,
      email,
      password,
    });
  }
}

export { CreateUserController };
