// Create web server
// Set up express
const express = require('express');
const app = express();
const path = require('path');
const comments = require('./comments');

// Set up to parse request body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set up view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Set up static files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse request body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set up routes
app.get('/', (req, res) => {
  res.render('index', { comments });
});

app.post('/comments', (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment });
  res.redirect('/');
});

// Set up server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});