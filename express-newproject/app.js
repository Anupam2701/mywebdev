const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let students = [];

app.get('/students', (req, res) => {
    res.json(students);
});

app.post('/students', (req, res) => {
    const student = {
        name: req.body.name,
        marks: req.body.marks
    };

    students.push(student);
    res.send('Student added successfully');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));