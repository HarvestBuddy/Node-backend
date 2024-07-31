const mongoose = require("mongoose");
const { Admin, User, Owner, Staff } = require("../utils/enumTypes");

const userSchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 50,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 50,
    },
    email: {
      type: String,
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      match: /^\d{10}$/,  
    },
    password: {
      type: String,
      required: true,
    },
    accountType: {
      type: String,
      default: User,
      enum: [Admin, User,Owner, Staff],
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
    approved: {
      type: Boolean,
      default: true,
    },
    additionalDetails: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profile",
      required: true,
    },
    products:[
      
    ],
    image: {
      type: String,
      required: true,
    },
    token: {
      type: String,
    },
    resetTokenExpires: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);