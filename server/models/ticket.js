const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const ticketSchema = new mongoose.Schema({
	fullName: { type: String, required: true },
	issue: { type: String, required: true },
	category: { type: String, required: true },
	user:{
		type: ObjectId,
      ref: 'user',
      required: true,
	}
});

const Ticket = mongoose.model("ticket", ticketSchema);
module.exports = { Ticket };
