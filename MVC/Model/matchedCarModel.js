import mongoose from "mongoose";

const matchedcar = mongoose.Schema({
    img: {
        type: String,
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    year: {
        type: Number,
        require: true
    },
    distance: {
        type: String,
        require: true
    }
    
}, { timestamps: true });
export default mongoose.model("matchedCar", matchedcar);