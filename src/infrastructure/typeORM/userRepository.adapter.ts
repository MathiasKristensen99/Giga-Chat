import { IUserRepository } from '../../domain/borders/userRepository.interface';
import { User } from '../../core/user.entity';
import { EntityManager, Repository } from 'typeorm';
import { UserSchema } from './user.schema';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepositoryAdapter implements IUserRepository {
  private readonly userRepo: Repository<User>;

  constructor(private readonly em: EntityManager) {
    this.userRepo = em.getRepository(UserSchema);
  }

  create(name: string, email: string, password: string): Promise<User> {
    return this.userRepo.save({
      name: name,
      email: email,
      password: password,
      friends: '',
    });
  }

  findAll() {
    return this.userRepo.find();
  }

  search(name: string): Promise<User> {
    return this.userRepo.findOne({ where: { name: name } });
  }

  getUser(email: string, password: string): Promise<User> {
    return this.userRepo.findOne({
      where: {
        email: email,
        password: password,
      },
    });
  }

  getUserById(uuid: string): Promise<User> {
    return this.userRepo.findOne({ where: { uuid: uuid } });
  }

  async addFriend(uuid: string, name: string) {
    let user = new User();
    user = await this.getUserById(uuid);

    await this.userRepo.save({
      uuid: uuid,
      name: user.name,
      email: user.email,
      password: user.password,
      friends: user.friends + ', ' + name,
    });
  }

  async getFriends(uuid: string): Promise<string> {
    let user = new User();
    user = await this.getUserById(uuid);

    return user.friends;
  }
}
