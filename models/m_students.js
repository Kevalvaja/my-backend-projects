const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    student_name: {
        type: String,
        required: [true, "Student name is required"]
    },
    mobile_no: {
        type: String,
        required: [true, "Mobile no is required"]
    }
}, { timestamps: true });

const studentModel = new mongoose.model("students", studentSchema);
module.exports = studentModel