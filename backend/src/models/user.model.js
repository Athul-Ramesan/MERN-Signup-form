"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    mobileNumber: { type: String, required: true, unique: true },
    dateOfBirth: { type: Date, required: true },
    password: { type: String, required: true },
    currentAddress: { type: String },
    description: { type: String },
    employmentStatus: { type: String },
    additionalSavings: { type: String },
    addressDuration: { type: String },
    aboutYourself: { type: String },
}, { timestamps: true });
const User = mongoose_1.default.model("user", userSchema);
exports.default = User;
