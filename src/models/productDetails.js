import mongoose from "mongoose";

const productDetailsDataSchema = mongoose.Schema({

    imgone: {
        type: String,
        required: true
    },

    imgtwo: {
        type: String,
        required: true
    },

    imgthree: {
        type: String,
        required: true
    },

    imgfour: {
        type: String,
        required: true
    },

    imgfive: {
        type: String
    },

    imgsix: {
        type: String
    },

    imgseaven: {
        type: String
    },

    imgeight: {
        type: String
    },

    desc: {
        type: String,
        required: true
    },

    color: {
        type: String,
        required: true
    },

    size: {
        type: Array,
        required: true
    },

    productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }

}, {
    timeStamps: true,
    versionKey: false
});

const productDetailsModel = mongoose.model("product-details", productDetailsDataSchema);

export default productDetailsModel;
