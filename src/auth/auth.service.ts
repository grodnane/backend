import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/users/schema/user.schema";
import { UserDetails } from "src/utils/types";

@Injectable()
export class AuthService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) { }

    async validateUSer(details: UserDetails) {
        console.log('authservice');

        const user = await this.userModel.findOne({ email: details.email })
        if (user) { return user }

        console.log('User not found. Creating a new User...')
        const newUser = await this.userModel.create(details);
        return newUser;

    }

    async findUser(email: string) {
        const user = await this.userModel.findOne({ email: email }).exec()
        return user;
    }
}