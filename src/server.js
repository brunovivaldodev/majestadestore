const express = require('express');
const cors = require('cors');

const routes = require('./app/routes');
require('./database');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('Server is running at port 3333');
});
