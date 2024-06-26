import mongoose from "mongoose";

const cartDataSchema = mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },

    productId: {
        type: mongoose.Schema.Types.ObjectId,
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

    price: {
        type: Array,
        required: true
    },

    quantity: {
        type: Array,
        required: true
    },

}, {
    timeStamps: true,
    versionKey: false
});

const cartModel = mongoose.model("carts", cartDataSchema);

export default cartModel;
