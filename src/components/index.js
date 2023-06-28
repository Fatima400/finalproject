const express = require('express');
const mongoose = require('mongoose');
const usersRouter = require('./routes/users');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error);
  });

// Middleware
app.use(express.json());

// Routes
app.use('/users', usersRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
