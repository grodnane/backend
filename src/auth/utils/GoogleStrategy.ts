import { Inject, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, Profile } from "passport-google-oauth20";
import { AuthService } from "../auth.service";


@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
    constructor(
        @Inject('AUTH_SERVICE') private readonly authService: AuthService) {
        super({
            clientID: '643720428384-9qmmrvb4dkvrjajs30e5kjt9eg5hf41e.apps.googleusercontent.com',
            clientSecret: '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',
            callbackURL: 'http://localhost:3001/api/auth/google/redirect',
            scope: ['profile', 'email']
        });


    }
    async validate(accesToken: string, refreshToken: string, profile: Profile) {
        console.log(accesToken)
        console.log(refreshToken)
        console.log(profile)
        const user = await this.authService.validateUSer({ email: profile.emails[0].value, displayName: profile.displayName, profilePic: profile.photos[0].value })
        if (user) { return user } else { return null }
    }

}