import mongoose from "mongoose";

const usedtool = mongoose.Schema({
    toolHeader: {
        type: String,
        require: true
    },
    toolSubHeader: {
        type: String,
        require: true
    },
    linkText: {
        type: String,
        require: true
    }
    
}, { timestamps: true });

export default mongoose.model("tools",usedtool );