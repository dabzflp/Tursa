const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Note = require('./contact.js');

// Use bodyParser middleware to parse JSON and form data
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection using environment variable

mongoose.connect('mongodb+srv://davidpeter685:bolarinwa@tursa.unwmsqc.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true })
app.use(express.static(__dirname));



// Serve static files from a directory (e.g., 'public')
app.use(express.static(__dirname + '/'));

// Define the root route
app.get('/', function(_req, res) {
  res.sendFile(__dirname + '/index.html');
});

// Define the route to handle form submissions
app.post("/", function(req, res) {
  console.log(req.body); // Check if the form data is received correctly

  let newNote = new Note({
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message
  });

  console.log(newNote); // Check if a new Note object is created correctly

  // Save the data to MongoDB
  newNote.save()
    .then(() => {
      console.log('Successful!');
      res.redirect('/');
    })
    .catch((error) => {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    });
});

// Use the PORT environment variable for production or 3030 for local development

app.listen(3030, function() {
  console.log('Server listening on port 3030');

});


