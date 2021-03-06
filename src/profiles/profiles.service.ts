import { Inject, Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { Model } from 'mongoose';
import { Profile } from './entities/profile.entity';

@Injectable()
export class ProfilesService {
  constructor(@Inject('PROFILE_MODEL') private profileModel: Model<Profile>) {}

  async create(createProfileDto: CreateProfileDto): Promise<Profile> {
    const profile = new this.profileModel(createProfileDto);
    return profile.save();
  }

  findAll() {
    return this.profileModel.find().exec();
  }

  findByGender(gender: string): Promise<Profile[]> {
    return this.profileModel
      .find({
        gender: gender,
      })
      .exec();
  }
}
