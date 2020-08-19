const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Quiz Schema
const QuizSchema = new Schema({
    creator: {
        type: Object,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date_created: {
        type: Date,
        default: Date.now
    }
});

module.exports = Quiz = mongoose.model("quizzes", QuizSchema);
