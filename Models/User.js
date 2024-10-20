const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
nameid: {type: String, required:true},
username: { type: String, required:true, unique:true},
cpf: {type, String, required:true, unique:true},
emails: { type: String, required:true, unique:true},
password: { type: String, required:true },
isAdmin: {
    type: Boolean,
    default: false,
},

    });

    module.exports = mongoose.model("User", UserSchema);