import { Document } from 'mongoose';

export class Match extends Document {
  userUuid: string;
  likes: string[];
  dislikes: string[];
}
