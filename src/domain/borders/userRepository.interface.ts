import { User } from '../../core/user.entity';

export interface IUserRepository {
  create(name: string, email: string, password: string): Promise<User>;
  findAll();
  search(name: string): Promise<User>;
  getUser(email: string, password: string): Promise<User>;
  getUserById(uuid: string): Promise<User>;
}
