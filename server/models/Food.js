const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
    foodName: {
        type: String,
        required: true
    },
    daySinceIAte: {
        type: Number,
        required: true
    },
    // id: {
    //     type: String,
    //     required: true
    // }

})

const Food = mongoose.model("Food", FoodSchema);
module.exports = Food;