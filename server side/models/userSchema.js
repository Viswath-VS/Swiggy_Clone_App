import mongoose from 'mongoose';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();
const jwtKey = process.env.JWT_KEY;

// model Schema for the User docs.
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20,
    },
    employee_id: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        // unique: true
    },
    email: {
        type: String,
        required: true,
        minlength: 12,
        maxlength: 255,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 12,
        maxlength: 1024,
    },
    slot_booked: {
        type: Boolean,
        required: true,
    },
    vaccine_center: {
        type: String,
        // required: true,
    },
    date: {
        type: String,
        // required: true,
    },
    time_slot: {
        type: String,
        // required: true,
    },
    vaccine_name: {
        type: String,
        // required: true,
    },
});

userSchema.methods.getToken = function () {
    const token = jwt.sign({ _id: this._id }, jwtKey, { expiresIn: 3600 }); //token expires in 1hr.
    return token;
};

const User = mongoose.model('User', userSchema);

export default User;
