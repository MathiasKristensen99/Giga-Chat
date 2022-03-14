import { IUserRepository } from './borders/userRepository.interface';
import { User } from '../core/user.entity';

export class UsersService {
  private userRepo: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepo = userRepository;
  }

  create(name: string, email: string, password: string): Promise<User> {
    return this.userRepo.create(name, email, password);
  }

  findAll() {
    return this.userRepo.findAll();
  }

  search(name: string): Promise<User> {
    return this.userRepo.search(name);
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  login(email: string, password: string) {
    return this.userRepo.getUser(email, password);
  }
}
