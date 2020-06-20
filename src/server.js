const express = require('express');

const routes = require('./app/routes');
require('./database');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
  console.log('Server is running at port 3000');
});
