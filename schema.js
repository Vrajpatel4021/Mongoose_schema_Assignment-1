const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// User fields
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: {
    type: [String],
  },

  // Activity tracking
  lastLogin: {
    type: Date,
    default: null,
  },
});

// Profile fields
const profileSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

// Create the User model using the schema
const User = mongoose.model("User", userSchema);

//Updating the last login time
userSchema.methods.updateLastLogin = async function () {
  this.lastLogin = new Date();
  await this.save();
};

module.exports = User;