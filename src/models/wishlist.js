import mongoose from "mongoose";

const wishlistDataSchema = mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },

    productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }

}, {
    timeStamps: true,
    versionKey: false
});

const wishlistModel = mongoose.model("wishlists", wishlistDataSchema);

export default wishlistModel;
