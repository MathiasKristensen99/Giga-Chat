import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
} from '@nestjs/common';
import { FriendRequestsService } from '../domain/friend-requests.service';
import { CreateFriendRequestDto } from './dto/create-friend-request.dto';
import { UpdateFriendRequestDto } from './dto/update-friend-request.dto';

@Controller('friend-requests')
export class FriendRequestsController {
  constructor(
    @Inject('FriendRequestsService')
    private readonly friendRequestsService: FriendRequestsService,
  ) {}

  @Post()
  create(@Body() createFriendRequestDto: CreateFriendRequestDto) {
    return this.friendRequestsService.create(
      createFriendRequestDto.sentUserUuid,
      createFriendRequestDto.receivedUserUuid,
      createFriendRequestDto.isAccepted,
    );
  }

  @Get()
  findAll() {
    return this.friendRequestsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.friendRequestsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFriendRequestDto: UpdateFriendRequestDto,
  ) {
    return this.friendRequestsService.update(+id, updateFriendRequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.friendRequestsService.remove(+id);
  }
}
