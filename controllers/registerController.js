// Import User
const User = require("../models/users");
const bcrypt = require("bcryptjs");

/**
 * @DESC To register a user
 **/

const register = async (req, res) => {
    try{
        let request = req.body
        let emailExists = await checkEmailExists(request.email)
        if (emailExists) {
            return res.status(400).json({
                status: false,
                message: "Email already taken"
            })
        }

        // Get hashed password
        const hashedPassword = await bcrypt.hash(request.password, 12);

        // create a new user
        const newUser = new User({
            ...request,
            role: 'client',
            password: hashedPassword
        });
        await newUser.save();
        return res.status(201).json({
            status: true,
            message: "User created successfully"
        })
    } catch (e) {
        res.status(500).json({
            status: false,
            message: "Unable to create user"
        })
    }
};

// check if user with email exists
const checkEmailExists = async (email) => {
    let user = await User.findOne({email});
    return !!user;
};

module.exports = register;