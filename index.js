const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectToMongo = require('./db');
const Student = require('./student');

connectToMongo();

const app = express();
const port = 6000;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json({ message: 'It is the backend server' });
});

// Create a new student
app.post('/create_student', async (req, res) => {
    try {
        const { name, rollNo, password } = req.body;

        if (!name || !rollNo || !password) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        const existingStudent = await Student.findOne({ rollNo }).maxTimeMS(10000);
        if (existingStudent) {
            return res.status(409).json({ message: 'A student with the same rollNo already exists' });
        }

        const newStudent = new Student({ name, rollNo, password });
        await newStudent.save();
        res.status(201).json({ message: 'Student created successfully' });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Read
app.get('/read_student', async (req, res) => {
    try {
        const rollNo = req.query.rollNo;

        const student = await Student.findOne({ rollNo });
        if (student) {
            res.statusCode = 200;
            return res.json({ body: student });
        }

        res.statusCode = 404;
        return res.json({ message: 'Data not found' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Update
app.put('/update_student', async (req, res) => {
    try {
        const rollNo = req.query.rollNo;
        const password = req.body.password;
        const newName = req.body.newName;
        const newPassword = req.body.newPassword;

        const student = await Student.findOne({ rollNo });
        if (student && student.password === password) {
            student.name = newName;
            student.password = newPassword;
            await student.save();

            res.statusCode = 200;
            return res.json({ message: 'Updated user successfully.' });
        }

        res.statusCode = 403;
        return res.json({ message: 'Invalid roll number or password.' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});


// Delete
app.delete('/delete_student', async (req, res) => {
    try {
        const { rollNo, password } = req.body;

        if (!rollNo || !password) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        const student = await Student.findOne({ rollNo, password });
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        await student.deleteOne();

        res.status(200).json({ message: 'Student deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});