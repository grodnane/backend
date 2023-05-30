import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { PassportModule } from '@nestjs/passport';

import { NotesModule } from './notes/notes.module';

@Module({
  imports: [AuthModule, PassportModule.register({ session: true }), ConfigModule.forRoot(), MongooseModule.forRoot('mongodb+srv://admin:O0YfdNOvLGtrIRQw@task-app.ebfr8km.mongodb.net/?retryWrites=true&w=majority'), UsersModule, NotesModule],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule { }
