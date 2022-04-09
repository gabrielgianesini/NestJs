import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
import { UsersModule } from './users/users.module';
dotenv.config({ path: './.env.development' });
@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://gianesini:${process.env.PASSWORD}@cluster0.js0ui.mongodb.net/myFirstDatabase`,
    ),
    UsersModule,
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
