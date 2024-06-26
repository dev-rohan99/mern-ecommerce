import mongoose from "mongoose";

const paymentDataSchema = mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },

    storeId: {
        type: String,
        required: true
    },

    storePassword: {
        type: String,
        required: true
    },
    
    currency: {
        type: String,
        required: true
    },

    successUrl: {
        type: String,
        required: true
    },

    failUrl: {
        type: String,
        required: true
    },

    cancelUrl: {
        type: String,
        required: true
    },

    ipnUrl: {
        type: String,
        required: true
    },

    initUrl: {
        type: String,
        required: true
    }

}, {
    timeStamps: true,
    versionKey: false
});

const paymentModel = mongoose.model("payments", paymentDataSchema);

export default paymentModel;
