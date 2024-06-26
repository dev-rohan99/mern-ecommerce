import mongoose from "mongoose";

const invoiceDataSchema = mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },

    payable: {
        type: String,
        required: true
    },

    customerDetails: {
        type: String,
        required: true
    },

    shipDetails: {
        type: String,
        required: true
    },

    transactionId: {
        type: String,
        required: true
    },

    validationId: {
        type: String,
        required: true
    },

    deliveryStatus: {
        type: String,
        required: true
    },

    paymentStatus: {
        type: String,
        required: true
    },

    vat: {
        type: String,
        required: true
    },

    total: {
        type: String,
        required: true
    },

}, {
    timeStamps: true,
    versionKey: false
});

const invoiceModel = mongoose.model("invoices", invoiceDataSchema);

export default invoiceModel;
