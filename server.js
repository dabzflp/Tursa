const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Note = require('./contact.js');

// Use bodyParser middleware to parse JSON and form data
app.use(bodyParser.urlencoded({ extended: true }));

// Access the MongoDB connection string from environment variables
const mongoURI = process.env.MONGO_URI;

// MongoDB connection using environment variable
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log('connected to MongoDB')
})
.catch((err) => {
  console.error(`Error connecting to MongoDB: ${err}`);
});

// Serve static files from a directory 
app.use(express.static(__dirname + "/",));

// Define the root route
// app.get('/', function(_req, res) {
//   res.sendFile(__dirname + '/index.html');
// });

// Define the route to handle form submissions
app.post("/", function(req, res) {
  console.log("Received POST request with data:", req.body);
  
  // Check if the form data is received correctly

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
      const successMessage = "Message Sent";
      res.redirect('/?status=' + encodeURIComponent(successMessage));
  })
  .catch((error) => {
      console.error('Error:', error);
      const errorMessage = "Message Failed";
      res.redirect('/?status=' + encodeURIComponent(errorMessage));
  });
});

// Use the PORT environment variable for production or 8080 for local development
const port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log(`Server listening on port ${port}`);
});


