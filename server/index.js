const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/testget', (req, res) => {
  res.send('Hello, world!');
});

// Server
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Server started, listening on port ${PORT}`);
});