const express = require('express');
const bodyParser = require('body-parser');
const api = require('./src/book');
const api = require('./src/customer')

const app = express();
const PORT = 8000;

app.use(bodyParser.json());
app.use('/api/v1', api);

app.listen(PORT, () => console.log(`App listening on port &{PORT}`));