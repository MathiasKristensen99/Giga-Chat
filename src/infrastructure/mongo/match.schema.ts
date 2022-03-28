import * as mongoose from 'mongoose';

export const MatchSchema = new mongoose.Schema({
  userUuid: String,
  likes: [String],
  dislikes: [String],
});
