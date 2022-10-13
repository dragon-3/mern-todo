const express = require('express');
const app = express();
const mongoose = require('mongoose');
const FoodModel = require('./models/Food');
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.options('*', cors())

mongoose.connect('mongodb+srv://seannarron9:dragon928@crud.4fkaje4.mongodb.net/food?retryWrites=true&w=majority', {
    useNewUrlParser: true,
})

app.get("/items", (req, res) => {

    FoodModel.find({}, (err, result) => {
        if (err) {
            console.log(err)
        }

        res.send(result)
    })
})

app.get("/items/:id", (req, res) => {

    const id = req.params.id;

    FoodModel.find({_id: id}, (err, result) => {
        if (err) {
            console.log(err)
        }

        res.send(result)
    })
})

app.post("/insert", (req, res) => {

    const foodName = req.body.foodName;
    const day = req.body.days;

    const food = new FoodModel({
        foodName: foodName, 
        daySinceIAte: day
    });
    try{
        food.save();
        res.send("inserted data");
    } catch (err){
        console.log(err)
    }
});

app.put("/update", (req, res) => {

    const foodName = req.body.foodName;
    const day = req.body.day;
    const id = req.params.id;

    try{
        FoodModel.findById(id, (err, updatedData) => {
            updatedData.foodName = foodName;
            updatedData.daySinceIAte = day;
            updatedData.save();
            res.send("Updated!")

        })
        // food.save();
        // res.send("inserted data");
    } catch (err){
        console.log(err)
    }
})

app.delete("/delete/:id", (req, res) => {
    const id = req.params.id

    try {
        FoodModel.findByIdAndRemove(id).exec();
        res.send("Deleted!")

    } catch (err) {
        console.log(err)
    }
    

})



app.listen(3001, () => {
    console.log('SERVER RUNNING!');
});