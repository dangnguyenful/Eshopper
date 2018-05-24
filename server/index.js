const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes.js');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

app.listen(port, () => console.log(`Api listening on port ${port}`));
