const { model, Schema } = require("../connection");

const conferenceSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  discription: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

module.exports = model("conference", conferenceSchema);
