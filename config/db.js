import mongoose from "mongoose";

const Mongo_URI = "mongodb://localhost:27017/";

const connectDB = () => {
    mongoose.connect(Mongo_URI);
    console.log("Connected Successfully...");
}

export default connectDB; 