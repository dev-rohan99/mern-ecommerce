import mongoose from "mongoose";

const invoiceProductDataSchema = mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },

    productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },

    invoiceId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
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

const invoiceProductModel = mongoose.model("invoice-products", invoiceProductDataSchema);

export default invoiceProductModel;
