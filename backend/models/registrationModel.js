const { model, Schema } = require('../connection');

const mySchema = new Schema({
    userId: String,
    conferenceId: String,
    userName: String
});

module.exports = model( 'registration', mySchema );