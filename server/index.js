const express = require('express');
const app = express();
const mongoose = require('mongoose');
const FoodModel = require('./models/Food');
const cors = require("cors");

app.use(express.json());

mongoose.connect('mongodb+srv://seannarron9:dragon928@crud.4fkaje4.mongodb.net/food?retryWrites=true&w=majority', {
    useNewUrlParser: true,
})

app.get("/", async (req, res) => {
    const food = new FoodModel({
        foodName: 'apple', 
        daySinceIAte: '3'
    });
    try{
        await food.save();
    } catch (err){
        console.log(err)
    }
});



app.listen(3001, () => {
    console.log('SERVER RUNNING!');
});