import mongoose from "mongoose";

const usedCity = mongoose.Schema({
    cityHeader: {
        type: String,
        require: true
    },
    cityImg: {
        type: String
    }
    
}, { timestamps: true });

export default mongoose.model("usedCity", usedCity);