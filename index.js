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
const productCategoryRoute = require("./routes/productCategory");
const productRoute = require("./routes/product");
const employeeRoute = require("./routes/employee");
const clientRoute = require("./routes/client");
const broadcastMessageRoute = require("./routes/broadcastMessage");

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

const userAuth = passport.authenticate("jwt", { session: false });

// unauthenticated routes
app.use('/api', authRoute);

// authenticated routes
app.use('/api/product/categories', userAuth, productCategoryRoute);
app.use('/api/products', userAuth, productRoute);
app.use('/api/employee', userAuth, employeeRoute);
app.use('/api/client', userAuth, clientRoute);
app.use('/api/broadcast-message', userAuth, broadcastMessageRoute);

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


