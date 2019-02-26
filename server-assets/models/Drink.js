let mongoose = require('mongoose')
let Schema = mongoose.Schema


//Define the Schema
let drink = new Schema({
    name: { type: String, required: true, minlength: 3, maxlength: 100 },
    price: { type: Number, required: true },
    sugarFree: { type: Boolean, required: true, default: false },
    ingredients: { type: String }
})

//export schema
module.exports = mongoose.model('Drink', drink)