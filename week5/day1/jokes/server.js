// server.js
const express = require('express');
const bodyParser = require('body-parser');
const jokesRoutes = require('./routes/jokes.routes');
const db = require('./mongoose.config');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/api', jokesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
