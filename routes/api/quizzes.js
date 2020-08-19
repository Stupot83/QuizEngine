const express = require("express");
const router = express.Router();
const passport = require("passport");

// Load Quiz schema
const Quiz = require("../../models/quiz");

// GET api/quizzes - Get all quizzes
router.get("/", passport.authenticate("jwt", { session: false }), async (req, res) => {
    let quizzesArr = [];

    await Quiz.find({})
        .then(quizzes => {
            quizzes.map(quiz => {
                quizzesArr.push(quiz);
            });
            res.json(quizzesArr);
        })
        .catch(err => console.log(err));
});

// GET api/quizzes/:id - Get specific quiz by id
router.get("/:id", passport.authenticate("jwt", { session: false }), (req, res) => {
    let id = req.params.id;

    Quiz.findById(id).then(quiz => res.json(quiz));
});

// POST api/quizzes/create - Create a new quiz
router.post("/create", passport.authenticate("jwt", { session: false }), async (req, res) => {
    const CREATOR = {
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
    };

    const NEW_QUIZ = await new Quiz({
        creator: CREATOR,
        name: req.body.quizName,
        category: req.body.category
    });

    NEW_QUIZ.save().then(quiz => res.json(quiz));
});

// PATCH api/quizzes/update - Update an existing quiz
router.patch("/update", passport.authenticate("jwt", { session: false }), (req, res) => {
    let quizFields = {};

    quizFields.name = req.body.quizName;
    quizFields.category = req.body.category;

    Quiz.findOneAndUpdate({ _id: req.body.id }, { $set: quizFields }, { new: true })
        .then(quiz => {
            res.json(quiz);
        })
        .catch(err => console.log(err));
});

// DELETE api/quizzes/delete/:id - Delete an existing quiz
router.delete("/delete/:id", passport.authenticate("jwt", { session: false }), (req, res) => {
    Quiz.findById(req.params.id).then(quiz => {
        quiz.remove().then(() => res.json({ success: true }));
    });
});

module.exports = router;
