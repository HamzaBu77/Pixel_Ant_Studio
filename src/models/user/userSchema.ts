import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
    userName: {
        type: String,
        unique: true,
        maxLength: 50,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
        maxlength: 30

    },
    password: {
        type: String,
        require: true,
        minlength: 8

    },
    Gender: {
        type: String,
        require: true
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
    },
    contactNumber: {
        type: String,
        require: true
    },
},
    {
        timestamps: true
    })
const pasusersSchema = mongoose.model("pasUsers", userSchema);
export default pasusersSchema;  