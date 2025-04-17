import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },

  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  username: {
    type: String,
    unqiue: true,
    required: true,
  },
  password: {
    type: String,
  },
  googleId: {
    type: String,
    unique: true,
  },

  accountCreated: {
    type: Date,
    default: new Date().getTime(),
  },

  accountUpdated: {
    type: Date,
    default: null,
  },

  accountLastLogin: {
    type: Date,
    default: null,
  },
});

const User = new mongoose.model("User", userSchema);

export default User;
