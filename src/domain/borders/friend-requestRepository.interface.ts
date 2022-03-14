import { FriendRequest } from '../../core/friend-request.entity';

export interface IFriendRequestRepository {
  create(
    sentUserUuid: string,
    receivedUserUuid: string,
    isAccepted: boolean,
  ): Promise<FriendRequest>;
}
