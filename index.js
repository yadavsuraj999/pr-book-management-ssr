import express from "express";
import connectDB from "./config/db.js";

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
app.get("/viewbook", (req, res) => {
    res.render("viewbook")
})


app.listen(PORT, () => {
    console.log(`server started at PORT: http://localhost:${PORT}`);
})