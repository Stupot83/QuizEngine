const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const login = require("./routes/login-api");
const register = require("./routes/registration-api");
const app = express();

// Setup Cors
app.use(cors());

// Setup body-parser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

app.use(bodyParser.json());

// Setup connection string for QuizEngine Database from database connection file
const quizEngineDatabase = require("./database/connection").mongoURI;

// Connect to the QuizEngine Database hosted in the Atlas Cluster
mongoose
    .connect(quizEngineDatabase, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("😃 Connection to the QuizEngine Database has been successful! 😃"))
    .catch(() => console.log("🤮 Connection to the QuizEngine Database has failed please try again 🤮"));


// Configure Passport
app.use(passport.initialize());

// Configure Passport
require("./authentication/passport")(passport);
    
// Setup Routes
app.use("/login", login);
app.use("/register", register);

const port = process.env.PORT || 7000;

app.listen(port, () =>
    console.log(`😎 QuizEngine Server Active and Running on Port ${port}! 😎`)
);