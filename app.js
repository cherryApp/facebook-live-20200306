const express = require('express');
const path = require('path');
const app = express();
const port = 80;

// Template engine.
app.set('views', path.join(__dirname, 'views') );
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, "public")));

app.use('/', require('./routes/index'));

// Listen a port.
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
