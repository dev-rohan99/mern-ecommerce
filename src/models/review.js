import mongoose from "mongoose";

const reviewDataSchema = mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },

    productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },

    desc: {
        type: String,
        required: true
    },

    rating: {
        type: String,
        required: true
    }

}, {
    timeStamps: true,
    versionKey: false
});

const reviewModel = mongoose.model("reviews", reviewDataSchema);

export default reviewModel;
