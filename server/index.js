const express = require('express');
const app = express();
const mongoose = require('mongoose');
const FoodModel = require('./models/Food');
const cors = require("cors");

app.use(express.json());

mongoose.connect('mongodb+srv://seannarron9:dragon928@crud.4fkaje4.mongodb.net/food?retryWrites=true&w=majority', {
    useNewUrlParser: true,
})

app.get("/read", async (req, res) => {

    FoodModel.find({}, (err, result) => {
        if (err) {
            console.log(err)
        }

        res.send(result)
    })
})

app.get("/post", async (req, res) => {

    const foodName = req.body.foodName
    const days = req.body.days

    const food = new FoodModel({
        foodName: foodName, 
        daySinceIAte: days
    });
    try{
        await food.save();
        res.send("inserted data");
    } catch (err){
        console.log(err)
    }
});



app.listen(3001, () => {
    console.log('SERVER RUNNING!');
});