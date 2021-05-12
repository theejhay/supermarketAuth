//Require Mongoose
const { Schema, model } = require('mongoose');
const bcrypt = require("bcryptjs");

//Define a schema
const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    role: { type: String, default: "client", enum: ["client", "employee", "supervisor"] },
    password: { type: String, required: true },
}, { timestamps: true });

// automatically hash passwords
UserSchema.pre('save', async function (next) {

    //check if the password has been modified
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12)
    }
    next();
});

// Compile model from schema and export
module.exports = model('users', UserSchema );