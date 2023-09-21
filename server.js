
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Note = require('./contact.js');

app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect('mongodb+srv://davidpeter685:bolarinwa@tursa.unwmsqc.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true })
app.use(express.static(__dirname));


app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});


app.post("/", function(req, res) {
  console.log(req.body); // Check if the form data is received correctly

  let newNote = new Note({
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message
  });

  console.log(newNote); // Check if a new Note object is created correctly

  // Rest of the code save from data to mongodb atlas...

  newNote.save();
  console.log('sucessful!!');

  res.redirect('/') 
  
});

// res.redirect('/');

app.listen(3030, function() {
console.log('Server listening on port 3030');
});






// const express = require('express');
// const app = express();
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const Note = require('./contact.js');

// app.use(bodyParser.urlencoded({ extended: true }));
// mongoose.connect('mongodb+srv://davidpeter685:bolarinwa@tursa.unwmsqc.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });
// app.use(express.static(__dirname));

// app.get('/', function(req, res) {
//   res.sendFile(__dirname + '/index.html');
// });

// app.post("/", function(req, res) {
//   let newNote = new Note({
//     name: req.body.yourname,
//     email: req.body.youremail,
//     subject: req.body.subject,
//     message: req.body.message
//   });

//   newNote.save();
//   res.redirect('/');
// });

// app.listen(3030, function() {
//   console.log('Server listening on port 3030');
// });
