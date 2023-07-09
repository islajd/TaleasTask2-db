const express = require('express')
const mongoose = require('mongoose')
const dbConfigs = require("./src/config/db.js");
const { Student } = require('./src/models/index.js');

const app = express();
app.use(express.urlencoded())
app.use(express.json())

// Old code: store students in runtime memory RAM
// let allStudents= [{
//   name: "Renaldo",
//   age: 22
// }]

// New logic
// create db connection
const db = mongoose
  .connect(dbConfigs.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit()
})

app.post('/students', (req, res, next) => {
  // custom logic and validation is written here
  // ...

  // definition of mongo object using mongo schema
  const newStudent = new Student({
    name: req.body.name,
    age: req.body.age
  })
  // crud operations are already implemented by mongoose
  // storing a document in mongo using .save() method
  newStudent.save(newStudent)
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({
        message: "Some went wrong while creating the Student."
      })
    })
})

app.get('/students', (req, res, next) => {
  // custom logic and validation is written here
  // ...

  Student.find()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({
        message: "Some went wrong while creating the Student."
      })
    })
})


const port = 5000

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
