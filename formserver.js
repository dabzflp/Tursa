//server form 
// const express = require('express');
// const { MongoClient } = require('mongodb');

// const app = express();
// const port = 3030;

// const uri = 'mongodb+srv://davidpeter685:<naueO189MvdRP8yX>@tursa.unwmsqc.mongodb.net/';
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// async function connectToMongo() {
//   try {
//     await client.connect();
//     console.log('Connected to MongoDB Atlas');
//   } catch (error) {
//     console.error('Error connecting to MongoDB Atlas', error);
//   }
// }

// app.use(express.static(__dirname));
// app.use(express.urlencoded({ extended: true }));

// app.get('/', function(req, res) {
//   res.sendFile(__dirname + '/index.html');
// });

// app.post('/submit-form', async function(req, res) {
//   try { 
//     const data = req.body;
//     const db = client.db('Tursa');
//     const collection = db.collection('tursaForm');
//     const result = await collection.insertOne(data);
//     console.log('Data inserted into MongoDB Atlas:', result);
//     res.send('Data inserted successfully');
//   } catch (error) {
//     console.error('Error inserting data into MongoDB Atlas', error);
//     res.send('Error inserting data');
//   }
// });

// connectToMongo();

// const server = app.listen(port, function() {
//   console.log(`Server listening on port ${port}`);
// });





// const express = require('express');
// const app = express();
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(__dirname));

// // Data schema
// const noteSchema = {
//   name: String,
//   email: String,
//   subject: String,
//   message: String
// };

// const Note = mongoose.model("Note", noteSchema);



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



// app.get('/', function(req, res) {
//   res.sendFile(__dirname + '/index.html');
// });

// mongoose.connect('mongodb+srv://davidpeter685:bolarinwa@tursa.unwmsqc.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     app.listen(3030, function() {
//       console.log('Server listening on port 3030');
//     });
//   })
//   .catch(error => {
//     console.error('Error connecting to MongoDB Atlas:', error);
//   });


// last working code

const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect('mongodb+srv://davidpeter685:bolarinwa@tursa.unwmsqc.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
app.use(express.static(__dirname));

// Data schema
const noteSchema = {
  name: String,
  email: String,
  subject: String,
  message: String
};

const Note = mongoose.model("Note", noteSchema);
module.exports = Note;

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});


app.post("/", function(req, res) {
  let newNote = new Note({
    name: req.body.yourname,
    email: req.body.youremail,
    subject: req.body.subject,
    message: req.body.message
  });

  newNote.save();
  res.redirect('/'); 
});


    app.listen(3030, function() {
      console.log('Server listening on port 3030');
    });


