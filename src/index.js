const express = require("express");
const routes = require('./routes/crmRoute');

const app = express();
const PORT = 3000;

routes(app);

app.get('/', (req, res) => {
  res.send(`Node and express running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
});