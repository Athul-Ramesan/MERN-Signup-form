import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type:String, required: true},
    phone: {type: String, required: true, unique:true},
    dob: {type:Date, required:true},
    password: {type: String, required: true},
    address: {type: String},
    description: {type: String},
    employmentStatus: {type: String},
    financialInfo: {type: String}
},
{timestamps: true}
)

const User = mongoose.model("user",userSchema)
export default User

