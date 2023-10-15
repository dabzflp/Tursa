const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  name: {
    type: String,
    
  },
  email: {
    type: String,
    
  },
  subject: {
    type: String,
    
  },
  message: {
    type: String,
    
  }
});

const Note = mongoose.model('Note', noteSchema);
module.exports = Note;