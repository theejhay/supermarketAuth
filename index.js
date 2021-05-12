const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const passport = require("passport");

// Bring in the app constants
const { DB, PORT, SECRET } = require('./config');
const { ExtractJwt } = require("passport-jwt");

// Import routes
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");

// Initialize the application
const app = express();

/*const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: SECRET
};*/

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());

require("./middlewares/passport")(passport);

// Assign API routes
app.use('/api', authRoute);
app.use('/api', userRoute);

// Connect with DB and launch
const startApp = async () => {
    try {
        await mongoose.connect(DB, {useNewUrlParser: true, useUnifiedTopology: true, autoIndex: false });
        app.listen(PORT, () => {
            console.log("SupermarketAuth is running on port : " + PORT);
        });
    } catch (err) {
        await startApp()
    }
};

// start app
startApp().then(r => {});


