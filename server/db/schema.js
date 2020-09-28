const mongoose = require("mongoose")
const { Schema } = mongoose;

const pollSchema = new Schema({
  code:  String, // String is shorthand for {type: String}
  question: String,
  answers: [{ answerId: Number, answerOption: String, votes: Number}],
  createdDate: { type: Date, default: Date.now },
  hidden: Boolean,
  active: Boolean,
  lastChange: Date
});

module.exports = {pollSchema}