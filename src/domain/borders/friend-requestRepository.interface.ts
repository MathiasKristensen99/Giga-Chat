import { FriendRequest } from '../../core/friend-request.entity';

export interface IFriendRequestRepository {
  create(
    sentUserUuid: string,
    sentUserName: string,
    receivedUserUuid: string,
    isAccepted: boolean,
  ): Promise<FriendRequest>;

  getFriendRequests(receivedUserUuid: string): Promise<FriendRequest[]>;

  delete(uuid: string);
}
