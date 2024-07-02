const { model, Schema, Types } = require("../connection");

const registrationSchema = new Schema({

  userId:{type:Types.ObjectId, ref:"user"},
  conferenceId:{type:Types.ObjectId, ref:"conference"}
  

  // userId: {
  //   type: String,
  //   ref: "user",

  // },
  // conferenceId: {
  //   type: String,
  //   ref: "conference",
  // },
  
});

module.exports = model("registration", registrationSchema);
