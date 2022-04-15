import { DatabaseUsersRepository } from "../../respositories/implementations/database/DatabaseUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const databaseUsersRepository = new DatabaseUsersRepository();
const createUserUseCase = new CreateUserUseCase(databaseUsersRepository);
const createUserControler = new CreateUserController(createUserUseCase);

export { createUserControler };
