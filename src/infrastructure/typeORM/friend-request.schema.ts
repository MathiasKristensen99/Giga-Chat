import { EntitySchema } from 'typeorm';
import { FriendRequest } from '../../core/friend-request.entity';

export const FriendRequestSchema = new EntitySchema<FriendRequest>({
  name: 'FriendRequest',
  target: FriendRequest,
  columns: {
    uuid: {
      type: 'uuid',
      generated: 'uuid',
      primary: true,
    },
    sentUserUuid: {
      type: 'varchar',
    },
    sentUserName: {
      type: 'varchar',
    },
    receivedUserUuid: {
      type: 'varchar',
    },
    isAccepted: {
      type: 'boolean',
    },
  },
  relations: {},
});
