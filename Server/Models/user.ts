/*
File: user.ts
Student Name: Diksha patel , Namrata Savaliya
StudentId: 200540067, 200548688
Date: July 23, 2023
 */
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import passportLocalMongoose from 'passport-local-mongoose';

interface IUser
{
    _id: string,
    username: string,
    emailAddress: string,
    displayName: string,
    created: Date,
    updated: Date
}
const UserSchema = new Schema<IUser>
({
 username: String,
 emailAddress: String,
 displayName: String,
 created:
 {
 type: Date,
 default: Date.now()
 },
 updated:
 {
 type: Date,
 default: Date.now()
 }
},
{
 collection: 'users'
});

UserSchema.plugin(passportLocalMongoose);
const Model = mongoose.model<IUser>("User", UserSchema);
declare global
{
 export type UserDocument = mongoose.Document &
 {
 _id: String,
 username: String,
 emailAddress: String,
 displayName: String
 }
}
export default Model;