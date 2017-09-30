const mongoose = require("mongoose");
const { Schema } = mongoose;
const RecipientSchea = require("./Recipient");

const recipientSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false }
});

module.exports = recipientSchema;
