import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';
import { GoogleStrategy } from 'src/auth/utils/GoogleStrategy';
import { SessionSerializer } from 'src/auth/utils/Serializer';
import { AuthService } from 'src/auth/auth.service';
import { UsersModule } from 'src/users/users.module';
import { AuthModule } from 'src/auth/auth.module';
import { User, UserSchema } from 'src/users/schema/user.schema';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [AuthModule, UsersModule, MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [NotesController],
  providers: [NotesService, GoogleStrategy, SessionSerializer, { provide: 'AUTH_SERVICE', useClass: AuthService }]
})
export class NotesModule { }
