const mongoose = require('mongoose');
const { ContactSchema } = require('../models/crmModule');

const Contac = mongoose.model('Contact', ContactSchema);

const addNewContact = (req, res) => {
  let newContact = new Contac(req.body);

  newContact.save((err, contact) => {
    if(err){
      res.send(err);
    }
    res.json(contact);
  });
};

const getContacts = (req, res) => {

};

module.exports = {
  addNewContact,
  getContacts, 
};