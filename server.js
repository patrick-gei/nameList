const express = require('express');
const bp = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'static')));
app.use('/', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.use(bp.urlencoded({extended: true}));

require('./server/routes')(app);

app.listen(5500, () => console.log('started server!'));
