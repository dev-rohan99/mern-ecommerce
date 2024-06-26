import mongoose from "mongoose";

const userDataSchema = mongoose.Schema({

    email: {
        type: String,
        required: true,
        lowercase: true
    },

    password: {
        type: String,
        required: true
    },

    otp: {
        type: String,
        required: true
    }

}, {
    timeStamps: true,
    versionKey: false
});

const userModel = mongoose.model("users", userDataSchema);

export default userModel;
