const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./models/Employee');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/employee');

app.post('/register', (req, res) => {
  EmployeeModel.create(req.body)
    .then((employee) => res.json(employee))
    .catch((err) => res.json(err));
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  EmployeeModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json('Success');
      } else { 
        res.json('Invalid Password');
      }
    } else {
      res.json('Email Does not Exists');
    }
  });
});

app.get('/employee', async (req, res) => {
  try {
    const employees = await EmployeeModel.find();
    res.status(200).send(employees);
    console.log(employees);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

app.listen(3001, () => {
  console.log('Server is Running');
});
