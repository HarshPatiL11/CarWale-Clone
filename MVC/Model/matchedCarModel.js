import mongoose from "mongoose";

const jobSchema = mongoose.Schema({
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
    price: {
        type: String,
        require: true
    }
    
}, { timestamps: true });

export default mongoose.model("Job", jobSchema);