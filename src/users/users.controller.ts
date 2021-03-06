import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
  Query,
} from '@nestjs/common';
import { UsersService } from '../domain/users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { SearchUserDto } from './dto/search-user.dto';
import { User } from '../core/user.entity';
import { LoginUserDto } from './dto/login-user.dto';
import { AddFriendDto } from './dto/add-friend.dto';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('UsersService') private readonly usersService: UsersService,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(
      createUserDto.name,
      createUserDto.email,
      createUserDto.password,
    );
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':uuid')
  findOne(@Param('uuid') uuid: string): Promise<User> {
    return this.usersService.getUserById(uuid);
  }

  @Post('/search/:name')
  search(@Body() searchUserDto: SearchUserDto) {
    return this.usersService.search(searchUserDto.name);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  @Post('/login')
  login(@Body() loginUser: LoginUserDto): Promise<User> {
    return this.usersService.login(loginUser.email, loginUser.password);
  }

  @Post('/addFriend')
  addFriend(@Body() addFriendDto: AddFriendDto) {
    return this.usersService.addFriend(addFriendDto.uuid, addFriendDto.name);
  }

  @Get('/friends/:uuid')
  getFriends(@Param('uuid') uuid: string): Promise<string> {
    return this.usersService.getFriends(uuid);
  }
}
