import { EntitySchema } from 'typeorm';
import { User } from '../../core/user.entity';

export const UserSchema = new EntitySchema<User>({
  name: 'User',
  target: User,
  columns: {
    uuid: {
      type: 'uuid',
      generated: 'uuid',
      primary: true,
    },
    name: {
      type: 'varchar',
      unique: true,
    },
    email: {
      type: 'varchar',
      unique: true,
    },
    password: {
      type: 'varchar',
    },
    friends: {
      type: 'varchar',
    },
  },
  relations: {},
});
