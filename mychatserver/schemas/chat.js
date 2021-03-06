const mongoose = require('mongoose')
const { Schema } = mongoose;
const ChatSchema = new Schema({
	user: {
		_id:String
	},
	receiver_id:String,
	sender_id: String,
  	text: String,
  	createdAt: Date
})
module.exports = mongoose.model('Chats', ChatSchema);
