import mongoose from "mongoose";

const brandDataSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
        unique: true
    },

    image: {
        type: String,
        required: true
    },

    slug: {
        type: String
    }

}, {
    timestamps: true,
    versionKey: false
});

const brandModel = mongoose.model("brands", brandDataSchema);

export default brandModel;
