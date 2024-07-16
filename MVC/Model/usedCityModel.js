import mongoose from "mongoose";

const jobSchema = mongoose.Schema({
    cityHeader: {
        type: String,
        require: true
    },
    cityImg: {
        type: String
    }
    
}, { timestamps: true });

export default mongoose.model("Job", jobSchema);