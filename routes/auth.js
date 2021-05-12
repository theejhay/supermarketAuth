const router = require("express").Router();

// Import validations
const {
    userSigninValidator,
} = require("../middlewares/validators");

// Import auth controllers
const loginController = require('/controllers/loginController')
const registerController = require('/controllers/registerController')

// login route
router.post("/login", userSigninValidator, loginController);

// register route
router.post("/register", userSigninValidator, registerController);


module.exports = router;