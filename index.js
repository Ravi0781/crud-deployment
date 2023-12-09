const express = require("express");
const mongoose = require("mongoose");
const studentRoutes = require("./controller/studentRoute");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");


mongoose.set("strictQuery", true);
mongoose.connect("mongodb+srv://ravirajsinha77:hellohello@cluster0.ltj3ogw.mongodb.net/schooldb");
const db = mongoose.connection;
db.on("open", ()=>console.log("Connected to database"));
db.on("error", ()=>console.log("Error Occured"));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());    
app.use("/studentRoutes", studentRoutes);

app.listen(4000, ()=>{
    console.log("Server Started");
})