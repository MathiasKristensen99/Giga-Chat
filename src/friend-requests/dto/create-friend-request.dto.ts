import { ApiProperty } from '@nestjs/swagger';

export class CreateFriendRequestDto {
  @ApiProperty()
  sentUserUuid: string;
  @ApiProperty()
  receivedUserUuid: string;
  @ApiProperty()
  isAccepted: boolean;
}
