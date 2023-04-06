const mongoose = require('mongoose');
const { Schema } = mongoose;

const studentSchema = new Schema({
    rollNo: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;