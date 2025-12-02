import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true,
    },
    authorName: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true,
    },
    isDiscount: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
})

const Books = new mongoose.model("Books", BookSchema);
export default Books;