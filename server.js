const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Note = require('./contact.js');

// Use bodyParser middleware to parse JSON and form data
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection using environment variable
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/test'; // Fallback to a local MongoDB URI for development
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Serve static files from a directory (e.g., 'public')
app.use(express.static(__dirname + '/'));

// Define the root route
app.get('/', function(req, res) {
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
const port = process.env.PORT || 3030;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});



// const express = require('express');
// const app = express();
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const Note = require('./contact.js');

// app.use(bodyParser.urlencoded({ extended: true }));
// mongoose.connect('mongodb+srv://davidpeter685:bolarinwa@tursa.unwmsqc.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true })
// app.use(express.static(__dirname));


// app.get('/', function(req, res) {
//   res.sendFile(__dirname + '/index.html');
// });


// app.post("/", function(req, res) {
//   console.log(req.body); // Check if the form data is received correctly

  // let newNote = new Note({
  //   name: req.body.name,
  //   email: req.body.email,
  //   subject: req.body.subject,
  //   message: req.body.message
  // });

  // console.log(newNote); // Check if a new Note object is created correctly

  // Rest of the code save from data to mongodb atlas...

  // newNote.save()
  // .then(() => {
  //   console.log('Successful!');
  //   res.redirect('/');
  // })
  // .catch((error) => {
  //   console.error('Error:', error);
  //   res.status(500).send('Internal Server Error');
  // });


  // newNote.save();
  // console.log('sucessful!!');

  // res.redirect('/') 
  
// });

// res.redirect('/');

// const port = process.env.PORT || 3030; // Use 3030 for local development
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });


//old server code..
// app.listen(3030, function() {
// console.log('Server listening on port 3030');
// });






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
