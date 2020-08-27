const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
const users = require("./routes/api/users");
const quizzes = require("./routes/api/quizzes");
const questions = require("./routes/api/questions");
const app = express();

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
app.use("/api/users", users);
app.use("/api/quizzes", quizzes);
app.use("/api/questions", questions);

// Serve static assets if in production
if(process.env.NODE_ENV === "production") {
    // Set static folder
    app.use(express.static("client/build"));
  
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
  }

const port = process.env.PORT || 7000;

app.listen(port, () =>
    console.log(`😎 QuizEngine Server Active and Running on Port ${port}! 😎`)
);