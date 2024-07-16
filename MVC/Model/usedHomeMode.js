import mongoose from "mongoose";

const storeItemSchema = mongoose.Schema({
    item_ID: {
        type: String,
        required: true
    },
    item_Name: {
        type: String,
        required: true
    },
    item_Brand: {
        type: String,
        required: true
    },
    item_Price: {
        type: Number,
        required: true
    },
    item_Description: {
        type: String,
        required: true
    }
}, { timestamps: true });

export default mongoose.model("storeItem", storeItemSchema);
