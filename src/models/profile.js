import mongoose from "mongoose";

const profileDataSchema = mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },

    customerName: {
        type: String,
        required: true
    },

    customerAdd: {
        type: String,
        required: true
    },

    customerCity: {
        type: String,
        required: true
    },

    customerCountry: {
        type: String,
        required: true
    },

    customerFax: {
        type: String,
        required: true
    },

    customerPhone: {
        type: String,
        required: true
    },

    customerPostcode: {
        type: String,
        required: true
    },

    customerState: {
        type: String,
        required: true
    },

    shipAdd: {
        type: String,
        required: true
    },

    shipCity: {
        type: String,
        required: true
    },

    shipCountry: {
        type: String,
        required: true
    },

    shipFax: {
        type: String,
        required: true
    },

    shipPhone: {
        type: String,
        required: true
    },

    shipPostcode: {
        type: String,
        required: true
    },

    shipState: {
        type: String,
        required: true
    },

}, {
    timeStamps: true,
    versionKey: false
});

const profileModel = mongoose.model("profiles", profileDataSchema);

export default profileModel;
