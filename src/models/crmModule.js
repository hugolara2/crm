const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  firstName: {
    type: String,
    required: 'Enter a first name'
  },
  lastName: {
    typer: String,
    required: 'Enter a last name'
  },
  email: {
    type: String
  },
  companyName: {
    type: String
  },
  phone: {
    type: Number
  },
  createDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = {
  ContactSchema
};