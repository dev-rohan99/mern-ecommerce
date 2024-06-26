import mongoose from "mongoose";

const featuresDataSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
    },

    desc: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    }

}, {
    timeStamps: true,
    versionKey: false
});

const featuresModel = mongoose.model("features", featuresDataSchema);

export default featuresModel;
