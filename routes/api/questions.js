const express = require("express");
const router = express.Router();
const passport = require("passport");

const Question = require("../../models/Question");

// Get Questions for specific Quiz
router.get("/:id", passport.authenticate("jwt", { session: false }), (req, res) => {
    let id = req.params.id;

    Question.find({ question: id }).then(questions => res.json(questions));
});

// Create a new Question
router.post("/create", passport.authenticate("jwt", { session: false }), (req, res) => {
    const NEW_QUESTION = new Question({
        quiz: req.body.quiz,
        questionTitle: req.body.questionTitle,
        // potentialAnswers: req.body.potentialAnswers,
        // questionCorrectAnswer: req.body.questionCorrectAnswer
    });

    NEW_QUESTION.save()
        .then(question => res.json(question))
        .catch(err => console.log(err));
});

// Delete an existing Question
router.delete("/delete/:id", passport.authenticate("jwt", { session: false }), (req, res) => {
    Question.findById(req.params.id).then(question => {
        question.remove().then(() => res.json({ success: true }));
    });
});

// Update an existing Question
router.patch("/update", passport.authenticate("jwt", { session: false }), (req, res) => {
    let questionFields = {};

    questionFields.questionTitle = req.body.questionTitle;
    // questionFields.potentialAnswers = req.body.potentialAnswers;
    // questionFields.questionCorrectAnswer = req.body.questionCorrectAnswer;

    Question.findOneAndUpdate({ _id: req.body.id }, { $set: questionFields }, { new: true })
        .then(question => {
            res.json(question);
        })
        .catch(err => console.log(err));
});

module.exports = router;
