import { UpdateFriendRequestDto } from '../friend-requests/dto/update-friend-request.dto';
import { IFriendRequestRepository } from './borders/friend-requestRepository.interface';
import { FriendRequest } from '../core/friend-request.entity';

export class FriendRequestsService {
  private friendRequestRepo: IFriendRequestRepository;

  constructor(friendRequestRepository: IFriendRequestRepository) {
    this.friendRequestRepo = friendRequestRepository;
  }

  create(
    sentUserUuid: string,
    receivedUserUuid: string,
    isAccepted: boolean,
  ): Promise<FriendRequest> {
    return this.friendRequestRepo.create(
      sentUserUuid,
      receivedUserUuid,
      isAccepted,
    );
  }

  findAll() {
    return `This action returns all friendRequests`;
  }

  findOne(id: number) {
    return `This action returns a #${id} friendRequest`;
  }

  update(id: number, updateFriendRequestDto: UpdateFriendRequestDto) {
    return `This action updates a #${id} friendRequest`;
  }

  remove(id: number) {
    return `This action removes a #${id} friendRequest`;
  }
}
