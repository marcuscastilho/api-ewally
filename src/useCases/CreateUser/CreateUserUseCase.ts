import { User } from "../../models/User";
import { DuplicateUserError } from "../../responses/errors/DuplicateUserError";
import { IUsersRepository } from "../../respositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(
      data.email
    );

    if (userAlreadyExists) {
      throw new DuplicateUserError();
    }

    const user = new User(data);

    await this.usersRepository.save(user);
  }
}

export { CreateUserUseCase };
