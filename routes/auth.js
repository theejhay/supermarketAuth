const router = require("express").Router();

// Import validations
const {
    userLoginValidator,
    userRegisterValidator,
} = require("../middlewares/validators");

// Import auth controllers
const loginController = require('../controllers/loginController')
const registerController = require('../controllers/registerController')

// login route
router.post("/login", userLoginValidator, loginController);

// register route
router.post("/register", userRegisterValidator, registerController);


module.exports = router;