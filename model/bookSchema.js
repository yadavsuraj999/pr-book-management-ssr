import mongoose from "mongoose";

const BookSchema = mongoose.Schema({
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
    price: {
        type: Number,
        required: true,
    }
})

const Books = mongoose.model("Books", BookSchema);
export default Books;