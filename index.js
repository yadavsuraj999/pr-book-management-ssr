import express from "express";
import connectDB from "./config/db.js";
import Books from "./model/bookSchema.js";

const app = express();
const PORT = 8000;
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

connectDB();


app.get("/", (req, res) => {
    res.render("home")
})
app.get("/home", (req, res) => {
    res.render("home")
})
app.get("/addbook", (req, res) => {
    res.render("addbook")
})

app.get("/viewbook", async (req, res) => {
    const newBook = await Books.find({})
    res.render("viewbook", { newBook })
})

app.post("/addbook", async (req, res) => {
    console.log(req.body);
    const data = req.body
    try {
        const bookdata = new Books(data)
        await bookdata.save()
        return res.redirect("/viewbook")
    } catch (error) {
        console.log(error);
    }
})

app.get("/deleteBook", async (req, res) => {
    console.log(req.query);
    const bookId = req.query.deleteId
    try {
        await Books.findByIdAndDelete(bookId)
        res.redirect("/viewbook")
    } catch (error) {
        console.log(error);
    }
})

app.get("/editBook", async (req, res) => {
    const editid = req.query.editId
    try {
        const editbook = await Books.findById(editid)
        res.render("editBook", { editbook })
    } catch (error) {
        console.log(error);
    }
})

app.post("/editBook", async (req, res) => {
    console.log(req.body);
    console.log(req.query.editId);
    const book = req.body
    const bookquery = req.query.editId
    try {
        await Books.findByIdAndUpdate(bookquery, book)
        res.redirect("/viewbook")
    } catch (error) {

    }
})



app.listen(PORT, () => {
    console.log(`server started at PORT: http://localhost:${PORT}`);
})