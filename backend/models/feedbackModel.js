const { model, Schema } = require("../connection");

const feedbackModel = new Schema({
  userId: {
    type: String,
  },
  feedback: {
    type: String,
  },
});

module.exports = model("feedback", feedbackModel);
