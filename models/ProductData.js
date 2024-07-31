const mongoose =require('mongoose');

const productData = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 50,
    },
    quantity:{
        type: Number,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        trim: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    manufacturer:{
        type: String,
    },
    active: {
        type: Boolean,
        default: true,
    },
    approved: {
        type: Boolean,
        default: true,
    },
    location: {
        type: String,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    }
});

module.exports=mongoose.model("ProductData",productData);