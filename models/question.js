const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Question Schema
const QuestionSchema = new Schema({
    quiz: {
        type: Schema.Types.ObjectId,
        ref: "quizzes",
        required: true
    },
    questionTitle: {
        type: String,
        required: true
    },
    potentialAnswers: [
        {
            answer: {
                type: String
            }
        }
    ],
    correctAnswer: {
        type: String,
        required: true
    }
});

module.exports = Question = mongoose.model("questions", QuestionSchema);
