const mongoose = require("mongoose");

const quizDataSchema = new mongoose.Schema({
  question_id: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    required: true,
  },
  correctAnswer: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("quizData",quizDataSchema);