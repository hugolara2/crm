const express = require("express");

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`Node and express running on port ${PORT}`);
});

app.get('/api', (req, res) => {
  res.send(`Endpoint api`);
});


app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
});