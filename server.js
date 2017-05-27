const express = require('express');
const bp = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'static')));
app.use('/', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/dateformat/lib')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/axios/dist')));
app.use(bp.urlencoded({extended: true}));
app.use(bp.json());

require('./server/routes')(app);

app.listen(5500, () => console.log('started server!'));
