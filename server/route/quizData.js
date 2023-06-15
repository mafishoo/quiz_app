const router = require("express").Router();
const quizData = require("../model/quizData");

router.post("/quizData", async(req, res) => {
  const newQuizData = new quizData({
    question_id : req.body.question_id,
    question: req.body.question,
    options: req.body.options,
    correctAnswer: req.body.correctAnswer,
  });

try {
  const result =  await newQuizData.save()
  res.status(200).json(result)
} catch (error) {
res.status(500).json(error)
}

});
module.exports = router;