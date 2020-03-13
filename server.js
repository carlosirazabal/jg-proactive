require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json({ limit: '10mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

const port = process.env.port || 3000;

const routes = require('./api/routes');
routes(app);

app.listen(port, function () {
    console.log('Server started on port ' + port);
});