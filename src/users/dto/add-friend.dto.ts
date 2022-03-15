import { ApiProperty } from '@nestjs/swagger';

export class AddFriendDto {
  @ApiProperty()
  uuid: string;
  @ApiProperty()
  name: string;
}
