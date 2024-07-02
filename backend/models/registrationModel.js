const { model, Schema, Types } = require("../connection");

const registrationSchema = new Schema({
  userId: {
    type: Types.ObjectId,
    ref: "user",
    required: true,
  },
  conferenceId: {
    type: Types.ObjectId,
    ref: "conference",
    required: true,
  }
});

module.exports = model("Registration", registrationSchema);
