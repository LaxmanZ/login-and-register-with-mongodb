const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phone: Number,
  gender: String,
  hearAbout: String,
  city: String,
  state: String,
});

const EmployeeModel = mongoose.model('employees', EmployeeSchema);

module.exports = EmployeeModel;
