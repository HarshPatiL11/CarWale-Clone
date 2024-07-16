import mongoose from "mongoose";

const popCar = mongoose.Schema({
    popHeader: {
        type: String,
        require: true
    },
    linkText: []
}, { timestamps: true });

export default mongoose.model("PopCar", popCar);