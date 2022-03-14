import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatsModule } from './chats/chats.module';
import { FriendRequestsModule } from './friend-requests/friend-requests.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      database: './database/giga.db',
      autoLoadEntities: true,
      type: 'sqlite',
      synchronize: true,
    }),
    UsersModule,
    ChatsModule,
    FriendRequestsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
