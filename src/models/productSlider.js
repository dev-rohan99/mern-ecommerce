import mongoose from "mongoose";

const productSliderDataSchema = mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    },

    desc: {
        type: String,
        required: true
    },

    price: {
        type: String,
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

const productSliderModel = mongoose.model("product-sliders", productSliderDataSchema);

export default productSliderModel;
