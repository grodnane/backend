/* eslint-disable @typescript-eslint/ban-types */
import { Inject, Injectable } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import { AuthService } from "../auth.service";
import { User } from "src/users/schema/user.schema";

@Injectable()
export class SessionSerializer extends PassportSerializer {
    constructor(@Inject('AUTH_SERVICE') private readonly authService: AuthService,) {
        super();
    }

    serializeUser(user: any, done: Function) {


        console.log('serialize user')
        done(null, user)
    }


    async deserializeUser(payload: User, done: Function) {
        console.log(payload)
        const user = await this.authService.findUser(payload.email);
        console.log(user)
        console.log('usuario encontrado')
        return user ? done(null, user) : done(null, null)
    }
}