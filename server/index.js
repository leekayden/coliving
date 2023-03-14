// refer to new git repo

const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/testget', (req, res) => {
  res.header('Content-Type', 'application/json');
  res.send({ message: 'Hello, world!' });
});

// Server
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Server started, listening on port ${PORT}`);
});
