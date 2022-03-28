import { Inject, Injectable } from '@nestjs/common';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { Model } from 'mongoose';
import { Match } from './entities/match.entity';

@Injectable()
export class MatchesService {
  constructor(@Inject('MATCH_MODEL') private matchModel: Model<Match>) {}

  async create(createMatchDto: CreateMatchDto): Promise<Match> {
    if (createMatchDto.isAMatch) {
      const match = await this.matchModel
        .findOne({ userUuid: createMatchDto.userMatchSenderUuid })
        .exec();
      match.likes.push(createMatchDto.userMatchReceiverUuid);
      return match.save();
    } else {
      const match = await this.matchModel
        .findOne({ userUuid: createMatchDto.userMatchSenderUuid })
        .exec();
      match.dislikes.push(createMatchDto.userMatchReceiverUuid);
      return match.save();
    }
  }

  findAll() {
    return `This action returns all matches`;
  }

  findOne(id: number) {
    return `This action returns a #${id} match`;
  }

  update(id: number, updateMatchDto: UpdateMatchDto) {
    return `This action updates a #${id} match`;
  }

  remove(id: number) {
    return `This action removes a #${id} match`;
  }
}
