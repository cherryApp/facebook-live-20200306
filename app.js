const express = require('express');
const app = express();
const port = 3001;

// Template engine.
app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('public'));

app.use('/', require('./routes/index'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
