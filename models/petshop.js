const mongoose = require("mongoose")
const petshopSchema = mongoose.Schema({
Itemname: String,
Quantity: Number,
price: String
})
module.exports = mongoose.model("petshop",
petshopSchema)
