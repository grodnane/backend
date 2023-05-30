import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<User>

@Schema()
export class User {

    @Prop({ isRequired: false })
    _id: string

    @Prop()
    email: string

    @Prop()
    displayName: string

    @Prop()
    profilePic: string



}
export const UserSchema = SchemaFactory.createForClass(User);