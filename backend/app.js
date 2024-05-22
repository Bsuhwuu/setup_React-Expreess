const express = require('express');
const app = express();
const usersRouter = require('./routes/users');

// Middleware untuk parsing body dari request
app.use(express.json());

// Gunakan router untuk jalur '/users'
app.use('/users', usersRouter);

// Tentukan port
const port = process.env.PORT || 3000;

// Mulai server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
