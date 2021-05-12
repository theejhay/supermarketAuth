//Require Mongoose
const { Schema, model } = require('mongoose');

//Define a schema
const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    role: { type: String, default: "client", enum: ["client", "employee", "supervisor"] },
    password: { type: String, required: true },
}, { timestamps: true });

// Compile model from schema and export
module.exports = model('users', UserSchema );