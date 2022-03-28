import * as mongoose from 'mongoose';

export const MongodbProvider = [
  {
    provide: 'MONGO_DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://localhost/nest'),
  },
];
