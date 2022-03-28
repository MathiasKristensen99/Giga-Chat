import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { MatchesService } from './matches.service';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
@WebSocketGateway()
export class MatchesGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly matchesService: MatchesService) {}

  @SubscribeMessage('createMatch')
  create(@MessageBody() createMatchDto: CreateMatchDto) {
    //this.server.emit(createMatchDto);
    return this.matchesService.create(createMatchDto);
  }

  @SubscribeMessage('findAllMatches')
  findAll() {
    return this.matchesService.findAll();
  }

  @SubscribeMessage('findOneMatch')
  findOne(@MessageBody() id: number) {
    return this.matchesService.findOne(id);
  }

  @SubscribeMessage('updateMatch')
  update(@MessageBody() updateMatchDto: UpdateMatchDto) {
    return this.matchesService.update(updateMatchDto.id, updateMatchDto);
  }

  @SubscribeMessage('removeMatch')
  remove(@MessageBody() id: number) {
    return this.matchesService.remove(id);
  }
}
