import { User } from "../models/User";

export interface IUsersRepository {
  save(user: User): Promise<void>;
  findByEmail(email: string): Promise<User>;
}
