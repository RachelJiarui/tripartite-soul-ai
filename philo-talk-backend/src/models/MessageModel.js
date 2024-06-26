const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  text: String,
  uid: String,
  speaker: String,
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
