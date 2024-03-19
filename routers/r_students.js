const express = require('express');

const student = express.Router();

const controller = require("../controllers/students");

student.get('/', controller.getData)
student.get('/:id', controller.getByIdData)
student.post('/', controller.studentCreated)
student.put('/:id', controller.studentUpdated)
student.delete('/:id', controller.studentDeleted)

module.exports = student