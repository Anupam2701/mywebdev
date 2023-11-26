const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// In-memory array to store blog posts
let posts = [];

// Route to add a new post using POST method
app.post('/posts', (req, res) => {
    const { title, content } = req.body;
    const newPost = { title, content };
    posts.push(newPost);
    res.status(201).json(newPost);
});

// Route to get all posts using GET method
app.get('/posts', (req, res) => {
    res.json(posts);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:3000`);
});
