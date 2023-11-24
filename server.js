const express = require("express");
const mongoose = require("mongoose");
const app = express();

const mongoURI =
  "mongodb+srv://Leticia_Ishiyama:1234@cluster0.zfxoqtt.mongodb.net/Exams23001";

mongoose.connect(mongoURI);

const studentSchema = new mongoose.Schema({
  name: { type: String, require: true },
  sid: { type: String, require: true }
});

const Student = mongoose.model('Quizexamrecords', studentSchema);

// Route
app.get("/", (req, res) => {
  const studentObj = new Student({
    name: 'Leticia',
    sid: '300356150'
  });

  Student.insertMany([studentObj])

  res.send("<h1> Document Added</h1>");
});

// Port listening
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
