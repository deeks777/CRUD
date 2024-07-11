import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    age: Number
})

const userModel = mongoose.model('users', userSchema)

export default userModel;