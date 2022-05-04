const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/crmRoute');
const uri = "mongodb://localhost/CRM";

//Mongoose conection
mongoose.Promise = global.Promise;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

//body parser
app.use(bodyParser.urlencode({ extended: true }));
app.use(bodyParser.json());

const PORT = 3000;

routes(app);

app.get('/', (req, res) => {
  res.send(`Node and express running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
});