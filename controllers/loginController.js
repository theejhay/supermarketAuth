const User = require("../models/users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// importing SECRET from config for JWT signing
const { SECRET } = require("../config/index");

/**
 * @DESC To log user in (Client, Employee, Supervisor)
 **/

const login = async (req, res) => {
    let { email, password } = req.body;

    // check if user exists in DB

    /**
     * @PS: Checked for user first before verifying the password, this is a better way for scalable applications.
     *      User the message "Invalid Login credentials" for both checks to increase "Brute Force" security
      */
    const user = await User.findOne({ email })
    if (!user) {
        return res.status(404).json({
            status: false,
            message: "Invalid Login credentials"
        })
    }

    // check for password if user exists
    let isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(404).json({
            status: false,
            message: "Invalid Login credentials"
        })
    }

    // sign in the token and issue it to the user
    let token = jwt.sign({
        userID: user._id,
        role: user.role,
        email: user.email
    }, SECRET, { expiresIn: "3 days" });

    // return the user data
    let data = {
        email: user.email,
        role: user.role,
        token
    };

    return res.status(200).json({
        status: true,
        message: "You are now logged in.",
        data
    })

};

module.exports = login;