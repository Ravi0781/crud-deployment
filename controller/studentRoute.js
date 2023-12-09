const express = require("express");
const studentSchema = require("../models/studentSchema");
const studentRoutes = express.Router();
const mongoose = require("mongoose");

studentRoutes.post("/create-student", (req, res)=>{
    studentSchema.create(req.body, (err, data)=>{
        if(err)
            return err;
        else    
            res.json(data);
    })
})

studentRoutes.get("/", (req, res) => {
    studentSchema.find((err, data) => {
        if (err)
            return err;
        else
            res.json(data); 
    })
});

studentRoutes.route("/update-student/:id").get((req, res) => {
    studentSchema.findById(mongoose.Types.ObjectId(req.params.id), (err, data)=>{
        if(err)
            return err;
        else    
            res.json(data);
    })
}).put((req, res)=>{
    studentSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id), {$set: req.body} ,(err, data)=>{
        if(err)
            return err;
        else    
            res.json(data);
    })
});

studentRoutes.delete("/delete-student/:id", (req, res)=>{
    studentSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id), (err, data)=>{
        if(err)
            return err;
        else 
            res.json(data);
    })
})

module.exports = studentRoutes;