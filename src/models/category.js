import mongoose from "mongoose";

const categoryDataSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
        unique: true
    },

    slug: {
        type: String,
        required: true,
        uniqueL: true
    },

    image: {
        type: String,
        required: true
    }

}, {
    timestamps: true,
    versionKey: false
});

const categoryModel = mongoose.model("categories", categoryDataSchema);

export default categoryModel;