import mongoose from "mongoose";

const jobSchema = mongoose.Schema({
    mainHeader: {
        type: String,
        require: true
    },
    subHeader: {
        type: String,
        require: true
    },
    homeImg: {
        type: String,
    }
    
}, { timestamps: true });

export default mongoose.model("Job", jobSchema);