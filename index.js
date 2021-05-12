const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Bring in the app constants
const { DB, PORT } = require('./config');

// Import routes
const AuthRouter = require("./routes/auth");

// Initialize the application
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Assign API routes
app.use('/api', AuthRouter);


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


