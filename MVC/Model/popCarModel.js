import mongoose from "mongoose";

const jobSchema = mongoose.Schema({
    popHeader: {
        type: String,
        require: true
    },
    linkText: []
}, { timestamps: true });

export default mongoose.model("Job", jobSchema);