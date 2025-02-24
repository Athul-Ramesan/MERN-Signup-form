import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    title: {type: String, required: true},
    fullName: {type: String, required: true},
    email: {type:String, required: true},
    mobileNumber: {type: String, required: true, unique:true},
    dateOfBirth: {type:Date, required:true},
    password: {type: String, required: true},
    currentAddress: {type: String},
    description: {type: String},
    employmentStatus: {type: String},
    additionalSavings: {type: String},
    addressDuration: {type: String},
    aboutYourself: {type: String},

},
{timestamps: true}
)

const User = mongoose.model("user",userSchema)
export default User

